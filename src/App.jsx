import React, { useEffect } from "react";

/* ─── DATA (from resume) ────────────────────────────────────────────────────── */

const projects = [
  {
    id: "orbitshield",
    name: "OrbitShield",
    subtitle: "Orbital Risk Engine",
    desc: "Real-time satellite conjunction detection system tracking 16,000+ live satellites using SGP4 orbital propagation. Reduced collision-pair comparisons from ~128M (naive) to a few hundred per group via a two-stage spatial filter.",
    detail: "6-endpoint REST API · automated background scheduler · 3D interactive globe with live satellite positions and orbital paths.",
    tech: ["Python", "FastAPI", "SQLAlchemy", "Skyfield/SGP4", "React", "Three.js"],
    url: "https://github.com/nitin864",
    featured: true,
  },
  {
    id: "workspacedev",
    name: "WorkSpaceDev",
    subtitle: "Collaborative Project Management",
    desc: "Full-stack project management platform with real-time WebSocket updates, organization-based workspace architecture, and role-based access control. Improved team communication efficiency by 40% via Socket.IO activity feeds.",
    detail: null,
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Socket.IO"],
    url: "https://github.com/nitin864",
    featured: false,
  },
  {
    id: "cinecue",
    name: "CineCue",
    subtitle: "Movie Discovery App",
    desc: "Movie discovery app with advanced search, filtering by genre/year/popularity across 10,000+ entries. Debounced API request handling reduced unnecessary calls by 60%.",
    detail: null,
    tech: ["React.js", "TMDB API", "Axios", "CSS3"],
    url: "https://github.com/nitin864/CineCue",
    apkUrl: "/CineCue.apk",
    featured: false,
  },
  {
    id: "tracking",
    name: "Real-Time GPS Tracking",
    subtitle: "Live Location System",
    desc: "Production-ready live location tracking system streaming geographic coordinates in real-time via WebSockets. Handles 100+ concurrent connections with sub-second latency.",
    detail: null,
    tech: ["Node.js", "Socket.IO", "Leaflet.js", "Express.js"],
    url: "https://github.com/nitin864/Real_time_tracking_system",
    liveUrl: "https://real-time-tracking-system-liep.onrender.com/",
    featured: false,
  },
];

const experience = [
  {
    company: "Accesco Living",
    role: "Back End Developer",
    period: "Aug 2026 – Present",
    type: "Internship",
  },
  {
    company: "Zaalima Development Pvt. Ltd",
    role: "Java Developer Intern",
    period: "Mar 2026 – Jul 2026",
    type: "Internship",
    desc: "Led a team developing VaultCore Financial — a secure full-stack Neo-Bank core infrastructure simulation.",
  },
];

const skills = {
  "Languages & Frameworks": ["JavaScript (ES6+)", "TypeScript", "React.js", "React Native", "Node.js", "Express.js", "Next.js", "Java", "Python", "HTML5", "CSS3"],
  "Databases & Tools": ["MongoDB", "Firebase", "PostgreSQL", "Socket.IO", "WebSockets", "RESTful APIs", "Git", "Postman"],
  "Platforms & DevOps": ["Linux (Arch)", "AWS", "Docker", "Vercel", "Render", "PWA", "SSR"],
};

