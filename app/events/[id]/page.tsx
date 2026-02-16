/*───────────────────────────────────────────────────────────────
  File:        app/events/[id]/page.tsx
  Module:      Events
  Role:        Event Detail Page
  Notes:       Uses React.use() to unwrap params (Next.js 16)
  Updated:     2026‑02‑15 16:10 PST
────────────────────────────────────────────────────────────────*/

"use client";

import { use, useEffect, useState } from "react";
import { useEventStore } from "../../../store/useEventStore";

interface EventDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  // ⭐ Unwrap params (Next.js 16 requirement)
  const { id } = use(params);

  const getEventById = useEventStore((state) => state.getEventById);

  // Hydration guard
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  if (!hydrated) {
    return <div style={{ padding: "20px" }}>Loading event…</div>;
  }

  const event = getEventById(id);

  if (!event) {
    return <div style={{ padding: "20px" }}>Event not found.</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{event.name}</h1>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Format:</strong> {event.format}</p>
    </div>
  );
}