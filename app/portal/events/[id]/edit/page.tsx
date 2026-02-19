/*───────────────────────────────────────────────────────────────
  File:        app/portal/events/[id]/edit/page.tsx
  Module:      Events
  Role:        Edit Event Page
  Notes:       Updates an existing event using useEventStore
  Updated:     2026‑02‑19
────────────────────────────────────────────────────────────────*/

"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useEventStore } from "@/store/useEventStore";

export default function EditEventPage() {
  const { id } = useParams();
  const router = useRouter();

  const events = useEventStore((state) => state.events);
  const updateEvent = useEventStore((state) => state.updateEvent);

  const event = events.find((e) => String(e.id) === String(id));

  const [form, setForm] = useState({
    name: "",
    date: "",
    format: "",
    course: "",
    notes: "",
  });

  useEffect(() => {
    if (event) {
      setForm({
        name: event.name,
        date: event.date,
        format: event.format || "",
        course: event.course || "",
        notes: event.notes || "",
      });
    }
  }, [event]);

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

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateEvent(event.id, form);
    router.push(`/portal/events/${event.id}`);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">

      {/* Header */}
      <div className="section-header">
        <h1 className="section-title">Edit Event</h1>
      </div>

      <p className="section-subtitle">Update event details.</p>

      <div className="section-divider" />

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">

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
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium mb-1">Notes</label>
          <textarea
            value={form.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
            className="w-full border rounded px-3 py-2 h-24"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}