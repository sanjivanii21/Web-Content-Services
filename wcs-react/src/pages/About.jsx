import { useEffect } from "react";
import { Link } from "react-router-dom";
import usePageEffects from "../hooks/usePageEffects";

export default function About() {
  useEffect(() => {
    document.title = "Web Content Services & Digital Solutions — Strategy, Technology & Creative Growth";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "");
    document.body.className = "theme-blue page-about";
  }, []);

  usePageEffects("About");

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

      <section className="hero">
      <div className="wrap hero-inner">
      <div className="eyebrow reveal ut-20">
       
            Business Consulting & Business Solutions
          </div>
      <h1 className="reveal ut-21">
            We Transform Businesses Through <span className="grad-text">Strategy, Technology & Creative Solutions.</span>
      </h1>
      <p className="sub reveal ut-22">
            We help businesses understand their challenges, structure their operations, build digital solutions, strengthen their brands and create sustainable growth.
          </p>
      <div className="hero-ctas reveal ut-23">
      <Link to="/contact" className="btn btn-primary">
              Let's Talk About Your Business
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </Link>
      <Link to="/solutions" className="btn btn-ghost">
              Explore Our Solutions
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </Link>
      </div>
      </div>

      </section>

      <section className="about" id="about">
      <div className="wrap">
      <div className="about-head">
      <div>
      <div className="about-eyebrow">Who We Are</div>
      <h2>Web Content Services<br />&<span className="grad-text">  Business Solutions</span>
      <span className="loc"> <br />—Pune | Amravati, Maharashtra</span></h2>
      </div>
      <div className="about-copy reveal-scroll ut-19">
      <p>
      <strong>Web Content Services & Businesse Solutions</strong> is a results-driven digital agency headquartered in Pune and Amravati, Maharashtra. We specialise in empowering businesses, coaching institutes, and personal brands with a comprehensive suite of digital services — from high-impact content creation and performance-driven brand promotion to full-stack technology solutions.
        </p>
      <p>
          We believe that premium quality and budget-friendly pricing are not mutually exclusive. Every solution we deliver is crafted to maximise your return on investment, build brand authority, and generate measurable, sustainable growth.
        </p>
      </div>
      </div></div></section>

      <footer className="site-footer">
      <div className="wrap">
      <div className="footer-grid">
      <div className="footer-brand-col">
      <a href="#" className="footer-logo">
      <span className="dot"></span>
                Web Content Services & Businesse Solutions
              </a>
      <p className="footer-tagline ut-19">
        Where Smart Solutions Build Trusted Brands.
      </p>
      <div className="social-row">
      <a href="https://www.linkedin.com/company/web-content-services/" className="social-btn" aria-label="LinkedIn">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM.5 8.98H9V23H.5zM12.5 8.98h8.14v1.91h.11c1.13-2.14 3.9-2.14 5.75 0V23h-4.5v-6.9c0-1.66-.03-3.8-2.32-3.8-2.32 0-2.68 1.81-2.68 3.68V23h-4.5z"></path></svg>
      </a>
      <a href="https://www.instagram.com/webcontent.in?igsh=NjRzM3AxdmNsYW9j" className="social-btn" aria-label="Instagram">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4.2"></circle><circle cx="17.3" cy="6.7" r="1"></circle></svg>
      </a>
      <a href="https://x.com/webcontent_biz?s=11" className="social-btn" aria-label="X / Twitter">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22H16.9l-5-6.6L6 22H2.9l8.1-9.3L1.7 2h6.6l4.5 6z"></path></svg>
      </a>
      <a href="https://www.facebook.com/share/1CNiLj4fPb/?mibextid=wwXIfr" className="social-btn" aria-label="Facebook">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8.4h2.8l.4-3.3h-3.2V8.1c0-1 .3-1.6 1.7-1.6h1.7V3.5C16.3 3.4 15.2 3.3 14 3.3c-2.6 0-4.4 1.6-4.4 4.5v2.5H6.8v3.3h2.8V22z"></path></svg>
      </a>
      </div>
      </div>
      <div className="footer-col">
      <h5>Solutions</h5>
      <ul>
      <li><Link to="/consulting" className="footer-link">Business Consulting & Analysis</Link></li>
      <li><Link to="/technology" className="footer-link">Technology</Link></li>
      <li><Link to="/branding" className="footer-link">Branding & Social Media</Link></li>
      <li><Link to="/learning" className="footer-link">Learning & Career</Link></li>
      </ul>
      </div>
      <div className="footer-col">
      <h5>Company</h5>
      <ul>
      <li><Link to="/about" className="footer-link">About</Link></li>
      <li><Link to="/insights" className="footer-link">Insights</Link></li>
      <li><Link to="/careers" className="footer-link">Careers</Link></li>
      <li><Link to="/" className="footer-link">Contact</Link></li>
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
      <p className="footer-copy">© <span id="year"></span> Web Content Services & Businesse Solutions. All Rights Reserved.</p>
      </div>
      </div>
      </footer>
      <div id="toast" className="toast">
        Thanks — your message has been sent. We'll be in touch shortly.
      </div>



    </>
  );
}
