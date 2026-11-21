
import multer from "multer";
import path from "path";

const allowedExtensions = [
  ".pdf", ".png", ".jpg", ".jpeg", ".webp",
  ".dxf", ".dwg", ".step", ".stp", ".iges", ".igs"
];

const storage = multer.memoryStorage();

const fileFilter = (req, file, callback) => {
  const extension = path.extname(file.originalname).toLowerCase();

  if (!allowedExtensions.includes(extension)) {
    return callback(
      new Error("Unsupported file type. Please upload an approved document or engineering file.")
    );
  }

  callback(null, true);
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 8 * 1024 * 1024,
    files: 100
  }
});

export default upload;
