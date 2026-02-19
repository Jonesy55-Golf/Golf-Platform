/*───────────────────────────────────────────────────────────────
  File:        app/portal/players/add/page.tsx
  Purpose:     Player Portal – Add Player Form
  Updated:     2026-02-19
  Notes:       Writes directly to usePlayerStore. Uses shared styles
               for consistent layout and director-friendly workflow.
────────────────────────────────────────────────────────────────*/

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePlayerStore } from "@/store/usePlayerStore";

export default function AddPlayerPage() {
  const router = useRouter();
  const addPlayer = usePlayerStore((state) => state.addPlayer);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    handicapIndex: "",
    teePreference: "",
    email: "",
    phone: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addPlayer(form);
    router.push("/portal/players");
  };

  return (
    <div className="p-6">

      {/* Header Row */}
      <div className="section-header">
        <h1 className="section-title">Add Player</h1>
      </div>

      <p className="section-subtitle">
        Enter player information below.
      </p>

      <div className="section-divider" />

      {/* Form */}
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
          Save Player
        </button>

      </form>
    </div>
  );
}