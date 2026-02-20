/*───────────────────────────────────────────────────────────────
  File:        app/portal/events/page.tsx
  Module:      Portal Events
  Role:        Events List Page
  Notes:       Displays all events with Edit/Delete actions and
               provides a New Event button. Matches Player Portal
               styling and layout patterns.
  Updated:     2026‑02‑20 07:05 PST
────────────────────────────────────────────────────────────────*/

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EventsPage() {
  const router = useRouter();
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  //───────────────────────────────────────────────
  // Load all events
  //───────────────────────────────────────────────
  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("/api/events");
        if (!res.ok) throw new Error("Failed to load events");

        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  //───────────────────────────────────────────────
  // Render
  //───────────────────────────────────────────────
  if (loading) return <div>Loading events...</div>;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <h1 className="section-header">Events</h1>
      <div className="section-divider" />

      {/* New Event Button */}
      <div className="mb-6">
        <button
          onClick={() => router.push("/portal/events/new")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + New Event
        </button>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {events.length === 0 && (
          <div className="text-gray-500">No events found.</div>
        )}

        {events.map((event) => (
          <div
            key={event.id}
            className="border rounded p-4 flex justify-between items-center"
          >
            <div>
              <div className="font-semibold">{event.name}</div>
              <div className="text-sm text-gray-600">{event.date}</div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => router.push(`/portal/events/${event.id}`)}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                Edit
              </button>

              <button
                onClick={() =>
                  router.push(`/portal/events/delete?id=${event.id}`)
                }
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}