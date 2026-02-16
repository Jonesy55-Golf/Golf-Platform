/*───────────────────────────────────────────────────────────────
  File:        data/eventData.ts
  Module:      Events
  Role:        Event type definition and in‑memory event store
  Notes:       Temporary data layer until persistent storage added
  Updated:     2026‑02‑15 12:21 PST
────────────────────────────────────────────────────────────────*/

export interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  format: string;     // Added to match the rest of the system
}

export const events: Event[] = [];