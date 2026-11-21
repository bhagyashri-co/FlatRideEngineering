
import React, { useState } from "react";
import {
  ArrowUpRight,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { services, slugifyServiceName } from "../data";

export default function Services() {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (index) => {
    setExpandedService((current) => current === index ? null : index);
  };

  return (
    <div className="services-page">
      <section className="services-intro">
        <div className="services-intro-content">
          <span className="intro-label">WHAT WE DO</span>
          <h1>
            OUR <span className="gradient-text">SERVICES</span>
          </h1>
          <p>
            Comprehensive automotive engineering solutions, from vehicle
            dynamics and chassis development to advanced design, simulation,
            and technical consulting.
          </p>
        </div>
      </section>

      {services.map((service, index) => {
        const Icon = service.icon;
        const isExpanded = expandedService === index;

        return (
          <section className="main-service" key={service.title || index}>
            <div
              className="service-banner"
              style={{ backgroundImage: `url("${service.image}")` }}
            >
              <div className="banner-overlay" />

              <div className="banner-content">
                <div className="category-icon">
                  {Icon && <Icon size={27} />}
                </div>

                <h2>{service.title}</h2>
                <p>{service.description}</p>

                {service.points?.length > 0 && (
                  <ul
                    className="service-highlights"
                    aria-label={`${service.title} highlights`}
                  >
                    {service.points.slice(0, 3).map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {service.items?.length > 0 && (
              <>
                <div className="service-readmore">
                  <button
                    type="button"
                    className="read-more-btn"
                    onClick={() => toggleService(index)}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? "READ LESS" : "READ MORE"}
                    {isExpanded ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                </div>

                {isExpanded && (
                  <div className="service-details">
                    <div className="service-grid">
                      {service.items.map((item, itemIndex) => (
                        <div
                          className="service-card"
                          key={item.title || item.name || itemIndex}
                        >
                          {item.image && (
                            <img
                              className="service-card-image"
                              src={item.image}
                              alt={item.title || item.name || "Automotive engineering"}
                              loading="lazy"
                            />
                          )}

                          <div className="service-card-top">
                            <div className="service-card-icon">
                              {item.icon ? (
                                React.createElement(item.icon, { size: 22 })
                              ) : (
                                <ChevronRight size={22} />
                              )}
                            </div>

                            <Link
                              className="service-card-arrow-link"
                              to={`/services/${slugifyServiceName(service.title)}/${slugifyServiceName(item.title || item.name)}`}
                              aria-label={`View details for ${item.title || item.name}`}
                              title={`View details for ${item.title || item.name}`}
                            >
                              <ArrowUpRight
                                className="service-card-arrow"
                                size={20}
                                aria-hidden="true"
                              />
                            </Link>
                          </div>

                          <h3>{item.title || item.name}</h3>

                          {item.description && <p>{item.description}</p>}

                          {item.sections?.length > 0 ? (
                            <div className="nested-card service-card-sections">
                              {item.sections.map((section) => (
                                <div
                                  className="service-card-section-title"
                                  key={section.title}
                                >
                                  {section.title}
                                </div>
                              ))}
                            </div>
                          ) : item.points?.length > 0 ? (
                            <div className="nested-card">
                              {item.points.map((point, pointIndex) => (
                                <div
                                  className="nested-card-item"
                                  key={`${point}-${pointIndex}`}
                                >
                                  <ChevronRight size={15} />
                                  <span>{point}</span>
                                </div>
                              ))}
                            </div>
                          ) : null}

                          {(item.items || item.subItems)?.length > 0 && (
                            <div className="nested-card">
                              {(item.items || item.subItems).map(
                                (nestedItem, nestedIndex) => (
                                  <div
                                    className="nested-card-item"
                                    key={
                                      nestedItem.title ||
                                      nestedItem.name ||
                                      nestedIndex
                                    }
                                  >
                                    <ChevronRight size={15} />
                                    <span>
                                      {nestedItem.title ||
                                        nestedItem.name ||
                                        nestedItem}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          )}

                          <Link
                            className="service-card-read-more"
                            to={`/services/${slugifyServiceName(service.title)}/${slugifyServiceName(item.title || item.name)}`}
                          >
                            Read more
                            <ArrowUpRight size={16} aria-hidden="true" />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </section>
        );
      })}

      <style>{`
        .services-page,
        .services-page * {
          box-sizing: border-box;
        }

        .services-page {
          width: 100%;
          min-height: 100vh;
          background: #fff;
          color: #111;
          overflow: hidden;
          font-family: inherit;
        }

        /* INTRO */

        .services-intro {
          position: relative;
          min-height: 600px;
          width: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #080d16;
        }

        .services-intro-content {
          position: relative;
          z-index: 2;
          width: min(1480px, calc(100% - 120px));
          margin: 0 auto;
          padding: 100px 0;
        }

        .intro-label {
          display: inline-block;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 4px;
          margin-bottom: 20px;
        }

        .services-intro-content h1 {
          max-width: 1000px;
          font-size: clamp(54px, 6vw, 88px);
          line-height: 1.02;
          font-weight: 800;
          letter-spacing: -3px;
          margin: 0 0 25px;
          color: #fff;
        }

        .gradient-text {
          color: #65b8ff;
        }

        .services-intro-content p {
          max-width: 680px;
          color: #e1e8f0;
          font-size: 17px;
          line-height: 1.8;
          margin: 0;
        }

        /* SERVICE SECTIONS */

        .main-service {
          width: min(1600px, calc(100% - 100px));
          margin: 0 auto;
          padding: 55px 0;
        }

        .service-banner {
          position: relative;
          min-height: 390px;
          display: flex;
          align-items: center;
          overflow: hidden;
          border-radius: 10px;
          background-color: #101923;
          background-position: center;
          background-size: cover;
          border: 1px solid #d8e0e8;
        }

        .banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(5,12,23,.96) 0%,
            rgba(5,12,23,.82) 48%,
            rgba(5,12,23,.24) 100%
          );
        }

        .banner-content {
          position: relative;
          z-index: 2;
          width: min(760px, 70%);
          padding: 55px 65px;
        }

        .category-icon {
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #55b5ff;
          border: 1px solid rgba(85,181,255,.5);
          border-radius: 10px;
          background: rgba(22,137,232,.14);
          margin-bottom: 22px;
        }

        .banner-content h2 {
          font-size: clamp(30px, 3vw, 44px);
          font-weight: 750;
          line-height: 1.15;
          margin: 0 0 16px;
          color: #fff;
        }

        .banner-content p {
          color: #d0d9e4;
          font-size: 16px;
          line-height: 1.8;
          margin: 0;
        }

        .service-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin: 22px 0 0;
          padding: 0;
          list-style: none;
        }

        .service-highlights li {
          padding: 8px 12px;
          border: 1px solid rgba(255,255,255,.3);
          border-radius: 999px;
          background: rgba(5,12,23,.45);
          color: #eef5fb;
          font-size: 12px;
          line-height: 1.4;
        }

        /* READ MORE */

        .service-readmore {
          display: flex;
          justify-content: center;
          padding: 25px 0 10px;
        }

        .read-more-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 13px 28px;
          color: #fff;
          background: #0753ad;
          border: 1px solid #0753ad;
          border-radius: 5px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          cursor: pointer;
          transition: .3s ease;
        }

        .read-more-btn:hover {
          background: #063d82;
          border-color: #063d82;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,.12);
        }

        /* SERVICE DETAILS */

        .service-details {
          padding: 25px 0 10px;
          animation: serviceFadeIn .35s ease;
        }

        @keyframes serviceFadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          align-items: stretch;
        }

        /* SERVICE CARDS */

        .service-card {
          min-width: 0;
          display: flex;
          flex-direction: column;
          position: relative;
          padding: 28px;
          border-radius: 9px;
          background: #fff;
          border: 1px solid #dce3ea;
          transition: .3s ease;
        }

        .service-card-image {
          display: block;
          width: 100%;
          height: 210px;
          margin-bottom: 22px;
          object-fit: cover;
          background: #f3f5f7;
          border-radius: 6px;
        }

        .service-card:hover {
          border-color: #0753ad;
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,.08);
        }

        .service-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 22px;
        }

        .service-card-icon {
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1689e8;
          background: rgba(22,137,232,.12);
          border-radius: 8px;
        }

        .service-card-arrow-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          color: #71869d;
          transition: .3s ease;
        }

        .service-card-arrow-link:hover,
        .service-card-arrow-link:focus-visible {
          background: rgba(22,137,232,.12);
          color: #0753ad;
          outline: none;
        }

        .service-card-arrow {
          color: currentColor;
          transition: transform .3s ease;
        }

        .service-card-arrow-link:hover .service-card-arrow {
          transform: translate(3px, -3px);
        }

        .service-card h3 {
          color: #111;
          font-size: 19px;
          font-weight: 700;
          line-height: 1.4;
          margin: 0 0 12px;
        }

        .service-card p {
          color: #555;
          font-size: 14px;
          line-height: 1.75;
          margin: 0;
        }

        .service-card-sections {
          padding-top: 6px;
          padding-bottom: 6px;
        }

        .service-card-section-title {
          padding: 10px 0;
          border-bottom: 1px solid #e1e5e9;
          color: #334b61;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.5;
        }

        .service-card-section-title:last-child {
          border-bottom: 0;
        }

        .service-card-read-more {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          align-self: flex-start;
          margin-top: auto;
          padding-top: 22px;
          color: #0753ad;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
        }

        .service-card-read-more:hover {
          color: #063d82;
        }

        /* NESTED DETAILS */

        .nested-card {
          margin-top: 20px;
          padding: 15px;
          background: #f6f8fa;
          border: 1px solid #e1e5e9;
          border-radius: 7px;
        }

        .nested-card-item {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          padding: 9px 0;
          color: #555;
          font-size: 13px;
          line-height: 1.55;
          border-bottom: 1px solid #e1e5e9;
        }

        .nested-card-item:last-child {
          border-bottom: none;
        }

        .nested-card-item svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: #1689e8;
        }

        /* LARGE LAPTOP */

        @media (min-width: 1200px) {
          .main-service {
            width: min(1600px, calc(100% - 120px));
          }

          .service-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 26px;
          }
        }

        /* SMALL LAPTOP */

        @media (max-width: 1100px) and (min-width: 901px) {
          .services-intro-content {
            width: calc(100% - 80px);
          }

          .main-service {
            width: calc(100% - 80px);
            padding: 42px 0;
          }

          .service-banner {
            min-height: 350px;
          }

          .banner-content {
            padding: 40px;
          }

          .service-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .service-card {
            padding: 23px;
          }
        }

        /* TABLET */

        @media (max-width: 900px) {
          .services-intro {
            min-height: 480px;
          }

          .services-intro-content {
            width: calc(100% - 60px);
            padding: 80px 0;
          }

          .main-service {
            width: calc(100% - 60px);
            padding: 35px 0;
          }

          .service-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }

          .service-banner {
            min-height: 330px;
          }

          .banner-content {
            width: 85%;
            padding: 35px;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .services-intro {
            min-height: 430px;
          }

          .services-intro-content {
            width: calc(100% - 40px);
            padding: 65px 0;
          }

          .services-intro-content h1 {
            font-size: clamp(42px, 10vw, 58px);
            letter-spacing: -1.5px;
          }

          .services-intro-content p {
            font-size: 15px;
          }

          .main-service {
            width: calc(100% - 36px);
            padding: 25px 0;
          }

          .service-banner {
            min-height: 300px;
          }

          .banner-content {
            width: 100%;
            padding: 25px;
          }

          .banner-content h2 {
            font-size: 27px;
          }

          .banner-content p {
            font-size: 14px;
          }

          .service-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .service-card {
            padding: 22px;
          }

          .service-card-image {
            height: 190px;
          }
        }

        @media (max-width: 380px) {
          .services-intro-content h1 {
            font-size: 38px;
          }

          .banner-content {
            padding: 20px;
          }

          .service-highlights {
            gap: 6px;
          }

          .service-highlights li {
            font-size: 11px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .service-details {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
