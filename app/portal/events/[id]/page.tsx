/*───────────────────────────────────────────────────────────────
  File:        app/portal/events/[id]/page.tsx
  Module:      Portal Events
  Role:        Edit Event Page
  Notes:       Loads event by ID, reuses EventForm, and updates
               the event before redirecting back to Events list.
  Updated:     2026‑02‑20 06:45 PST
────────────────────────────────────────────────────────────────*/

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import EventForm from "@/app/components/EventForm";

export default function EditEventPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const { id } = params;

  const [eventData, setEventData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  //───────────────────────────────────────────────
  // Load event by ID
  //───────────────────────────────────────────────
  useEffect(() => {
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
  // Handle update
  //───────────────────────────────────────────────
  async function handleUpdate(updatedEvent: any) {
    try {
      const res = await fetch(`/api/events/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedEvent),
      });

      if (!res.ok) throw new Error("Failed to update event");

      router.push("/portal/events");
    } catch (err) {
      console.error(err);
    }
  }

  //───────────────────────────────────────────────
  // Render
  //───────────────────────────────────────────────
  if (loading) return <div>Loading event...</div>;
  if (!eventData) return <div>Event not found.</div>;

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="section-header">Edit Event</h1>
      <div className="section-divider" />

      <EventForm initialData={eventData} onSubmit={handleUpdate} />
    </div>
  );
}