
const escapeHtml = (value = "") =>
  String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);

export const teamEmailTemplate = (type, data) => {
  const labels = {
    contact: "General Enquiry",
    project: "Project Enquiry",
    business: "Business Enquiry"
  };

  const fieldLabels = {
    fullName: "Full name",
    companyName: "Company name",
    emailAddress: "Email address",
    workEmail: "Work email",
    phoneNumber: "Phone number",
    subject: "Subject",
    message: "Message",
    projectType: "Project type",
    projectTimeline: "Project timeline",
    projectDescription: "Project description",
    enquiryType: "Type of enquiry"
  };

  const details = Object.entries(data)
    .filter(([key, value]) =>
      key !== "attachments" && value !== undefined && value !== ""
    )
    .map(([key, value]) => `
      <p>
        <strong>${escapeHtml(fieldLabels[key] || key)}:</strong>
        ${escapeHtml(value).replace(/\r?\n/g, "<br>")}
      </p>
    `)
    .join("");

  return {
    subject: `New ${labels[type]} – Flat Ride Engineering`,
    html: `
      <h2>New ${labels[type]}</h2>
      <p>You have received a new enquiry through the website.</p>
      ${details}
      <p>Reply directly to this email to contact the customer.</p>
    `
  };
};

export const customerEmailTemplate = (name, type) => {
  const firstName = escapeHtml(name || "there");

  return {
    subject: "We received your enquiry – Flat Ride Engineering",
    html: `
      <h2>Thank you for contacting Flat Ride Engineering.</h2>
      <p>Hello ${firstName},</p>
      <p>We have successfully received your enquiry.</p>
      <p>Our engineering team will review your message and get back to you.</p>
      <p>Regards,<br>Flat Ride Engineering Team</p>
    `
  };
};
