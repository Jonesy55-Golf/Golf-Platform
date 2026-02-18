"use client";

/*───────────────────────────────────────────────────────────────
  File:        app/players/[id]/page.tsx
  Module:      Players
  Role:        Player Detail Page
  Notes:       Displays a single player's information
  Updated:     2026‑02‑18 13:55 PST
────────────────────────────────────────────────────────────────*/

import React from "react";
import { useRouter } from "next/navigation";
import { usePlayerStore } from "@/store/usePlayerStore";

interface PlayerParams {
  id: string;
}

export default function PlayerDetailPage({
  params,
}: {
  params: Promise<PlayerParams>;
}) {
  const router = useRouter();

  // ⭐ Next.js 16: params is a Promise in client components
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
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        {player.firstName} {player.lastName}
      </h1>

      <div className="space-y-3 text-gray-700">
        <div>
          <span className="font-semibold">Handicap Index:</span>{" "}
          {player.handicapIndex || "N/A"}
        </div>

        <div>
          <span className="font-semibold">Tee Preference:</span>{" "}
          {player.teePreference || "N/A"}
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={() => router.push(`/players/${player.id}/edit`)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Edit Player
        </button>

        <button
          onClick={() => router.push("/players")}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Back
        </button>
      </div>
    </div>
  );
}