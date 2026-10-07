import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import usePageEffects from "../hooks/usePageEffects";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phoneNumber: "",
    email: "",
    industryName: "",
    serviceRequired: "",
    businessRequirements: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    document.title = "Contact — Web Content Services & Business Solutions";

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "");
    }

    document.body.className = "theme-warm page-contact";
  }, []);

  usePageEffects("Contact");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitted(false);
    setErrorMessage("");

    try {
      const response = await fetch(
        "http://localhost:8080/api/contact-inquiries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit contact inquiry");
      }

      const savedInquiry = await response.json();

      console.log("Contact inquiry saved:", savedInquiry);

      setSubmitted(true);

      setFormData({
        fullName: "",
        companyName: "",
        phoneNumber: "",
        email: "",
        industryName: "",
        serviceRequired: "",
        businessRequirements: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setErrorMessage(
        "Failed to submit your inquiry. Please make sure the backend is running."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <header id="siteHeader">
        <div className="wrap nav-inner">
          <a href="#top" className="logo">
            <img
              src="/assets/images/Web%20content%20logo.png"
              alt="Web Content Services Logo"
            />
            <span>
              Web Content
              <small></small>
            </span>
          </a>

          <div className="nav-right">
            <nav className="nav-links" id="navLinks">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>

              <div className="dropdown">
                <a href="#">Solutions ▾</a>

                <div className="dropdown-content">
                  <Link to="/consulting">Business Consulting</Link>
                  <Link to="/technology">Technology Solutions</Link>
                  <Link to="/branding">Branding & Social Media</Link>
                  <Link to="/learning">
                    Learning & Career Development
                  </Link>
                </div>
              </div>

              <Link to="/media-gallery">Media Gallery</Link>

              <div className="ut-33">
                <button
                  className="nav-toggle"
                  id="navToggle"
                  aria-label="Toggle menu"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main id="top">

        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-bg">
            <div className="grid-overlay"></div>
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>
          </div>

          <div className="hero-inner">
            <div className="eyebrow reveal">
              Business Consulting · Business Analysis · Technology · Branding
              & Social Media · Learning & Career
            </div>

            <h1 className="reveal">
              Let's Talk About
              <br />
              <span className="ut-34">Your Business</span>{" "}
              <span className="ut-35">!</span>
            </h1>

            <p className="lead reveal">
              Have a challenge, idea, or opportunity? Let's understand your
              requirements and create the right strategy, technology, and
              creative solution for your business.
            </p>

            <div className="hero-actions reveal">
              <a href="#contact-form" className="btn-primary">
                <span className="shine"></span>
                Start a Conversation
              </a>

              <a href="#contact-form" className="btn-ghost">
                Explore Our Solutions
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="ut-36">
          <div className="wrap">
            <div className="section-head reveal">
              <div className="eyebrow ut-37">What we help with</div>

              <h2 className="ut-38">
                Tell us where the{" "}
                <span className="ut-39">challenge</span> is{" "}
                <span className="ut-40"></span>
              </h2>

              <p>
                We don't fit businesses into predefined services — we
                understand the requirement first, then design a practical
                solution around it.
              </p>
            </div>

            <div className="sol-grid stagger">
              <div className="glass-card sol-card reveal">
                <div className="sol-num">01</div>
                <h4>Business Consulting & Analysis</h4>
                <p>Understand. Structure. Transform.</p>
              </div>

              <div className="glass-card sol-card reveal">
                <div className="sol-num">02</div>
                <h4>Technology Solutions</h4>
                <p>Build. Integrate. Scale.</p>
              </div>

              <div className="glass-card sol-card reveal">
                <div className="sol-num">03</div>
                <h4>Branding & Social Media</h4>
                <p>Position. Communicate. Grow.</p>
              </div>

              <div className="glass-card sol-card reveal">
                <div className="sol-num">04</div>
                <h4>Learning & Career Development</h4>
                <p>Learn. Execute. Grow.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section id="contact-form">
          <div className="wrap">

            <div className="section-head reveal">
              <div className="eyebrow ut-37">Get in touch</div>

              <h2>
                Start a conversation
                <br />
                <span className="ut-39">about your business</span>{" "}
                <span className="ut-40"></span>
              </h2>

              <p>
                Fill in a few details below — the more context you share,
                the sharper our first response will be.
              </p>
            </div>

            <div className="contact-grid">

              <form
                className="glass-card form-card reveal"
                id="contactForm"
                onSubmit={handleSubmit}
              >

                <h3>Let's Connect</h3>

                <p className="sub">
                  Every field helps us prepare before we call.
                </p>

                {/* PERSONAL INFORMATION */}
                <fieldset>
                  <legend>Personal information</legend>

                  <div className="field-row">

                    <div className="field">
                      <label htmlFor="fullName">
                        Full name
                      </label>

                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="field">
                      <label htmlFor="companyName">
                        Company name
                      </label>

                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        placeholder="Your company"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                  </div>

                  <div className="field-row">

                    <div className="field">
                      <label htmlFor="phoneNumber">
                        Phone number
                      </label>

                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="+91 90000 00000"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="field">
                      <label htmlFor="email">
                        Email address
                      </label>

                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                  </div>
                </fieldset>

                {/* BUSINESS INFORMATION */}
                <fieldset>
                  <legend>Business information</legend>

                  <div className="field-row">

                    <div className="field">
                      <label htmlFor="industryName">
                        Industry
                      </label>

                      <input
                        type="text"
                        id="industryName"
                        name="industryName"
                        placeholder="e.g. Retail, Fintech, Manufacturing"
                        value={formData.industryName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="field">
                      <label htmlFor="serviceRequired">
                        Service / solution required
                      </label>

                      <select
                        id="serviceRequired"
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        required
                      >
                        <option value="">
                          Select a service
                        </option>

                        <option>
                          Business Consulting
                        </option>

                        <option>
                          Business Analysis
                        </option>

                        <option>
                          Technology
                        </option>

                        <option>
                          Branding & Social Media
                        </option>

                        <option>
                          Learning & Career
                        </option>

                        <option>
                          Other
                        </option>
                      </select>
                    </div>

                  </div>

                  <div className="field">
                    <label htmlFor="businessRequirements">
                      Business requirement
                    </label>

                    <input
                      type="text"
                      id="businessRequirements"
                      name="businessRequirements"
                      placeholder="In one line, what are you trying to solve?"
                      value={formData.businessRequirements}
                      onChange={handleChange}
                    />
                  </div>

                </fieldset>

                {/* MESSAGE */}
                <fieldset>
                  <legend>Message</legend>

                  <div className="field">
                    <label htmlFor="message">
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      placeholder="Share any additional details, timelines, context or query."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                </fieldset>

                {/* SUBMIT */}
                <div className="submit-row">

                  <button
                    type="submit"
                    className="btn-primary submit-btn"
                    id="submitBtn"
                    disabled={isSubmitting}
                  >
                    <span className="spinner"></span>

                    <span className="btn-label">
                      {isSubmitting
                        ? "Submitting..."
                        : "Start a Conversation"}
                    </span>
                  </button>

                  <span className="form-note">
                    We reply within 1 business day.
                  </span>

                </div>

                {/* SUCCESS MESSAGE */}
                {submitted && (
                  <div
                    className="success-msg"
                    id="successMsg"
                    style={{ display: "block" }}
                  >
                    <span className="dot"></span>
                    Thanks — your message is in. Our team will be in touch
                    shortly.
                  </div>
                )}

                {/* ERROR MESSAGE */}
                {errorMessage && (
                  <div
                    className="success-msg"
                    style={{
                      display: "block",
                      marginTop: "15px",
                    }}
                  >
                    {errorMessage}
                  </div>
                )}

              </form>

              {/* RIGHT SIDE INFORMATION */}
              <div className="info-col">

                <div className="glass-card info-card reveal">
                  <div className="info-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 5h16v14H4z"></path>
                      <path d="m4 6 8 7 8-7"></path>
                    </svg>
                  </div>

                  <div className="info-text">
                    <div className="k">Email</div>
                    <div className="v">
                      contentweb.officials@gmail.com
                    </div>
                    <div className="v-sub">
                      General & new business enquiries
                    </div>
                  </div>
                </div>

                <div className="glass-card info-card reveal">
                  <div className="info-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.8 2Z"
                      ></path>
                    </svg>
                  </div>

                  <div className="info-text">
                    <div className="k">Phone</div>
                    <div className="v">
                      +91 90225 45488
                    </div>
                  </div>
                </div>

                <div className="glass-card social-card reveal">
                  <div className="k">Follow along</div>

                  <div className="social-row">

                    <a
                      href="https://www.linkedin.com/company/web-content-services/"
                      aria-label="LinkedIn"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="1.6"
                      >
                        <path d="M6.9 9h2.8v9H6.9zM8.3 4.8a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2ZM12.4 9h2.7v1.3c.5-.8 1.4-1.5 2.9-1.5 2.2 0 3.5 1.4 3.5 4.3V18h-2.8v-4.4c0-1.3-.5-2.1-1.6-2.1-1 0-1.6.7-1.9 1.3-.1.2-.1.5-.1.9V18h-2.8V9Z"></path>
                      </svg>
                    </a>

                    <a
                      href="https://www.instagram.com/webcontent.in/"
                      aria-label="Instagram"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="1.6"
                      >
                        <rect
                          x="4"
                          y="4"
                          width="16"
                          height="16"
                          rx="4.5"
                        ></rect>
                        <circle
                          cx="12"
                          cy="12"
                          r="3.4"
                        ></circle>
                        <circle
                          cx="16.6"
                          cy="7.4"
                          r="0.9"
                          fill="currentColor"
                          stroke="none"
                        ></circle>
                      </svg>
                    </a>

                    <a
                      href="https://www.facebook.com/share/1CNiLj4fPb/?mibextid=wwXIfr"
                      aria-label="Facebook"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="1.6"
                      >
                        <path d="M14 8.5h2.5V5H14c-2 0-3.5 1.6-3.5 3.6V11H8v3.2h2.5V21H14v-6.8h2.3l.4-3.2H14V8.9c0-.3.2-.4.4-.4Z"></path>
                      </svg>
                    </a>

                    <a
                      href="https://chat.whatsapp.com/KlSIOQ0xLno3jTHZzybYtt"
                      aria-label="WhatsApp"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.52 3.48A11.8 11.8 0 0 0 12.05 0C5.52 0 .2 5.32.2 11.85c0 2.09.55 4.13 1.59 5.93L0 24l6.39-1.67a11.82 11.82 0 0 0 5.66 1.44h.01c6.53 0 11.85-5.32 11.85-11.85 0-3.17-1.23-6.15-3.39-8.44zM12.06 21.7c-1.79 0-3.55-.48-5.08-1.39l-.36-.21-3.79.99 1.01-3.69-.23-.38a9.7 9.7 0 0 1-1.49-5.17c0-5.37 4.37-9.74 9.74-9.74 2.6 0 5.04 1.01 6.88 2.85a9.67 9.67 0 0 1 2.86 6.89c0 5.37-4.37 9.74-9.74 9.74zm5.34-7.29c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.76.95-.93 1.14-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.17-.24-.58-.49-.5-.66-.5h-.56c-.19 0-.51.07-.78.36-.27.29-1.02 1-.1 2.44.92 1.44 2.16 2.83 4.01 3.87 1.85 1.04 2.57 1.12 3.49.94.56-.11 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34z"></path>
                      </svg>
                    </a>

                    <a
                      href="https://x.com/webcontent_biz?s=11"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X (Twitter)"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.244 2H21.5l-7.11 8.13L22.75 22h-6.54l-5.12-6.7L5.23 22H2l7.61-8.69L1.5 2h6.7l4.63 6.12L18.244 2zm-1.15 18h1.81L7.52 3.9H5.58L17.094 20z"></path>
                      </svg>
                    </a>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
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

                <a
                  href="https://www.linkedin.com/company/web-content-services/"
                  className="social-btn"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM.5 8.98H9V23H.5zM12.5 8.98h8.14v1.91h.11c1.13-2.14 3.9-2.14 5.75 0V23h-4.5v-6.9c0-1.66-.03-3.8-2.32-3.8-2.32 0-2.68 1.81-2.68 3.68V23h-4.5z"></path>
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/webcontent.in/"
                  className="social-btn"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                    ></rect>
                    <circle cx="12" cy="12" r="4.2"></circle>
                    <circle
                      cx="17.3"
                      cy="6.7"
                      r="1"
                    ></circle>
                  </svg>
                </a>

                <a
                  href="#"
                  className="social-btn"
                  aria-label="X / Twitter"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.9 2H22l-7.6 8.7L23.3 22H16.9l-5-6.6L6 22H2.9l8.1-9.3L1.7 2h6.6l4.5 6z"></path>
                  </svg>
                </a>

                <a
                  href="#"
                  className="social-btn"
                  aria-label="Facebook"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.5 22v-8.4h2.8l.4-3.3h-3.2V8.1c0-1 .3-1.6 1.7-1.6h1.7V3.5C16.3 3.4 15.2 3.3 14 3.3c-2.6 0-4.4 1.6-4.4 4.5v2.5H6.8v3.3h2.8V22z"></path>
                  </svg>
                </a>

              </div>
            </div>

            <div className="footer-col">
              <h5>Solutions</h5>

              <ul>
                <li>
                  <Link
                    to="/consulting"
                    className="footer-link"
                  >
                    Business Consulting & Analysis
                  </Link>
                </li>

                <li>
                  <Link
                    to="/technology"
                    className="footer-link"
                  >
                    Technology
                  </Link>
                </li>

                <li>
                  <Link
                    to="/branding"
                    className="footer-link"
                  >
                    Branding & Social Media
                  </Link>
                </li>

                <li>
                  <Link
                    to="/learning"
                    className="footer-link"
                  >
                    Learning & Career
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>Company</h5>

              <ul>
                <li>
                  <Link
                    to="/about"
                    className="footer-link"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/insights"
                    className="footer-link"
                  >
                    Our Work
                  </Link>
                </li>

                <li>
                  <Link
                    to="/careers"
                    className="footer-link"
                  >
                    Careers
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="footer-link"
                  >
                    Contact
                  </Link>
                </li>
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

            <p className="footer-bottom-tag">
              Consult. Analyze. Build. Brand. Grow.
            </p>

            <p className="footer-copy">
              © <span id="year"></span> Web Content Services & Business
              Solutions. All Rights Reserved.
            </p>

          </div>
        </div>
      </footer>
    </>
  );
}