/*───────────────────────────────────────────────────────────────
  File:        tailwind.config.js
  Module:      Tailwind CSS Configuration
  Role:        Defines scan paths and theme extensions
  Notes:       Enables Tailwind in the app/ directory
               Required for gap‑4 and other utilities to work
  Updated:     2026‑02‑16 16:38 PST
────────────────────────────────────────────────────────────────*/

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./store/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};