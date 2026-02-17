/*───────────────────────────────────────────────────────────────
  File:        app/components/EventForm.tsx
  Module:      Events
  Role:        Shared Event Form Component
  Notes:       Used by Create + Edit pages
               Typing corrected for TS strict mode
               No store import needed
  Updated:     2026‑02‑16 08:15 PST
────────────────────────────────────────────────────────────────*/

"use client";

import React from "react";

interface EventFormProps {
  initialValues: {
    name: string;
    date: string;
  };
  submitLabel: string;
  onSubmit: (values: { name: string; date: string }) => void;
}

export default function EventForm({
  initialValues,
  submitLabel,
  onSubmit,
}: EventFormProps) {
  const [name, setName] = React.useState<string>(initialValues.name);
  const [date, setDate] = React.useState<string>(initialValues.date);

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
        {submitLabel}
      </button>
    </form>
  );
}