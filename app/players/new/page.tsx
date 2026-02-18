/*───────────────────────────────────────────────────────────────
  File:        app/players/new/page.tsx
  Module:      Players
  Role:        Add Player Page
  Notes:       Creates a new player with handicap + tee preference
  Updated:     2026‑02‑18 12:27 PST
────────────────────────────────────────────────────────────────*/

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePlayerStore } from "@/store/usePlayerStore";

export default function NewPlayerPage() {
  const router = useRouter();
  const addPlayer = usePlayerStore((state) => state.addPlayer);

  //───────────────────────────────────────────────────────────────
  // Local form state
  //───────────────────────────────────────────────────────────────
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [handicapIndex, setHandicapIndex] = useState("");
  const [teePreference, setTeePreference] = useState("");

  //───────────────────────────────────────────────────────────────
  // Submit handler
  //───────────────────────────────────────────────────────────────
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    addPlayer({
      firstName,
      lastName,
      handicapIndex,
      teePreference,
    });

    router.push("/players");
  }

  //───────────────────────────────────────────────────────────────
  // Render form
  //───────────────────────────────────────────────────────────────
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add New Player</h1>

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
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Add Player
          </button>

          <button
            type="button"
            onClick={() => router.push("/players")}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
}