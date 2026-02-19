/*───────────────────────────────────────────────────────────────
  File:        app/portal/events/page.tsx
  Module:      Events
  Role:        Events List Page
  Notes:       Displays all events from useEventStore
  Updated:     2026‑02‑19
────────────────────────────────────────────────────────────────*/

"use client";

import Link from "next/link";
import { useEventStore } from "@/store/useEventStore";

export default function EventsPage() {
  const events = useEventStore((state) => state.events);

  return (
    <div className="p-6">

      {/* Header */}
      <div className="section-header">
        <h1 className="section-title">Events</h1>
      </div>

      <p className="section-subtitle">
        Manage tournaments, weekly games, and special events.
      </p>

      <div className="section-divider" />

      {/* Add Event Button */}
      <div className="mb-6">
        <Link
          href="/portal/events/new"
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Add Event
        </Link>
      </div>

      {/* Events List */}
      {events.length === 0 ? (
        <p className="text-gray-600">No events created yet.</p>
      ) : (
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="border rounded p-4 flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold">{event.name}</h2>
                <p className="text-sm text-gray-600">{event.date}</p>
              </div>

              <Link
                href={`/portal/events/${event.id}`}
                className="text-blue-600 hover:underline"
              >
                View
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}