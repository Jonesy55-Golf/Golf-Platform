/*───────────────────────────────────────────────────────────────
  File:        app/portal/players/[id]/page.tsx
  Purpose:     Player Portal – Player Detail (Aligned to Player Type)
  Updated:     2026-02-19
  Notes:       Uses firstName, lastName, teePreference, email, phone.
────────────────────────────────────────────────────────────────*/

"use client";

import { usePlayerStore } from "@/store/usePlayerStore";
import { useParams } from "next/navigation";

export default function PlayerDetailPage() {
  const { id } = useParams();
  const player = usePlayerStore((state) =>
    state.players.find((p) => String(p.id) === String(id))
  );

  return (
    <div className="p-6">

      {/* Header Row */}
      <div className="section-header">
        <h1 className="section-title">Player Detail</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Edit Player
        </button>
      </div>

      <p className="section-subtitle">
        Detailed information for this player.
      </p>

      <div className="section-divider" />

      {/* If player not found */}
      {!player && (
        <div className="section-block">
          <p className="section-placeholder">
            Player not found. They may have been removed.
          </p>
        </div>
      )}

      {/* Player Detail */}
      {player && (
        <div className="section-block">
          <h2 className="font-semibold mb-2">
            {player.firstName} {player.lastName}
          </h2>

          <div className="space-y-2 text-gray-700">
            <p><span className="font-medium">ID:</span> {player.id}</p>
            <p><span className="font-medium">Tee Preference:</span> {player.teePreference || "—"}</p>
            <p><span className="font-medium">Handicap Index:</span> {player.handicapIndex || "—"}</p>
            <p><span className="font-medium">Email:</span> {player.email || "—"}</p>
            <p><span className="font-medium">Phone:</span> {player.phone || "—"}</p>
          </div>
        </div>
      )}

    </div>
  );
}