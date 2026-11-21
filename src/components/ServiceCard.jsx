import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServiceCard({ service, index, image }) {
  const Icon = service.icon
  return <Link to="/services" className="service-card">
    {(image || service.image) && (
      <img
        className="service-card-image"
        src={image || service.image}
        alt=""
        loading="lazy"
        aria-hidden="true"
      />
    )}
    <div className="service-card-top"><span className="service-number">0{index + 1}</span><span className="icon-box"><Icon size={21} aria-hidden="true"/></span></div>
    <h3>{service.title}</h3><p>{service.description || service.desc}</p>
    <span className="card-link">Explore service <ArrowUpRight size={16}/></span>
  </Link>
}