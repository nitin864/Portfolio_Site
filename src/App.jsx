import React, { useEffect } from "react";

/* ─── DATA ──────────────────────────────────────────────────────────────────── */

const projects = [
  {
    id: "orbitshield",
    name: "OrbitShield",
    year: "2026",
    desc: "Tracks 16,000+ live satellites in real time using SGP4 orbital propagation, with a two-stage spatial filter that cuts collision-pair comparisons from ~128M to a few hundred. Ships with a 6-endpoint REST API, background scheduler, and a 3D globe built in Three.js.",
    tech: ["Python", "FastAPI", "SQLAlchemy", "SGP4", "React", "Three.js"],
    url: "https://github.com/nitin864/Orbital-Risk-Engine",
    featured: true,
  },
  {
    id: "workspacedev",
    name: "WorkSpaceDev",
    year: "2025",
    desc: "Project management platform with org-level workspaces, role-based access control, and real-time Socket.IO activity feeds. Cut team communication overhead noticeably in internal testing.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Socket.IO"],
    url: "https://github.com/nitin864/WorkSpaceDev",
  },
  {
    id: "cinecue",
    name: "CineCue",
    year: "2025",
    desc: "Movie discovery app — search, filter by genre/year/popularity across 10,000+ TMDB entries. Debounced API calls, optimized re-renders, ships as an Android APK.",
    tech: ["React.js", "TMDB API", "Axios"],
    url: "https://github.com/nitin864/CineCue",
    apkUrl: "/CineCue.apk",
  },
  {
    id: "tracking",
    name: "Real-Time GPS Tracker",
    year: "2024",
    desc: "WebSocket server streaming live coordinates to a Leaflet.js map. Handles 100+ concurrent connections at sub-second latency, deployed on Render.",
    tech: ["Node.js", "Socket.IO", "Leaflet.js", "Express.js"],
    url: "https://github.com/nitin864/Real_time_tracking_system",
    liveUrl: "https://real-time-tracking-system-liep.onrender.com/",
  },
];

const experience = [
  {
    company: "Accesco Living",
    role: "Back End Developer",
    period: "Aug 2026 – Present",
    type: "Internship",
    desc: null,
  },
  {
    company: "Zaalima Development Pvt. Ltd",
    role: "Java Developer Intern",
    period: "Mar – Jul 2026",
    type: "Internship",
    desc: "Built VaultCore Financial — a full-stack Neo-Bank core infrastructure simulation in Java with Spring Framework.",
  },
];

