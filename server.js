import { createServer } from "node:http";
import { mkdir, unlink, writeFile } from "node:fs/promises";
import { DatabaseSync } from "node:sqlite";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { randomUUID } from "node:crypto";
import Busboy from "busboy";

if (process.env.NODE_ENV === "production") {
  throw new Error(
    "The local SQLite enquiry API is for development only. Configure a secured production backend before deployment."
  );
}

const root = dirname(fileURLToPath(import.meta.url));
const dataDirectory = join(root, "data");
const uploadDirectory = join(dataDirectory, "uploads");
const database = new DatabaseSync(join(dataDirectory, "enquiries.sqlite"));
const port = 8787;
const maximumRequestSize = 20 * 1024 * 1024;
const maximumFileSize = 8 * 1024 * 1024;
const maximumFiles = 3;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedExtensions = new Set([
  ".pdf", ".png", ".jpg", ".jpeg", ".webp", ".dxf", ".dwg",
  ".step", ".stp", ".iges", ".igs",
]);
const allowedMimeTypes = new Set([
  "application/pdf",
  "image/png",
  "image/jpeg",
  "image/webp",
  "application/octet-stream",
  "application/acad",
  "application/dxf",
  "application/step",
  "model/step",
  "model/iges",
  "application/iges",
]);

await mkdir(uploadDirectory, { recursive: true });

database.exec(`
  PRAGMA journal_mode = WAL;
  CREATE TABLE IF NOT EXISTS contact_enquiries (
    id INTEGER PRIMARY KEY,
    full_name TEXT NOT NULL,
    company_name TEXT NOT NULL,
    email_address TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    submitted_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS project_enquiries (
    id INTEGER PRIMARY KEY,
    full_name TEXT NOT NULL,
    company_name TEXT NOT NULL,
    work_email TEXT NOT NULL,
    phone_number TEXT NOT NULL DEFAULT '',
    project_type TEXT NOT NULL,
    project_description TEXT NOT NULL,
    project_timeline TEXT NOT NULL DEFAULT '',
    attachments TEXT NOT NULL DEFAULT '[]',
    submitted_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS business_enquiries (
    id INTEGER PRIMARY KEY,
    full_name TEXT NOT NULL,
    company_name TEXT NOT NULL,
    email_address TEXT NOT NULL,
    enquiry_type TEXT NOT NULL,
    message TEXT NOT NULL,
    submitted_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
`);

class RequestError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
  });
  response.end(JSON.stringify(payload));
}

function validateFields(fields, schema) {
  const values = {};
  for (const [name, options] of Object.entries(schema)) {
    const value = typeof fields[name] === "string" ? fields[name].trim() : "";
    if (options.required && !value) {
      throw new RequestError(400, `${options.label} is required.`);
    }
    if (value.length > options.maximum) {
      throw new RequestError(400, `${options.label} is too long.`);
    }
    values[name] = value;
  }

  for (const name of ["emailAddress", "workEmail"]) {
    if (values[name] && !emailPattern.test(values[name])) {
      throw new RequestError(400, "Enter a valid email address.");
    }
  }

  return values;
}

function readFormData(request) {
  return new Promise((resolve, reject) => {
    let parser;
    try {
      parser = Busboy({
        headers: request.headers,
        limits: {
          fieldSize: 10 * 1024,
          fields: 16,
          files: maximumFiles,
          fileSize: maximumFileSize,
          parts: 20,
        },
      });
    } catch {
      reject(new RequestError(400, "The form data is invalid."));
      return;
    }

    const fields = {};
    const files = [];
    let requestBytes = 0;
    let failure = null;
    let settled = false;

    const fail = (error) => {
      if (failure) return;
      failure = error;
      request.unpipe(parser);
      parser.destroy();
      request.resume();
    };

    parser.on("field", (name, value, info) => {
      if (info.valueTruncated) {
        fail(new RequestError(400, "A form field is too long."));
        return;
      }
      fields[name] = value;
    });

    parser.on("file", (name, stream, info) => {
      if (name !== "attachments") {
        stream.resume();
        fail(new RequestError(400, "Unexpected file field."));
        return;
      }

      const chunks = [];
      let size = 0;
      stream.on("data", (chunk) => {
        size += chunk.length;
        if (size <= maximumFileSize) chunks.push(chunk);
      });
      stream.on("limit", () => fail(new RequestError(413, "Each attachment must be 8 MB or smaller.")));
      stream.on("end", () => {
        if (failure || size === 0) return;
        const extension = extname(info.filename).toLowerCase();
        if (!allowedExtensions.has(extension) || !allowedMimeTypes.has(info.mimeType)) {
          fail(new RequestError(415, "Use PDF, image, DXF, DWG, STEP or IGES attachments."));
          return;
        }
        files.push({
          originalName: info.filename.slice(0, 255),
          extension,
          content: Buffer.concat(chunks),
        });
      });
    });

    parser.on("filesLimit", () => fail(new RequestError(400, `Attach no more than ${maximumFiles} files.`)));
    parser.on("fieldsLimit", () => fail(new RequestError(400, "Too many form fields.")));
    parser.on("partsLimit", () => fail(new RequestError(400, "The form contains too many fields or files.")));
    parser.on("error", () => fail(new RequestError(400, "The form data could not be read.")));

    parser.on("close", () => {
      if (settled) return;
      settled = true;
      if (failure) {
        reject(failure);
      } else {
        resolve({ fields, files });
      }
    });

    request.on("data", (chunk) => {
      requestBytes += chunk.length;
      if (requestBytes > maximumRequestSize) {
        fail(new RequestError(413, "The complete submission must be smaller than 20 MB."));
      }
    });
    request.on("error", () => fail(new RequestError(400, "The request was interrupted.")));
    request.pipe(parser);
  });
}

