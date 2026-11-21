
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

const pageMetadata = {
  '/': {
    title: 'Flat Ride Engineering | Engineering Vehicle Performance',
    description: 'Automotive engineering, vehicle dynamics, simulation and performance consultancy from Flat Ride Engineering.',
  },
  '/about': {
    title: 'About Us | Flat Ride Engineering',
    description: 'Learn about Flat Ride Engineering and our approach to vehicle dynamics, simulation and automotive engineering.',
  },
  '/services': {
    title: 'Engineering Services | Flat Ride Engineering',
    description: 'Explore vehicle dynamics, powertrain, CAD/CAE and engineering consultancy services from Flat Ride Engineering.',
  },
  '/blog': {
    title: 'Insights | Flat Ride Engineering',
    description: 'Read engineering insights and updates from Flat Ride Engineering.',
  },
  '/careers': {
    title: 'Careers | Flat Ride Engineering',
    description: 'Explore career opportunities and connect with Flat Ride Engineering.',
  },
  '/contact': {
    title: 'Contact Us | Flat Ride Engineering',
    description: 'Contact Flat Ride Engineering to discuss a project, technical requirement or partnership.',
  },
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function UpdatePageMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[pathname]
      || (pathname.startsWith('/services/')
        ? {
            title: 'Service Details | Flat Ride Engineering',
            description: 'Explore specialist automotive engineering services from Flat Ride Engineering.',
          }
        : {
            title: 'Page Not Found | Flat Ride Engineering',
            description: 'The page you requested could not be found.',
          });
    let description = document.querySelector('meta[name="description"]');

    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.appendChild(description);
    }

    document.title = metadata.title;
    description.content = metadata.description;
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <UpdatePageMetadata />
      <Navbar />
      <CookieConsent />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceSlug/:itemSlug" element={<ServiceDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Navigate to="/blog" replace />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project-enquiry" element={<Navigate to="/contact?type=project" replace />} />

          <Route
            path="*"
            element={
              <div className="container not-found">
                <h1>Page not found</h1>
                <a href="/">Back home</a>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
