import { useEffect } from "react";
import { Link } from "react-router-dom";
import usePageEffects from "../hooks/usePageEffects";

export default function Technology() {
  useEffect(() => {
    document.title = "Technology Solutions | Web Content Services";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "");
    document.body.className = "theme-blue page-technology";
  }, []);

  usePageEffects("Technology");

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
      <section className="page-hero">
      <div className="wrap">
      <span className="section-tag">
                  Technology Solutions
              </span>
      <h1>
                  Building Digital Solutions That
                  <span className="grad-red">
                      Solve Real Business Problems.
                  </span>
      </h1>
      <p>
                  Technology should not simply look good.
                  It should solve a business problem.
              </p>
      </div>
      </section>
      <section className="services-section">
      <div className="wrap">
      <div className="service-grid">
      <div className="service-card ut-19">
      <h3>Website Development</h3>
      <p>Modern, responsive and SEO-friendly websites designed for business growth.</p>
      </div>
      <div className="service-card ut-19">
      <h3>Web Application Development</h3>
      <p>Custom applications tailored to your operations and workflows.</p>
      </div>
      <div className="service-card ut-19">
      <h3>Mobile Application Development</h3>
      <p>Android and iOS applications built for scalability and performance.</p>
      </div>
      <div className="service-card ut-19">
      <h3>UI / UX Design</h3>
      <p>Intuitive experiences that increase engagement and conversions.</p>
      </div>
      <div className="service-card ut-19">
      <h3>CRM Solutions</h3>
      <p>Manage customers, sales pipelines and communication efficiently.</p>
      </div>
      <div className="service-card ut-19">
      <h3>Database Management</h3>
      <p>Reliable, secure and optimized data storage solutions.</p>
      </div>
      <div className="service-card ut-19">
      <h3>API Integration</h3>
      <p>Connect systems, automate workflows and improve productivity.</p>
      </div>
      <div className="service-card ut-19">
      <h3>QA & Testing</h3>
      <p>Comprehensive testing to ensure quality and reliability.</p>
      </div>
      <div className="service-card ut-19">
      <h3>Cloud Deployment</h3>
      <p>Deploy and scale applications securely on cloud platforms.</p>
      </div>
      <div className="service-card ut-19">
      <h3>Website Maintenance</h3>
      <p>Continuous monitoring, updates and technical support.</p>
      </div>
      </div>
      </div>
      </section>
      <section className="positioning">
      <div className="wrap">
      <h2>
                  Technology Should Solve Problems,
                  <span className="grad-yellow">Not Create Them.</span>
      </h2>
      <p>
                  We design and develop technology solutions that improve efficiency,
                  eliminate bottlenecks, automate processes and support long-term
                  business growth.
              </p>
      </div>
      </section>

      <footer className="site-footer">
      <div className="footer-container">
      <div className="footer-grid">

      <div className="footer-brand-col">
      <Link to="/" className="footer-logo">
      <span className="dot"></span>
      <span>
                              Web Content Services & Business Solutions
                          </span>
      </Link>
      <p className="footer-tagline ut-19">

                          Where Smart Solutions Build Trusted Brands.

                      </p>

      <div className="social-row">

      <a href="https://www.linkedin.com/company/web-content-services/" className="social-btn" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM.5 8.98H9V23H.5zM12.5 8.98h8.14v1.91h.11c1.13-2.14 3.9-2.14 5.75 0V23h-4.5v-6.9c0-1.66-.03-3.8-2.32-3.8-2.32 0-2.68 1.81-2.68 3.68V23h-4.5z"></path>
      </svg>
      </a>

      <a href="https://www.instagram.com/webcontent.in/" className="social-btn" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="3" width="18" height="18" rx="5"></rect>
      <circle cx="12" cy="12" r="4.2"></circle>
      <circle cx="17.3" cy="6.7" r="1"></circle>
      </svg>
      </a>

      <a href="https://x.com/webcontent_biz?s=11" className="social-btn" aria-label="X / Twitter">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 2H22l-7.6 8.7L23.3 22H16.9l-5-6.6L6 22H2.9l8.1-9.3L1.7 2h6.6l4.5 6z"></path>
      </svg>
      </a>

      <a href="https://www.facebook.com/share/1CNiLj4fPb/?mibextid=wwXIfr" className="social-btn" aria-label="Facebook">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 22v-8.4h2.8l.4-3.3h-3.2V8.1c0-1 .3-1.6 1.7-1.6h1.7V3.5C16.3 3.4 15.2 3.3 14 3.3c-2.6 0-4.4 1.6-4.4 4.5v2.5H6.8v3.3h2.8V22z"></path>
      </svg>
      </a>
      </div>
      </div>

      <div className="footer-col">
      <h5>
                          Solutions
                      </h5>
      <ul>
      <li>
      <Link to="/consulting" className="footer-link">
                                  Business Consulting & Analysis
                              </Link>
      </li>
      <li>
      <Link to="/technology" className="footer-link">
                                  Technology
                              </Link>
      </li>
      <li>
      <Link to="/branding" className="footer-link">
                                  Branding & Social Media
                              </Link>
      </li>
      <li>
      <Link to="/learning" className="footer-link">
                                  Learning & Career
                              </Link>
      </li>
      </ul>
      </div>

      <div className="footer-col">
      <h5>
                          Company
                      </h5>
      <ul>
      <li>
      <Link to="/about" className="footer-link">
                                  About
                              </Link>
      </li>
      <li>
      <Link to="/insights" className="footer-link">
                                  Our Work
                              </Link>
      </li>
      <li>
      <Link to="/careers" className="footer-link">
                                  Careers
                              </Link>
      </li>
      <li>
      <Link to="/contact" className="footer-link">
                                  Contact
                              </Link>
      </li>
      </ul>
      </div>

      <div className="footer-col contact-col">
      <h5>
                          Contact
                      </h5>
      <ul>
      <li>
                              +91 9022545488
                          </li>
      <li>
                              contentweb.officials@gmail.com
                          </li>
      </ul>
      </div>
      </div>

      <div className="footer-bottom">
      <p className="footer-bottom-tag">

                      Consult. Analyze. Build. Brand. Grow.

                  </p>
      <p className="footer-copy">

                      ©
                      <span id="year"></span>
                      Web Content Services & Business Solutions.
                      All Rights Reserved.

                  </p>
      </div>
      </div>
      </footer>


    </>
  );
}
