/*───────────────────────────────────────────────────────────────
  File:        app/events/new/page.tsx
  Module:      Events
  Role:        Create New Event Page
  Notes:       Adds a new event to the store
  Updated:     2026‑02‑17 11:45 PST
────────────────────────────────────────────────────────────────*/

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEventsStore } from "@/store/useEventStore";

export default function NewEventPage() {
  const router = useRouter();
  const addEvent = useEventsStore((state) => state.addEvent);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newEvent = {
      id: crypto.randomUUID(),   // ⭐ FIXED — guaranteed unique ID
      name,
      date,
      location,
    };

    addEvent(newEvent);
    router.push("/events");
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create Event</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          placeholder="Event Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full border p-2 rounded"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          className="w-full border p-2 rounded"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save Event
        </button>
      </form>
    </div>
  );
}