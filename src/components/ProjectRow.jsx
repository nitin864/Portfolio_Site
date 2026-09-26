import React from "react";

/**
 * ProjectRow — one entry in the projects list.
 * Props:
 *   name      {string}   — project name
 *   desc      {string}   — one-line description
 *   tech      {string[]} — tech tags
 *   url       {string}   — GitHub or primary link
 *   liveUrl   {string}   — optional live demo URL
 *   apkUrl    {string}   — optional APK download
 */
export default function ProjectRow({ name, desc, tech, url, liveUrl, apkUrl }) {
  return (
    <article className="project-row">
      <div className="project-row__header">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="project-row__name"
        >
          {name}
          <span className="project-row__arrow" aria-hidden="true">↗</span>
        </a>
        <div className="project-row__actions">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="project-row__link"
              aria-label={`${name} live demo`}
            >
              Live
            </a>
          )}
          {apkUrl && (
            <a
              href={apkUrl}
              download
              className="project-row__link"
              aria-label={`Download ${name} APK`}
            >
              APK
            </a>
          )}
        </div>
      </div>
      <p className="project-row__desc">{desc}</p>
      <div className="project-row__tags">
        {tech.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
