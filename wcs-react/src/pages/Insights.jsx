import { useEffect } from "react";
import { Link } from "react-router-dom";
import usePageEffects from "../hooks/usePageEffects";

export default function Insights() {
  useEffect(() => {
    document.title = "Our Work — Web Content Services & Digital Solutions";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "");
    document.body.className = "theme-dark page-insights";
  }, []);

  usePageEffects("Insights");

  return (
    <>

      <nav>
      <div className="wrap">
      <Link to="/" className="logo">WCS<span> / Digital Solutions</span></Link>
      <div className="nav-links">
      <Link to="/about">About</Link>
      <Link to="/solutions">Services</Link>
      <Link to="/insights" className="active">Work</Link>
      <Link to="/contact">Contact</Link>
      </div>
      <a href="#" className="nav-cta">Book a call</a>
      </div>
      </nav>

      <section className="hero">
      <div className="hero-bg">
      <div className="grid-overlay"></div>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      </div>
      <div className="wrap hero-inner">
      <div className="eyebrow reveal ut-20">
      <span className="dot"></span>
            Our Work
          </div>
      <h1 className="reveal ut-21">
            Ideas Into Execution. <span className="grad-text">Execution Into Results.</span>
      </h1>
      </div>
      </section>

      <section className="filter-section">
      <div className="wrap">
      <div className="filter-bar" id="filterBar">
      <button className="filter-tab active" data-filter="all">All</button>
      <button className="filter-tab" data-filter="business">Business</button>
      <button className="filter-tab" data-filter="websites">Websites</button>
      <button className="filter-tab" data-filter="applications">Applications</button>
      <button className="filter-tab" data-filter="branding">Branding</button>
      <button className="filter-tab" data-filter="social-media">Social Media</button>
      <button className="filter-tab" data-filter="creative">Creative</button>
      </div>
      </div>
      </section>

      <section className="work-section">
      <div className="wrap">
      <div className="work-grid" id="workGrid">
      <article className="work-card reveal-scroll" data-cat="business" data-project="nexora">
      <div className="work-media">
      <div className="work-media-bg ut-24"></div>
      <span className="work-mono">N</span>
      <div className="work-overlay">
      <div className="work-tags"><span className="work-tag">Business Analysis</span><span className="work-tag">Process Design</span></div>
      <a href="#" className="overlay-cta" data-project="nexora">
                    View Case Study
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </a>
      </div>
      </div>
      <div className="work-body">
      <div className="work-industry">Management Consulting</div>
      <h3 className="work-name">Nexora Consulting</h3>
      <p className="work-desc">Restructured operating workflows and reporting for a fast-growing consulting firm losing time to manual handoffs.</p>
      <div className="work-services">
      <span className="service-chip">Business Analysis</span>
      <span className="service-chip">Process Design</span>
      </div>
      <a href="#" className="case-link" data-project="nexora">
                  View Case Study
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </a>
      </div>
      </article>
      <article className="work-card reveal-scroll" data-cat="websites" data-project="lumen">
      <div className="work-media">
      <div className="work-media-bg ut-25"></div>
      <span className="work-mono">L</span>
      <div className="work-overlay">
      <div className="work-tags"><span className="work-tag">Web Design</span><span className="work-tag">Development</span></div>
      <a href="#" className="overlay-cta" data-project="lumen">
                    View Case Study
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </a>
      </div>
      </div>
      <div className="work-body">
      <div className="work-industry">SaaS / Productivity</div>
      <h3 className="work-name">Lumen Web Studio</h3>
      <p className="work-desc">A full site rebuild for a SaaS platform, focused on faster load times and a clearer conversion path.</p>
      <div className="work-services">
      <span className="service-chip">Web Design</span>
      <span className="service-chip">Development</span>
      </div>
      <a href="#" className="case-link" data-project="lumen">
                  View Case Study
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </a>
      </div>
      </article>
      <article className="work-card reveal-scroll" data-cat="applications" data-project="orbit">
      <div className="work-media">
      <div className="work-media-bg ut-26"></div>
      <span className="work-mono">O</span>
      <div className="work-overlay">
      <div className="work-tags"><span className="work-tag">Product Design</span><span className="work-tag">App Development</span></div>
      <a href="#" className="overlay-cta" data-project="orbit">
                    View Case Study
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </a>
      </div>
      </div>
      <div className="work-body">
      <div className="work-industry">Logistics & Field Ops</div>
      <h3 className="work-name">Orbit FieldOps</h3>
      <p className="work-desc">A mobile app that gave field technicians live job data, cutting dispatch calls and paperwork.</p>
      <div className="work-services">
      <span className="service-chip">Product Design</span>
      <span className="service-chip">App Development</span>
      </div>
      <a href="#" className="case-link" data-project="orbit">
                  View Case Study
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </a>
      </div>
      </article>
      <article className="work-card reveal-scroll" data-cat="branding" data-project="verto">
      <div className="work-media">
      <div className="work-media-bg ut-27"></div>
      <span className="work-mono">V</span>
      <div className="work-overlay">
      <div className="work-tags"><span className="work-tag">Brand Identity</span><span className="work-tag">Packaging</span></div>
      <a href="#" className="overlay-cta" data-project="verto">
                    View Case Study
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </a>
      </div>
      </div>
      <div className="work-body">
      <div className="work-industry">D2C Beauty</div>
      <h3 className="work-name">Verto Skincare</h3>
      <p className="work-desc">A full identity system and packaging refresh that repositioned a skincare line as a premium label.</p>
      <div className="work-services">
      <span className="service-chip">Brand Identity</span>
      <span className="service-chip">Packaging</span>
      </div>
      <a href="#" className="case-link" data-project="verto">
                  View Case Study
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </a>
      </div>
      </article>
      <article className="work-card reveal-scroll" data-cat="social-media" data-project="pulse">
      <div className="work-media">
      <div className="work-media-bg ut-28"></div>
      <span className="work-mono">P</span>
      <div className="work-overlay">
      <div className="work-tags"><span className="work-tag">Social Strategy</span><span className="work-tag">Content</span></div>
      <a href="#" className="overlay-cta" data-project="pulse">
                    View Case Study
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </a>
      </div>
      </div>
      <div className="work-body">
      <div className="work-industry">Fitness & Wellness</div>
      <h3 className="work-name">Pulse Social</h3>
      <p className="work-desc">A content system and posting cadence that turned a boutique studio's page into its top lead source.</p>
      <div className="work-services">
      <span className="service-chip">Social Strategy</span>
      <span className="service-chip">Content</span>
      </div>
      <a href="#" className="case-link" data-project="pulse">
                  View Case Study
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </a>
      </div>
      </article>
      <article className="work-card reveal-scroll" data-cat="creative" data-project="aether">
      <div className="work-media">
      <div className="work-media-bg ut-29"></div>
      <span className="work-mono">A</span>
      <div className="work-overlay">
      <div className="work-tags"><span className="work-tag">Art Direction</span><span className="work-tag">Motion Design</span></div>
      <a href="#" className="overlay-cta" data-project="aether">
                    View Case Study
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </a>
      </div>
      </div>
      <div className="work-body">
      <div className="work-industry">Media Production</div>
      <h3 className="work-name">Aether Motion</h3>
      <p className="work-desc">A visual identity and motion toolkit used across a production studio's trailers, reels and socials.</p>
      <div className="work-services">
      <span className="service-chip">Art Direction</span>
      <span className="service-chip">Motion Design</span>
      </div>
      <a href="#" className="case-link" data-project="aether">
                  View Case Study
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </a>
      </div>
      </article>
      <article className="work-card reveal-scroll" data-cat="business" data-project="northbridge">
      <div className="work-media">
      <div className="work-media-bg ut-30"></div>
      <span className="work-mono">N</span>
      <div className="work-overlay">
      <div className="work-tags"><span className="work-tag">Strategy Consulting</span></div>
      <a href="#" className="overlay-cta" data-project="northbridge">
                    View Case Study
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </a>
      </div>
      </div>
      <div className="work-body">
      <div className="work-industry">Financial Services</div>
      <h3 className="work-name">Northbridge Capital</h3>
      <p className="work-desc">A go-to-market strategy and internal restructure that helped a boutique advisory scale past its founder.</p>
      <div className="work-services">
      <span className="service-chip">Strategy Consulting</span>
      </div>
      <a href="#" className="case-link" data-project="northbridge">
                  View Case Study
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </a>
      </div>
      </article>
      <article className="work-card reveal-scroll" data-cat="websites" data-project="kairos">
      <div className="work-media">
      <div className="work-media-bg ut-31"></div>
      <span className="work-mono">K</span>
      <div className="work-overlay">
      <div className="work-tags"><span className="work-tag">Website</span><span className="work-tag">CMS</span></div>
      <a href="#" className="overlay-cta" data-project="kairos">
                    View Case Study
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </a>
      </div>
      </div>
      <div className="work-body">
      <div className="work-industry">EdTech</div>
      <h3 className="work-name">Kairos Learning</h3>
      <p className="work-desc">A course-marketing site and CMS built so a coaching institute could publish new cohorts without a developer.</p>
      <div className="work-services">
      <span className="service-chip">Website</span>
      <span className="service-chip">CMS</span>
      </div>
      <a href="#" className="case-link" data-project="kairos">
                  View Case Study
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </a>
      </div>
      </article>
      <article className="work-card reveal-scroll" data-cat="applications" data-project="vantage">
      <div className="work-media">
      <div className="work-media-bg ut-32"></div>
      <span className="work-mono">V</span>
      <div className="work-overlay">
      <div className="work-tags"><span className="work-tag">App Development</span><span className="work-tag">UX</span></div>
      <a href="#" className="overlay-cta" data-project="vantage">
                    View Case Study
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </a>
      </div>
      </div>
      <div className="work-body">
      <div className="work-industry">Retail</div>
      <h3 className="work-name">Vantage Retail</h3>
      <p className="work-desc">A store-associate app that replaced paper stock checks with real-time inventory lookups.</p>
      <div className="work-services">
      <span className="service-chip">App Development</span>
      <span className="service-chip">UX</span>
      </div>
      <a href="#" className="case-link" data-project="vantage">
                  View Case Study
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </a>
      </div>
      </article>
      </div>
      </div>
      </section>

      <div className="modal-overlay" id="modalOverlay">
      <div className="modal-panel">
      <button className="modal-close" id="modalClose" aria-label="Close">×</button>
      <span className="modal-cat" id="modalCat"></span>
      <h3 id="modalTitle"></h3>
      <p className="modal-meta" id="modalMeta"></p>
      <div className="modal-block">
      <h5>Problem</h5>
      <p id="modalProblem"></p>
      </div>
      <div className="modal-block">
      <h5>Solution</h5>
      <p id="modalSolution"></p>
      </div>
      <div className="modal-block outcome-block">
      <h5>Outcome</h5>
      <p id="modalOutcome"></p>
      <div className="outcome-stats" id="modalStats"></div>
      </div>
      </div>
      </div>

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
      <li><Link to="/#about" className="footer-link">About</Link></li>
      <li><Link to="/insights" className="footer-link">Our Work</Link></li>
      <li><a href="#" className="footer-link">Insights</a></li>
      <li><a href="#" className="footer-link">Careers</a></li>
      <li><a href="#" className="footer-link">Contact</a></li>
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
