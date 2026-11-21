import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { services, slugifyServiceName } from "../data";
import "./ServiceDetail.css";

export default function ServiceDetail() {
  const { serviceSlug, itemSlug } = useParams();
  const service = services.find(
    (entry) => slugifyServiceName(entry.title) === serviceSlug
  );
  const item = service?.items?.find(
    (entry) => slugifyServiceName(entry.title || entry.name) === itemSlug
  );

  if (!service || !item) {
    return (
      <section className="service-detail-missing">
        <div className="service-detail-container">
          <span className="service-detail-eyebrow">SERVICE DETAILS</span>
          <h1>This service detail could not be found.</h1>
          <Link className="service-detail-back" to="/services">
            <ArrowLeft size={17} />
            Back to all services
          </Link>
        </div>
      </section>
    );
  }

  const Icon = item.icon;
  const title = item.title || item.name;

  return (
    <div className="service-detail-page">
      <div className="service-detail-container">
        <nav className="service-detail-breadcrumb" aria-label="Breadcrumb">
          <Link to="/services">
            <ArrowLeft size={16} />
            All services
          </Link>
          <span>/</span>
          <span>{service.title}</span>
        </nav>

        <header className="service-detail-hero">
          <div className="service-detail-hero-copy">
            <span className="service-detail-eyebrow">{service.title}</span>
            <div className="service-detail-title-row">
              {Icon && (
                <span className="service-detail-icon">
                  <Icon size={25} aria-hidden="true" />
                </span>
              )}
              <h1>{title}</h1>
            </div>
            <p>
              {item.description ||
                `Specialist ${title.toLowerCase()} support within ${service.title.toLowerCase()}.`}
            </p>
            <Link className="service-detail-cta" to="/contact?type=project">
              Discuss your project
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="service-detail-image-wrap">
            <img
              src={item.image || service.image}
              alt={`${title} engineering`}
            />
          </div>
        </header>

        <section className="service-detail-content">
          <div>
            <span className="service-detail-eyebrow">WHAT WE COVER</span>
            <h2>Engineering support for your requirements.</h2>
            <p>
              Our {title.toLowerCase()} work is tailored to the vehicle,
              development stage, and questions your team needs to answer.
              We combine practical engineering judgement with analysis and
              validation to support confident technical decisions.
            </p>
          </div>

          {item.sections?.length > 0 ? (
            <div className="service-detail-sections">
              {item.sections.map((section) => (
                <article
                  className="service-detail-section"
                  key={section.title}
                >
                  <h3>{section.title}</h3>
                  {section.description && <p>{section.description}</p>}
                  {section.points?.length > 0 && (
                    <ul className="service-detail-points">
                      {section.points.map((point) => (
                        <li key={point}>
                          <Check size={17} aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          ) : item.points?.length > 0 ? (
            <ul className="service-detail-points">
              {item.points.map((point) => (
                <li key={point}>
                  <Check size={17} aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </section>

        <section className="service-detail-bottom">
          <div>
            <span className="service-detail-eyebrow">NEXT STEP</span>
            <h2>Let’s talk about your engineering challenge.</h2>
          </div>
          <Link className="service-detail-cta" to="/contact?type=project">
            Contact our team
            <ArrowUpRight size={17} />
          </Link>
        </section>
      </div>
    </div>
  );
}
