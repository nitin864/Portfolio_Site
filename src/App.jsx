import React from "react";

const projects = [
  {
    name: "CineCue",
    desc: "A stylish, robust movie discovery app — search and explore movies with a polished UI.",
    tech: ["JavaScript", "React Native", "TMDB API"],
    url: "https://github.com/nitin864/CineCue",
  },
  {
    name: "Real Time Tracking System",
    desc: "Live location tracking built with Node.js, Socket.IO and Leaflet for map visualisation.",
    tech: ["Node.js", "Socket.IO", "Leaflet.js"],
    url: "https://github.com/nitin864/Real_time_tracking_system",
  },
  {
    name: "Socket.io Chat",
    desc: "A minimal real-time chat app using Express and Socket.IO for instant messaging.",
    tech: ["HTML", "Node.js", "Socket.IO"],
    url: "https://github.com/nitin864/Socket.io_chat",
  },
  {
    name: "Daphine - A Chat App",
    desc: "Another chat-focused project showcasing realtime features and web sockets.",
    tech: ["JavaScript", "Socket.IO", "Express"],
    url: "https://github.com/nitin864/Daphine_a_chat_app",
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
  "java",
];

export default function PortfolioApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-gray-100 p-4 sm:p-6 lg:p-8 font-sans">
      <header className="max-w-6xl mx-auto flex items-center justify-between py-6">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Nitin — Fullstack & Android Dev
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-300">
            Kolkata · Next.js, JS, TS, React, Node.js ,Express· exploring Java
          </p>
        </div>
        <nav className="flex items-center gap-3">
          <a
            href="https://github.com/nitin864"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1 sm:px-4 sm:py-2 border border-indigo-500 rounded-xl text-xs sm:text-sm hover:bg-indigo-600/30 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nitin864"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1 sm:px-4 sm:py-2 bg-indigo-600 rounded-xl text-xs sm:text-sm hover:bg-indigo-500 transition"
          >
            LinkedIn
          </a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* HERO (spans 2 cols on lg) */}
        <section className="lg:col-span-2 bg-gray-800/40 backdrop-blur rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-gray-700 relative overflow-visible">
          {/* Avatar on left, intro on right */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-shrink-0 mx-auto lg:mx-0">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-black shadow-lg">
                <img
                  src="/images/pro.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                Hi — I'm Nitin
              </h2>

              <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                With over four years of hands-on experience building production-grade applications, I’m **Nitin**, a self-taught Full-Stack Developer and React Native engineer based in Kolkata, India. My journey into development began out of curiosity about how apps and websites work, and over time that curiosity evolved into a deep passion for building scalable, real-world software. Since then, I’ve spent countless hours learning, experimenting, and developing applications that solve practical problems and deliver meaningful user experiences.

I primarily work with the **JavaScript ecosystem end-to-end**. On the mobile side, I build cross-platform applications using **React Native and Expo**, focusing on performance, smooth user experiences, and real-time functionality. For web applications, I use **Next.js with TailwindCSS** to create modern, responsive interfaces that are both visually appealing and highly performant. On the backend, I rely on **Node.js, Express, and MongoDB** to design robust APIs, manage databases, and build scalable server-side architectures. My experience also includes working with **REST APIs, WebSockets for real-time features, authentication systems, and cloud deployments** using platforms such as **Vercel and Render**.

Throughout my development journey, I’ve built a variety of projects ranging from **real-time GPS tracking systems and live chat applications to full-stack web platforms and developer tools**. These projects have helped me develop strong problem-solving skills and a practical understanding of building reliable software from idea to deployment.

Currently, I’m focused on deepening my expertise in **TypeScript, advanced Next.js architecture, and modern cloud infrastructure**, while continuing to build and ship projects that improve my skills and create real value. I strongly believe in learning by building, continuously improving my craft, and staying curious about new technologies that push the boundaries of modern software development.

              </p>

              <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
                <a
                  href="#projects"
                  className="w-full sm:w-auto text-center px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition text-sm sm:text-base"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto text-center px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-700/40 transition text-sm sm:text-base"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          <aside className="space-y-6 mt-7">
            <div className="p-4 rounded-2xl bg-gray-800/50 border border-gray-700 shadow-xl">
              <h4 className="font-semibold text-sm">Quick Stats</h4>
              <div className="mt-4 grid grid-cols-4 gap-2 text-center">
                <div>
                  <div className="text-2xl font-bold">10</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">7</div>
                  <div className="text-xs text-gray-400">GitHub Followers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-xs text-gray-400">Following</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">590+</div>
                  <div className="text-xs text-gray-400">
                    LinkedIn Followers
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gray-800/50 border border-gray-700 shadow-xl">
              <h4 className="font-semibold text-sm">Tech Stack</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {techStack.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs bg-gray-700/60 rounded-full border border-gray-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* small summary cards under hero */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-900/40 rounded-lg border border-gray-700">
              <h3 className="text-xs text-gray-400 uppercase tracking-wide">
                Contact
              </h3>
              <div className="mt-3 text-sm text-gray-300">
                <div>Email: rajnitin793@gmail.com</div>
                <div className="mt-1">Location: Kolkata, IN</div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS (full width below on mobile) */}
        <section id="projects" className="lg:col-span-3 mt-2">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <article
                key={p.name}
                className="p-4 bg-gray-800/40 rounded-lg border border-gray-700 shadow hover:translate-y-[-4px] transition-transform"
              >
                <h4 className="text-lg font-semibold">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {p.name}
                  </a>
                </h4>
                <p className="mt-2 text-sm text-gray-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-gray-700/60 rounded-full border border-gray-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {p.name === "CineCue" && (
                  <a
                    href="/CineCue.apk"
                    download
                    className="mt-4 inline-flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-sm rounded-md transition"
                  >
                    Download APK
                  </a>
                )}
                {p.name === "Socket.io Chat" && (
                  <a href="https://github.com/nitin864/Socket.io_chat"
                  className="mt-4 inline-flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-sm rounded-md transition">
                    View Code
                  </a>
                )}

                {/* Live Demo button only for the two requested projects */}
                {(p.name === "Real Time Tracking System" ||
                  p.name === "Daphine - A Chat App") && (
                  <div className="mt-4 flex gap-2">
                    <a
                      href={
                        p.name === "Real Time Tracking System"
                          ? "https://real-time-tracking-system-liep.onrender.com/"
                          : "https://daphine.vercel.app"
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-500 text-sm rounded-md transition"
                      aria-label={`${p.name} live demo`}
                    >
                      <svg
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 8l6 4-6 4V8z" fill="white" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="lg:col-span-3 mt-6">
          <div className="p-5 rounded-lg bg-gray-800/40 border border-gray-700 shadow-xl">
            <h3 className="text-lg font-bold">Get in touch</h3>
            <p className="mt-2 text-sm text-gray-300">
              I'm open for collaborations, freelance work, or full-stack
              projects. Reach me at{" "}
              <a href="mailto:rajnitin793@gmail.com" className="underline">
                rajnitin793@gmail.com
              </a>
              .
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="https://github.com/nitin864"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-500 text-sm sm:text-base text-center w-full sm:w-auto"
              >
                Visit GitHub
              </a>
              <a
                href="#projects"
                className="inline-block px-4 py-2 border border-gray-600 rounded-lg text-sm sm:text-base text-center w-full sm:w-auto"
              >
                See projects
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto mt-10 py-8 text-center text-gray-500">
        @{new Date().getFullYear()} All rights reserved.
      </footer>
    </div>
  );
}
