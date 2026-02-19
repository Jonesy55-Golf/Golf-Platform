"use client";

/*───────────────────────────────────────────────────────────────
  File:        app/players/[id]/portal/page.tsx
  Purpose:     Player Portal – master page for all player-facing modules
  Created:     2026-02-19
  Author:      Gary L. Jones
  Notes:       Full top-down scaffold. Build sections in order.
────────────────────────────────────────────────────────────────*/

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function PlayerPortalPage() {
  const { id } = useParams();
  const [player, setPlayer] = useState<any>(null);

  // Fetch player data
  useEffect(() => {
    async function fetchPlayer() {
      try {
        const res = await fetch(`/api/players/${id}`);
        const data = await res.json();
        setPlayer(data);
      } catch (err) {
        console.error("Error loading player:", err);
      }
    }
    fetchPlayer();
  }, [id]);

  if (!player) {
    return (
      <div className="p-6 text-gray-600">
        Loading Player Portal…
      </div>
    );
  }

  return (
    <div className="p-6 space-y-10">

      {/*──────────────────────────────────────────────
        HEADER
      ──────────────────────────────────────────────*/}
      <section>
        <h1 className="text-3xl font-bold text-gray-900">
          {player.firstName} {player.lastName}
        </h1>
        <p className="text-gray-600">Player Portal</p>
      </section>

      {/*──────────────────────────────────────────────
        PROFILE
      ──────────────────────────────────────────────*/}
      <section className="section-block">
        <h2 className="section-title">Profile</h2>
        <p className="section-placeholder">Profile details will go here.</p>
      </section>

      {/*──────────────────────────────────────────────
        CONTACT INFO
      ──────────────────────────────────────────────*/}
      <section className="section-block">
        <h2 className="section-title">Contact Information</h2>
        <p className="section-placeholder">Email, phone, address, emergency contact.</p>
      </section>

      {/*──────────────────────────────────────────────
        MEMBERSHIP / CLUB INFO
      ──────────────────────────────────────────────*/}
      <section className="section-block">
        <h2 className="section-title">Club & Membership</h2>
        <p className="section-placeholder">Club, GHIN, member type, join date.</p>
      </section>

      {/*──────────────────────────────────────────────
        HANDICAP
      ──────────────────────────────────────────────*/}
      <section className="section-block">
        <h2 className="section-title">Handicap</h2>
        <p className="section-placeholder">Index, trend, revision history.</p>
      </section>

      {/*──────────────────────────────────────────────
        STATS
      ──────────────────────────────────────────────*/}
      <section className="section-block">
        <h2 className="section-title">Stats</h2>
        <p className="section-placeholder">Fairways, greens, putts, scoring averages.</p>
      </section>

      {/*──────────────────────────────────────────────
        EVENT HISTORY
      ──────────────────────────────────────────────*/}
      <section className="section-block">
        <h2 className="section-title">Event History</h2>
        <p className="section-placeholder">Past events, scores, placements.</p>
      </section>

      {/*──────────────────────────────────────────────
        SEASON SUMMARY
      ──────────────────────────────────────────────*/}
      <section className="section-block">
        <h2 className="section-title">Season Summary</h2>
        <p className="section-placeholder">Rounds played, earnings, highlights.</p>
      </section>

      {/*──────────────────────────────────────────────
        WINS & ACHIEVEMENTS
      ──────────────────────────────────────────────*/}
      <section className="section-block">
        <h2 className="section-title">Wins & Achievements</h2>
        <p className="section-placeholder">Trophies, awards, milestones.</p>
      </section>

      {/*──────────────────────────────────────────────
        HANDICAP HISTORY GRAPH
      ──────────────────────────────────────────────*/}
      <section className="section-block">
        <h2 className="section-title">Handicap Trend</h2>
        <p className="section-placeholder">Graph of index over time.</p>
      </section>

      {/*──────────────────────────────────────────────
        ROUND-BY-ROUND BREAKDOWN
      ──────────────────────────────────────────────*/}
      <section className="section-block">
        <h2 className="section-title">Round-by-Round Breakdown</h2>
        <p className="section-placeholder">Hole-by-hole scoring, stats.</p>
      </section>

      {/*──────────────────────────────────────────────
        SKINS / KP / SIDE GAMES
      ──────────────────────────────────────────────*/}
      <section className="section-block">
        <h2 className="section-title">Side Games</h2>
        <p className="section-placeholder">Skins, KP, net/gross wins.</p>
      </section>

      {/*──────────────────────────────────────────────
        FINANCIALS / BALANCE / PAYMENTS
      ──────────────────────────────────────────────*/}
      <section className="section-block">
        <h2 className="section-title">Financials</h2>
        <p className="section-placeholder">Balance, payments, credits, charges.</p>
      </section>

      {/*──────────────────────────────────────────────
        NOTES & HISTORY
      ──────────────────────────────────────────────*/}
      <section className="section-block">
        <h2 className="section-title">Notes</h2>
        <p className="section-placeholder">Director notes, player notes.</p>
      </section>

      {/*──────────────────────────────────────────────
        SETTINGS / PREFERENCES
      ──────────────────────────────────────────────*/}
      <section className="section-block">
        <h2 className="section-title">Preferences</h2>
        <p className="section-placeholder">Tee choice, notifications, privacy.</p>
      </section>

    </div>
  );
}