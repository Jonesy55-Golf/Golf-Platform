/*───────────────────────────────────────────────────────────────
  File:        app/portal/events/new/page.tsx
  Module:      Events
  Role:        Add Event Page
  Notes:       Creates a new event using useEventStore
  Updated:     2026‑02‑19
────────────────────────────────────────────────────────────────*/

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEventStore } from "@/store/useEventStore";

export default function NewEventPage() {
  const router = useRouter();
  const addEvent = useEventStore((state) => state.addEvent);

  const [form, setForm] = useState({
    name: "",
    date: "",
    format: "",
    course: "",
    notes: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEvent(form);
    router.push("/portal/events");
  };

  return (
    <div className="p-6">

      {/* Header */}
      <div className="section-header">
        <h1 className="section-title">Add Event</h1>
      </div>

      <p className="section-subtitle">
        Create a new tournament or weekly game.
      </p>

      <div className="section-divider" />

      {/* Form */}
      <form onSubmit={handleSubmit} className="section-block space-y-4">

        {/* Event Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Event Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            value={form.date}
            onChange={(e) => handleChange("date", e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* Format */}
        <div>
          <label className="block text-sm font-medium mb-1">Format</label>
          <input
            type="text"
            value={form.format}
            onChange={(e) => handleChange("format", e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Scramble, Stableford, Stroke Play..."
          />
        </div>

        {/* Course */}
        <div>
          <label className="block text-sm font-medium mb-1">Course</label>
          <input
            type="text"
            value={form.course}
            onChange={(e) => handleChange("course", e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Cross Creek, Bandon Dunes..."
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium mb-1">Notes</label>
          <textarea
            value={form.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
            className="w-full border rounded px-3 py-2 h-24"
            placeholder="Optional director notes..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Save Event
        </button>

      </form>
    </div>
  );
}