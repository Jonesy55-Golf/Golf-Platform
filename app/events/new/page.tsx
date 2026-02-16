/*───────────────────────────────────────────────────────────────
  File:        app/events/new/page.tsx
  Module:      Events
  Role:        Add Event Form
  Notes:       Saves new event into Zustand store
  Updated:     2026‑02‑15 15:05 PST
────────────────────────────────────────────────────────────────*/

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEventStore } from "../../../store/useEventStore";

export default function NewEventPage() {
  const router = useRouter();
  const addEvent = useEventStore((state) => state.addEvent);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [format, setFormat] = useState("Scramble");

  /*───────────────────────────────────────────────────────────────
    Section:     Diagnostic Update — handleSave()
    Purpose:     Add console.log so we can see exactly what event
                 data is being saved into the Zustand store
    Updated:     2026‑02‑15 15:05 PST
  ────────────────────────────────────────────────────────────────*/

  function handleSave() {
    const newEvent = {
      id: Date.now().toString(),
      name,
      date,
      location,
      format,
    };

    console.log("Saving event:", newEvent);

    addEvent(newEvent);

    router.push(`/events/${newEvent.id}`);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Create New Event</h1>

      <div style={{ marginTop: "10px" }}>
        <label>Name: </label>
        <input
          type="text"
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
        <label>Location: </label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
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