"use client";

/*----------------------------------------------------------------
  File:        app/portal/events/delete/page.tsx
  Module:      Portal Events
  Role:        Delete Event Confirmation Page
  Notes:       Loads event by ID, confirms deletion, and redirects
               back to Events list after successful delete.
  Updated:     2026‑02‑21 17:37 PST
----------------------------------------------------------------*/

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DeleteEventPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [eventData, setEventData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  //───────────────────────────────────────────────
  // Load event by ID
  //───────────────────────────────────────────────
  useEffect(() => {
    if (!id) return;

    async function fetchEvent() {
      try {
        const res = await fetch(`/api/events/${id}`);
        if (!res.ok) throw new Error("Failed to load event");

        const data = await res.json();
        setEventData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchEvent();
  }, [id]);

  //───────────────────────────────────────────────
  // Handle delete
  //───────────────────────────────────────────────
  async function handleDelete() {
    try {
      const res = await fetch(`/api/events/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete event");

      router.push("/portal/events");
    } catch (err) {
      console.error(err);
    }
  }

  //───────────────────────────────────────────────
  // Render
  //───────────────────────────────────────────────
  if (!id) return <div>Missing event ID.</div>;
  if (loading) return <div>Loading event...</div>;
  if (!eventData) return <div>Event not found.</div>;

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="section-header">Delete Event</h1>
      <div className="section-divider" />

      <p className="mb-6">
        Are you sure you want to delete the event:
        <span className="font-semibold"> {eventData.name}</span>?
      </p>

      <div className="flex gap-4">
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Yes, Delete
        </button>

        <button
          onClick={() => router.push("/portal/events")}
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}