import { useEffect } from "react";
import { Link } from "react-router-dom";
import usePageEffects from "../hooks/usePageEffects";

export default function Solutions() {
  useEffect(() => {
    document.title = "Solutions — Web Content Services & Digital Solutions";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "");
    document.body.className = "theme-blue page-solutions";
  }, []);

  usePageEffects("Solutions");

  return (
    <>

      <nav>
      <div className="wrap navbar">
      <div className="logo-area">
      <img src="/assets/images/Web%20content%20logo.png" alt="Logo" />
      <h2>Web Content</h2>
      </div>
      <div className="nav-right">
      <div className="nav-links" id="navLinks">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <div className="dropdown">
      <a href="#">Solutions ▾</a>
      <div className="dropdown-content">
      <Link to="/consulting">Business Consulting</Link>
      <Link to="/technology">Technology Solutions</Link>
      <Link to="/branding">Branding & Social Media</Link>
      <Link to="/learning">Learning & Career Development</Link>
      </div>
      </div>
      <Link to="/media-gallery">Media Gallery</Link>
      </div>
      <Link to="/contact" className="nav-talk">
                      Let's Talk
                  </Link>
      <button className="nav-toggle" id="navToggle" aria-label="Toggle menu"><span></span><span></span><span></span></button>
      </div>
      </div>
      </nav>

      <section className="hero sol-hero">
      <div className="hero-bg">
      <div className="grid-overlay"></div>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      </div>
      <div className="wrap hero-inner">
      <div className="eyebrow reveal ut-20">
      
            Our Solutions
          </div>
      <h1 className="reveal ut-21">
            Solutions Designed <span className="grad-text">Around Your Business.</span>
      </h1>
      <p className="sub reveal ut-42">
        We don't fit businesses into predefined services. We understand their requirements and design practical solutions around them.
      </p>
      <div className="scroll-cue reveal ut-43">
      </div>
      </div></section>

      <section className="solutions-section">
      <div className="wrap">
      <div className="solutions-grid">
      <article className="sol-card reveal-scroll" id="consulting">
      <div className="sol-card-top">
      <span className="sol-num">01</span>
      <div className="sol-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 19V11M10 19V5M16 19V13M22 19V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </div>
      </div>
      <h3>Business Consulting & Business Analysis</h3>
      <p>Helping Businesses Think Better, Work Better & Grow Better.</p>
      <a href="#" className="sol-link">
                Learn more
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </a>
      </article>
      <article className="sol-card reveal-scroll" id="technology">
      <div className="sol-card-top">
      <span className="sol-num">02</span>
      <div className="sol-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8.5 6L3 12L8.5 18M15.5 6L21 12L15.5 18M13.5 4.5L10.5 19.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </div>
      </div>
      <h3>Technology Solutions</h3>
      <p>Building Digital Solutions That Solve Real Business Problems.</p>
      <a href="#" className="sol-link">
                Learn more
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </a>
      </article>
      <article className="sol-card reveal-scroll" id="branding">
      <div className="sol-card-top">
      <span className="sol-num">03</span>
      <div className="sol-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 10V14H6L13 18V6L6 10H3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"></path><path d="M16.2 9C17.2 10.2 17.2 13.8 16.2 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"></path><path d="M19.2 7C21.4 9.5 21.4 14.5 19.2 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"></path></svg>
      </div>
      </div>
      <h3>Branding & Social Media Management</h3>
      <p>Building Brands That People Trust.</p>
      <a href="#" className="sol-link">
                Learn more
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </a>
      </article>
      <article className="sol-card reveal-scroll" id="learning">
      <div className="sol-card-top">
      <span className="sol-num">04</span>
      <div className="sol-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 4L2 9L12 14L22 9L12 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"></path><path d="M6 11.5V16C6 16 8.5 18 12 18C15.5 18 18 16 18 16V11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path><path d="M22 9V15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"></path></svg>
      </div>
      </div>
      <h3>Learning & Career Development</h3>
      <p>Creating Skilled Professionals for the Future.</p>
      <a href="#" className="sol-link">
                Learn more
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </a>
      </article>
      </div>
      </div>
      </section>

      <footer className="site-footer">
      <div className="wrap">
      <div className="footer-grid">
      <div className="footer-brand-col">
      <Link to="/" className="footer-logo">
      <span className="dot"></span>
                Web Content Services & Digital Solutions
              </Link>
      <p className="footer-tagline">Where Smart Solutions Build Trusted Brands.</p>
      <div className="social-row">
      <a href="#" className="social-btn" aria-label="LinkedIn">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM.5 8.98H9V23H.5zM12.5 8.98h8.14v1.91h.11c1.13-2.14 3.9-2.14 5.75 0V23h-4.5v-6.9c0-1.66-.03-3.8-2.32-3.8-2.32 0-2.68 1.81-2.68 3.68V23h-4.5z"></path></svg>
      </a>
      <a href="#" className="social-btn" aria-label="Instagram">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4.2"></circle><circle cx="17.3" cy="6.7" r="1"></circle></svg>
      </a>
      <a href="#" className="social-btn" aria-label="X / Twitter">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22H16.9l-5-6.6L6 22H2.9l8.1-9.3L1.7 2h6.6l4.5 6z"></path></svg>
      </a>
      <a href="#" className="social-btn" aria-label="Facebook">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8.4h2.8l.4-3.3h-3.2V8.1c0-1 .3-1.6 1.7-1.6h1.7V3.5C16.3 3.4 15.2 3.3 14 3.3c-2.6 0-4.4 1.6-4.4 4.5v2.5H6.8v3.3h2.8V22z"></path></svg>
      </a>
      </div>
      </div>
      <div className="footer-col">
      <h5>Solutions</h5>
      <ul>
      <li><Link to="/solutions#consulting" className="footer-link">Business Consulting & Analysis</Link></li>
      <li><Link to="/solutions#technology" className="footer-link">Technology</Link></li>
      <li><Link to="/solutions#branding" className="footer-link">Branding & Social Media</Link></li>
      <li><Link to="/solutions#learning" className="footer-link">Learning & Career</Link></li>
      </ul>
      </div>
      <div className="footer-col">
      <h5>Company</h5>
      <ul>
      <li><Link to="/" className="footer-link">About</Link></li>
      <li><Link to="/insights" className="footer-link">Insights</Link></li>
      <li><Link to="/careers" className="footer-link">Careers</Link></li>
      <li><Link to="/contact" className="footer-link">Contact</Link></li>
      </ul>
      </div>
      <div className="footer-col contact-col">
      <h5>Contact</h5>
      <ul>
      <li>+91 9022545488</li>
      <li>contentweb.officials@gmail.com</li>
      </ul>
      </div>
      </div>
      <div className="footer-bottom">
      <p className="footer-bottom-tag">Consult. Analyze. Build. Brand. Grow.</p>
      <p className="footer-copy">© <span id="year"></span> Web Content Services & Digital Solutions. All Rights Reserved.</p>
      </div>
      </div>
      </footer>



    </>
  );
}
