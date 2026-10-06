import { useEffect } from "react";

/**
 * Ports the original site's vanilla-JS behavior (js/common.js + js/pages/*.js)
 * into a React-friendly effect. This keeps 1:1 behavioral parity with the
 * original static site instead of rewriting every interaction as idiomatic
 * React state, which would have been a much larger rewrite of the original
 * design. Each page mounts its own nav/header markup, so the "common"
 * behavior (scroll classes, mobile menu, dropdowns, scroll-reveal) is re-run
 * on every page.
 */
export default function usePageEffects(pageName) {
  useEffect(() => {
    const cleanups = [];
    const add = (target, evt, fn, opts) => {
      target.addEventListener(evt, fn, opts);
      cleanups.push(() => target.removeEventListener(evt, fn, opts));
    };

    // ---------- common.js ----------
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    const nav = document.getElementById("nav");
    if (nav) {
      const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
      add(window, "scroll", onScroll, { passive: true });
    }

    const header = document.getElementById("siteHeader");
    if (header) {
      const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
      add(window, "scroll", onScroll, { passive: true });
    }

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    if (menuBtn && mobileMenu) {
      const onClick = () => mobileMenu.classList.toggle("hidden");
      add(menuBtn, "click", onClick);
      document.querySelectorAll(".mobile-link").forEach((l) => add(l, "click", () => mobileMenu.classList.add("hidden")));
    }

    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    if (navToggle && navLinks) {
      const onToggle = () => {
        navLinks.classList.toggle("open");
        navToggle.classList.toggle("open");
      };
      add(navToggle, "click", onToggle);
      navLinks.querySelectorAll('a:not([href="#"])').forEach((a) =>
        add(a, "click", () => {
          navLinks.classList.remove("open");
          navToggle.classList.remove("open");
        })
      );
    }

    document.querySelectorAll(".navbar .dropdown > a[href='#']").forEach((link) => {
      const onClick = (e) => {
        if (window.matchMedia("(max-width:992px)").matches) {
          e.preventDefault();
          link.parentElement.classList.toggle("open");
        }
      };
      add(link, "click", onClick);
    });

    const revealEls = document.querySelectorAll(".reveal,.reveal-l,.reveal-r,.reveal-scale");
    let revealObserver;
    if ("IntersectionObserver" in window && revealEls.length) {
      revealObserver = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              revealObserver.unobserve(e.target);
            }
          }),
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
      );
      revealEls.forEach((el) => revealObserver.observe(el));
      window.siteRevealObserver = revealObserver;
    }

    // ---------- page-specific ----------
    let pageCleanup;
    switch (pageName) {
      case "Home":
        pageCleanup = initHome(add);
        break;
      case "About":
        pageCleanup = initFadeReveal();
        break;
      case "Solutions":
        pageCleanup = initFadeReveal(0.1);
        break;
      case "Apply":
        pageCleanup = initApply(add);
        break;
      case "Careers":
        pageCleanup = initCareers(add);
        break;
      case "Contact":
        pageCleanup = initContact(add);
        break;
      case "Insights":
        pageCleanup = initInsights(add);
        break;
      default:
        break;
    }

    return () => {
      cleanups.forEach((fn) => fn());
      if (revealObserver) revealObserver.disconnect();
      if (typeof pageCleanup === "function") pageCleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageName]);
}

function initFadeReveal(stepSeconds = 0.08) {
  document.querySelectorAll(".hero .reveal").forEach((el) => requestAnimationFrame(() => el.classList.add("in")));
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = i * stepSeconds + "s";
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal-scroll").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity .8s cubic-bezier(.2,.8,.2,1), transform .8s cubic-bezier(.2,.8,.2,1)";
    obs.observe(el);
  });
  return () => obs.disconnect();
}

