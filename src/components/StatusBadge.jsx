import React from "react";

/**
 * StatusBadge — small pill indicating availability.
 * Toggle `isOpen` prop to show/hide "Open to work" state.
 */
export default function StatusBadge({ isOpen = true }) {
  if (!isOpen) return null;
  return (
    <span className="status-badge" aria-label="Currently open to work">
      <span className="status-dot" aria-hidden="true" />
      Open to work
    </span>
  );
}
