/*───────────────────────────────────────────────────────────────
  File:        app/components/EventForm.tsx
  Module:      Events
  Role:        Shared Event Form Component
  Notes:       Unified Create + Edit form
               Accepts optional initialData
               Matches Players module architecture
  Updated:     2026‑02‑20 06:55 PST
────────────────────────────────────────────────────────────────*/

"use client";

import React from "react";

interface EventFormProps {
  initialData?: {
    name: string;
    date: string;
  };
  onSubmit: (values: { name: string; date: string }) => void;
}

export default function EventForm({ initialData, onSubmit }: EventFormProps) {
  const [name, setName] = React.useState<string>(initialData?.name || "");
  const [date, setDate] = React.useState<string>(initialData?.date || "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name, date });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Event Name */}
      <div>
        <label className="block text-sm font-medium mb-1">Event Name</label>
        <input
          type="text"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      {/* Event Date */}
      <div>
        <label className="block text-sm font-medium mb-1">Event Date</label>
        <input
          type="date"
          value={date}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDate(e.target.value)
          }
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Event
      </button>
    </form>
  );
}