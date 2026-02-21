/*───────────────────────────────────────────────────────────────
  File:        app/api/events/route.ts
  Module:      Events API
  Role:        GET all events / POST new event
  Notes:       Uses file‑based storage via eventData.ts helpers
  Updated:     2026‑02‑21 09:58 PST
────────────────────────────────────────────────────────────────*/

import { NextResponse } from "next/server";
import { readEvents, writeEvents, Event } from "../../../data/eventData";
import { v4 as uuid } from "uuid";

//───────────────────────────────────────────────────────────────
// GET /api/events  → return all events
//───────────────────────────────────────────────────────────────
export async function GET() {
  try {
    const events = await readEvents();
    return NextResponse.json(events, { status: 200 });
  } catch (err) {
    console.error("GET /api/events error:", err);
    return NextResponse.json(
      { error: "Failed to load events" },
      { status: 500 }
    );
  }
}

//───────────────────────────────────────────────────────────────
// POST /api/events  → create a new event
//───────────────────────────────────────────────────────────────
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const newEvent: Event = {
      id: uuid(),
      name: body.name,
      date: body.date,
      location: body.location,
      format: body.format,
    };

    const events = await readEvents();
    events.push(newEvent);
    await writeEvents(events);

    return NextResponse.json(newEvent, { status: 201 });
  } catch (err) {
    console.error("POST /api/events error:", err);
    return NextResponse.json(
      { error: "Failed to create event" },
      { status: 500 }
    );
  }
}