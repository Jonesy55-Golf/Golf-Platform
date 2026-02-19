/*───────────────────────────────────────────────────────────────
  File:        app/portal/events/[id]/page.tsx
  Module:      Events
  Role:        Event Detail Page
  Notes:       Displays a single event by ID
  Updated:     2026‑02‑19
────────────────────────────────────────────────────────────────*/

"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEventStore } from "@/store/useEventStore";

export default function EventDetailPage() {
  const { id } = useParams();

  const event = useEventStore((state) =>
    state.events.find((e) => String(e.id) === String(id))
  );

  if (!event) {
    return (
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>

        <Link href="/portal/events" className="text-blue-600 hover:underline">
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto">

      {/* Header */}
      <div className="section-header">
        <h1 className="section-title">{event.name}</h1>
      </div>

      <p className="section-subtitle">Event Details</p>

      <div className="section-divider" />

      {/* Details */}
      <div className="space-y-3 mb-6">
        <p>
          <strong>Date:</strong> {event.date}
        </p>

        <p>
          <strong>Format:</strong> {event.format || "—"}
        </p>

        <p>
          <strong>Course:</strong> {event.course || "—"}
        </p>

        {event.notes && (
          <p>
            <strong>Notes:</strong> {event.notes}
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <Link
          href={`/portal/events/${event.id}/edit`}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Edit Event
        </Link>

        <Link
          href={`/portal/events/${event.id}/delete`}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Delete Event
        </Link>

        <Link
          href="/portal/events"
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Back to Events
        </Link>
      </div>
    </div>
  );
}