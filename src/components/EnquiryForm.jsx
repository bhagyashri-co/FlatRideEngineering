
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const formContent = {
  contact: {
    label: "GENERAL ENQUIRY",
    title: "Contact us",
    description:
      "For general questions, introductions, and other enquiries.",
    submitLabel: "Send enquiry",
    fields: [
      {
        name: "fullName",
        label: "Full name",
        autoComplete: "name",
        required: true,
      },
      {
        name: "companyName",
        label: "Company name",
        autoComplete: "organization",
        required: true,
      },
      {
        name: "emailAddress",
        label: "Email address",
        type: "email",
        autoComplete: "email",
        required: true,
      },
      {
        name: "subject",
        label: "Subject",
        required: true,
      },
    ],
  },

  project: {
    label: "PROJECT ENQUIRY",
    title: "Tell us about your project",
    description:
      "Share the project essentials and our engineering team will follow up.",
    submitLabel: "Submit project enquiry",
    fields: [
      {
        name: "fullName",
        label: "Full name",
        autoComplete: "name",
        required: true,
      },
      {
        name: "companyName",
        label: "Company name",
        autoComplete: "organization",
        required: true,
      },
      {
        name: "workEmail",
        label: "Work email",
        type: "email",
        autoComplete: "email",
        required: true,
      },
      {
        name: "phoneNumber",
        label: "Phone number (optional)",
        type: "tel",
        autoComplete: "tel",
      },
      {
        name: "projectType",
        label: "Project type",
        required: true,
        options: [
          "Vehicle dynamics",
          "Suspension & chassis engineering",
          "Simulation & analysis",
          "Powertrain engineering",
          "CAD / CAE",
          "Testing & validation",
          "Other",
        ],
      },
      {
        name: "projectTimeline",
        label: "Project timeline (optional)",
      },
    ],
  },

  business: {
    label: "BUSINESS & PARTNERSHIPS",
    title: "Business & partnership enquiries",
    description:
      "For collaboration, supplier, academic, and partnership opportunities.",
    submitLabel: "Send business enquiry",
    fields: [
      {
        name: "fullName",
        label: "Full name",
        autoComplete: "name",
        required: true,
      },
      {
        name: "companyName",
        label: "Company name",
        autoComplete: "organization",
        required: true,
      },
      {
        name: "emailAddress",
        label: "Email address",
        type: "email",
        autoComplete: "email",
        required: true,
      },
    ],
  },
};

export default function EnquiryForm({ type }) {
  const [status, setStatus] = useState({
    message: "",
    kind: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const content = formContent[type];

  if (!content) return null;

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;

    setIsSubmitting(true);
    setStatus({
      message: "",
      kind: "",
    });

    try {
      const response = await fetch(`/api/enquiries/${type}`, {
        method: "POST",
        body: new FormData(form),
      });

      let result;

      try {
        result = await response.json();
      } catch {
        throw new Error(
          "The server returned an invalid response. Please try again."
        );
      }

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send your enquiry."
        );
      }

      form.reset();

      setStatus({
        message:
          result.message ||
          "Thank you. Your enquiry has been received.",
        kind: "success",
      });
    } catch (error) {
      console.error("Enquiry submission error:", error);

      setStatus({
        message:
          error instanceof TypeError
            ? "Cannot connect to the server. Please check that the backend is running and try again."
            : error.message ||
              "Unable to send your enquiry. Please try again.",
        kind: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <article className={`enquiry-card enquiry-card-${type}`}>
      <header className="enquiry-card-heading">
        <div className="enquiry-card-kicker">
          {content.label}
        </div>

        <h3>{content.title}</h3>
        <p>{content.description}</p>
      </header>

      <form className="enquiry-form" onSubmit={handleSubmit}>
        <div className="enquiry-fields">
          {content.fields.map((field) => (
            <label key={field.name}>
              {field.label}

              {field.required && (
                <span aria-hidden="true"> *</span>
              )}

              {field.options ? (
                <select
                  name={field.name}
                  defaultValue=""
                  required={field.required}
                >
                  <option value="" disabled>
                    Select project type
                  </option>

                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  name={field.name}
                  type={field.type || "text"}
                  autoComplete={field.autoComplete}
                  required={field.required}
                  maxLength={
                    field.type === "email" ? 254 : 200
                  }
                  placeholder={field.label}
                />
              )}
            </label>
          ))}

          {type === "business" && (
            <label>
              Type of enquiry <span aria-hidden="true"> *</span>

              <select
                name="enquiryType"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select enquiry type
                </option>

                <option value="Business partnership">
                  Business partnership
                </option>

                <option value="Technical collaboration">
                  Technical collaboration
                </option>

                <option value="Academic collaboration">
                  Academic collaboration
                </option>

                <option value="Supplier enquiry">
                  Supplier enquiry
                </option>

                <option value="Other">Other</option>
              </select>
            </label>
          )}

          {type === "project" && (
            <>
              <label className="enquiry-field-wide">
                Project description{" "}
                <span aria-hidden="true"> *</span>

                <textarea
                  name="projectDescription"
                  rows="5"
                  maxLength="5000"
                  required
                />
              </label>

              <label className="enquiry-field-wide enquiry-attachment-field">
                Attach files or technical drawings (optional)

                <input
                  type="file"
                  name="attachments"
                  accept=".pdf,.png,.jpg,.jpeg,.webp,.dxf,.dwg,.step,.stp,.iges,.igs"
                  multiple
                />

                <small>
                  PDF, images, DXF, DWG, STEP or IGES ·
                  up to 3 files, 8 MB each
                </small>
              </label>
            </>
          )}

          {type !== "project" && (
            <label className="enquiry-field-wide">
              Message <span aria-hidden="true"> *</span>

              <textarea
                name="message"
                rows="5"
                maxLength="5000"
                required
              />
            </label>
          )}
        </div>

        <div className="enquiry-submit-row">
          <button
            className="enquiry-submit"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : content.submitLabel}

            {!isSubmitting && <ArrowRight size={17} />}
          </button>

          <span className="enquiry-required-note">
            * Required fields
          </span>
        </div>

        {type === "project" && (
          <p className="enquiry-captcha-note">
            CAPTCHA protection must be configured before this form
            is used publicly.
          </p>
        )}

        <p
          className={`enquiry-status${
            status.kind ? ` is-${status.kind}` : ""
          }`}
          role="status"
          aria-live="polite"
        >
          {status.kind === "success" && (
            <Check size={16} aria-hidden="true" />
          )}

          {status.message}
        </p>
      </form>
    </article>
  );
}
