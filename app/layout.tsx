"use client";

/*───────────────────────────────────────────────────────────────
  File:        app/layout.tsx
  Module:      Root Layout
  Role:        Global client wrapper + Navigation
  Notes:       Ensures all pages share the same client environment
               and provides top-level navigation across modules.
  Updated:     2026‑02‑18 14:40 PST
────────────────────────────────────────────────────────────────*/

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {/*───────────────────────────────────────────────
          GLOBAL NAVIGATION BAR
        ───────────────────────────────────────────────*/}
        <nav className="w-full bg-gray-900 text-white px-6 py-4 flex gap-6">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/players" className="hover:text-gray-300">Players</a>
          <a href="/events" className="hover:text-gray-300">Events</a>
          <a href="/rules" className="hover:text-gray-300">Rules</a>
        </nav>

        {/*───────────────────────────────────────────────
          PAGE CONTENT
        ───────────────────────────────────────────────*/}
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}