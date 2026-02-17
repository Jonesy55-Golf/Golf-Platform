/*───────────────────────────────────────────────────────────────
  File:        app/events/[id]/page.tsx
  Module:      Events
  Role:        Event Detail Page
  Notes:       Displays a single event by ID
  Updated:     2026‑02‑17 10:50 PST
────────────────────────────────────────────────────────────────*/

"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEventsStore } from "@/store/useEventStore";

export default function EventDetailPage() {
  const { id } = useParams();

  const event = useEventsStore((state) =>
    state.events.find((e) => e.id === id)
  );

  if (!event) {
    return (
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>

        <Link href="/events" className="text-blue-600 hover:underline">
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">{event.name}</h1>

      <p className="mb-2">
        <strong>Date:</strong> {event.date}
      </p>

      <p className="mb-6">
        <strong>Location:</strong> {event.location}
      </p>

      <div className="flex gap-4">
        <Link
          href={`/events/${event.id}/edit`}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Edit Event
        </Link>

        <Link
          href="/events"
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Back to Events
        </Link>
      </div>
    </div>
  );
}