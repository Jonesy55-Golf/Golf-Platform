/*----------------------------------------------------------------
  File:        app/api/events/[id]/route.ts
  Module:      Events API
  Role:        GET one event / DELETE one event
  Updated:     2026-02-21 12:20 PST
----------------------------------------------------------------*/

import { NextRequest, NextResponse } from "next/server";
import { getEventById, readEvents, writeEvents, Event } from "../../../../data/eventData";

//----------------------------------------------------------------
// GET /api/events/[id]
//----------------------------------------------------------------
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const event = await getEventById(id);

  if (!event) {
    return NextResponse.json({ error: "Event not found" }, { status: 404 });
  }

  return NextResponse.json(event, { status: 200 });
}

//----------------------------------------------------------------
// DELETE /api/events/[id]
//----------------------------------------------------------------
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const events = await readEvents();
  const updated = events.filter((e) => e.id !== id);

  await writeEvents(updated);

  return NextResponse.json({ success: true }, { status: 200 });
}