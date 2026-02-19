/*───────────────────────────────────────────────────────────────
  File:        app/portal/events/[id]/delete/page.tsx
  Module:      Events
  Role:        Delete Event Confirmation Page
  Notes:       Confirms and deletes an event by ID
  Updated:     2026‑02‑19
────────────────────────────────────────────────────────────────*/

"use client";

import { useRouter, useParams } from "next/navigation";
import { useEventStore } from "@/store/useEventStore";

export default function DeleteEventPage() {
  const router = useRouter();
  const { id } = useParams();

  const events = useEventStore((state) => state.events);
  const deleteEvent = useEventStore((state) => state.deleteEvent);

  const event = events.find((e) => String(e.id) === String(id));

  if (!event) {
    return (
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>

        <button
          onClick={() => router.push("/portal/events")}
          className="text-blue-600 hover:underline"
        >
          Back to Events
        </button>
      </div>
    );
  }

  const handleDelete = () => {
    deleteEvent(event.id);
    router.push("/portal/events");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">

      {/* Header */}
      <div className="section-header">
        <h1 className="section-title">Delete Event</h1>
      </div>

      <p className="section-subtitle">
        Are you sure you want to delete <strong>{event.name}</strong>?
      </p>

      <div className="section-divider" />

      {/* Warning */}
      <p className="mb-6 text-red-600">
        This action cannot be undone.
      </p>

      {/* Actions */}
      <div className="flex gap-4">
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Yes, Delete
        </button>

        <button
          onClick={() => router.push(`/portal/events/${event.id}`)}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}