function initHome(add) {
  const projects = [
    { name: "Retail Growth Audit", industry: "Retail", cat: "business", services: "Business Consulting & Analysis", grad: "linear-gradient(135deg,#0A54A3,#0A6DB0)" },
    { name: "Fintech Corporate Site", industry: "Financial Services", cat: "websites", services: "Technology Solutions", grad: "linear-gradient(135deg,#0A6DB0,#20A58A)" },
    { name: "HealthOps Field App", industry: "Healthcare", cat: "applications", services: "Technology Solutions", grad: "linear-gradient(135deg,#20A58A,#0A54A3)" },
    { name: "D2C Brand Refresh", industry: "Consumer Goods", cat: "branding", services: "Branding & Social Media", grad: "linear-gradient(135deg,#F59E0B,#0A54A3)" },
    { name: "EdTech Social Campaign", industry: "Education", cat: "social", services: "Branding & Social Media", grad: "linear-gradient(135deg,#0A54A3,#E33A2A)" },
    { name: "Logistics Process Redesign", industry: "Logistics", cat: "business", services: "Business Consulting & Analysis", grad: "linear-gradient(135deg,#0A6DB0,#0A54A3)" },
  ];
  const grid = document.getElementById("portfolioGrid");
  function renderProjects(filter) {
    if (!grid) return;
    grid.innerHTML = "";
    projects
      .filter((p) => filter === "all" || p.cat === filter)
      .forEach((p, i) => {
        const card = document.createElement("div");
        card.className = "reveal glass rounded-3xl overflow-hidden card-hover";
        card.style.setProperty("--i", i);
        card.innerHTML = `
      <div class="art h-52" style="--art-grad:${p.grad}"><div class="art-lines"></div></div>
      <div class="p-7">
        <p class="text-xs uppercase tracking-widest text-[var(--cyan)] mb-2">${p.industry}</p>
        <h3 class="font-display font-semibold text-xl mb-2">${p.name}</h3>
        <p class="text-sm text-[var(--muted)] mb-5">${p.services}</p>
        <span class="inline-flex items-center gap-2 text-sm font-medium border-b border-[#111827]/20 pb-1 cursor-pointer hover:border-[var(--purple)] hover:text-[var(--purple)] transition-colors">
          View Case Study
          <svg width="14" height="10" viewBox="0 0 16 10" fill="none"><path d="M1 5h14M10 1l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg>
        </span>
      </div>`;
        grid.appendChild(card);
        if (window.siteRevealObserver) window.siteRevealObserver.observe(card);
      });
  }
  renderProjects("all");
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    add(btn, "click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.filter);
    });
  });

  const caseData = [
    "Who was the client? Every case study opens by framing the business, its industry and its scale — the context every recommendation is built on.",
    "What problem existed? We document the exact operational, technical or brand issue the client came to us with.",
    "What did we identify? Our consulting and analysis team maps the root cause, not just the symptom.",
    "What solution was proposed? A strategy built specifically around the diagnosis — never a template pulled off the shelf.",
    "What did we implement? The build phase, covering technology, branding or process work delivered against the strategy.",
    "What changed? The measurable outcome — efficiency gained, revenue impact, brand visibility, or system stability.",
    "Which WCS solutions were involved? A summary of which of our four core domains contributed to the result.",
  ];
  document.querySelectorAll(".case-tab").forEach((tab) => {
    add(tab, "click", () => {
      document.querySelectorAll(".case-tab").forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const content = document.getElementById("caseContent");
      if (!content) return;
      content.style.opacity = 0;
      setTimeout(() => {
        content.textContent = caseData[tab.dataset.case];
        content.style.opacity = 1;
      }, 200);
    });
  });
  const caseContent = document.getElementById("caseContent");
  if (caseContent) caseContent.style.transition = "opacity .3s ease";

  const form = document.getElementById("contactForm");
  const toast = document.getElementById("toast");
  if (form) {
    add(form, "submit", async (e) => {
      e.preventDefault();
      const inquiryData = {
        fullName: document.getElementById("fullName")?.value,
        companyName: document.getElementById("companyName")?.value,
        phoneNumber: document.getElementById("phoneNumber")?.value,
        email: document.getElementById("email")?.value,
        industryName: document.getElementById("industryName")?.value,
        serviceRequired: document.getElementById("serviceRequired")?.value,
        businessRequirements: document.getElementById("businessRequirements")?.value,
        message: document.getElementById("message")?.value,
      };
      try {
        const response = await fetch("http://localhost:8080/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(inquiryData),
        });
        if (!response.ok) throw new Error("Failed to submit contact inquiry");
        if (toast) {
          toast.style.transform = "translateY(0)";
          toast.style.opacity = "1";
        }
        form.reset();
        setTimeout(() => {
          if (toast) {
            toast.style.transform = "translateY(6rem)";
            toast.style.opacity = "0";
          }
        }, 3500);
      } catch (error) {
        console.error("Contact form submission error:", error);
        alert("Failed to submit the form. Please try again.");
      }
    });
  }

  const blobs = document.querySelectorAll("#home .blob");
  const homeEl = document.getElementById("home");
  if (homeEl && blobs.length) {
    const onMove = (e) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = (e.clientX / w - 0.5) * 30;
      const y = (e.clientY / h - 0.5) * 30;
      blobs.forEach((b, i) => {
        b.style.transform = `translate(${x * (i + 1) * 0.4}px, ${y * (i + 1) * 0.4}px)`;
      });
    };
    add(homeEl, "mousemove", onMove);
  }
}

