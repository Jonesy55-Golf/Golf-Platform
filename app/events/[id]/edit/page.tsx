/*───────────────────────────────────────────────────────────────
  File:        app/events/[id]/edit/page.tsx
  Module:      Events
  Role:        Edit Event Page
  Notes:       Allows editing an existing event by ID
  Updated:     2026‑02‑17 1:00 PST
────────────────────────────────────────────────────────────────*/

"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useEventsStore } from "@/store/useEventStore";

export default function EditEventPage() {
  const { id } = useParams();
  const router = useRouter();

  const event = useEventsStore((state) =>
    state.events.find((e) => e.id === id)
  );

  const updateEvent = useEventsStore((state) => state.updateEvent);

  //───────────────────────────────────────────────────────────────
  // If event not found, show fallback
  //───────────────────────────────────────────────────────────────
  if (!event) {
    return (
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
        <button
          onClick={() => router.push("/events")}
          className="text-blue-600 hover:underline"
        >
          Back to Events
        </button>
      </div>
    );
  }

  //───────────────────────────────────────────────────────────────
  // Local state for form fields
  //───────────────────────────────────────────────────────────────
  const [name, setName] = useState(event.name);
  const [date, setDate] = useState(event.date);
  const [location, setLocation] = useState(event.location);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    updateEvent(id as string, {
      name,
      date,
      location,
    });

    router.push(`/events/${id}`);
  }

  //───────────────────────────────────────────────────────────────
  // Render edit form
  //───────────────────────────────────────────────────────────────
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Edit Event</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Event Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div className="flex gap-4 mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save Changes
          </button>

          <button
            type="button"
            onClick={() => router.push(`/events/${id}`)}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}