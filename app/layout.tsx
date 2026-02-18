"use client";

/*───────────────────────────────────────────────────────────────
  File:        app/layout.tsx
  Module:      Root Layout
  Role:        Global client wrapper for Zustand state
  Notes:       Ensures all pages share the same client environment
  Updated:     2026‑02‑18 13:45 PST
────────────────────────────────────────────────────────────────*/

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}