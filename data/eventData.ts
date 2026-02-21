/*----------------------------------------------------------------
  File:        data/eventData.ts
  Module:      Events
  Role:        File-based data layer for Events
  Notes:       Automatically switches between test/prod JSON files
               Provides read/write helpers for API routes
  Updated:     2026-02-21 12:15 PST
----------------------------------------------------------------*/

import { promises as fs } from "fs";
import path from "path";

export interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  format: string;
}

//----------------------------------------------------------------
// Select correct JSON file based on environment
//----------------------------------------------------------------
const isProd = process.env.NODE_ENV === "production";

const dataFile = isProd
  ? path.join(process.cwd(), "data", "events.prod.json")
  : path.join(process.cwd(), "data", "events.test.json");

//----------------------------------------------------------------
// Read all events
//----------------------------------------------------------------
export async function readEvents(): Promise<Event[]> {
  const file = await fs.readFile(dataFile, "utf-8");
  return JSON.parse(file);
}

//----------------------------------------------------------------
// Write all events
//----------------------------------------------------------------
export async function writeEvents(events: Event[]): Promise<void> {
  await fs.writeFile(dataFile, JSON.stringify(events, null, 2), "utf-8");
}

//----------------------------------------------------------------
// Helper: Get one event by ID
//----------------------------------------------------------------
export async function getEventById(id: string): Promise<Event | undefined> {
  const events = await readEvents();
  return events.find((e) => e.id === id);
}