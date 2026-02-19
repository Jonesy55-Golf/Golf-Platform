/*───────────────────────────────────────────────────────────────
  File:        tailwind.config.js
  Purpose:     Tailwind configuration for the Golf Platform
  Restored:    2026-02-19
  Notes:       Clean restore after accidental deletion. Standard
               content paths included for app, components, store.
────────────────────────────────────────────────────────────────*/

/** @type {import('tailwindcss').Config} */
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