/* ─── HOOK: Intersection Observer for fade-in ───────────────────────────────── */
function useFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─── APP ───────────────────────────────────────────────────────────────────── */
export default function PortfolioApp() {
  useFadeIn();

  return (
    <div className="site-wrapper">

      {/* ── NAV ── */}
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#hero" className="site-nav__logo">NR</a>
        <div className="site-nav__links">
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#work" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a
            href="/resume/main_resume_nitin.pdf"
            target="_blank"
            rel="noreferrer"
            className="nav-resume"
            aria-label="View resume PDF"
          >
            Résumé ↗
          </a>
        </div>
        {/* Hamburger for mobile */}
        <button className="nav-mobile-btn" aria-label="Open menu" onClick={() => {
          document.querySelector('.site-nav__links').classList.toggle('open');
        }}>
          <span /><span /><span />
        </button>
      </nav>

      {/* ─────────── HERO ─────────── */}
      <section id="hero" className="hero" aria-label="Introduction">
        <div className="hero__inner">
          {/* Left: Text */}
          <div className="hero__text">
            <div className="hero__status">
              <span className="status-dot" aria-hidden="true" />
              Open to work
            </div>

            <h1 className="hero__name">
              Nitin<br />Raj
            </h1>

            <p className="hero__role">
              Full-Stack &amp; React Native Developer
            </p>

            <p className="hero__location">
              📍 Kolkata, West Bengal · IT Student @ Narula Institute of Technology
            </p>

            <p className="hero__bio">
              I design and ship real-world products — satellite tracking engines, 
              collaborative platforms, real-time chat systems, and mobile apps.
              3+ years building with React, Node.js, and React Native.
              Currently diving deep into cybersecurity and aerospace software engineering.
            </p>

            <div className="hero__cta">
              <a href="#work" className="btn-primary">View Projects</a>
              <a
                href="/resume/main_resume_nitin.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Download Résumé
              </a>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="hero__photo-col">
            <div className="hero__photo-frame">
              <img
                src="/images/pro.jpeg"
                alt="Nitin Raj"
                className="hero__photo"
              />
              <div className="hero__photo-glow" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hero__scroll" aria-hidden="true">
          <div className="scroll-line" />
          <span>scroll</span>
        </div>
      </section>

      <main className="site-main">

        {/* ─────────── FEATURED PROJECT ─────────── */}
        <section className="section featured-section fade-in" aria-label="Featured project">
          <p className="section__label">Featured Project</p>
          <div className="featured-card">
            <div className="featured-card__badge">🛰 OrbitShield</div>
            <h2 className="featured-card__title">Orbital Risk Engine</h2>
            <p className="featured-card__desc">
              Real-time satellite conjunction detection system tracking{" "}
              <strong>16,000+ live satellites</strong> using SGP4 orbital propagation.
              Reduced collision-pair comparisons from ~128M to a few hundred via
              a two-stage spatial filter (altitude + orbital-plane banding).
            </p>
            <ul className="featured-card__bullets">
              <li>6-endpoint REST API with automated background scheduler for continuous data refresh</li>
              <li>3D interactive globe (React + Three.js) visualizing live satellite positions and orbital paths</li>
              <li>Built with Python · FastAPI · SQLAlchemy · Skyfield/SGP4 · React · Three.js</li>
            </ul>
            <div className="featured-card__tech">
              {["Python", "FastAPI", "SQLAlchemy", "SGP4", "React", "Three.js"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <a
              href="https://github.com/nitin864"
              target="_blank"
              rel="noreferrer"
              className="featured-card__link"
            >
              View on GitHub ↗
            </a>
          </div>
        </section>

        {/* ─────────── EXPERIENCE ─────────── */}
        <section id="experience" className="section fade-in" aria-label="Experience">
          <p className="section__label">Experience</p>
          <div className="exp-list">
            {experience.map((e, i) => (
              <div key={i} className="exp-row">
                <div className="exp-row__top">
                  <div className="exp-row__left">
                    <span className="exp-row__company">{e.company}</span>
                    <span className="tag">{e.type}</span>
                  </div>
                  <div className="exp-row__right">
                    <span className="exp-row__role">{e.role}</span>
                    <span className="exp-row__period">{e.period}</span>
                  </div>
                </div>
                {e.desc && <p className="exp-row__desc">{e.desc}</p>}
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* ─────────── PROJECTS ─────────── */}
        <section id="work" className="section fade-in" aria-label="Projects">
          <p className="section__label">Projects</p>
          <div className="project-list">
            {projects.filter(p => !p.featured).map((p, i) => (
              <article key={p.id} className="project-row" style={{"--delay": `${i * 60}ms`}}>
                <div className="project-row__header">
                  <div>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="project-row__name"
                    >
                      {p.name}
                      <span className="project-row__arrow" aria-hidden="true">↗</span>
                    </a>
                    <span className="project-row__subtitle">{p.subtitle}</span>
                  </div>
                  <div className="project-row__actions">
                    {p.liveUrl && (
                      <a href={p.liveUrl} target="_blank" rel="noreferrer" className="project-row__link">
                        Live
                      </a>
                    )}
                    {p.apkUrl && (
                      <a href={p.apkUrl} download className="project-row__link">
                        APK
                      </a>
                    )}
                  </div>
                </div>
                <p className="project-row__desc">{p.desc}</p>
                <div className="project-row__tags">
                  {p.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* ─────────── SKILLS ─────────── */}
        <section className="section fade-in" aria-label="Skills">
          <p className="section__label">Skills</p>
          <div className="skills-grid">
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} className="skills-group">
                <h3 className="skills-group__title">{cat}</h3>
                <div className="skills-group__tags">
                  {items.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* ─────────── CONTACT ─────────── */}
        <section id="contact" className="section contact-section fade-in" aria-label="Contact">
          <p className="section__label">Get in touch</p>
          <h2 className="contact-section__heading">
            Let's build something together.
          </h2>
          <p className="contact-section__sub">
            Open to internships, freelance projects, and full-stack collaborations.
          </p>

          <div className="contact__links">
            <a href="mailto:rajnitin793@gmail.com" className="contact__link contact__link--email">
              rajnitin793@gmail.com
            </a>
            <div className="contact__socials">
              <a href="https://github.com/nitin864" target="_blank" rel="noreferrer" className="contact__link">
                GitHub ↗
              </a>
              <a href="https://www.linkedin.com/in/nitin864" target="_blank" rel="noreferrer" className="contact__link">
                LinkedIn ↗
              </a>
              <a href="/resume/main_resume_nitin.pdf" target="_blank" rel="noreferrer" className="contact__link">
                Résumé ↗
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Nitin Raj · Built with React</span>
        <a href="#hero" className="footer__back">Back to top ↑</a>
      </footer>
    </div>
  );
}
