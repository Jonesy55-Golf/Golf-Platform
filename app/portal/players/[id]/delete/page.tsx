/*───────────────────────────────────────────────────────────────
  File:        app/portal/players/[id]/delete/page.tsx
  Purpose:     Player Portal – Delete Player Confirmation
  Updated:     2026-02-19
  Notes:       Simple confirmation page that deletes the player
               and redirects back to the Player List.
────────────────────────────────────────────────────────────────*/

"use client";

import { useRouter, useParams } from "next/navigation";
import { usePlayerStore } from "@/store/usePlayerStore";

export default function DeletePlayerPage() {
  const router = useRouter();
  const { id } = useParams();

  const players = usePlayerStore((state) => state.players);
  const deletePlayer = usePlayerStore((state) => state.deletePlayer);

  const player = players.find((p) => String(p.id) === String(id));

  const handleDelete = () => {
    deletePlayer(String(id));
    router.push("/portal/players");
  };

  return (
    <div className="p-6">

      {/* Header */}
      <div className="section-header">
        <h1 className="section-title">Delete Player</h1>
      </div>

      <p className="section-subtitle">
        Confirm removal of this player from your system.
      </p>

      <div className="section-divider" />

      {/* If player not found */}
      {!player && (
        <div className="section-block">
          <p className="section-placeholder">
            Player not found. They may have already been removed.
          </p>
        </div>
      )}

      {/* Confirmation */}
      {player && (
        <div className="section-block space-y-4">
          <p className="text-gray-700">
            Are you sure you want to delete{" "}
            <span className="font-semibold">
              {player.firstName} {player.lastName}
            </span>
            ?
          </p>

          <div className="flex gap-3">
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-600 text-white rounded-md"
            >
              Yes, Delete
            </button>

            <button
              onClick={() => router.push(`/portal/players/${id}`)}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

    </div>
  );
}