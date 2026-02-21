/*───────────────────────────────────────────────────────────────
  File:        app/api/events/[id]/route.ts
  Module:      Events API (Single Event)
  Role:        GET one event / PUT update / DELETE event
  Notes:       Uses file‑based storage via eventData.ts helpers
  Updated:     2026‑02‑21 09:52 PST
────────────────────────────────────────────────────────────────*/

import { NextResponse } from "next/server";
import { readEvents, writeEvents, Event } from "../../../../data/eventData";

//───────────────────────────────────────────────────────────────
// GET /api/events/[id]  → return one event
//───────────────────────────────────────────────────────────────
export async function GET(
  req: Request,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;
    const events = await readEvents();
    const event = events.find((e) => e.id === id);

    if (!event) {
      return NextResponse.json(
        { error: "Event not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(event, { status: 200 });
  } catch (err) {
    console.error("GET /api/events/[id] error:", err);
    return NextResponse.json(
      { error: "Failed to load event" },
      { status: 500 }
    );
  }
}

//───────────────────────────────────────────────────────────────
// PUT /api/events/[id]  → update an event
//───────────────────────────────────────────────────────────────
export async function PUT(
  req: Request,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;
    const body = await req.json();

    const events = await readEvents();
    const index = events.findIndex((e) => e.id === id);

    if (index === -1) {
      return NextResponse.json(
        { error: "Event not found" },
        { status: 404 }
      );
    }

    const updatedEvent: Event = {
      ...events[index],
      ...body,
    };

    events[index] = updatedEvent;
    await writeEvents(events);

    return NextResponse.json(updatedEvent, { status: 200 });
  } catch (err) {
    console.error("PUT /api/events/[id] error:", err);
    return NextResponse.json(
      { error: "Failed to update event" },
      { status: 500 }
    );
  }
}

//───────────────────────────────────────────────────────────────
// DELETE /api/events/[id]  → remove an event
//───────────────────────────────────────────────────────────────
export async function DELETE(
  req: Request,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;

    const events = await readEvents();
    const filtered = events.filter((e) => e.id !== id);

    if (filtered.length === events.length) {
      return NextResponse.json(
        { error: "Event not found" },
        { status: 404 }
      );
    }

    await writeEvents(filtered);

    return NextResponse.json(
      { message: "Event deleted" },
      { status: 200 }
    );
  } catch (err) {
    console.error("DELETE /api/events/[id] error:", err);
    return NextResponse.json(
      { error: "Failed to delete event" },
      { status: 500 }
    );
  }
}