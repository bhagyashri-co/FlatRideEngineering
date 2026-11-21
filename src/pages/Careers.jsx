import React from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Users,
  Lightbulb,
  Car,
  Settings,
  Code,
  Mail,
} from "lucide-react";
import { siteConfig } from "../siteConfig";

const opportunities = [
  {
    number: "01",
    title: "Automotive Design Engineer",
    type: "Full-time",
    category: "Engineering",
    description:
      "Contribute to automotive component design, CAD development, and practical engineering design solutions.",
    icon: Car,
  },
  {
    number: "02",
    title: "Vehicle Dynamics Engineer",
    type: "Full-time",
    category: "Engineering",
    description:
      "Work across suspension, steering, ride, handling, and vehicle dynamics development.",
    icon: Settings,
  },
  {
    number: "03",
    title: "CAE / Simulation Engineer",
    type: "Full-time",
    category: "Simulation",
    description:
      "Support engineering analysis, simulation, validation, and performance optimisation.",
    icon: Code,
  },
];

const benefits = [
  {
    icon: Lightbulb,
    title: "Innovative Engineering",
    description:
      "Work on challenging automotive engineering problems and explore new technical approaches.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Build technical knowledge through practical engineering exposure and collaboration.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Work alongside people who value technical thinking, teamwork, and quality.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career Development",
    description:
      "Grow your capabilities through meaningful engineering responsibilities.",
  },
];

const email = siteConfig.careersEmail;

