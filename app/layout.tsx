/*───────────────────────────────────────────────────────────────
  File:        app/layout.tsx
  Module:      Root Layout
  Role:        Global wrapper for all pages
  Notes:       Ensures each page renders in its own block layout
               Prevents inline compression from navigation bar
               Fixes spacing issues on Event Detail page
  Updated:     2026‑02‑16 16:56 PST
────────────────────────────────────────────────────────────────*/

import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Golf Platform",
  description: "Tournament management system",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">

        {/*───────────────────────────────────────────────
          Top Navigation Bar
        ───────────────────────────────────────────────*/}
        <nav className="w-full bg-white shadow mb-6">
          <div className="max-w-5xl mx-auto px-4 py-3 flex gap-6">
            <Link href="/players" className="hover:underline">Players</Link>
            <Link href="/events" className="hover:underline">Events</Link>
            <Link href="/courses" className="hover:underline">Courses</Link>
            <Link href="/scoring" className="hover:underline">Scoring</Link>
            <Link href="/payouts" className="hover:underline">Payouts</Link>
            <Link href="/side-games" className="hover:underline">Side Games</Link>
            <Link href="/season" className="hover:underline">Season</Link>
            <Link href="/rules" className="hover:underline">Rules</Link>
            <Link href="/history" className="hover:underline">History</Link>
            <Link href="/settings" className="hover:underline">Settings</Link>
          </div>
        </nav>

        {/*───────────────────────────────────────────────
          Main Content Wrapper
          ⭐ THIS IS THE FIX ⭐
          Forces children to render as a full-width block
          Prevents inline compression from nav bar
        ───────────────────────────────────────────────*/}
        <main className="block w-full max-w-5xl mx-auto px-4">
          {children}
        </main>

      </body>
    </html>
  );
}