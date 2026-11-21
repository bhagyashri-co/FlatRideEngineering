
import express from "express";
import upload from "../middleware/upload.js";
import { sendEnquiry } from "../controllers/enquiryController.js";

const router = express.Router();

// General contact enquiry
router.post("/contact", upload.none(), sendEnquiry("contact"));

// Project enquiry with up to 3 attachments
router.post(
  "/project",
  upload.array("attachments", 3),
  sendEnquiry("project")
);

// Business enquiry
router.post("/business", upload.none(), sendEnquiry("business"));

export default router;
