// import { Link } from 'react-router-dom'
// import { ArrowUpRight, ArrowRight, BriefcaseBusiness, Mail, MapPin, Phone } from 'lucide-react'
// import SectionHeading from '../components/SectionHeading'
// import EnquiryForm from '../components/EnquiryForm'
// import { services, projects } from '../data'
// import { siteConfig } from '../siteConfig'

// function PageHero({ eyebrow, title, text }) {
//   return <section className="page-hero"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section>
// }

// export function About() {
//   return <><PageHero eyebrow="ABOUT FLAT RIDE" title={<>Engineering built around<br/><em>vehicle performance.</em></>} text="An automotive engineering and simulation consultancy with a focus on technical depth and practical outcomes."/>
//   <section className="section-pad" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=2000&q=85')`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}> 
//     {/* <div className="class" style={{   display: 'flex', flexDirection: 'row', justifyContent: 'center',gap: '20px', maxWidth: '100px', margin: '20px auto', border:'20px',background: 'lightblue', padding: '20px', borderRadius: '8px', 
//       backgroundImage: `url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=2000&q=85')` }}> */}
//     <p style={{ textAlign: 'center' }}></p>
//    <div className="image">

//     {/* </div> */}
//     </div>
//     <h1 style={{ fontSize: '2rem',fontfamily: 'Arial, sans-serif', color: 'white',
//       textAlign: 'center', marginTop: '20px' }}>Technology</h1>


     
  
//   <br /><br /><br /><br /><br />
  
//   <div style={{ maxWidth: '1000px', margin: '20px auto', background: 'lightblue', padding: '20px', borderRadius: '8px', backgroundImage: `url('https://unsplash.com/photos/a-close-up-of-a-server-JcUQoTOeW3s')` }} className="container two-col"><div><span className="eyebrow">OUR PURPOSE</span><h2>Better understanding. Better engineering decisions.</h2></div>    <div className="body-copy"><p>{siteConfig.aboutText}</p><p>{siteConfig.missionText}</p><h3>Our engineering philosophy</h3><p>Start with the engineering objective, define the right analysis method, and communicate results in a way that supports informed technical decisions.</p></div></div></section><section className="values-strip"><div className="container values-grid"><div><b>01</b><h3>Technical rigour</h3><p>Methodical analysis and engineering discipline.</p></div><div><b>02</b><h3>Clear communication</h3><p>Insight that supports confident decisions.</p></div><div><b>03</b><h3>Performance focus</h3><p>Keep vehicle-level objectives in view.</p></div></div></section></>}
// export function Services() {
//   return <><PageHero eyebrow="OUR SERVICES" title={<>Specialist expertise.<br/><em>Connected engineering.</em></>} text="Explore our automotive engineering, vehicle dynamics and simulation capabilities."/><section className="section-pad"><div className="container service-detail-list">{services.map((s,i)=>{const Icon=s.icon;return <article className="service-detail" key={s.title}><div className="detail-index">0{i+1}</div><div className="detail-icon"><Icon size={25}/></div><div><h2>{s.title}</h2><p className="detail-lead">{s.desc}</p><p>{s.detail}</p></div><Link to="/contact" aria-label={`Enquire about ${s.title}`}><ArrowUpRight/></Link></article>})}</div></section></>
// }

// export function Projects() {
//   return <><PageHero eyebrow="PROJECTS & CASE STUDIES" title={<>Engineering in<br/><em>application.</em></>} text="A structured space to demonstrate engineering problems, analysis methods and outcomes."/><section className="section-pad"><div className="container"><div className="notice"><b>Content note</b><span>These are illustrative case-study placeholders, not claims of completed client work. Replace them with approved and technically verified projects before publishing.</span></div><div className="project-grid">{projects.map((p,i)=><article className="project-card" key={p.title}><div className={`project-art art-${i+1}`}><span>{p.tag}</span><div className="art-lines"></div><b>FR<span>.</span></b></div><div className="project-info"><span className="eyebrow">{p.type}</span><h2>{p.title}</h2><p>{p.text}</p><span className="text-link">Case study content pending <ArrowRight size={15}/></span></div></article>)}</div></div></section></>
// }

// export function Careers() {
//   return <><PageHero eyebrow="CAREERS" title={<>Build what moves<br/><em>engineering forward.</em></>} text="Interested in automotive engineering, modelling and simulation? We would like to hear from you."/><section className="section-pad"><div className="container careers-layout"><div><span className="eyebrow">WORK WITH US</span><h2>Curious minds. Engineering ambition.</h2><p>We welcome expressions of interest from people passionate about vehicle performance and engineering problem-solving.</p><p>Current vacancies will be listed here when confirmed by the company.</p></div><div className="career-card"><BriefcaseBusiness/><h3>No open roles listed right now</h3><p>You can still send your profile and area of interest to the company recruitment contact.</p>  <a className="button button-primary" href={`mailto:${siteConfig.careersEmail}?subject=Career%20enquiry`}>Send your profile <ArrowUpRight size={16}/></a><small>Update the careers email in the site configuration before launch.</small></div></div></section></>}

// export function Contact() {
//   return <><PageHero eyebrow="CONTACT" title={<>Let's discuss your<br/><em>engineering challenge.</em></>} text="Tell us about your project, technical requirement or collaboration opportunity."/><section className="section-pad"><div className="container contact-layout"><div><span className="eyebrow">GET IN TOUCH</span><h2>Start a technical conversation.</h2>  <p className="body-copy">{siteConfig.contactIntro}</p><div className="contact-method"><Mail/><div><b>Email</b><span>{siteConfig.email}</span></div></div><div className="contact-method"><Phone/><div><b>Phone</b><span>{siteConfig.phone}</span></div></div><div className="contact-method"><MapPin/><div><b>Location</b><span>{siteConfig.address}</span></div></div><a className="whatsapp-link" href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Flat%20Ride%20Engineering`} target="_blank" rel="noreferrer">Open WhatsApp enquiry <ArrowUpRight size={16}/></a><small className="placeholder-note">Update the WhatsApp number in the site configuration before publishing.</small></div><div className="form-panel"><h3>Send an enquiry</h3><p>Fields marked required must be completed.</p><EnquiryForm/></div></div></section></>}