export default function Careers() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');
        .fr-careers { --career-blue:#2497e8; --career-ink:#111719; --career-muted:#aab2b5; color:#f5f7f7; background:#111719; font-family:'DM Sans',sans-serif; overflow:hidden; }
        .fr-careers * { box-sizing:border-box; }
        .career-container { width:min(1180px,calc(100% - 48px)); margin:0 auto; }
        .career-hero { min-height:690px; position:relative; display:flex; align-items:center; isolation:isolate; background:#101719 url('https://www.multimatic.com/_next/image?url=https%3A%2F%2Fmultimatic.wpenginepowered.com%2Fwp-content%2Fuploads%2F2020%2F08%2FMTC-Career.jpg&w=640&q=75') center/cover no-repeat; }
        .career-hero:before { content:''; position:absolute; inset:0; z-index:-1; background:linear-gradient(90deg,rgba(8,13,15,.94) 0%,rgba(8,13,15,.72) 48%,rgba(8,13,15,.22) 100%); }
        .career-hero-inner { padding:130px 0 145px; }
        .career-kicker { display:flex; align-items:center; gap:13px; color:var(--career-blue); font-size:11px; font-weight:700; letter-spacing:3px; text-transform:uppercase; }
        .career-kicker:before { content:''; width:34px; height:1px; background:currentColor; }
        .career-hero h1 { max-width:850px; margin:25px 0 22px; font:800 clamp(48px,7.5vw,94px)/.99 'Manrope',sans-serif; letter-spacing:-4px; text-transform:uppercase; }
        .career-hero h1 span { color:var(--career-blue); }
        .career-hero-copy { max-width:560px; color:#d1d7d8; font-size:16px; line-height:1.85; margin:0 0 34px; }
        .career-button { display:inline-flex; align-items:center; gap:22px; padding:16px 21px; background:var(--career-blue); color:#071116; text-decoration:none; font-size:11px; font-weight:800; letter-spacing:1.2px; transition:.25s ease; }
        .career-button:hover { background:#fff; transform:translateY(-3px); }
        .career-hero-foot { position:absolute; bottom:0; left:0; right:0; display:flex; justify-content:space-between; gap:20px; padding:20px max(24px,calc((100% - 1180px)/2)); border-top:1px solid rgba(255,255,255,.22); color:#d1d7d8; font-size:9px; letter-spacing:2px; text-transform:uppercase; }
        .career-intro { padding:105px 0 100px; background:#f3f5f4; color:#171d1e; }
        .career-intro-grid { display:grid; grid-template-columns:.8fr 1.2fr; gap:70px; align-items:start; }
        .career-intro-label,.career-section-label { color:#168bd5; font-size:10px; font-weight:800; letter-spacing:2.5px; text-transform:uppercase; }
        .career-intro h2 { margin:0; font:800 clamp(34px,4.5vw,57px)/1.08 'Manrope',sans-serif; letter-spacing:-2px; text-transform:uppercase; }
        .career-intro-copy { color:#5d6668; font-size:16px; line-height:1.85; }
        .career-opportunities { padding:100px 0; background:#111719; }
        .career-opportunities-head { display:flex; justify-content:space-between; align-items:end; margin-bottom:42px; }
        .career-opportunities h2 { margin:10px 0 0; font:800 clamp(34px,4vw,52px)/1.1 'Manrope',sans-serif; letter-spacing:-2px; text-transform:uppercase; }
        .career-list { border-top:1px solid rgba(255,255,255,.14); }
        .career-opportunity { display:grid; grid-template-columns:70px 1.5fr 1fr 1fr 44px; align-items:center; gap:24px; min-height:128px; border-bottom:1px solid rgba(255,255,255,.14); color:#f5f7f7; text-decoration:none; transition:.25s ease; }
        .career-opportunity:hover { background:rgba(36,151,232,.07); padding:0 18px; }
        .career-number { color:var(--career-blue); font-size:11px; font-weight:800; }
        .career-opportunity-icon { width:42px; height:42px; display:grid; place-items:center; background:rgba(36,151,232,.12); color:var(--career-blue); }
        .career-opportunity h3 { margin:0 0 8px; font:700 21px/1.25 'Manrope',sans-serif; }
        .career-opportunity p { margin:0; color:#abb4b6; font-size:13px; line-height:1.6; }
        .career-tag { color:#d5dcdd; font-size:11px; text-transform:uppercase; letter-spacing:1.2px; }
        .career-arrow { width:44px; height:44px; display:grid; place-items:center; border:1px solid rgba(255,255,255,.18); }
        .career-benefits { padding:105px 0; background:#f3f5f4; color:#171d1e; }
        .career-benefits h2 { max-width:700px; margin:14px 0 48px; font:800 clamp(34px,4.5vw,54px)/1.08 'Manrope',sans-serif; letter-spacing:-2px; text-transform:uppercase; }
        .career-benefits-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; }
        .career-benefit { min-height:270px; padding:28px; border:1px solid #dce2e1; background:#fff; }
        .career-benefit-icon { width:48px; height:48px; display:grid; place-items:center; color:var(--career-blue); border:1px solid #dce2e1; }
        .career-benefit h3 { margin:28px 0 12px; font:800 18px/1.3 'Manrope',sans-serif; }
        .career-benefit p { margin:0; color:#687174; font-size:14px; line-height:1.75; }
        .career-cta { padding:75px 0; background:var(--career-blue); color:#071116; }
        .career-cta-inner { display:flex; justify-content:space-between; align-items:center; gap:40px; }
        .career-cta h2 { margin:8px 0 0; font:800 clamp(30px,4vw,48px)/1.1 'Manrope',sans-serif; letter-spacing:-1.5px; text-transform:uppercase; }
        .career-cta .career-button { background:#111719; color:#fff; }
        .career-cta .career-button:hover { background:#fff; color:#111719; }
        @media (max-width:900px) {
          .career-container { width:min(100% - 32px,1180px); }
          .career-intro-grid { grid-template-columns:1fr; gap:28px; }
          .career-benefits-grid { grid-template-columns:repeat(2,1fr); }
          .career-opportunity { grid-template-columns:50px 1fr 100px 44px; }
          .career-opportunity p { display:none; }
        }
        @media (max-width:620px) {
          .career-hero { min-height:620px; }
          .career-hero-inner { padding:110px 0 120px; }
          .career-hero h1 { font-size:44px; letter-spacing:-2px; }
          .career-hero-foot { display:none; }
          .career-intro,.career-opportunities,.career-benefits { padding:70px 0; }
          .career-benefits-grid { grid-template-columns:1fr; }
          .career-opportunity { grid-template-columns:38px 1fr 44px; gap:12px; }
          .career-tag { display:none; }
          .career-cta-inner { align-items:flex-start; flex-direction:column; }
        }
      `}</style>

      <main className="fr-careers">
        <section className="career-hero">
          <div className="career-container career-hero-inner">
            <div className="career-kicker">Careers</div>
            <h1>Build the <span>Future</span></h1>
            <p className="career-hero-copy">
              Join a team solving practical automotive engineering challenges through design, simulation, and collaboration.
            </p>
            <a className="career-button" href="#opportunities">
              Explore opportunities <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="career-hero-foot">
            <span>Engineering</span>
            <span>Innovation</span>
            <span>Collaboration</span>
          </div>
        </section>

        <section className="career-intro">
          <div className="career-container career-intro-grid">
            <div>
              <div className="career-intro-label">Why work with us</div>
              <h2>Engineering that moves forward</h2>
            </div>
            <p className="career-intro-copy">
              We bring together technical expertise, curiosity, and a commitment to quality. You will contribute to meaningful automotive projects while developing skills through hands-on experience and support from experienced colleagues.
            </p>
          </div>
        </section>

        <section className="career-opportunities" id="opportunities">
          <div className="career-container">
            <div className="career-opportunities-head">
              <div>
                <div className="career-section-label">Open positions</div>
                <h2>Explore opportunities</h2>
              </div>
            </div>
            <div className="career-list">
              {opportunities.map((opportunity) => {
                const Icon = opportunity.icon;
                return (
                  <a
                    className="career-opportunity"
                    href={`mailto:${email}?subject=${encodeURIComponent(opportunity.title)} application`}
                    key={opportunity.number}
                  >
                    <span className="career-number">{opportunity.number}</span>
                    <div>
                      <h3>{opportunity.title}</h3>
                      <p>{opportunity.description}</p>
                    </div>
                    <span className="career-tag">{opportunity.category}</span>
                    <span className="career-tag">{opportunity.type}</span>
                    <span className="career-arrow"><ArrowUpRight size={18} /></span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="career-benefits">
          <div className="career-container">
            <div className="career-section-label">What you will find</div>
            <h2>Grow with meaningful work</h2>
            <div className="career-benefits-grid">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <article className="career-benefit" key={benefit.title}>
                    <div className="career-benefit-icon"><Icon size={22} /></div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="career-cta">
          <div className="career-container career-cta-inner">
            <div>
              <div className="career-section-label" style={{ color: "#071116" }}>Get in touch</div>
              <h2>Ready to make an impact?</h2>
            </div>
            <a className="career-button" href={`mailto:${email}`}>
              <Mail size={16} /> {email}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}