/* ─── SCROLL ANIMATION ──────────────────────────────────────────────────────── */
function useFadeIn() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── APP ───────────────────────────────────────────────────────────────────── */
export default function PortfolioApp() {
  useFadeIn();

  return (
    <div className="root">

      {/* ── NAV ───────────────────────────────────────────── */}
      <header className="nav">
        <a href="#top" className="nav__wordmark">Nitin Raj</a>
        <nav className="nav__links" aria-label="Primary">
          <a href="#work"       className="nav__link">Work</a>
          <a href="#experience" className="nav__link">Experience</a>
          <a href="#contact"    className="nav__link">Contact</a>
          <a
            href="/resume/main_resume_nitin.pdf"
            target="_blank" rel="noreferrer"
            className="nav__resume"
          >
            Résumé ↗
          </a>
        </nav>
        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          onClick={() => document.querySelector(".nav__links").classList.toggle("nav__links--open")}
        >
          <span /><span /><span />
        </button>
      </header>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section id="top" className="hero" aria-label="Introduction">
        <div className="hero__inner">

          {/* Photo — right column on desktop */}
          <div className="hero__img-col">
            <img
              src="/images/pro.jpeg"
              alt="Nitin Raj"
              className="hero__img"
            />
          </div>

          {/* Text — left column */}
          <div className="hero__copy">
            <p className="hero__availability">
              <span className="avail-dot" />
              Available for opportunities
            </p>

            <h1 className="hero__name">Nitin Raj</h1>

            <p className="hero__title">
              Full-Stack &amp; React Native Developer
            </p>

            <p className="hero__meta">
              Kolkata, India &nbsp;·&nbsp; IT @ Narula Institute of Technology
            </p>

            <p className="hero__bio">
              I'm a second-year IT student who builds production systems.
              My work spans satellite conjunction engines, collaborative dev tools,
              real-time GPS trackers, and cross-platform mobile apps — written in
              React, Node.js, Python, and Java.
              I care about clean architecture and shipping things that actually run.
            </p>

            <div className="hero__actions">
              <a href="#work" className="btn btn--solid">See my work</a>
              <a
                href="/resume/main_resume_nitin.pdf"
                target="_blank" rel="noreferrer"
                className="btn btn--ghost"
              >
                Download résumé
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="main">

        {/* ── FEATURED: ORBITSHIELD ─────────────────────────── */}
        <section className="section reveal" aria-label="Featured project">
          <p className="label">Featured project</p>

          <div className="orbit">
            <div className="orbit__header">
              <div>
                <h2 className="orbit__name">OrbitShield</h2>
                <p className="orbit__sub">Orbital Risk Engine · 2026</p>
              </div>
              <a
                href="https://github.com/nitin864/Orbital-Risk-Engine"
                target="_blank" rel="noreferrer"
                className="orbit__gh"
              >
                GitHub ↗
              </a>
            </div>

            <p className="orbit__desc">
              Tracks <strong>16,000+ live satellites</strong> in real time using SGP4 orbital propagation.
              A two-stage spatial filter (altitude banding + orbital-plane grouping) cuts collision-pair
              comparisons from ~128 million to a few hundred per cycle.
            </p>

            <div className="orbit__detail">
              <div className="orbit__detail-item">
                <span className="orbit__detail-label">API</span>
                6-endpoint FastAPI service with automated background scheduler
              </div>
              <div className="orbit__detail-item">
                <span className="orbit__detail-label">Frontend</span>
                3D interactive globe in React + Three.js visualizing orbital paths live
              </div>
              <div className="orbit__detail-item">
                <span className="orbit__detail-label">Stack</span>
                Python · FastAPI · SQLAlchemy · Skyfield/SGP4 · React · Three.js
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── PROJECTS ──────────────────────────────────────── */}
        <section id="work" className="section reveal" aria-label="Projects">
          <p className="label">Other projects</p>

          <div className="proj-table">
            {projects.filter(p => !p.featured).map((p) => (
              <article key={p.id} className="proj-row">
                <div className="proj-row__year">{p.year}</div>

                <div className="proj-row__body">
                  <div className="proj-row__top">
                    <a href={p.url} target="_blank" rel="noreferrer" className="proj-row__name">
                      {p.name}
                      <span className="proj-row__arrow">↗</span>
                    </a>
                    <div className="proj-row__actions">
                      {p.liveUrl && (
                        <a href={p.liveUrl} target="_blank" rel="noreferrer" className="proj-action">Live</a>
                      )}
                      {p.apkUrl && (
                        <a href={p.apkUrl} download className="proj-action">APK</a>
                      )}
                    </div>
                  </div>
                  <p className="proj-row__desc">{p.desc}</p>
                  <p className="proj-row__tech">{p.tech.join(" · ")}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* ── EXPERIENCE ────────────────────────────────────── */}
        <section id="experience" className="section reveal" aria-label="Experience">
          <p className="label">Experience</p>

          <div className="exp-table">
            {experience.map((e, i) => (
              <div key={i} className="exp-row">
                <div className="exp-row__period">{e.period}</div>
                <div className="exp-row__body">
                  <div className="exp-row__top">
                    <span className="exp-row__company">{e.company}</span>
                    <span className="exp-row__type">{e.type}</span>
                  </div>
                  <p className="exp-row__role">{e.role}</p>
                  {e.desc && <p className="exp-row__desc">{e.desc}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* ── CONTACT ───────────────────────────────────────── */}
        <section id="contact" className="section reveal" aria-label="Contact">
          <p className="label">Contact</p>

          <p className="contact-line">
            I'm open to internships, contracts, and interesting builds.
            Best way to reach me:
          </p>

          <a href="mailto:rajnitin793@gmail.com" className="contact-email">
            rajnitin793@gmail.com
          </a>

          <div className="contact-links">
            <a href="https://github.com/nitin864"       target="_blank" rel="noreferrer" className="contact-link">GitHub</a>
            <a href="https://www.linkedin.com/in/nitin864" target="_blank" rel="noreferrer" className="contact-link">LinkedIn</a>
            <a href="/resume/main_resume_nitin.pdf"     target="_blank" rel="noreferrer" className="contact-link">Résumé</a>
          </div>
        </section>

      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Nitin Raj</span>
        <a href="#top" className="footer__top">↑ Top</a>
      </footer>
    </div>
  );
}
