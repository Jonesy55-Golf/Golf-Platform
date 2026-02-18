/*───────────────────────────────────────────────────────────────
  File:        app/players/page.tsx
  Module:      Players
  Role:        Players List Page
  Notes:       Lists all players with CRUD actions
  Updated:     2026‑02‑18 12:24 PST
────────────────────────────────────────────────────────────────*/

"use client";

import Link from "next/link";
import { usePlayerStore } from "@/store/usePlayerStore";

export default function PlayersPage() {
  const players = usePlayerStore((state) => state.players);
  const deletePlayer = usePlayerStore((state) => state.deletePlayer);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Players</h1>

        <Link
          href="/players/new"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Create New Player
        </Link>
      </div>

      {players.length === 0 ? (
        <p className="text-gray-600">
          No players found. Click &quot;Create New Player&quot; to add one.
        </p>
      ) : (
        <div className="space-y-3">
          {players.map((player) => (
            <div
              key={player.id}
              className="border rounded p-4 flex items-center justify-between"
            >
              <div>
                <div className="font-semibold">
                  {player.firstName} {player.lastName}
                </div>

                <div className="text-sm text-gray-600">
                  Handicap Index: {player.handicapIndex || "N/A"}
                </div>

                <div className="text-sm text-gray-600">
                  Tee Preference: {player.teePreference || "N/A"}
                </div>
              </div>

              <div className="flex gap-2">
                <Link
                  href={`/players/${player.id}`}
                  className="bg-gray-200 px-3 py-1 rounded text-sm hover:bg-gray-300"
                >
                  View
                </Link>

                <Link
                  href={`/players/${player.id}/edit`}
                  className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                >
                  Edit
                </Link>

                <button
                  onClick={() => deletePlayer(player.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}