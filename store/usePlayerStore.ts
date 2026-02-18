"use client";

/*───────────────────────────────────────────────────────────────
  File:        store/usePlayerStore.ts
  Module:      Players
  Role:        Zustand Store for Players
  Notes:       Handles CRUD operations with string-based IDs
  Updated:     2026‑02‑18 13:12 PST
────────────────────────────────────────────────────────────────*/

import { create } from "zustand";

export interface Player {
  id: string;
  firstName: string;
  lastName: string;
  handicapIndex?: string;
  teePreference?: string;
}

interface PlayerStore {
  players: Player[];
  addPlayer: (data: Omit<Player, "id">) => void;
  updatePlayer: (id: string, data: Partial<Player>) => void;
  deletePlayer: (id: string) => void;
}

export const usePlayerStore = create<PlayerStore>((set) => ({
  players: [],

  //───────────────────────────────────────────────────────────────
  // Add Player — always generates a clean string ID
  //───────────────────────────────────────────────────────────────
  addPlayer: (data) =>
    set((state) => ({
      players: [
        ...state.players,
        {
          id: crypto.randomUUID(), // guaranteed string ID
          ...data,
        },
      ],
    })),

  //───────────────────────────────────────────────────────────────
  // Update Player — merges partial updates
  //───────────────────────────────────────────────────────────────
  updatePlayer: (id, data) =>
    set((state) => ({
      players: state.players.map((p) =>
        p.id === id ? { ...p, ...data } : p
      ),
    })),

  //───────────────────────────────────────────────────────────────
  // Delete Player
  //───────────────────────────────────────────────────────────────
  deletePlayer: (id) =>
    set((state) => ({
      players: state.players.filter((p) => p.id !== id),
    })),
}));