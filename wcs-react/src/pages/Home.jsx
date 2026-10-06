import { useEffect } from "react";
import { Link } from "react-router-dom";
import usePageEffects from "../hooks/usePageEffects";

export default function Home() {
  useEffect(() => {
    document.title = "Web Content Services & Business Solutions | Business Consulting, Technology & Branding";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Where Smart Solutions Build Trusted Brands. Business Consulting & Analysis, Technology Solutions, Branding & Social Media, Learning & Career Development.");
    document.body.className = "antialiased theme-index";
  }, []);

  usePageEffects("Home");

  return (
    <>


      <nav>
      <div className="wrap navbar">
      <div className="logo-area">
      <img src="/assets/images/Web%20content%20logo.png" alt="Logo" />
      <h2>Web Content</h2>
      </div>
      <div className="nav-right">
      <div className="nav-links">
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
      <Link to="/careers">Career</Link>
      <Link to="/media-gallery">Media Gallery</Link>
      </div>
      <Link to="/contact" className="nav-talk">
                      Let's Talk
                  </Link>
      </div>
      </div>
      </nav>
      <a href="#contact" className="hidden lg:inline-block btn-primary rounded-full px-6 py-2.5 text-sm">Let's Talk</a>
      <button id="menuBtn" className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-[var(--line)]">
      <svg id="menuIcon" width="18" height="14" viewBox="0 0 18 14" fill="none"><path d="M0 1h18M0 7h18M0 13h18" stroke="#111827" strokeWidth="1.5"></path></svg>
      </button>


      <div id="mobileMenu" className="lg:hidden hidden glass mx-4 rounded-2xl mb-3 px-6 py-6 flex flex-col gap-4 text-sm">
      <Link to="/" className="mobile-link">Home</Link>
      <Link to="/about" className="mobile-link">About</Link>
      <Link to="/solutions" className="mobile-link">Solutions</Link>
      <Link to="/contact" className="mobile-link">Contact</Link>
      <Link to="/contact" className="btn-primary rounded-full px-6 py-2.5 text-center mt-1">Let's Talk</Link>
      </div>


      <section id="home" className="relative min-h-screen flex flex-col justify-center pt-28 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 w-full">
      <div className="flex items-center gap-3 mb-8 reveal in">
      <span className="w-8 h-px bg-[var(--purple)]"></span>
      <span className="uppercase tracking-[0.25em] text-xs text-[var(--muted)]">Business Consulting · Technology · Branding · Career</span>
      </div>
      <h1 className="font-display font-bold leading-[1.03] text-[13vw] sm:text-[9vw] lg:text-[4.4vw] max-w-6xl reveal in text-center ut-1">
        Most agencies start with a service,<br />
      <span className="text-[#E33A2A] text-[1.2em]">We start with your problem !</span>
      <span className="text-[#E33A2A] text-[1.2em]"></span>
      </h1>
      <p className="mt-8 max-w-2xl mx-auto text-center text-[var(--muted)] text-lg leading-relaxed reveal in ut-2">
        We identify what's broken, build the right solutions, and help businesses grow through tailored technology and branding.
      </p>
      </div>

      <div className="marquee-wrap mt-20 border-y border-[var(--line)] py-5 relative z-10">
      <div className="marquee-track font-display text-2xl sm:text-4xl font-semibold text-[var(--muted)]/80 gap-10 pl-10">
      <span className="flex items-center gap-10">
      <span>Understand</span><span className="grad-text">→</span>
      <span>Analyze</span><span className="grad-text">→</span>
      <span>Strategize</span><span className="grad-text">→</span>
      <span>Build</span><span className="grad-text">→</span>
      <span>Brand</span><span className="grad-text">→</span>
      <span>Measure</span><span className="grad-text">→</span>
      <span className="text-[#111827]">Grow</span><span className="grad-text">/</span>
      </span>
      <span className="flex items-center gap-10">
      <span>Understand</span><span className="grad-text">→</span>
      <span>Analyze</span><span className="grad-text">→</span>
      <span>Strategize</span><span className="grad-text">→</span>
      <span>Build</span><span className="grad-text">→</span>
      <span>Brand</span><span className="grad-text">→</span>
      <span>Measure</span><span className="grad-text">→</span>
      <span className="text-[#111827]">Grow</span><span className="grad-text">/</span>
      </span>
      </div>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-4 reveal in ut-3">
      <Link to="/contact" className="btn-primary rounded-full px-8 py-4 text-sm">
          Let's Talk About Your Business
        </Link>
      <Link to="/solutions" className="btn-ghost rounded-full px-8 py-4 text-sm">
          Explore Our Solutions
        </Link>
      </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-28">
      <div className="grid lg:grid-cols-2 gap-14 items-start">
      <div className="reveal-l">
      <span className="uppercase tracking-[0.25em] text-xs text-[var(--muted)]">The Starting Point</span>
      <h2 className="font-display font-bold text-4xl sm:text-5xl mt-4 leading-tight">
              Every business has a bottleneck,<br /> <span className="text-[#F59E0B] text-[1.2em]"> Most just don't know where it is yet !</span><span className="text-[#E33A2A] text-[1.2em]"></span>
      </h2>
      <p className="mt-6 text-[var(--muted)] leading-relaxed max-w-md text-center">
              Inefficient processes. Weak systems. Technology gaps. Brand confusion. Talent you haven't structured right. We find it before we fix it.
            </p>
      </div>
      <div className="w-full text-center">

      <span className="block uppercase tracking-[0.25em] text-xs text-[var(--muted)] mb-6">
          Common business challenges we solve
        </span>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">

      <div className="flex flex-col gap-3">
      <span className="chip rounded-full px-5 py-2.5 text-sm text-[var(--muted)] text-center">Inefficient processes</span>
      <span className="chip rounded-full px-5 py-2.5 text-sm text-[var(--muted)] text-center">Weak business systems</span>
      <span className="chip rounded-full px-5 py-2.5 text-sm text-[var(--muted)] text-center">Digital transformation requirements</span>
      <span className="chip rounded-full px-5 py-2.5 text-sm text-[var(--muted)] text-center">Poor brand positioning</span>
      </div>

      <div className="flex flex-col gap-3">
      <span className="chip rounded-full px-5 py-2.5 text-sm text-[var(--muted)] text-center">Technology gaps</span>
      <span className="chip rounded-full px-5 py-2.5 text-sm text-[var(--muted)] text-center">Team structuring</span>
      <span className="chip rounded-full px-5 py-2.5 text-sm text-[var(--muted)] text-center">Marketing challenges</span>
      <span className="chip rounded-full px-5 py-2.5 text-sm text-[var(--muted)] text-center">Skill & talent requirements</span>
      </div>
      </div>
      </div>
      </div></section>

      <div className="max-w-6xl mx-auto text-center">

      <div className="mb-10">
      <span className="uppercase tracking-[0.25em] text-xs text-[var(--muted)]">
            About Us
          </span>
      <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
          We're not just a service provider,<br />
      <span className="text-[#F59E0B] text-[1.2em]">
              we're a strategic partner that asks, why? 
              <span className="whitespace-nowrap">before we build !</span>
      </span>
      <span className="text-[#E33A2A] text-[1.2em]"></span>
      </h2>
      <p className="text-[var(--muted)] max-w-3xl mx-auto leading-relaxed">
            We help businesses grow through consulting, technology, digital
            marketing, and creative solutions. Our approach combines strategy,
            innovation, and execution to deliver measurable results.
          </p>
      </div>
      <Link to="/about" className="magnetic inline-flex items-center gap-2 mt-8 text-sm font-medium border-b border-[#111827]/30 pb-1 hover:border-[var(--purple)] hover:text-[var(--purple)] transition-colors">
                Read More
                <svg width="14" height="10" viewBox="0 0 16 10" fill="none"><path d="M1 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5"></path></svg>
      </Link>

      <div className="img-wrap tilt mt-10 h-64 sm:h-80 max-w-4xl mx-auto">
      <img className="img-parallax w-full h-full object-cover rounded-3xl" data-speed="0.08" src="/assets/images/about.jpg" alt="WCS team at work" />
      </div>

      <div className="grid md:grid-cols-2 gap-5 mt-12">
      <div className="glass rounded-2xl p-7 card-hover text-left">
      <div className="w-10 h-10 rounded-full mb-5 grid place-items-center ut-4">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#FFFFFF" strokeWidth="1.6"></circle><circle cx="12" cy="12" r="3.5" fill="#FFFFFF"></circle></svg>
      </div>
      <h3 className="font-display font-semibold text-lg mb-2">Our Mission</h3>
      <p className="text-sm text-[var(--muted)] leading-relaxed">
       To bridge business goals and innovation through strategic consulting, intelligent analysis, and technology-driven solutions that create sustainable growth and lasting value.      </p>
      </div>
      <div className="glass rounded-2xl p-7 card-hover text-left">
      <div className="w-10 h-10 rounded-full mb-5 grid place-items-center ut-4">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3z" stroke="#FFFFFF" strokeWidth="1.6" fill="#FFFFFF"></path></svg>
      </div>
      <h3 className="font-display font-semibold text-lg mb-2">Our Vision</h3>
      <p className="text-sm text-[var(--muted)] leading-relaxed">
       To become a trusted growth and transformation partner, empowering businesses to innovate, adapt, and succeed in a rapidly evolving world.    </p></div>

      <div className="glass rounded-2xl p-7 card-hover md:col-span-2 text-center">
      <div className="w-10 h-10 rounded-full mb-5 mx-auto grid place-items-center ut-4">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 2v20M4 8h16M4 16h16" stroke="#FFFFFF" strokeWidth="1.6"></path>
      </svg>
      </div>
      <h3 className="font-display font-semibold text-lg mb-2">Our Philosophy</h3>
      <p className="text-sm text-[var(--muted)] leading-relaxed text-justify">
          Understand before you execute. Every business is different, every problem needs context. We don't believe in one-size-fits-all solutions. We take time to understand your business, challenges, and aspirations before creating strategies that are practical, innovative, and results-driven. Context drives clarity, and clarity leads to successful execution.
        </p>
      </div>
      </div>
      </div>

      <section className="py-28 border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="mb-16 reveal">
      <span className="uppercase tracking-[0.25em] text-xs text-[var(--muted)]">Our Approach</span>
      <h2 className="font-display font-bold text-4xl sm:text-5xl mt-4 leading-tight">We Don't Just Execute, <span className="text-[#F59E0B] text-[1.2em]">We Understand First !</span> <span className="text-[#E33A2A] text-[1.2em]"></span></h2>
      </div>
      <div className="relative">
      <div className="hidden lg:block absolute top-[65px] left-0 right-0 pipe-line"></div>
      <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-4 lg:gap-3 stagger">

      <div className="reveal step-card ut-5"><div className="w-3 h-3 rounded-full mx-auto mb-4 ut-6"></div><p className="text-center text-xs uppercase tracking-wider text-[var(--muted)]">Discover</p></div>
      <div className="reveal step-card ut-7"><div className="w-3 h-3 rounded-full mx-auto mb-4 ut-6"></div><p className="text-center text-xs uppercase tracking-wider text-[var(--muted)]">Consult</p></div>
      <div className="reveal step-card ut-8"><div className="w-3 h-3 rounded-full mx-auto mb-4 ut-9"></div><p className="text-center text-xs uppercase tracking-wider text-[var(--muted)]">Analyze</p></div>
      <div className="reveal step-card ut-10"><div className="w-3 h-3 rounded-full mx-auto mb-4 ut-9"></div><p className="text-center text-xs uppercase tracking-wider text-[var(--muted)]">Strategize</p></div>
      <div className="reveal step-card ut-11"><div className="w-3 h-3 rounded-full mx-auto mb-4 ut-9"></div><p className="text-center text-xs uppercase tracking-wider text-[var(--muted)]">Structure</p></div>
      <div className="reveal step-card ut-12"><div className="w-3 h-3 rounded-full mx-auto mb-4 ut-13"></div><p className="text-center text-xs uppercase tracking-wider text-[var(--muted)]">Build</p></div>
      <div className="reveal step-card ut-14"><div className="w-3 h-3 rounded-full mx-auto mb-4 ut-13"></div><p className="text-center text-xs uppercase tracking-wider text-[var(--muted)]">Brand</p></div>
      <div className="reveal step-card ut-15"><div className="w-3 h-3 rounded-full mx-auto mb-4 ut-13"></div><p className="text-center text-xs uppercase tracking-wider text-[var(--muted)]">Measure</p></div>
      <div className="reveal step-card ut-5"><div className="w-3 h-3 rounded-full mx-auto mb-4 ut-13"></div><p className="text-center text-xs uppercase tracking-wider text-[var(--muted)]">Optimize</p></div>
      <div className="reveal step-card ut-16"><div className="w-3 h-3 rounded-full mx-auto mb-4 float-y ut-17"></div><p className="text-center text-xs uppercase tracking-wider text-[#111827] font-semibold">Grow</p></div>
      </div>
      </div>
      </div>
      </section>


      <section className="py-28 border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
      <div className="reveal-l">
      <span className="uppercase tracking-[0.25em] text-xs text-[var(--muted)]">Why Choose Us</span>
      <h2 className="font-display font-bold text-4xl sm:text-5xl mt-4 leading-tight">One Partner, <span className="text-[#F59E0B] text-[1.2em]">Four Disciplines, Zero Guesswork !</span> <span className="text-[#E33A2A] text-[1.2em]"></span></h2>
      <p className="mt-6 text-[var(--muted)] leading-relaxed max-w-md text-center">We start with your business needs, then choose right mix of technology, branding, or consulting to solve them.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-5 stagger">
      <div className="reveal glass rounded-2xl p-6 card-hover ut-5">
      <h4 className="font-display font-semibold mb-2">Consulting-First</h4>
      <p className="text-sm text-[var(--muted)]">We diagnose before we prescribe — every engagement opens with analysis, not assumptions.</p>
      </div>
      <div className="reveal glass rounded-2xl p-6 card-hover ut-7">
      <h4 className="font-display font-semibold mb-2">Integrated Delivery</h4>
      <p className="text-sm text-[var(--muted)]">Strategy, tech and brand teams work as one pipeline, not four separate vendors.</p>
      </div>
      <div className="reveal glass rounded-2xl p-6 card-hover ut-8">
      <h4 className="font-display font-semibold mb-2">Built to Measure</h4>
      <p className="text-sm text-[var(--muted)]">Every solution ships with a way to track whether it actually moved the business forward.</p>
      </div>
      <div className="reveal glass rounded-2xl p-6 card-hover ut-10">
      <h4 className="font-display font-semibold mb-2">People-Powered</h4>
      <p className="text-sm text-[var(--muted)]">Our career track means fresh, mentored talent is always feeding into your project.</p>
      </div>
      </div>
      </div>
      </section>


      <section id="contact" className="py-28 border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="grid lg:grid-cols-12 gap-14">
      <div className="lg:col-span-5 reveal-l">
      <span className="uppercase tracking-[0.25em] text-xs text-[var(--muted)]">Contact</span>
      <h2 className="font-display font-bold text-4xl sm:text-5xl mt-4 leading-tight">Let's Talk About <span className="text-[#F59E0B] text-[1.2em]">Your Business !</span> <span className="text-[#E33A2A] text-[1.2em]"></span></h2>
      <p className="mt-6 text-[var(--muted)] leading-relaxed max-w-sm text-center">
        Not "start a project." Not "get a quote." A conversation — because that's step one of how you actually work.
      </p>
      <div className="mt-10 space-y-5">
      <div className="flex items-center gap-4">
      <div className="w-11 h-11 rounded-full grid place-items-center ut-4">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2.1z" stroke="#FFFFFF" strokeWidth="1.6"></path></svg>
      </div>
      <div><p className="text-xs text-[var(--muted-2)] uppercase tracking-wider">Phone</p><p className="text-sm">+91 9022545488</p></div>
      </div>
      <div className="flex items-center gap-4">
      <div className="w-11 h-11 rounded-full grid place-items-center ut-4">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="#FFFFFF" strokeWidth="1.6"></rect><path d="m2 6 10 7L22 6" stroke="#FFFFFF" strokeWidth="1.6"></path></svg>
      </div>
      <div><p className="text-xs text-[var(--muted-2)] uppercase tracking-wider">Email</p><p className="text-sm">contentweb.officials@gmail.com</p></div>
      </div>
      </div>
      </div>
      <form id="contactForm" className="lg:col-span-7 glass rounded-3xl p-8 sm:p-10 reveal-r">
      <div className="grid sm:grid-cols-2 gap-5">
      <input required type="text" id="fullName" placeholder="Full Name" className="rounded-xl px-4 py-3.5 text-sm w-full" />
      <input required type="text" id="companyName" placeholder="Company Name" className="rounded-xl px-4 py-3.5 text-sm w-full" />
      <input required type="tel" id="phoneNumber" placeholder="Phone Number" className="rounded-xl px-4 py-3.5 text-sm w-full" />
      <input required type="email" id="email" placeholder="Email Address" className="rounded-xl px-4 py-3.5 text-sm w-full" />
      <input type="text" id="industryName" placeholder="Industry" className="rounded-xl px-4 py-3.5 text-sm w-full" />
      <select required id="serviceRequired" className="rounded-xl px-4 py-3.5 text-sm w-full">
      <option value="" className="bg-[#FFFFFF]">Service / Solution Required</option>
      <option className="bg-[#FFFFFF]">Business Consulting</option>
      <option className="bg-[#FFFFFF]">Business Analysis</option>
      <option className="bg-[#FFFFFF]">Technology</option>
      <option className="bg-[#FFFFFF]">Branding & Social Media</option>
      <option className="bg-[#FFFFFF]">Learning & Career</option>
      <option className="bg-[#FFFFFF]">Other</option>
      </select>
      </div>
      <textarea id="businessRequirements" placeholder="Business Requirement" rows="3" className="rounded-xl px-4 py-3.5 text-sm w-full mt-5"></textarea>
      <textarea id="message" placeholder="Message" rows="3" className="rounded-xl px-4 py-3.5 text-sm w-full mt-5"></textarea>
      <button type="submit" className="btn-primary rounded-full px-8 py-4 text-sm mt-7 w-full sm:w-auto">Start a Conversation</button>
      </form>
      </div>
      </div>
      </section>

      <footer className="border-t border-[var(--line)] pt-20 pb-8 bg-[var(--bg-soft)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="grid md:grid-cols-12 gap-12 pb-16">
      <div className="md:col-span-5">
      <a href="#home" className="font-display font-bold text-xl tracking-tight flex items-center gap-2">
      <span className="w-2.5 h-2.5 rounded-full ut-4"></span>
                Web Content Services & Business Solutions
              </a>
      <p className="mt-4 text-[var(--muted)] text-sm max-w-xs">Where Smart Solutions Build Trusted Brands.</p>
      <div className="flex gap-3 mt-7">
      <a href="https://www.linkedin.com/company/web-content-services/" className="w-10 h-10 rounded-full border border-[var(--line)] grid place-items-center hover:border-[var(--purple)] hover:bg-[var(--purple)]/10 transition-all" aria-label="LinkedIn">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM.5 8.98H9V23H.5zM12.5 8.98h8.14v1.91h.11c1.13-2.14 3.9-2.14 5.75 0V23h-4.5v-6.9c0-1.66-.03-3.8-2.32-3.8-2.32 0-2.68 1.81-2.68 3.68V23h-4.5z"></path></svg>
      </a>
      <a href="https://www.instagram.com/webcontent.in?igsh=NjRzM3AxdmNsYW9j" className="w-10 h-10 rounded-full border border-[var(--line)] grid place-items-center hover:border-[var(--purple)] hover:bg-[var(--purple)]/10 transition-all" aria-label="Instagram">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4.2"></circle><circle cx="17.3" cy="6.7" r="1"></circle></svg>
      </a>
      <a href="https://x.com/webcontent_biz?s=11" className="w-10 h-10 rounded-full border border-[var(--line)] grid place-items-center hover:border-[var(--purple)] hover:bg-[var(--purple)]/10 transition-all" aria-label="X / Twitter">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22H16.9l-5-6.6L6 22H2.9l8.1-9.3L1.7 2h6.6l4.5 6z"></path></svg>
      </a>
      <a href="#" className="w-10 h-10 rounded-full border border-[var(--line)] grid place-items-center hover:border-[var(--purple)] hover:bg-[var(--purple)]/10 transition-all" aria-label="Facebook">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8.4h2.8l.4-3.3h-3.2V8.1c0-1 .3-1.6 1.7-1.6h1.7V3.5C16.3 3.4 15.2 3.3 14 3.3c-2.6 0-4.4 1.6-4.4 4.5v2.5H6.8v3.3h2.8V22z"></path></svg>
      </a>
      </div>
      </div>
      <div className="md:col-span-2">
      <h5 className="font-display font-semibold mb-5 text-sm uppercase tracking-wider text-[var(--muted-2)]">Solutions</h5>
      <ul className="space-y-3 text-sm text-[var(--muted)]">
      <li><Link to="/consulting" className="footer-link">Business Consulting & Analysis</Link></li>
      <li><Link to="/technology" className="footer-link">Technology</Link></li>
      <li><Link to="/branding" className="footer-link">Branding & Social Media</Link></li>
      <li><Link to="/learning" className="footer-link">Learning & Career</Link></li>
      </ul>
      </div>
      <div className="md:col-span-2">
      <h5 className="font-display font-semibold mb-5 text-sm uppercase tracking-wider text-[var(--muted-2)]">Company</h5>
      <ul className="space-y-3 text-sm text-[var(--muted)]">
      <li><Link to="/about" className="footer-link">About</Link></li>
      <li><a href="#careers" className="footer-link">Careers</a></li>
      <li><a href="#contact" className="footer-link">Contact</a></li>
      </ul>
      </div>
      <div className="md:col-span-3">
      <h5 className="font-display font-semibold mb-5 text-sm uppercase tracking-wider text-[var(--muted-2)]">Contact</h5>
      <ul className="space-y-3 text-sm text-[var(--muted)]">
      <li>+91 9022545488</li>
      <li>contentweb.officials@gmail.com</li>
      </ul>
      </div>
      </div>
      <div className="border-t border-[var(--line)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-display text-sm tracking-widest uppercase text-[var(--muted-2)]">Consult. Analyze. Build. Brand. Grow.</p>
      <p className="text-xs text-[var(--muted-2)]">© <span id="year"></span> Web Content Services & Business Solutions. All Rights Reserved.</p>
      </div>
      </div>
      </footer>

      <div id="toast" className="fixed bottom-6 right-6 translate-y-24 opacity-0 z-[999] glass rounded-2xl px-6 py-4 text-sm toast ut-18">
        Thanks — your message has been sent. We'll be in touch shortly.
      </div>



    </>
  );
}