function initApply(add) {
  const uploadBox = document.getElementById("uploadBox");
  const fileInput = document.getElementById("fileInput");
  const fileName = document.getElementById("fileName");
  function handleFile(file) {
    if (!file) return;
    const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowed.includes(file.type)) {
      alert("Only PDF/DOC/DOCX allowed");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      alert("Max file size 2MB");
      return;
    }
    if (fileName) fileName.innerHTML = "✔ " + file.name;
  }
  if (uploadBox && fileInput) {
    add(uploadBox, "click", () => fileInput.click());
    add(uploadBox, "dragover", (e) => {
      e.preventDefault();
      uploadBox.classList.add("dragover");
    });
    add(uploadBox, "dragleave", () => uploadBox.classList.remove("dragover"));
    add(uploadBox, "drop", (e) => {
      e.preventDefault();
      uploadBox.classList.remove("dragover");
      handleFile(e.dataTransfer.files[0]);
    });
    add(fileInput, "change", () => handleFile(fileInput.files[0]));
  }
  const form = document.getElementById("form");
  const btn = document.getElementById("submitBtn");
  if (form && btn) {
    add(form, "submit", (e) => {
      e.preventDefault();
      btn.innerHTML = '<div class="loader"></div>';
      setTimeout(() => {
        btn.innerHTML = "Submitted ✔";
      }, 2000);
    });
  }
}

