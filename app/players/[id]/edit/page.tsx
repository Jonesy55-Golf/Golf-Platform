"use client";

/*───────────────────────────────────────────────────────────────
  File:        app/players/[id]/edit/page.tsx
  Module:      Players
  Role:        Edit Player Page
  Notes:       Updates an existing player's information
  Updated:     2026‑02‑18 13:55 PST
────────────────────────────────────────────────────────────────*/

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { usePlayerStore } from "@/store/usePlayerStore";

interface PlayerParams {
  id: string;
}

export default function EditPlayerPage({
  params,
}: {
  params: Promise<PlayerParams>;
}) {
  const router = useRouter();

  // ⭐ Next.js 16: params is a Promise in client components
  const { id } = React.use(params);

  const players = usePlayerStore((state) => state.players);
  const updatePlayer = usePlayerStore((state) => state.updatePlayer);

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

  const [firstName, setFirstName] = useState(player.firstName);
  const [lastName, setLastName] = useState(player.lastName);
  const [handicapIndex, setHandicapIndex] = useState(player.handicapIndex);
  const [teePreference, setTeePreference] = useState(player.teePreference);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    updatePlayer(id, {
      firstName,
      lastName,
      handicapIndex,
      teePreference,
    });

    router.push(`/players/${id}`);
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Edit Player</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Handicap Index</label>
          <input
            type="text"
            value={handicapIndex}
            onChange={(e) => setHandicapIndex(e.target.value)}
            placeholder="e.g., 12.4"
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Tee Preference</label>
          <select
            value={teePreference}
            onChange={(e) => setTeePreference(e.target.value)}
            className="border p-2 rounded w-full"
            required
          >
            <option value="">Select Tee</option>
            <option value="Black">Black</option>
            <option value="Orange">Orange</option>
            <option value="Orange/Green Combo">Orange/Green Combo</option>
            <option value="Green">Green</option>
            <option value="Green/Yellow Combo">Green/Yellow Combo</option>
            <option value="Yellow">Yellow</option>
          </select>
        </div>

        <div className="flex gap-4 mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save Changes
          </button>

          <button
            type="button"
            onClick={() => router.push(`/players/${id}`)}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}