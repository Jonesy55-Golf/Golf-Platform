"use client";

import { useState } from "react";
import { events } from "../eventData";
import { useRouter } from "next/navigation";

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

    router.push(`/events/${newEvent.id}`);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Create New Event</h1>

      <div style={{ marginTop: "20px", maxWidth: "400px" }}>
        <label>
          Event Name<br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </label>

        <br /><br />

        <label>
          Date<br />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </label>

        <br /><br />

        <label>
          Format<br />
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          >
            <option>Scramble</option>
            <option>Best Ball</option>
            <option>Stroke Play</option>
            <option>Shamble</option>
          </select>
        </label>

        <br /><br />

        <button
          onClick={handleSave}
          style={{
            padding: "10px 15px",
            cursor: "pointer",
            marginTop: "10px"
          }}
        >
          Save Event
        </button>
      </div>
    </div>
  );
}