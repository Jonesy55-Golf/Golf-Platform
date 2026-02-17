/*───────────────────────────────────────────────────────────────
  File:        app/events/page.tsx
  Module:      Events
  Role:        Events List Page
  Notes:       Displays all events with links + delete support
  Updated:     2026‑02‑17 11:30 PST
────────────────────────────────────────────────────────────────*/

"use client";

import Link from "next/link";
import { useEventsStore } from "@/store/useEventStore";

export default function EventsPage() {
  const events = useEventsStore((state) => state.events);
  const deleteEvent = useEventsStore((state) => state.deleteEvent);

  function handleDelete(id: string) {
    const ok = confirm("Are you sure you want to delete this event?");
    if (!ok) return;
    deleteEvent(id);
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Events</h1>

      <div className="mb-6">
        <Link
          href="/events/new"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Create New Event
        </Link>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="border p-4 rounded shadow-sm hover:shadow-md transition"
          >
            <Link
              href={`/events/${event.id}`}
              className="text-xl font-bold hover:underline"
            >
              {event.name}
            </Link>

            <p className="text-gray-700">{event.date}</p>
            <p className="text-gray-700 mb-4">{event.location}</p>

            <div className="flex gap-4">
              <Link
                href={`/events/${event.id}/edit`}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                Edit
              </Link>

              <button
                onClick={() => handleDelete(event.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>

              <Link
                href={`/events/${event.id}`}
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}