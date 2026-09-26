import React from "react";

/**
 * ExperienceRow — one entry in the experience/companies section.
 * Props:
 *   company  {string} — company or client name
 *   role     {string} — job title
 *   period   {string} — e.g. "Jan 2023 – Present"
 *   type     {string} — e.g. "Full-time", "Freelance", "Contract"
 */
export default function ExperienceRow({ company, role, period, type }) {
  return (
    <div className="exp-row">
      <div className="exp-row__left">
        <span className="exp-row__company">{company}</span>
        {type && <span className="tag exp-row__type">{type}</span>}
      </div>
      <div className="exp-row__right">
        <span className="exp-row__role">{role}</span>
        <span className="exp-row__period">{period}</span>
      </div>
    </div>
  );
}
