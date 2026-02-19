"use client";

/*───────────────────────────────────────────────────────────────
  File:        store/useEventStore.ts
  Module:      Events
  Role:        Zustand Store for Events
  Updated:     2026‑02‑19
────────────────────────────────────────────────────────────────*/

import { create } from "zustand";

export interface Event {
  id: string;
  name: string;
  date: string;
  format?: string;
  course?: string;
  notes?: string;
}

interface EventStore {
  events: Event[];
  addEvent: (data: Omit<Event, "id">) => void;
  updateEvent: (id: string, data: Partial<Event>) => void;
  deleteEvent: (id: string) => void;
}

export const useEventStore = create<EventStore>((set) => ({
  events: [],

  addEvent: (data) =>
    set((state: EventStore) => ({
      events: [
        ...state.events,
        {
          id: crypto.randomUUID(),
          ...data,
        },
      ],
    })),

  updateEvent: (id, data) =>
    set((state: EventStore) => ({
      events: state.events.map((event: Event) =>
        event.id === id ? { ...event, ...data } : event
      ),
    })),

  deleteEvent: (id) =>
    set((state: EventStore) => ({
      events: state.events.filter((event: Event) => event.id !== id),
    })),
}));