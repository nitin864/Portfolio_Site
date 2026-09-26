/** @type {import('tailwindcss').Config} */
// This project uses Tailwind only for its base reset (@tailwind base).
// Styles are written in plain CSS (src/index.css) using CSS custom properties.
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  // Suppress "no utility classes detected" warning — intentional,
  // as this project uses vanilla CSS classes instead of Tailwind utilities.
  corePlugins: {
    preflight: true, // keep the base reset
  },
};
