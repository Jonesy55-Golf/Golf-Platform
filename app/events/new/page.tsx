// ------------------------------------------------------
// File: app/events/new/page.tsx
// Module: Events
// Role: Add Event Form
// Notes: Creates new event and writes to JSON storage
// ------------------------------------------------------

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { events, saveEvents } from "../../../lib/eventData";

export default function NewEventPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [format, setFormat] = useState("Scramble");

  function handleSave() {
    const newEvent = {
      id: Date.now().toString(),
      name,
      date,
      format,
    };

    events.push(newEvent);
    saveEvents(); // <-- writes to JSON

    router.push(`/events/${newEvent.id}`);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Create New Event</h1>

      <div style={{ marginTop: "10px" }}>
        <label>Name: </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>Date: </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>Format: </label>
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          style={{ marginLeft: "10px" }}
        >
          <option>Scramble</option>
          <option>Best Ball</option>
          <option>Stroke Play</option>
        </select>
      </div>

      <button
        onClick={handleSave}
        style={{ marginTop: "20px", padding: "8px 12px" }}
      >
        Save Event
      </button>
    </div>
  );
}