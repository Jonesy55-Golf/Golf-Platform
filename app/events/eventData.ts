// ------------------------------------------------------
// File: app/events/eventData.ts
// Module: Events
// Role: Data loader and saver for Events module
// Notes: Loads test or production JSON depending on toggle
// ------------------------------------------------------

import fs from "fs";
import path from "path";

export interface Event {
  id: string;
  name: string;
  date: string;
  format: string;
}

// Toggle between test and production data
// Later we can automate this with environment variables
const USE_TEST_DATA = true;

const filePath = USE_TEST_DATA
  ? path.join(process.cwd(), "data", "events.test.json")
  : path.join(process.cwd(), "data", "events.prod.json");

// Load events from JSON file
export const events: Event[] = JSON.parse(
  fs.readFileSync(filePath, "utf8")
);

// Save events back to JSON file
export function saveEvents() {
  fs.writeFileSync(filePath, JSON.stringify(events, null, 2));
}