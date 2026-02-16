/*───────────────────────────────────────────────────────────────
  File:        app/events/page.tsx
  Module:      Events
  Role:        Events List Page
  Notes:       Reads events from global Zustand store
  Updated:     2026‑02‑15 13:28 PST
────────────────────────────────────────────────────────────────*/

"use client";

import Link from "next/link";
import { useEventStore } from "../../store/useEventStore";

export default function EventsPage() {
  const events = useEventStore((state) => state.events);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Events</h1>

      <Link href="/events/new">
        <button style={{ marginBottom: "20px", padding: "8px 12px" }}>
          Add Event
        </button>
      </Link>

      <ul>
        {events.map((event) => (
          <li key={event.id} style={{ marginBottom: "10px" }}>
            <Link href={`/events/${event.id}`}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}