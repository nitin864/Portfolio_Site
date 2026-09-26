import React from "react";
import StatusBadge from "./components/StatusBadge";
import ProjectRow from "./components/ProjectRow";
import ExperienceRow from "./components/ExperienceRow";

/* ─── DATA ─────────────────────────────────────────────────────────────────── */

const projects = [
  {
    name: "CineCue",
    desc: "A stylish movie discovery app — search and explore films with a polished React Native UI.",
    tech: ["React Native", "JavaScript", "TMDB API"],
    url: "https://github.com/nitin864/CineCue",
    apkUrl: "/CineCue.apk",
  },
  {
    name: "Real Time Tracking System",
    desc: "Live GPS location tracking with Node.js, Socket.IO, and Leaflet map visualisation.",
    tech: ["Node.js", "Socket.IO", "Leaflet.js"],
    url: "https://github.com/nitin864/Real_time_tracking_system",
    liveUrl: "https://real-time-tracking-system-liep.onrender.com/",
  },
  {
    name: "Socket.io Chat",
    desc: "Minimal real-time chat app built with Express and Socket.IO for instant messaging.",
    tech: ["HTML", "Node.js", "Socket.IO"],
    url: "https://github.com/nitin864/Socket.io_chat",
  },
  {
    name: "Daphine — Chat App",
    desc: "Full-stack chat application showcasing WebSocket-driven real-time communication.",
    tech: ["JavaScript", "Socket.IO", "Express"],
    url: "https://github.com/nitin864/Daphine_a_chat_app",
    liveUrl: "https://daphine.vercel.app",
  },
];

const techStack = [
  "JavaScript",
  "React",
  "Node.js",
  "Socket.IO",
  "Leaflet.js",
  "Prisma",
  "React Native",
  "Git",
  "Vite",
  "Java",
];

/*
 * ⚠️  FLAGGED — Experience section:
 * No employer/company data was found in the original codebase.
 * The rows below are PLACEHOLDERS showing the structure only.
 * Please replace with your actual work history.
 */
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
  },
];

/* ─── APP ───────────────────────────────────────────────────────────────────── */

export default function PortfolioApp() {
  return (
    <div className="site-wrapper">
      {/* ── NAV ── */}
      <nav className="site-nav" aria-label="Primary navigation">
        <span className="site-nav__name">Nitin Raj</span>
        <div className="site-nav__links">
          <a href="#work" className="nav-link">Work</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>

      <main className="site-main">
        {/* ─────────── HERO ─────────── */}
        <section className="section hero" aria-label="Introduction">
          {/* Photo */}
          <div className="hero__photo-wrap">
            <img
              src="/images/pro.jpeg"
              alt="Nitin Raj"
              className="hero__photo"
              width="80"
              height="80"
            />
          </div>

          {/* Name + badge */}
          <div className="hero__identity">
            <h1 className="hero__name">Nitin Raj</h1>
            <StatusBadge isOpen={true} />
          </div>

          {/* Role + location */}
          <p className="hero__role">
            Full-Stack &amp; React Native Developer
            <span className="hero__sep" aria-hidden="true"> · </span>
            <span className="hero__location">Kolkata, India</span>
          </p>

          {/* Bio — condensed from the original 9-bullet list */}
          <p className="hero__bio">
            I build web and mobile products from the ground up — real-time systems,
            chat apps, GPS tracking tools, and full-stack platforms.{" "}
            Self-taught, with four-plus years of shipping production-ready code in
            React, Node.js, and React Native.{" "}
            Currently exploring TypeScript and advanced Next.js architecture while
            staying focused on clean, user-centred work.
          </p>

          {/* Tech stack */}
          <div className="hero__stack" aria-label="Technology stack">
            {techStack.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </section>

        <hr className="divider" />

        {/* ─────────── EXPERIENCE ─────────── */}
        <section id="experience" className="section" aria-label="Experience">
          <h2 className="section__title">Experience</h2>

          {experience.length > 0 ? (
            <div className="exp-list">
              {experience.map((e) => (
                <ExperienceRow key={e.company + e.period} {...e} />
              ))}
            </div>
          ) : (
            /*
             * ⚠️  FLAGGED — No work experience data found in the codebase.
             * Add your company/role/period entries to the `experience` array
             * at the top of this file to populate this section.
             */
            <p className="empty-notice">
              Work history coming soon.{" "}
              <span className="muted">(Add your entries to the <code>experience</code> array in App.jsx.)</span>
            </p>
          )}
        </section>

        <hr className="divider" />

        {/* ─────────── PROJECTS ─────────── */}
        <section id="work" className="section" aria-label="Projects">
          <h2 className="section__title">Projects</h2>
          <div className="project-list">
            {projects.map((p) => (
              <ProjectRow key={p.name} {...p} />
            ))}
          </div>
        </section>

        <hr className="divider" />

        {/* ─────────── CONTACT / FOOTER ─────────── */}
        <section id="contact" className="section contact" aria-label="Contact">
          <h2 className="section__title">Get in touch</h2>
          <p className="contact__line">
            Open to collaborations, freelance, and full-stack projects.
          </p>

          <div className="contact__links">
            <a href="mailto:rajnitin793@gmail.com" className="contact__link">
              rajnitin793@gmail.com
            </a>
            <a
              href="https://github.com/nitin864"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nitin864"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              LinkedIn
            </a>
            {/*
             * ⚠️  FLAGGED — No resume link found. Replace '#' with your
             * actual resume URL or hosted PDF path.
             */}
            {/* <a href="#" className="contact__link">Résumé</a> */}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Nitin Raj</span>
      </footer>
    </div>
  );
}