function initCareers(add) {
  const jobs = [
    { title: "Business Consultant", cat: "consulting", catLabel: "Consulting & Strategy", desc: "Advise growing businesses on strategy, structure, and transformation roadmaps.", skills: ["Strategy", "Stakeholder Mgmt", "Change Mgmt"], details: "You'll run discovery workshops, diagnose operational gaps, and design the strategic roadmap clients act on — working directly with founders and leadership teams." },
    { title: "Business Analyst", cat: "consulting", catLabel: "Consulting & Strategy", desc: "Turn business requirements into clear documentation, workflows, and KPIs.", skills: ["BRD/SRS", "Process Mapping", "Analytics"], details: "You'll gather requirements, run gap analyses, write BRDs/SOPs, and build the reporting that helps clients make confident decisions." },
    { title: "Project Manager", cat: "operations", catLabel: "Operations & Growth", desc: "Own delivery timelines and coordinate consulting, tech, and creative teams.", skills: ["Planning", "Agile", "Client Comms"], details: "You'll be the thread connecting consulting, technology, and branding workstreams — keeping scope, timelines, and quality on track from kickoff to delivery." },
    { title: "Web Developer", cat: "technology", catLabel: "Technology", desc: "Build scalable websites and digital platforms using modern technologies.", skills: ["HTML/CSS/JS", "React", "APIs"], details: "You'll build and maintain client websites and web apps end to end — from component architecture to API integration and deployment." },
    { title: "App Developer", cat: "technology", catLabel: "Technology", desc: "Design and ship mobile applications that solve real business problems.", skills: ["React Native", "iOS/Android", "REST"], details: "You'll build cross-platform mobile apps for clients, working closely with UI/UX and backend teams to ship reliable, scalable products." },
    { title: "UI/UX Designer", cat: "technology", catLabel: "Technology", desc: "Design intuitive interfaces and experiences across web and app products.", skills: ["Figma", "Wireframing", "Prototyping"], details: "You'll turn business requirements into wireframes, prototypes, and polished UI systems that developers can build from with confidence." },
    { title: "Graphic Designer", cat: "creative", catLabel: "Branding & Creative", desc: "Craft visual identities, campaign assets, and brand collateral.", skills: ["Adobe CC", "Typography", "Branding"], details: "You'll design logos, brand systems, social creatives, and marketing collateral that give client brands a distinct, professional identity." },
    { title: "Video Editor", cat: "creative", catLabel: "Branding & Creative", desc: "Edit brand films, social content, and campaign videos with a sharp eye.", skills: ["Premiere Pro", "Motion Graphics", "Storytelling"], details: "You'll cut and finish video content across formats — from short-form social edits to longer brand films — keeping pace with campaign timelines." },
    { title: "Social Media Executive", cat: "creative", catLabel: "Branding & Creative", desc: "Plan, schedule, and grow client presence across social platforms.", skills: ["Content Calendars", "Analytics", "Community"], details: "You'll manage content calendars, publish and monitor posts, and report on performance across Instagram, LinkedIn, and other client channels." },
    { title: "Content Creator", cat: "creative", catLabel: "Branding & Creative", desc: "Write and produce content that communicates brand value clearly.", skills: ["Copywriting", "SEO Basics", "Research"], details: "You'll write website copy, blog posts, and campaign content, translating business positioning into content people actually want to read." },
    { title: "Operations", cat: "operations", catLabel: "Operations & Growth", desc: "Keep internal processes, resourcing, and client operations running smoothly.", skills: ["Coordination", "Process Design", "Reporting"], details: "You'll support day-to-day operations — resourcing, vendor coordination, internal reporting — so client-facing teams can focus on delivery." },
    { title: "Internships", cat: "operations", catLabel: "Operations & Growth", desc: "Learn through live projects across consulting, tech, and creative teams.", skills: ["Any Domain", "Mentorship", "Live Projects"], details: "You'll be paired with a mentor and placed on live client work across consulting, technology, or creative — with structured feedback throughout." },
  ];
  const grid = document.getElementById("jobGrid");
  const arrowSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  const chevSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
  if (grid) {
    grid.innerHTML = ""; // guard against React 18 StrictMode double-invoking this effect in dev
    jobs.forEach((job, i) => {
      const card = document.createElement("div");
      card.className = "job-card reveal";
      card.dataset.cat = job.cat;
      card.style.transitionDelay = (i % 6) * 70 + "ms";
      card.innerHTML = `
      <div class="job-cat">${job.catLabel}</div>
      <div class="job-title">${job.title}</div>
      <p class="job-desc">${job.desc}</p>
      <div class="job-skills">${job.skills.map((s) => `<span>${s}</span>`).join("")}</div>
      <div class="job-details"><p>${job.details}</p></div>
      <div class="job-actions">
        <button class="details-toggle">View Details ${chevSVG}</button>
        <a href="/apply?role=${encodeURIComponent(job.title)}" class="apply-link">Apply Now ${arrowSVG}</a>
      </div>
    `;
      add(card, "mousemove", (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", e.clientX - r.left + "px");
        card.style.setProperty("--my", e.clientY - r.top + "px");
      });
      const toggle = card.querySelector(".details-toggle");
      const details = card.querySelector(".job-details");
      add(toggle, "click", () => {
        const open = details.classList.toggle("open");
        toggle.classList.toggle("open", open);
        toggle.innerHTML = (open ? "Hide Details " : "View Details ") + chevSVG;
      });
      grid.appendChild(card);
    });
  }
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    add(btn, "click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      document.querySelectorAll(".job-card").forEach((card) => {
        const show = f === "all" || card.dataset.cat === f;
        card.style.display = show ? "" : "none";
      });
    });
  });
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  return () => io.disconnect();
}

