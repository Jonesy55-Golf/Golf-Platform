/*───────────────────────────────────────────────────────────────
  File:        store/useEventStore.ts
  Module:      Events Store
  Role:        Global event state management
  Notes:       Event type updated to include location
               All CRUD functions updated accordingly
  Updated:     2026‑02‑16 16:00 PST
────────────────────────────────────────────────────────────────*/

import { create } from "zustand";

export type Event = {
  id: string;
  name: string;
  date: string;
  location: string;
};

type EventsState = {
  events: Event[];
  addEvent: (event: Event) => void;
  updateEvent: (id: string, updated: Partial<Event>) => void;
  deleteEvent: (id: string) => void;
};

export const useEventsStore = create<EventsState>((set) => ({
  events: [],

  addEvent: (event) =>
    set((state) => ({
      events: [...state.events, event],
    })),

  updateEvent: (id, updated) =>
    set((state) => ({
      events: state.events.map((e) =>
        e.id === id ? { ...e, ...updated } : e
      ),
    })),

  deleteEvent: (id) =>
    set((state) => ({
      events: state.events.filter((e) => e.id !== id),
    })),
}));