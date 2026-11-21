
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links  = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Blog", "/blog"],
  ["Careers", "/careers"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <div className="container nav-wrap">

        {/* LOGO */}
        <Link
          to="/"
          className="brand"
          onClick={() => setOpen(false)}
          aria-label="Flat Ride Engineering Home"
        >
          <img
            src="/logo.png"
            alt="Flat Ride Engineering"
            className="brand-logo"
          />
        </Link>
        {/* <h1 >Flat Ride Engineering</h1> */}

        

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>

        {/* NAVIGATION */}
        <nav
          id="primary-navigation"
          className={open ? "nav-links open" : "nav-links"}
        >
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}

          <Link
            className="nav-cta"
            to="/contact?type=project"
            onClick={() => setOpen(false)}
          >
            Project enquiry
            <ArrowUpRight size={16} />
          </Link>
        </nav>

      </div>
    </header>
  );
}
