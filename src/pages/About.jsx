
import React from "react";
import {
  ArrowUpRight,
  Compass,
  Crosshair,
  GraduationCap,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Target,
  Activity,
} from "lucide-react";

export default function About() {
  const approach = [
    {
      icon: Crosshair,
      title: "Technical Precision",
      description: "Applying engineering fundamentals and technical accuracy to every development challenge.",
    },
    {
      icon: Lightbulb,
      title: "Analytical Thinking",
      description: "Using data, engineering analysis and structured problem-solving to support informed decisions.",
    },
    {
      icon: Target,
      title: "Performance Optimisation",
      description: "Focusing on measurable improvements in vehicle behaviour, efficiency and performance.",
    },
  ];

  const commitments = [
    {
      icon: Activity,
      title: "Reliable Engineering Solutions",
      description: "Delivering reliable solutions through simulation, analysis and real test data.",
    },
    {
      icon: Handshake,
      title: "Industry Collaboration",
      description: "Building strong partnerships with industry, academia, test labs and manufacturers.",
    },
    {
      icon: ShieldCheck,
      title: "Safer Vehicle Development",
      description: "Helping clients build vehicles that are safer, more stable and better to drive.",
    },
    {
      icon: GraduationCap,
      title: "Developing Skilled Engineers",
      description: "Supporting the next generation of engineers in vehicle dynamics and automotive technology.",
    },
  ];

  const capabilities = [
    ["Vehicle Development", "Engineering support for vehicle systems, architecture, integration and development."],
    ["Engineering Modelling", "Mathematical modelling and methods to understand and predict system behaviour."],
    ["Simulation & Analysis", "Simulation-driven analysis to evaluate performance and support technical decisions."],
    ["Testing & Validation", "Engineering testing, data evaluation and validation to assess system performance."],
    ["Technical Consulting", "Engineering guidance and technical collaboration to address development challenges."],
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-container about-hero-content">
          <span className="about-label">ABOUT FLAT RIDE</span>
          <h1>
            Engineering built around
            <br />
            <span>vehicle performance.</span>
          </h1>
          <p>
            Bringing engineering knowledge, analytical thinking and technical
            expertise together to support automotive development and innovation.
          </p>
          <a href="/contact?type=contact" className="about-btn">
            Let's Connect <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <section className="about-marquee" aria-label="Flat Ride capabilities">
        <div className="about-marquee-track">
          {[0, 1].map((group) => (
            <div className="about-marquee-group" key={group}>
              <span>WHO WE ARE</span><b>✳</b>
              <span>WHAT WE DO</span><b>✳</b>
              <span>OUR APPROACH</span><b>✳</b>
              <span>MISSION & VISION</span><b>✳</b>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section" id="who-we-are">
        <div className="about-container about-grid">
          <div className="about-text">
            <span className="about-label">WHO WE ARE</span>
            <h2>
              Driven by vehicle dynamics.
              <br />
              <span>Committed to excellence.</span>
            </h2>
            <p>
              Flat Ride Engineering was established through a deep commitment to
              vehicle dynamics and the belief that every vehicle should be safe,
              stable and a pleasure to drive.
            </p>
            <p>
              We approach every project with dedication and bring expertise and
              precision to help our clients achieve their engineering goals.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section what-we-do" id="what-we-do">
        <div className="about-container">
          <div className="section-heading">
            <span className="about-label">WHAT WE DO</span>
            <h2>
              Supporting every stage
              <br />
              of <span>vehicle development.</span>
            </h2>
            <p>
              We combine engineering disciplines and technical capabilities to
              support automotive development from concept to validation.
            </p>
          </div>

          <div className="capability-layout">
            <div className="capability-list">
              {capabilities.map(([title, description]) => (
                <div className="capability-item" key={title}>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                  <ArrowUpRight size={20} />
                </div>
              ))}
              <a href="/services" className="services-link">
                Explore Our Services <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section approach-section" id="our-approach">
        <div className="about-container">
          <div className="section-heading">
            <span className="about-label">OUR ENGINEERING APPROACH</span>
            <h2>
              Engineering with
              <br />
              <span>purpose and precision.</span>
            </h2>
            <p>
              Our approach combines technical understanding, analytical methods
              and performance-focused thinking.
            </p>
          </div>

          <div className="approach-cards">
            {approach.map((item) => {
              const Icon = item.icon;
              return (
                <article className="approach-card" key={item.title}>
                  <Icon size={26} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-section mission-section" id="mission-vision">
        <div className="about-container">
          <div className="section-heading">
            <span className="about-label">MISSION & VISION</span>
            <h2>
              Looking ahead.
              <br />
              <span>Engineering forward.</span>
            </h2>
          </div>

          <div className="mission-grid">
            <article className="mission-card">
              <div className="mission-card-top">
                <Compass size={30} />
                <span>OUR MISSION</span>
              </div>
              <h3>Delivering engineering solutions that make a difference.</h3>
              <p>
                Our mission is to deliver reliable engineering solutions through
                simulation, analysis and real test data, while building strong
                collaborations that help clients develop safer, more stable vehicles.
              </p>
            </article>

            <article className="mission-card">
              <div className="mission-card-top">
                <Target size={30} />
                <span>OUR VISION</span>
              </div>
              <h3>Becoming a trusted name in automotive engineering.</h3>
              <p>
                To become a leading engineering company, trusted worldwide, in
                vehicle dynamics and automotive engineering.
              </p>
            </article>
          </div>

          <div className="commitments-heading">
            <span className="about-label">OUR COMMITMENTS</span>
            <h3>What drives our mission</h3>
          </div>

          <div className="mission-pillars">
            {commitments.map((item) => {
              const Icon = item.icon;
              return (
                <article className="mission-pillar" key={item.title}>
                  <Icon size={27} />
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <span className="about-label">LET'S BUILD WHAT'S NEXT</span>
        <h2>
          Have an engineering
          <br />
          <span>challenge in mind?</span>
        </h2>
        <p>
          Let's connect and explore how engineering expertise can support your next project.
        </p>
        <a href="/contact?type=project" className="about-btn">
          Discuss Your Project <ArrowUpRight size={18} />
        </a>
      </section>

      <style>{`
        .about-page,
        .about-page * {
          box-sizing: border-box;
        }

        .about-page {
          width: 100%;
          background: #fff;
          color: #102a42;
          overflow: hidden;
        }

        .about-container {
          width: min(1480px, calc(100% - 100px));
          margin-inline: auto;
        }

        .about-label {
          color: #111;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
        }

        /* HERO */

        .about-hero {
          min-height: 650px;
          display: flex;
          align-items: center;
          position: relative;
          isolation: isolate;
          overflow: hidden;
          background: #0753ad;
        }

        .about-hero-content {
          padding-block: 110px;
        }

        .about-hero .about-label {
          color: #fff;
        }

        .about-hero h1 {
          max-width: 950px;
          margin: 24px 0;
          color: #fff;
          font-size: clamp(48px, 5.2vw, 78px);
          line-height: 1.08;
          letter-spacing: -2.5px;
        }

        .about-hero h1 span {
          color: #fff;
        }

        .about-hero-content p {
          max-width: 680px;
          color: #fff;
          font-size: 17px;
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .about-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 15px 25px;
          background: #0753ad;
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          border-radius: 4px;
          transition: .3s;
        }

        .about-btn:hover {
          background: #063d82;
          transform: translateY(-2px);
        }

        /* MARQUEE */

        .about-marquee {
          overflow: hidden;
          background: #fff;
          border-block: 1px solid #ddd;
          padding: 22px 0;
        }

        .about-marquee-track {
          display: flex;
          width: max-content;
          animation: flatRideMarquee 30s linear infinite;
        }

        .about-marquee-group {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          gap: 45px;
          padding-right: 45px;
        }

        .about-marquee-group span {
          color: #111;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2.5px;
          white-space: nowrap;
        }

        .about-marquee-group b {
          color: #0753ad;
        }

        @keyframes flatRideMarquee {
          to { transform: translateX(-50%); }
        }

        /* GENERAL SECTIONS */

        .about-section {
          padding: 100px 0;
        }

        .about-grid {
          display: block;
        }

        .about-image {
          position: relative;
          width: 100%;
          height: clamp(390px, 34vw, 510px);
          overflow: hidden;
          border: 1px solid #0753ad;
          background: #fff;
        }

        .about-image-track {
          display: flex;
          width: 800%;
          height: 100%;
          animation: aboutImageSlide 32s linear infinite;
        }

        .about-image:hover .about-image-track {
          animation-play-state: paused;
        }

        .about-image-slide {
          position: relative;
          flex: 0 0 12.5%;
          width: 12.5%;
          height: 100%;
          margin: 0;
          padding: 18px;
          background: #fff;
        }

        .about-image-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .about-image-slide figcaption {
          position: absolute;
          right: 22px;
          bottom: 22px;
          display: grid;
          width: 38px;
          height: 38px;
          place-items: center;
          border: 1px solid #0753ad;
          background: #fff;
          color: #0753ad;
          font: 500 13px 'DM Mono', monospace;
        }

        @keyframes aboutImageSlide {
          to { transform: translateX(-50%); }
        }

        .about-text {
          max-width: 650px;
        }

        .about-text h2,
        .section-heading h2 {
          margin: 18px 0;
          font-size: clamp(34px, 3vw, 48px);
          line-height: 1.17;
          letter-spacing: -1.5px;
        }

        .about-text h2 span,
        .section-heading h2 span,
        .about-cta h2 span {
          color: #0753ad;
        }

        .about-text p,
        .section-heading p {
          color: #555;
          font-size: 15px;
          line-height: 1.85;
          margin: 17px 0;
        }

        /* WHAT WE DO */

        .what-we-do,
        .mission-section {
          background: #f5f7f9;
        }

        .section-heading {
          max-width: 850px;
          margin-bottom: 55px;
        }

        .capability-layout {
          display: block;
        }

        .capability-list {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .capability-item {
          display: grid;
          grid-template-columns: 1fr 25px;
          gap: 15px;
          padding: 23px 0;
          border-bottom: 1px solid #d6dce2;
        }

        .capability-item h3 {
          margin: 0 0 8px;
          font-size: 19px;
        }

        .capability-item p {
          margin: 0;
          color: #555;
          font-size: 14px;
          line-height: 1.7;
        }

        .capability-item > svg {
          color: #0753ad;
        }

        .services-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          align-self: flex-start;
          margin-top: 28px;
          color: #0753ad;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
        }

        /* APPROACH */

        .approach-section {
          background: #fff;
        }

        .approach-cards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .approach-card {
          min-width: 0;
          padding: 34px;
          background: #fff;
          border: 1px solid #dce4eb;
          border-radius: 5px;
          transition: .3s;
        }

        .approach-card > svg,
        .mission-card-top > svg,
        .mission-pillar > svg {
          color: #0753ad;
        }

        .approach-card:hover {
          border-color: #0753ad;
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,.06);
        }

        .approach-card h3 {
          margin: 20px 0 12px;
          font-size: 19px;
        }

        .approach-card p {
          color: #555;
          font-size: 14px;
          line-height: 1.8;
          margin: 0;
        }

        /* MISSION */

        .mission-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 25px;
        }

        .mission-card {
          padding: 42px;
          min-height: 320px;
          border: 1px solid #dce4eb;
          border-radius: 5px;
          background: #fff;
        }

        .mission-card-top {
          display: flex;
          align-items: center;
          gap: 14px;
          color: #111;
        }

        .mission-card-top span {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .mission-card h3 {
          margin: 35px 0 18px;
          font-size: clamp(24px, 2vw, 31px);
          line-height: 1.3;
        }

        .mission-card p {
          color: #555;
          font-size: 15px;
          line-height: 1.8;
          margin: 0;
        }

        /* COMMITMENTS */

        .commitments-heading {
          margin: 75px 0 30px;
        }

        .commitments-heading h3 {
          font-size: 30px;
          margin: 14px 0 0;
        }

        .mission-pillars {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .mission-pillar {
          min-width: 0;
          padding: 28px 24px;
          background: #fff;
          border: 1px solid #dce4eb;
        }

        .mission-pillar h4 {
          font-size: 17px;
          line-height: 1.4;
          margin: 20px 0 14px;
        }

        .mission-pillar p {
          font-size: 14px;
          line-height: 1.8;
          color: #555;
          margin: 0;
        }

        /* CTA */

        .about-cta {
          padding: 100px 25px;
          text-align: center;
          background: #fff;
          border-top: 1px solid #ddd;
        }

        .about-cta h2 {
          margin: 20px 0;
          font-size: clamp(36px, 3.5vw, 54px);
          line-height: 1.15;
        }

        .about-cta p {
          max-width: 650px;
          margin: 0 auto 30px;
          color: #555;
          font-size: 15px;
          line-height: 1.8;
        }

        /* LAPTOP */

        @media (min-width: 1200px) {
          .about-container {
            width: min(1480px, calc(100% - 120px));
          }

          .about-section {
            padding-block: 110px;
          }

          .about-grid {
            grid-template-columns: 1.05fr .95fr;
          }
        }

        /* SMALL LAPTOP */

        @media (max-width: 1100px) and (min-width: 851px) {
          .about-container {
            width: calc(100% - 70px);
          }

          .about-grid {
            gap: 40px;
          }

          .about-image {
            height: 370px;
          }

          .capability-layout {
            gap: 35px;
          }

          .mission-pillars {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        /* TABLET */

        @media (max-width: 850px) {
          .about-container {
            width: calc(100% - 50px);
          }

          .about-grid,
          .capability-layout,
          .mission-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .about-image {
            height: 400px;
          }

          .about-text {
            max-width: 100%;
          }

          .approach-cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .mission-pillars {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .capability-image,
          .capability-image img {
            min-height: 350px;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .about-container {
            width: calc(100% - 36px);
          }

          .about-hero {
            min-height: 520px;
          }

          .about-hero-content {
            padding-block: 80px;
          }

          .about-hero h1 {
            font-size: clamp(37px, 9vw, 48px);
            letter-spacing: -1.5px;
          }

          .about-hero-content p {
            font-size: 15px;
          }

          .about-section {
            padding: 70px 0;
          }

          .about-image {
            height: 290px;
          }

          .about-text h2,
          .section-heading h2 {
            font-size: 32px;
          }

          .section-heading {
            margin-bottom: 35px;
          }

          .approach-cards,
          .mission-pillars {
            grid-template-columns: 1fr;
          }

          .approach-card {
            padding: 26px;
          }

          .mission-card {
            padding: 27px;
            min-height: auto;
          }

          .commitments-heading {
            margin-top: 55px;
          }

          .about-cta {
            padding: 75px 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-image-track,
          .about-marquee-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
