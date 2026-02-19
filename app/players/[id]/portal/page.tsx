"use client";

/*───────────────────────────────────────────────────────────────
  File:        app/players/[id]/portal/page.tsx
  Module:      Players
  Role:        Player Portal (Scaffold)
  Notes:       Entry point for player-facing profile, stats,
               event history, and season summaries.
  Updated:     2026‑02‑18 14:16 PST
────────────────────────────────────────────────────────────────*/

import React from "react";
import { useRouter } from "next/navigation";
import { usePlayerStore } from "@/store/usePlayerStore";

interface PlayerParams {
  id: string;
}

export default function PlayerPortalPage({
  params,
}: {
  params: Promise<PlayerParams>;
}) {
  const router = useRouter();

  // ⭐ Next.js 16: unwrap params
  const { id } = React.use(params);

  const players = usePlayerStore((state) => state.players);
  const player = players.find((p) => p.id === id);

  if (!player) {
    return (
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Player Not Found</h1>
        <button
          onClick={() => router.push("/players")}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Back to Players
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">
        {player.firstName} {player.lastName} — Player Portal
      </h1>

      {/*───────────────────────────────────────────────────────────
        SECTION: Profile Summary
      ───────────────────────────────────────────────────────────*/}
      <section className="border rounded p-4 bg-white shadow-sm">
        <h2 className="text-xl font-semibold mb-3">Profile</h2>
        <p><strong>Handicap Index:</strong> {player.handicapIndex || "N/A"}</p>
        <p><strong>Tee Preference:</strong> {player.teePreference || "N/A"}</p>
      </section>

      {/*───────────────────────────────────────────────────────────
        SECTION: Upcoming Event (placeholder)
      ───────────────────────────────────────────────────────────*/}
      <section className="border rounded p-4 bg-white shadow-sm">
        <h2 className="text-xl font-semibold mb-3">Upcoming Event</h2>
        <p className="text-gray-600">No event data yet.</p>
      </section>

      {/*───────────────────────────────────────────────────────────
        SECTION: Event History (placeholder)
      ───────────────────────────────────────────────────────────*/}
      <section className="border rounded p-4 bg-white shadow-sm">
        <h2 className="text-xl font-semibold mb-3">Event History</h2>
        <p className="text-gray-600">Event history will appear here.</p>
      </section>

      {/*───────────────────────────────────────────────────────────
        SECTION: Season Stats (placeholder)
      ───────────────────────────────────────────────────────────*/}
      <section className="border rounded p-4 bg-white shadow-sm">
        <h2 className="text-xl font-semibold mb-3">Season Stats</h2>
        <p className="text-gray-600">Season stats will appear here.</p>
      </section>

      <div className="flex gap-4">
        <button
          onClick={() => router.push(`/players/${id}`)}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Back to Player
        </button>
      </div>
    </div>
  );
}