function initContact(add) {
  const revealEls = document.querySelectorAll(".reveal");
  revealEls.forEach((el, i) => el.style.setProperty("--i", i % 8));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));

  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const successMsg = document.getElementById("successMsg");
  if (form && submitBtn) {
    add(form, "submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      submitBtn.classList.add("loading");
      submitBtn.disabled = true;
      const label = submitBtn.querySelector(".btn-label");
      if (label) label.textContent = "Sending…";
      setTimeout(() => {
        submitBtn.classList.remove("loading");
        submitBtn.disabled = false;
        if (label) label.textContent = "Message sent";
        if (successMsg) successMsg.classList.add("show");
        form.reset();
        setTimeout(() => {
          if (label) label.textContent = "Start a Conversation";
        }, 3200);
      }, 1400);
    });
  }
  return () => io.disconnect();
}

function initInsights(add) {
  document.querySelectorAll(".hero .reveal").forEach((el) => requestAnimationFrame(() => el.classList.add("in")));
  const cards = Array.from(document.querySelectorAll(".work-card"));
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = cards.indexOf(entry.target);
          entry.target.style.transitionDelay = (idx % 3) * 0.08 + "s";
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  cards.forEach((el) => obs.observe(el));

  const filterBar = document.getElementById("filterBar");
  if (filterBar) {
    add(filterBar, "click", (e) => {
      const btn = e.target.closest(".filter-tab");
      if (!btn) return;
      filterBar.querySelectorAll(".filter-tab").forEach((t) => t.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      cards.forEach((card) => {
        const match = filter === "all" || card.dataset.cat === filter;
        card.classList.toggle("filtered-out", !match);
      });
    });
  }

  const projects = {
    nexora: { cat: "Business Consulting", title: "Nexora Consulting", meta: "Management Consulting — Business Analysis, Process Design", problem: "Nexora's consultants were spending more time chasing status updates across spreadsheets and email than delivering client work, and leadership had no single view of project health.", solution: "We mapped their delivery workflow end to end, cut out duplicate approval steps, and introduced a lightweight reporting structure the whole team could keep updated in minutes, not hours.", outcome: "Within one quarter, project reporting became reliable enough for leadership to make faster staffing decisions, and the team reclaimed hours previously lost to manual updates.", stats: [["38%", "Less admin time"], ["4wks", "To full rollout"], ["3", "Teams onboarded"]] },
    lumen: { cat: "Website Design & Development", title: "Lumen Web Studio", meta: "SaaS / Productivity — Web Design, Development", problem: "Lumen's marketing site loaded slowly, buried its pricing and sign-up path, and was not converting trial visitors at a rate that matched their ad spend.", solution: "We rebuilt the site on a lighter front end, restructured the navigation around a single clear conversion path, and rewrote the core landing pages around the product's real value.", outcome: "The new site loads in a fraction of the previous time and gives visitors a much shorter path from landing page to trial sign-up.", stats: [["2.1s", "Load time"], ["+61%", "Trial sign-ups"], ["5", "Pages rebuilt"]] },
    orbit: { cat: "Application Development", title: "Orbit FieldOps", meta: "Logistics & Field Ops — Product Design, App Development", problem: "Field technicians relied on phone calls and paper job sheets, which meant dispatch delays and no visibility into job status until the end of the day.", solution: "We designed and built a mobile app that gave technicians live job assignments, status updates, and photo capture, synced directly back to the dispatch team.", outcome: "Dispatch calls dropped sharply and job status became visible in real time, letting the operations team plan the next day's routes with far less guesswork.", stats: [["54%", "Fewer dispatch calls"], ["12min", "Avg. update time"], ["1", "Unified app"]] },
    verto: { cat: "Branding & Identity", title: "Verto Skincare", meta: "D2C Beauty — Brand Identity, Packaging", problem: "Verto's products were well formulated but the packaging and visual identity looked inconsistent across retailers, undercutting the premium price point they wanted to hold.", solution: "We built a cohesive identity system — logotype, palette, packaging structure and photography direction — designed to read as premium at shelf and online.", outcome: "The refreshed identity rolled out across the full product line and online store, giving Verto a consistent premium look across every touchpoint.", stats: [["1", "Unified identity"], ["12", "SKUs refreshed"], ["6wks", "Design to launch"]] },
    pulse: { cat: "Social Media Management", title: "Pulse Social", meta: "Fitness & Wellness — Social Strategy, Content", problem: "A boutique fitness studio was posting inconsistently with no clear content plan, and its social channels were not bringing in new members.", solution: "We built a monthly content system with a repeatable posting cadence, a clearer visual style, and content built specifically to move followers toward booking a class.", outcome: "Consistent posting and a clearer content mix turned the studio's page into its strongest source of new class bookings.", stats: [["+2.4x", "Engagement"], ["Daily", "Posting cadence"], ["#1", "Lead source"]] },
    aether: { cat: "Creative & Motion", title: "Aether Motion", meta: "Media Production — Art Direction, Motion Design", problem: "A production studio had strong reel content but no consistent visual identity tying its trailers, socials and pitch decks together.", solution: "We developed a visual and motion toolkit — type, color, transitions and title treatments — built to be reused across every format the studio publishes.", outcome: "The studio now ships trailers, reels and pitch materials that are instantly recognizable as their own, without rebuilding the look each time.", stats: [["1", "Motion toolkit"], ["4", "Formats covered"], ["3wks", "Delivery time"]] },
    northbridge: { cat: "Business Consulting", title: "Northbridge Capital", meta: "Financial Services — Strategy Consulting", problem: "Northbridge had grown around its founder's personal network, but had no repeatable process for winning new clients without her direct involvement in every deal.", solution: "We built a go-to-market strategy and a lighter internal structure that let the wider team originate and close new business on its own.", outcome: "The firm now brings in new clients through a repeatable process rather than founder-led sales, freeing leadership to focus on larger accounts.", stats: [["+29%", "New client rate"], ["5", "Team members enabled"], ["1", "GTM playbook"]] },
    kairos: { cat: "Website Design & Development", title: "Kairos Learning", meta: "EdTech — Website, CMS", problem: "A coaching institute needed a developer every time it wanted to publish a new course or update a batch schedule, slowing down enrollment campaigns.", solution: "We built a marketing site on a CMS the academic team could manage directly, with templates for new course pages and batch listings.", outcome: "The team now publishes new courses and updates schedules on their own, without waiting on developer time for routine changes.", stats: [["0", "Dev hours per update"], ["9", "Course pages live"], ["3wks", "Build time"]] },
    vantage: { cat: "Application Development", title: "Vantage Retail", meta: "Retail — App Development, UX", problem: "Store associates were checking stock manually against paper sheets, leading to inaccurate availability information for customers.", solution: "We designed and built a simple in-store app giving associates real-time inventory lookups and stock transfer requests from the floor.", outcome: "Associates now resolve stock questions on the spot, cutting the back-and-forth that used to send customers elsewhere.", stats: [["47%", "Faster stock checks"], ["6", "Stores rolled out"], ["1", "Unified app"]] },
  };

  const overlay = document.getElementById("modalOverlay");
  const modalCat = document.getElementById("modalCat");
  const modalTitle = document.getElementById("modalTitle");
  const modalMeta = document.getElementById("modalMeta");
  const modalProblem = document.getElementById("modalProblem");
  const modalSolution = document.getElementById("modalSolution");
  const modalOutcome = document.getElementById("modalOutcome");
  const modalStats = document.getElementById("modalStats");

  function openModal(id) {
    const p = projects[id];
    if (!p || !overlay) return;
    if (modalCat) modalCat.textContent = p.cat;
    if (modalTitle) modalTitle.textContent = p.title;
    if (modalMeta) modalMeta.textContent = p.meta;
    if (modalProblem) modalProblem.textContent = p.problem;
    if (modalSolution) modalSolution.textContent = p.solution;
    if (modalOutcome) modalOutcome.textContent = p.outcome;
    if (modalStats) modalStats.innerHTML = p.stats.map((s) => `<div class="outcome-stat"><div class="num">${s[0]}</div><div class="lbl">${s[1]}</div></div>`).join("");
    overlay.classList.add("show");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    if (!overlay) return;
    overlay.classList.remove("show");
    document.body.style.overflow = "";
  }
  document.querySelectorAll("[data-project]").forEach((el) => {
    add(el, "click", (e) => {
      e.preventDefault();
      openModal(el.dataset.project);
    });
  });
  const modalClose = document.getElementById("modalClose");
  if (modalClose) add(modalClose, "click", closeModal);
  if (overlay) {
    add(overlay, "click", (e) => {
      if (e.target === overlay) closeModal();
    });
  }
  add(document, "keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  return () => obs.disconnect();
}
