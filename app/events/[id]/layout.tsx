/*───────────────────────────────────────────────────────────────
  File:        app/events/[id]/layout.tsx
  Module:      Events
  Role:        Force client-side rendering for event detail pages
  Updated:     2026‑02‑15 15:55 PST
────────────────────────────────────────────────────────────────*/

"use client";

export default function EventDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}