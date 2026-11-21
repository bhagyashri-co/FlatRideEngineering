
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  Crosshair,
  Cpu,
  ChevronDown,
} from "lucide-react";

import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { siteConfig } from "../siteConfig";

export default function Home() {
  const engineeringImages = [
    {
      src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=85",
      alt: "Automotive engineering workshop",
    },
    {
      src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=85",
      alt: "Performance vehicle",
    },
    {
      src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=85",
      alt: "Sports car engineering",
    },
    {
      src: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=85",
      alt: "Automotive design",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}

      <section className="hero hero-static-section">
        <video
          className="hero-background-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/videos/vehicle_dynamics_20s_v2.mp4" type="video/mp4" />
        </video>
        <div className="hero-static-overlay" />
        <div className="hero-grid"></div>

        <div className="container hero-content">

          <span className="eyebrow hero-eyebrow">
            <i />
            AUTOMOTIVE ENGINEERING & SIMULATION
          </span>

          <h1>
            Engineering
            <br />
            <em>Vehicle Motion.</em>
          </h1>

          <p className="hero-lead" style={{ maxWidth: "550px" }}>
            Automotive engineering and simulation consultancy delivering
            technical insight for vehicle dynamics, design development and
            performance-led decision making.
          </p>

          <div className="hero-actions">

            <Link to="/services" className="button button-primary">
              Explore our services
              <ArrowUpRight size={17} />
            </Link>

            <Link to="/contact?type=project" className="button button-outline">
              Discuss a project
            </Link>

          </div>

          <div className="hero-meta">
            <span>/ ENGINEERING</span>
            <span>VEHICLE DYNAMICS · SIMULATION · DESIGN</span>
          </div>

        </div>

        <div className="hero-side-label">
          PERFORMANCE THROUGH ENGINEERING
        </div>

        <a className="scroll-cue" href="#intro">
          <ChevronDown size={17} />
          {/* SCROLL TO EXPLORE */}
        </a>

      </section>


      {/* INTRODUCTION SECTION */}

      <section className="intro-section section-pad" id="intro">

        <div className="container intro-grid">

          <div>
            <span className="eyebrow">WHO WE ARE</span>

            <h2>
              Technical clarity for complex automotive engineering challenges.
            </h2>
          </div>

          <div className="intro-copy">

            <p className="large-copy">
              {siteConfig.aboutText}
            </p>

            <p>
              We help teams understand vehicle behaviour, evaluate design
              concepts, and turn simulation-led insight into practical
              engineering decisions across development and validation
              programmes.
            </p>

            <Link to="/about" className="text-link">
              Discover Flat Ride
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>

      </section>


      {/* AUTOMOTIVE IMAGE SLIDER */}

      <section className="engineering-gallery">

        <div className="engineering-gallery-track">

          {[...engineeringImages, ...engineeringImages].map((image, index) => (
            <div className="engineering-gallery-item" key={index}>
              <img
                src={image.src}
                alt={index >= engineeringImages.length ? "" : image.alt}
                loading="lazy"
              />
            </div>
          ))}

        </div>

      </section>


      {/* SERVICES SECTION */}

      <section className="services-section section-pad">

        <div className="container">

          <SectionHeading
            eyebrow="OUR EXPERTISE"
            title="Engineering capabilities"
            text="Focused technical services across vehicle dynamics, simulation and automotive development."
          />

          <div className="services-grid">

            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
              />
            ))}

          </div>

          <div className="section-bottom-link">

            <Link to="/services" className="text-link">
              View all services
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>

      </section>


      {/* ENGINEERING STATEMENT */}

      <section className="statement-section" >

        <div className="container statement-grid">

          <div className="statement-kicker">
            ENGINEERING
            <br />
            MINDSET <span>/</span>
          </div>

          <div>

            <h2>
              From engineering questions to performance-led decisions.
            </h2>

            <p>
              Combine analytical thinking, simulation and practical
              engineering judgement to move development forward.
            </p>

            <Link to="/contact" className="button button-light">
              Start a conversation
              <ArrowUpRight size={17} />
            </Link>

          </div>

        </div>

        <div className="statement-orbit orbit-one"></div>
        <div className="statement-orbit orbit-two"></div>

      </section>


      {/* APPROACH SECTION */}

      <section className="approach-section section-pad">

        <div className="container">

          <SectionHeading
            eyebrow="HOW WE THINK"
            title="A methodical approach. Measurable engineering."
          />

          <div className="approach-grid">

            <div>
              <Activity />

              <h3>Understand</h3>

              <p>
                Define the vehicle-level objective, constraints and
                engineering question.
              </p>
            </div>

            <div>
              <Crosshair />

              <h3>Analyse</h3>

              <p>
                Apply appropriate modelling, simulation and technical
                evaluation methods.
              </p>
            </div>

            <div>
              <Cpu />

              <h3>Optimise</h3>

              <p>
                Translate engineering findings into clear development
                recommendations.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* FINAL CALL TO ACTION */}

      <section
        className="cta-band home-cta-band"
        style={{ backgroundImage: 'linear-gradient(rgba(7, 20, 34, .58), rgba(7, 20, 34, .58)), url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTDfsith4KE-QTWehek230vQd0sYCVTJh-FYOnG0zUw&s=10")' }}
      >

        <div className="container cta-inner">

          <div>

            <span className="eyebrow">
              HAVE AN ENGINEERING CHALLENGE?
            </span>

            <h2>Let's talk performance.</h2>

          </div>

          <Link to="/contact" className="button button-primary">
            Contact our team
            <ArrowUpRight size={17} />
          </Link>

        </div>

      </section>


      {/* HOME PAGE HERO AND GALLERY CSS */}

      <style>{`

        /* VIDEO HERO */

        .hero-static-section {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          min-height: max(680px, calc(100svh - 112px));
          background: #050505;
        }

        .hero-background-video {
          position: absolute;
          inset: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-static-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.86) 0%,
            rgba(0, 0, 0, 0.60) 50%,
            rgba(0, 0, 0, 0.25) 100%
          );
          pointer-events: none;
        }

        .hero-static-section .hero-content {
          position: relative;
          z-index: 3;
          min-height: inherit;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding-top: 70px;
          padding-bottom: 78px;
        }

        .hero-static-section .hero-eyebrow,
        .hero-static-section h1,
        .hero-static-section .hero-lead,
        .hero-static-section .hero-actions {
          margin-left: 0;
        }

        .hero-static-section .hero-meta {
          width: min(650px, 100%);
        }

        .hero-static-section .hero-grid {
          z-index: 2;
          pointer-events: none;
        }

        .hero-static-section .hero-side-label,
        .hero-static-section .scroll-cue {
          z-index: 4;
        }

        /* IMAGE SLIDER */

        .engineering-gallery {
          width: 100%;
          overflow: hidden;
          padding: 35px 0;
          background: #ffffff;
        }

        .engineering-gallery-track {
          display: flex;
          width: max-content;
          gap: 20px;
          animation: engineeringSlide 35s linear infinite;
        }

        .engineering-gallery-track:hover {
          animation-play-state: paused;
        }

        .engineering-gallery-item {
          width: 300px;
          height: 210px;
          flex-shrink: 0;
          overflow: hidden;
          background: #eeeeee;
        }

        .engineering-gallery-item img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .engineering-gallery-item:hover img {
          transform: scale(1.06);
        }

        @keyframes engineeringSlide {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        /* MOBILE */

        @media (max-width: 768px) {

          .hero-static-section {
            min-height: max(600px, calc(100svh - 92px));
          }

          .hero-static-section .hero-content {
            justify-content: flex-start;
            padding-top: clamp(54px, 10vh, 88px);
            padding-bottom: 72px;
          }

          .engineering-gallery-item {
            width: 240px;
            height: 170px;
          }

          .engineering-gallery {
            padding: 22px 0;
          }

        }

        @media (max-width: 600px) {
          .hero-static-section {
            min-height: max(620px, calc(100svh - 76px));
          }

          .hero-static-section .hero-content {
            padding-top: 58px;
            padding-bottom: 68px;
          }

          .hero-static-section h1 {
            margin-top: 22px;
            margin-bottom: 18px;
          }

          .hero-static-section .hero-actions {
            width: 100%;
          }

          .hero-static-section .hero-actions .button {
            min-height: 48px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .engineering-gallery-track {
            animation: none;
          }

        }

      `}</style>

    </>
  );
}