const handlers = {
  "/api/enquiries/contact": async (fields) => {
    const values = validateFields(fields, {
      fullName: { label: "Full name", required: true, maximum: 200 },
      companyName: { label: "Company name", required: true, maximum: 200 },
      emailAddress: { label: "Email address", required: true, maximum: 254 },
      subject: { label: "Subject", required: true, maximum: 200 },
      message: { label: "Message", required: true, maximum: 5000 },
    });
    return database.prepare(`
      INSERT INTO contact_enquiries (full_name, company_name, email_address, subject, message)
      VALUES (@fullName, @companyName, @emailAddress, @subject, @message)
    `).run(values).lastInsertRowid;
  },
  "/api/enquiries/project": async (fields, files) => {
    const values = validateFields(fields, {
      fullName: { label: "Full name", required: true, maximum: 200 },
      companyName: { label: "Company name", required: true, maximum: 200 },
      workEmail: { label: "Work email", required: true, maximum: 254 },
      phoneNumber: { label: "Phone number", required: false, maximum: 50 },
      projectType: { label: "Project type", required: true, maximum: 200 },
      projectDescription: { label: "Project description", required: true, maximum: 5000 },
      projectTimeline: { label: "Project timeline", required: false, maximum: 200 },
    });

    const savedFiles = [];
    try {
      for (const file of files) {
        const storedName = `${randomUUID()}${file.extension}`;
        await writeFile(join(uploadDirectory, storedName), file.content, { flag: "wx" });
        savedFiles.push({
          name: file.originalName,
          path: `uploads/${storedName}`,
        });
      }

      const result = database.prepare(`
        INSERT INTO project_enquiries
          (full_name, company_name, work_email, phone_number, project_type,
           project_description, project_timeline, attachments)
        VALUES
          (@fullName, @companyName, @workEmail, @phoneNumber, @projectType,
           @projectDescription, @projectTimeline, @attachments)
      `).run({ ...values, attachments: JSON.stringify(savedFiles) });

      return result.lastInsertRowid;
    } catch (error) {
      await Promise.all(savedFiles.map((file) => unlink(join(dataDirectory, file.path))));
      throw error;
    }
  },
  "/api/enquiries/business": async (fields) => {
    const values = validateFields(fields, {
      fullName: { label: "Full name", required: true, maximum: 200 },
      companyName: { label: "Company name", required: true, maximum: 200 },
      emailAddress: { label: "Email address", required: true, maximum: 254 },
      enquiryType: { label: "Type of enquiry", required: true, maximum: 200 },
      message: { label: "Message", required: true, maximum: 5000 },
    });
    return database.prepare(`
      INSERT INTO business_enquiries (full_name, company_name, email_address, enquiry_type, message)
      VALUES (@fullName, @companyName, @emailAddress, @enquiryType, @message)
    `).run(values).lastInsertRowid;
  },
};

const server = createServer(async (request, response) => {
  if (request.method === "GET" && request.url === "/api/health") {
    sendJson(response, 200, { status: "ok" });
    return;
  }

  const handler = handlers[request.url];
  if (request.method !== "POST" || !handler) {
    sendJson(response, 404, { error: "Endpoint not found." });
    return;
  }

  try {
    const { fields, files } = await readFormData(request);
    const id = await handler(fields, files);
    sendJson(response, 201, { id: Number(id) });
  } catch (error) {
    if (error instanceof RequestError) {
      sendJson(response, error.statusCode, { error: error.message });
      return;
    }

    console.error("Could not save enquiry:", error);
    sendJson(response, 500, { error: "We could not save your enquiry. Please try again." });
  }
});

server.on("error", (error) => {
  console.error("Enquiry API server error:", error);
  process.exitCode = 1;
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Local enquiry API listening at http://127.0.0.1:${port}`);
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => {
    server.close(() => {
      database.close();
      process.exit(0);
    });
  });
}
