/*───────────────────────────────────────────────────────────────
  File:        store/useEventStore.ts
  Module:      Events
  Role:        Global Event Store (Zustand)
  Notes:       Single source of truth for all event data
  Updated:     2026‑02‑15 13:28 PST
────────────────────────────────────────────────────────────────*/

import { create } from "zustand";

export interface EventItem {
  id: string;
  name: string;
  date: string;
  location: string;
  format: string;
}

interface EventStore {
  events: EventItem[];
  addEvent: (event: EventItem) => void;
  getEventById: (id: string) => EventItem | undefined;
}

export const useEventStore = create<EventStore>((set, get) => ({
  events: [],

  addEvent: (event) =>
    set((state) => ({
      events: [...state.events, event],
    })),

  getEventById: (id) => {
    return get().events.find((e) => e.id === id);
  },
}));