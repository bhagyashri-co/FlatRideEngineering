
import transporter from "../config/mailer.js";
import {
  teamEmailTemplate,
  customerEmailTemplate
} from "../utils/emailTemplates.js";

const getCustomerDetails = (type, body) => {
  const name = String(body.fullName || "").trim();
  const company = String(body.companyName || "").trim();

  const email = String(
    type === "project" ? body.workEmail : body.emailAddress
  ).trim();

  return { name, company, email };
};

const cleanValue = (value) => {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, 5000);
};

export const sendEnquiry = (type) => async (req, res) => {
  try {
    const body = req.body || {};

    const data = Object.fromEntries(
      Object.entries(body).map(([key, value]) => [
        key,
        cleanValue(value)
      ])
    );

    const { name, email } = getCustomerDetails(type, data);

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Please provide your name and email address."
      });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address."
      });
    }

    const attachments = (req.files || []).map((file) => ({
      filename: file.originalname,
      content: file.buffer,
      contentType: file.mimetype
    }));

    const teamEmail = teamEmailTemplate(type, data);

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.TEAM_EMAIL || "contact@flatrideengineering.com",
      replyTo: email,
      subject: teamEmail.subject,
      html: teamEmail.html,
      attachments
    });

    const confirmation = customerEmailTemplate(name, type);

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: confirmation.subject,
      html: confirmation.html
    });

    return res.status(200).json({
      success: true,
      message: "Your enquiry has been received successfully. Our team will contact you soon."
    });

  } catch (error) {
    console.error("Enquiry email error:", error);

    if (error?.code === "EAUTH" || error?.responseCode === 535) {
      return res.status(503).json({
        success: false,
        message:
          "Email account authentication failed. Set a valid Gmail App Password in server/.env and restart the backend."
      });
    }

    return res.status(500).json({
      success: false,
      message: "Unable to send your enquiry right now. Please try again later."
    });
  }
};
