
import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { siteConfig } from '../siteConfig'
import { OPEN_COOKIE_PREFERENCES_EVENT } from './CookieConsent'

export default function Footer() {
  const phoneLink = siteConfig.phone.replace(/[^\d+]/g, '')
  const whatsappNumber = String(siteConfig.whatsappNumber || '').replace(/\D/g, '')

  return (
    <>
      <footer className="footer">
        <div className="container footer-main">

          {/* Brand */}
          <div className="footer-brand-section">
            <Link to="/" className="brand footer-brand">
              <span className="brand-mark">
                FR<span>.</span>
              </span>

              <span className="brand-copy">
                <b>{siteConfig.brandName}</b>
                <small>{siteConfig.brandSuffix}</small>
              </span>
            </Link>

            <p className="footer-description">
              {siteConfig.companyTagline}
            </p>

            <Link to="/contact?type=project" className="footer-contact-link">
              LET'S WORK TOGETHER
              <ArrowUpRight size={17} />
            </Link>
          </div>

          {/* Explore */}
          <div className="footer-column">
            <h4>EXPLORE</h4>

            <Link to="/about">About Us</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/contact?type=project">Project enquiry</Link>
            <Link to="/contact?type=business">Business partnerships</Link>
            <button
              type="button"
              className="footer-cookie-preferences"
              onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT))}
            >
              Cookie Preferences
            </button>
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">
            <h4>GET IN TOUCH</h4>

            <p>Have an engineering challenge?</p>

            <a href={`mailto:${siteConfig.email}`} className="footer-email">
              {siteConfig.email}
              <ArrowUpRight size={16} />
            </a>

            <a href={`tel:${phoneLink}`} className="footer-phone">
              {siteConfig.phone}
              <ArrowUpRight size={16} />
            </a>

            {whatsappNumber && (
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello%20Flat%20Ride%20Engineering`}
                className="footer-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
                <ArrowUpRight size={16} />
              </a>
            )}

            <Link to="/contact?type=project" className="footer-enquiry">
              SEND AN ENQUIRY
              <ArrowRight size={15} />
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="container footer-bottom-inner">

            <span>
              © {new Date().getFullYear()} {siteConfig.companyName}.
              All rights reserved.
            </span>

            <span className="footer-speciality">
              VEHICLE DYNAMICS · SIMULATION · ENGINEERING
            </span>

            <Link to="/" className="back-to-top">
              BACK TO HOME <ArrowUpRight size={13} />
            </Link>

          </div>
        </div>
      </footer>

      <style>{`
        .footer {
          background: #ffffff;
          color: #111111;
          padding-top: 85px;
          margin-top: 0;
          border-top: 1px solid #111111;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1.3fr;
          gap: 70px;
          padding-bottom: 75px;
        }

        .footer-brand {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          color: #111111;
        }

        .footer-brand .brand-mark {
          font-size: 34px;
          font-weight: 800;
          letter-spacing: -2px;
        }

        .footer-brand .brand-mark span {
          color: #111111;
        }

        .footer-brand .brand-copy {
          display: flex;
          flex-direction: column;
          margin-left: 10px;
        }

        .footer-brand .brand-copy b {
          font-size: 14px;
          letter-spacing: 1px;
        }

        .footer-brand .brand-copy small {
          font-size: 10px;
          color: #555555;
          letter-spacing: 2px;
          margin-top: 4px;
        }

        .footer-description {
          max-width: 370px;
          color: #555555;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.9;
          margin: 25px 0;
        }

        .footer-contact-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #111111;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-decoration: none;
          border-bottom: 1px solid #111111;
          padding-bottom: 10px;
          transition: color .3s ease;
        }

        .footer-contact-link:hover {
          color: #555555;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 17px;
        }

        .footer-column h4 {
          color: #111111;
          font-size: 14px;
          letter-spacing: 2px;
          margin: 5px 0 12px;
          font-weight: 800;
        }

        .footer-column a {
          color: #555555;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition: color .3s ease, transform .3s ease;
        }

        .footer-cookie-preferences {
          padding: 0;
          border: 0;
          background: transparent;
          color: #555555;
          font-size: 15px;
          font-weight: 700;
          text-align: left;
          cursor: pointer;
          transition: color .3s ease, transform .3s ease;
        }

        .footer-column a:hover {
          color: #111111;
          transform: translateX(4px);
        }

        .footer-cookie-preferences:hover {
          color: #111111;
          transform: translateX(4px);
        }

        .footer-contact p {
          color: #555555;
          font-size: 15px;
          font-weight: 600;
          margin: 0;
        }

        .footer-column .footer-email,
        .footer-column .footer-phone,
        .footer-column .footer-whatsapp {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #111111;
          font-size: 15px;
          font-weight: 800;
          word-break: break-word;
        }

        .footer-column .footer-enquiry {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 8px;
          color: #111111;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .footer-bottom {
          border-top: 2px solid #111111;
        }

        .footer-bottom-inner {
          min-height: 65px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .footer-bottom-inner span {
          color: #555555;
          font-size: 12px;
          font-weight: 700;
        }

        .footer-speciality {
          letter-spacing: 1px;
          text-align: center;
        }

        .back-to-top {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #111111;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
          text-decoration: none;
        }

        .back-to-top:hover {
          color: #555555;
        }

        @media (max-width: 768px) {
          .footer {
            padding-top: 55px;
          }

          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 45px 25px;
            padding-bottom: 50px;
          }

          .footer-brand-section {
            grid-column: 1 / -1;
          }

          .footer-bottom-inner {
            flex-direction: column;
            align-items: flex-start;
            padding-top: 20px;
            padding-bottom: 20px;
            gap: 14px;
          }

          .footer-speciality {
            text-align: left;
          }
        }

        @media (max-width: 480px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .footer-brand-section {
            grid-column: auto;
          }
        }
      `}</style>
    </>
  )
}
