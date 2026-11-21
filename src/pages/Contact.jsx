
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  MessageCircle,
  Globe,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";

import { siteConfig } from "../siteConfig";
import EnquiryForm from "../components/EnquiryForm";

export default function Contact() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedType = searchParams.get("type");
  const activeEnquiry = ["contact", "project", "business"].includes(requestedType)
    ? requestedType
    : "contact";
  const whatsappNumber = String(
    siteConfig.whatsappNumber || ""
  ).replace(/\D/g, "");

  return (
    <>
      <main className="contact-page">

        {/* HERO SECTION */}
        <section className="contact-hero">
          <div className="contact-hero-image" />

          <div className="contact-container contact-hero-content">
            <span className="contact-eyebrow">
              FLAT RIDE ENGINEERING / CONTACT
            </span>

            <h1>
              Let's start a
              <br />
              <span>conversation.</span>
            </h1>

            <p>
              Engineering challenges require the right expertise.
              Connect with our team to discuss your next project,
              technical requirements, or collaboration opportunities.
            </p>

            <a href="#contact-details" className="contact-hero-link">
              GET IN TOUCH
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="contact-hero-caption">
            <span>ENGINEERING EXCELLENCE</span>
            <span>FROM PHYSICS TO PERFORMANCE</span>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="contact-intro">
          <div className="contact-container contact-intro-grid">
            <div>
              <span className="section-label">CONNECT WITH US</span>

              <h2>
                Great engineering
                <br />
                <span>starts with a conversation.</span>
              </h2>
            </div>

            <p>
              Whether you are developing a new product, exploring
              engineering solutions, or looking for a technical
              partner, our team is ready to hear from you.
            </p>
          </div>
        </section>

        {/* TWO SEPARATE ENQUIRY FORMS */}
        <section className="contact-main" id="contact-details">
          <div className="contact-container">
            <header className="contact-enquiry-heading">
              <span className="section-label">GENERAL ENQUIRY</span>
              <h2>Contact our team.</h2>
              <p>
                Select the type of enquiry below and send it directly to the
                right team.
              </p>
            </header>

            <div className="enquiry-choice-list" role="group" aria-label="Select enquiry type">
              {[
                ["contact", "General enquiries", "Questions, introductions, and general messages."],
                ["project", "Tell us about your project", "Share a project brief, timeline, and technical drawings."],
                ["business", "Business & partnership enquiries", "Partnerships, suppliers, and collaboration opportunities."],
              ].map(([type, title, description]) => (
                <button
                  type="button"
                  key={type}
                  className={`enquiry-choice${activeEnquiry === type ? " is-active" : ""}`}
                  aria-pressed={activeEnquiry === type}
                  onClick={() => {
                    setSearchParams({ type }, { replace: true });
                  }}
                >
                  <span>{title}</span>
                  <small>{description}</small>
                  <ArrowUpRight size={20} aria-hidden="true" />
                </button>
              ))}
            </div>

            <div className="contact-main-grid">
              <EnquiryForm key={activeEnquiry} type={activeEnquiry} />
            </div>

            <div className="contact-information">
              <div className="contact-information-heading">
                <Globe size={18} />
                <span>Prefer a direct conversation?</span>
              </div>
              <a className="contact-channel" href={`mailto:${siteConfig.email}`}>
                <Mail size={18} />
                <span>{siteConfig.email}</span>
                <ArrowUpRight size={16} />
              </a>
              <a className="contact-channel" href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}>
                <Phone size={18} />
                <span>{siteConfig.phone}</span>
                <ArrowUpRight size={16} />
              </a>
              <div className="contact-channel">
                <MapPin size={18} />
                <span>{siteConfig.address}</span>
              </div>
              <a
                className="contact-channel"
                href={
                  whatsappNumber
                    ? `https://wa.me/${whatsappNumber}?text=Hello%20Flat%20Ride%20Engineering`
                    : `mailto:${siteConfig.email}`
                }
                target={whatsappNumber ? "_blank" : undefined}
                rel={whatsappNumber ? "noopener noreferrer" : undefined}
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* MISSION AND VISION */}
        <section className="contact-mission">
          <div className="contact-mission-overlay" />
          <div className="contact-container contact-mission-content">
            <span className="contact-mission-label">MISSION & VISION</span>
            <div className="contact-mission-grid">
              <article>
                <span className="contact-mission-item-label">OUR MISSION</span>
                <h3>Delivering engineering solutions that make a difference.</h3>
                <p>
                  Our mission is to deliver reliable engineering solutions through
                  simulation, analysis and real test data, while building strong
                  collaborations that help clients develop safer, more stable vehicles.
                </p>
              </article>
              <article>
                <span className="contact-mission-item-label">OUR VISION</span>
                <h3>Becoming a trusted name in automotive engineering.</h3>
                <p>
                  To become a leading engineering company, trusted worldwide, in
                  vehicle dynamics and automotive engineering.
                </p>
              </article>
            </div>
            <a href="/about#mission-vision" className="contact-mission-link">
              DISCOVER OUR PURPOSE
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="contact-bottom">
          <div className="contact-container contact-bottom-inner">
            <div>
              <span className="contact-bottom-label">
                FLAT RIDE ENGINEERING
              </span>

              <h2>
                Let's engineer
                <br />
                <span>what comes next.</span>
              </h2>
            </div>

            <a href={`mailto:${siteConfig.email}`}>
              START A CONVERSATION
              <ArrowUpRight size={19} />
            </a>
          </div>
        </section>

      </main>

      {/* CONTACT PAGE CSS */}
      <style>{`

        .contact-page {
          width: 100%;
          background: #ffffff;
          color: #171717;
          font-family: inherit;
          overflow: hidden;
        }

        .contact-container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding-left: 35px;
          padding-right: 35px;
        }

        /* HERO */

        .contact-hero {
          min-height: 560px;
          position: relative;
          display: flex;
          align-items: center;
          isolation: isolate;
          background: #151515;
          color: #ffffff;
          border: 1px solid #111111;
        }

        .contact-hero-image {
          position: absolute;
          inset: 0;
          z-index: -2;
          background-image:
            url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ85K9WCwtKOVIdcRTfIEfIx4_MXVubSgAkAyp40NoVog&s=10");
          background-size: cover;
          background-position: center 55%;
        }

        .contact-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.83) 0%,
            rgba(0, 0, 0, 0.55) 48%,
            rgba(0, 0, 0, 0.10) 100%
          );
        }

        .contact-hero-content {
          padding-top: 100px;
          padding-bottom: 115px;
        }

        .contact-eyebrow,
        .section-label {
          display: block;
          color: #777777;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2.5px;
        }

        .contact-eyebrow {
          color: #ffffff;
          margin-bottom: 28px;
        }

        .contact-hero h1 {
          margin: 0 0 24px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(58px, 7.5vw, 96px);
          line-height: 1.02;
          font-weight: 700;
          letter-spacing: -4px;
        }

        .contact-hero h1 span {
          color: #d1d1d1;
          font-weight: 400;
        }

        .contact-hero-content > p {
          max-width: 570px;
          color: #dedede;
          font-size: 17px;
          line-height: 1.9;
          margin-bottom: 32px;
        }

        .contact-hero-link {
          display: inline-flex;
          align-items: center;
          gap: 24px;
          padding: 15px 21px;
          color: #171717;
          background: #ffffff;
          border: 1px solid #111111;
          text-decoration: none;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
          transition: 0.3s ease;
        }

        .contact-hero-link:hover {
          background: #d8d8d8;
          gap: 32px;
        }

        .contact-hero-caption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: space-between;
          padding: 18px 35px;
          border-top: 1px solid #ffffff;
          color: #ffffff;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        /* INTRO */

        .contact-intro {
          padding: 105px 0;
          background: #ffffff;
          border: 1px solid #111111;
        }

        .contact-intro-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: end;
          gap: 70px;
        }

        .contact-intro h2 {
          margin: 23px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(42px, 5.5vw, 68px);
          line-height: 1.13;
          letter-spacing: -2.5px;
          font-weight: 700;
        }

        .contact-intro h2 span {
          color: #777777;
          font-weight: 400;
        }

        .contact-intro-grid > p {
          max-width: 440px;
          margin: 0 0 5px;
          color: #666666;
          font-size: 14px;
          line-height: 2;
        }

        /* MAIN CONTACT */

        .contact-main {
          padding: clamp(70px, 9vw, 125px) 0;
          background: #f4f4f1;
        }

        .contact-main-grid {
          display: grid;
          grid-template-columns: minmax(0, 820px);
          gap: 24px;
          align-items: start;
        }

        .contact-enquiry-heading {
          max-width: 760px;
          margin-bottom: 42px;
        }

        .contact-enquiry-heading h2 {
          margin: 17px 0 13px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(38px, 5vw, 58px);
          line-height: 1.08;
          letter-spacing: -1.7px;
          font-weight: 700;
        }

        .contact-enquiry-heading > p {
          max-width: 600px;
          margin: 0;
          color: #64645f;
          font-size: 17px;
          line-height: 1.8;
        }

        .project-enquiry-prompt {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          max-width: 820px;
          margin-top: 40px;
          padding: 24px 0;
          border-top: 1px solid #d6d6d0;
          border-bottom: 1px solid #d6d6d0;
        }

        .project-enquiry-prompt > div > span {
          color: #777770;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.8px;
        }

        .project-enquiry-prompt h3 {
          margin: 8px 0 0;
          font: 700 25px/1.3 Georgia, "Times New Roman", serif;
        }

        .project-enquiry-prompt > a {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #171717;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: .5px;
          white-space: nowrap;
        }

        .project-enquiry-prompt > a:hover {
          color: #147cac;
        }

        .enquiry-card {
          min-width: 0;
          padding: clamp(24px, 3vw, 38px);
          border: 1px solid #deded8;
          background: #fff;
          color: #171717;
        }

        .enquiry-card-heading {
          min-height: 170px;
          padding-bottom: 25px;
          border-bottom: 1px solid #e4e4df;
        }

        .enquiry-card-kicker {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #73736d;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.8px;
        }

        .enquiry-card-kicker > span:first-child {
          color: #147cac;
          font-family: 'DM Mono', monospace;
        }

        .enquiry-card-heading h3 {
          margin: 21px 0 10px;
          color: #171717;
          font: 700 clamp(29px, 2.8vw, 36px)/1.2 Georgia, "Times New Roman", serif;
          letter-spacing: -.5px;
        }

        .enquiry-card-heading > p {
          max-width: 440px;
          margin: 0;
          color: #6d6d67;
          font-size: 15px;
          line-height: 1.7;
        }

        .enquiry-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-top: 25px;
        }

        .enquiry-fields {
          gap: 19px 16px;
        }

        .enquiry-fields label {
          gap: 8px;
          color: #575752;
          font-size: 13px;
          font-weight: 700;
        }

        .enquiry-fields input,
        .enquiry-fields textarea {
          padding: 11px 0;
          border: 0;
          border-bottom: 1px solid #c9c9c2;
          border-radius: 0;
          background: transparent;
          color: #171717;
          font-size: 16px;
          box-shadow: none;
        }

        .enquiry-fields input:focus,
        .enquiry-fields textarea:focus {
          border-bottom-color: #147cac;
          box-shadow: 0 1px 0 #147cac;
        }

        .enquiry-fields textarea {
          min-height: 120px;
          resize: vertical;
        }

        .enquiry-fields textarea::placeholder {
          color: #92928b;
        }

        .enquiry-fields label > span {
          color: #147cac;
        }

        .enquiry-submit-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 6px;
        }

        .enquiry-submit {
          min-height: 48px;
          padding: 0 18px;
          border-radius: 0;
          background: #171717;
          color: #fff;
          font-size: 12px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .enquiry-submit:hover {
          background: #333;
        }

        .enquiry-required-note {
          color: #777770;
          font-size: 12px;
        }

        .enquiry-status {
          margin-top: 0;
          font-size: 12px;
        }

        .enquiry-status.is-error {
          color: #ad302a;
        }

        .contact-information {
          display: grid;
          grid-template-columns: 1.2fr repeat(4, minmax(0, 1fr));
          align-items: center;
          gap: 16px;
          margin-top: 32px;
          padding: 22px 0;
          border-top: 1px solid #d6d6d0;
          border-bottom: 1px solid #d6d6d0;
        }

        .contact-information-heading,
        .contact-channel {
          display: flex;
          min-width: 0;
          align-items: center;
          gap: 10px;
        }

        .contact-information-heading {
          color: #171717;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.5;
        }

        .contact-information-heading svg,
        .contact-channel svg {
          flex: 0 0 auto;
          color: #147cac;
        }

        .contact-channel {
          color: #555550;
          font-size: 13px;
          line-height: 1.5;
          overflow-wrap: anywhere;
        }

        a.contact-channel:hover {
          color: #147cac;
        }

        /* MISSION AND VISION */

        .contact-mission {
          position: relative;
          isolation: isolate;
          min-height: 470px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfNseF57xzhKT2CekKH5shTBuvJixC1cMwf6KDOCbsmA&s=10")
            center/cover no-repeat;
        }

        .contact-mission-overlay {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.62) 58%,
            rgba(0, 0, 0, 0.12) 100%
          );
        }

        .contact-mission-content {
          color: #ffffff;
          padding-top: 65px;
          padding-bottom: 65px;
        }

        .contact-mission-label {
          display: inline-block;
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .contact-mission-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          max-width: 920px;
          margin: 22px 0 28px;
        }

        .contact-mission-grid article {
          padding: 28px;
          border: 1px solid rgba(255, 255, 255, 0.28);
          background: rgba(0, 0, 0, 0.38);
        }

        .contact-mission-item-label {
          display: inline-block;
          color: #dddddd;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2.5px;
        }

        .contact-mission-grid h3 {
          margin: 14px 0 12px;
          color: #ffffff;
          font-size: clamp(20px, 2.5vw, 28px);
          line-height: 1.25;
        }

        .contact-mission-grid p {
          max-width: 620px;
          margin: 0;
          color: #dddddd;
          font-size: 14px;
          line-height: 1.85;
        }

        .contact-mission-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 18px;
          border: 1px solid #ffffff;
          background: #ffffff;
          color: #111111;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.2px;
          text-decoration: none;
          transition: 0.3s ease;
        }

        .contact-mission-link:hover {
          background: #dddddd;
          border-color: #dddddd;
          transform: translateY(-2px);
        }

        /* BOTTOM CTA */

        .contact-bottom {
          padding: 85px 0;
          background: #171717;
          color: #ffffff;
          border: 1px solid #111111;
        }

        .contact-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
        }

        .contact-bottom-label {
          color: #aaaaaa;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2.5px;
        }

        .contact-bottom h2 {
          margin: 20px 0 0;
          font-size: clamp(37px, 5vw, 58px);
          line-height: 1.08;
          letter-spacing: -2px;
        }

        .contact-bottom h2 span {
          color: #aaaaaa;
          font-weight: 400;
        }

        .contact-bottom-inner > a {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          padding: 17px 23px;
          background: #ffffff;
          color: #171717;
          border: 1px solid #111111;
          text-decoration: none;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          white-space: nowrap;
          transition: 0.3s ease;
        }

        .contact-bottom-inner > a:hover {
          background: #d5d5d5;
          gap: 27px;
        }

        /* TABLET */

        @media (max-width: 900px) {
          .contact-intro-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .contact-main-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .project-enquiry-prompt {
            align-items: flex-start;
            flex-direction: column;
          }

          .contact-information {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

        }

        /* MOBILE */

        @media (max-width: 600px) {
          .contact-container {
            padding-left: 21px;
            padding-right: 21px;
          }

          .contact-hero {
            min-height: 510px;
          }

          .contact-hero-image {
            background-position: 60% center;
          }

          .contact-hero-content {
            padding-top: 85px;
            padding-bottom: 100px;
          }

          .contact-hero h1 {
            font-size: 45px;
            letter-spacing: -1.8px;
          }

          .contact-hero-content > p {
            font-size: 13px;
          }

          .contact-hero-caption {
            padding: 15px 18px;
            font-size: 7px;
            letter-spacing: 1px;
            gap: 10px;
          }

          .contact-intro {
            padding: 70px 0;
          }

          .contact-intro h2 {
            font-size: 37px;
          }

          .contact-intro-grid > p {
            font-size: 13px;
          }

          .contact-main {
            padding: 55px 0 65px;
          }

          .contact-information {
            grid-template-columns: 1fr;
            gap: 15px;
            margin-top: 24px;
          }

          .enquiry-card {
            padding: 24px 18px;
          }

          .enquiry-card-heading {
            min-height: 0;
            padding-bottom: 20px;
          }

          .enquiry-fields {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .enquiry-field-wide {
            grid-column: auto;
          }

          .enquiry-submit-row {
            align-items: flex-start;
            flex-direction: column;
          }

          .enquiry-submit {
            width: 100%;
          }

          .contact-enquiry-heading {
            margin-bottom: 30px;
          }

          .contact-enquiry-heading h2 {
            font-size: 37px;
            letter-spacing: -1px;
          }

          .contact-enquiry-heading > p {
            font-size: 15px;
          }

          .enquiry-card-heading h3 {
            font-size: 28px;
          }

          .enquiry-card-heading > p {
            font-size: 15px;
          }

          .enquiry-fields label {
            font-size: 13px;
          }

          .enquiry-fields input,
          .enquiry-fields textarea {
            font-size: 16px;
          }

          .project-enquiry-prompt h3 {
            font-size: 23px;
          }

          .contact-mission {
            min-height: 420px;
          }

          .contact-mission-content {
            padding-top: 55px;
            padding-bottom: 55px;
          }

          .contact-mission h2 {
            font-size: 40px;
          }

          .contact-mission-grid {
            grid-template-columns: 1fr;
          }

          .contact-bottom {
            padding: 65px 0;
          }

          .contact-bottom-inner {
            align-items: flex-start;
            flex-direction: column;
          }

          .contact-bottom h2 {
            font-size: 43px;
          }
        }

      `}</style>
    </>
  );
}
