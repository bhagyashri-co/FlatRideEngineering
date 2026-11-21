
import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import enquiryRoutes from "./routes/enquiryRoutes.js";
import transporter from "./config/mailer.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Security headers
app.use(helmet());

// Allow your React frontend
app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173"
}));

// Rate limiting
app.use("/api/enquiries", rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many enquiries. Please try again later."
  }
}));

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Flat Ride Engineering backend is running."
  });
});

// Enquiry routes
app.use("/api/enquiries", enquiryRoutes);

// Handle upload and server errors
app.use((error, req, res, next) => {
  console.error("Server error:", error.message);

  const status = error.name === "MulterError" || error.message?.includes("Unsupported file type") ? 400 : 500;
  res.status(status).json({
    success: false,
    message: error.message || "Something went wrong."
  });
});

// Verify required environment variables
const requiredVariables = [
  "SMTP_HOST",
  "SMTP_USER",
  "SMTP_PASS",
  "TEAM_EMAIL"
];

const missingVariables = requiredVariables.filter(
  (variable) => !process.env[variable]
);

if (missingVariables.length) {
  console.error("Missing environment variables:", missingVariables.join(", "));
  process.exit(1);
}

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
