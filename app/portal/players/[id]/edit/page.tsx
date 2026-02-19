/*───────────────────────────────────────────────────────────────
  File:        app/portal/players/[id]/edit/page.tsx
  Purpose:     Player Portal – Edit Player Form
  Updated:     2026-02-19
  Notes:       Loads existing player data, allows editing, and
               updates the Zustand store. Uses shared styles.
────────────────────────────────────────────────────────────────*/

"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { usePlayerStore } from "@/store/usePlayerStore";

export default function EditPlayerPage() {
  const router = useRouter();
  const { id } = useParams();

  const players = usePlayerStore((state) => state.players);
  const updatePlayer = usePlayerStore((state) => state.updatePlayer);

  const player = players.find((p) => String(p.id) === String(id));

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    handicapIndex: "",
    teePreference: "",
    email: "",
    phone: "",
  });

  // Load player data into form
  useEffect(() => {
    if (player) {
      setForm({
        firstName: player.firstName || "",
        lastName: player.lastName || "",
        handicapIndex: player.handicapIndex || "",
        teePreference: player.teePreference || "",
        email: player.email || "",
        phone: player.phone || "",
      });
    }
  }, [player]);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updatePlayer(String(id), form);
    router.push(`/portal/players/${id}`);
  };

  return (
    <div className="p-6">

      {/* Header Row */}
      <div className="section-header">
        <h1 className="section-title">Edit Player</h1>
      </div>

      <p className="section-subtitle">
        Update player information below.
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

      {/* Edit Form */}
      {player && (
        <form onSubmit={handleSubmit} className="section-block space-y-4">

          {/* First Name */}
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              value={form.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              value={form.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          {/* Handicap Index */}
          <div>
            <label className="block text-sm font-medium mb-1">Handicap Index</label>
            <input
              type="text"
              value={form.handicapIndex}
              onChange={(e) => handleChange("handicapIndex", e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Tee Preference */}
          <div>
            <label className="block text-sm font-medium mb-1">Tee Preference</label>
            <input
              type="text"
              value={form.teePreference}
              onChange={(e) => handleChange("teePreference", e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="text"
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Save Changes
          </button>

        </form>
      )}

    </div>
  );
}