import { useEffect } from "react";
import { Link } from "react-router-dom";
import usePageEffects from "../hooks/usePageEffects";

export default function Careers() {
  useEffect(() => {
    document.title = "Careers — Web Content Services & Business Solutions";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "");
    document.body.className = "theme-warm page-careers";
  }, []);

  usePageEffects("Careers");

  return (
    <>

      <header id="siteHeader">
      <div className="wrap nav-inner">
      <Link to="/" className="logo">
      <img src="/assets/images/Web%20content%20logo.png" alt="Web Content Services Logo" />
      <span>
              Web Content
              <small></small>
      </span>
      </Link>
      <div className="nav-right">
      <nav className="nav-links" id="navLinks">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/careers" className="active">Careers</Link>
      <Link to="/contact">Contact</Link>
      </nav>
      <div className="ut-33">
      <Link to="/apply" className="nav-cta">Apply Now</Link>
      <button className="nav-toggle" id="navToggle" aria-label="Toggle menu"><span></span><span></span><span></span></button>
      </div>
      </div>
      </div>
      </header>
      <main id="top">

      <section className="hero">
      <div className="hero-bg">
      <div className="grid-overlay"></div>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      </div>
      <div className="hero-inner">
      <div className="eyebrow reveal">Careers at WCS</div>
      <h1 className="reveal">Build <span className="ut-34">With Us</span> <span className="ut-35">!</span></h1>
      <p className="lead reveal">We are building a team of thinkers, creators, developers, analysts and problem-solvers who are passionate about creating meaningful digital solutions and driving business transformation.</p>
      <div className="hero-actions reveal">
      <a href="#opportunities" className="btn-primary"><span className="shine"></span>View Opportunities</a>
      <Link to="/apply" className="btn-ghost">Join Our Team</Link>
      </div>
      <div className="stat-strip reveal">
      <div className="stat"><div className="num grad-text">12</div><div className="lbl">Open Roles</div></div>
      <div className="stat"><div className="num grad-text">4</div><div className="lbl">Core Domains</div></div>
      <div className="stat"><div className="num grad-text">100%</div><div className="lbl">Remote-Friendly</div></div>
      </div>
      </div>
      </section>

      <section id="opportunities">
      <div className="wrap">
      <div className="section-head reveal">
      <div className="eyebrow ut-37">Open positions</div>
      <h2>Find where you <span className="ut-35">fit in.</span></h2>
      <p>Across consulting, technology, branding, and operations — every role plays a part in how we help businesses grow.</p>
      </div>
      <div className="filter-row reveal">
      <button className="filter-btn active" data-filter="all">All Roles</button>
      <button className="filter-btn" data-filter="consulting">Consulting & Strategy</button>
      <button className="filter-btn" data-filter="technology">Technology</button>
      <button className="filter-btn" data-filter="creative">Branding & Creative</button>
      <button className="filter-btn" data-filter="operations">Operations & Growth</button>
      </div>
      <div className="job-grid" id="jobGrid"></div>
      </div>
      </section>

      <section>
      <div className="wrap">
      <div className="apply-cta reveal">
      <div className="glow"></div>
      <div className="eyebrow ut-50">Ready when you are</div>
      <h2>Ready to Create Something <span className="ut-35">Impactful?</span></h2>
      <p>Join our team and become part of a growing organization where creativity, technology, and innovation come together.</p>
      <Link to="/apply" className="btn-primary"><span className="shine"></span>Apply Now</Link>
      </div>
      </div>
      </section>
      </main>

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
