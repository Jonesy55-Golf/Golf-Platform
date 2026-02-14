"use client";

import { useState } from "react";

export default function PlayersPage() {
  const [players, setPlayers] = useState([
    { id: 1, name: "Gary Jones", ghin: "1234567", index: 5.4 },
    { id: 2, name: "Melanie Jones", ghin: "7654321", index: 12.8 },
    { id: 3, name: "John Smith", ghin: "1122334", index: 8.1 },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newPlayer, setNewPlayer] = useState({ name: "", ghin: "", index: "" });

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editPlayer, setEditPlayer] = useState({ name: "", ghin: "", index: "" });

  const addPlayer = () => {
    setPlayers([
      ...players,
      {
        id: players.length + 1,
        name: newPlayer.name,
        ghin: newPlayer.ghin,
        index: parseFloat(newPlayer.index),
      },
    ]);

    setNewPlayer({ name: "", ghin: "", index: "" });
    setShowForm(false);
  };

  const startEdit = (player: any) => {
    setEditingId(player.id);
    setEditPlayer({
      name: player.name,
      ghin: player.ghin,
      index: player.index.toString(),
    });
  };

  const saveEdit = () => {
    setPlayers(
      players.map((p) =>
        p.id === editingId
          ? {
              ...p,
              name: editPlayer.name,
              ghin: editPlayer.ghin,
              index: parseFloat(editPlayer.index),
            }
          : p
      )
    );

    setEditingId(null);
    setEditPlayer({ name: "", ghin: "", index: "" });
  };

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Players</h1>

      <button
        onClick={() => setShowForm(!showForm)}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem", cursor: "pointer" }}
      >
        {showForm ? "Cancel" : "Add Player"}
      </button>

      {showForm && (
        <div style={{ marginTop: "1rem" }}>
          <input
            type="text"
            placeholder="Name"
            value={newPlayer.name}
            onChange={(e) => setNewPlayer({ ...newPlayer, name: e.target.value })}
            style={{ marginRight: "0.5rem", padding: "0.3rem" }}
          />
          <input
            type="text"
            placeholder="GHIN"
            value={newPlayer.ghin}
            onChange={(e) => setNewPlayer({ ...newPlayer, ghin: e.target.value })}
            style={{ marginRight: "0.5rem", padding: "0.3rem" }}
          />
          <input
            type="number"
            placeholder="Index"
            value={newPlayer.index}
            onChange={(e) => setNewPlayer({ ...newPlayer, index: e.target.value })}
            style={{ marginRight: "0.5rem", padding: "0.3rem" }}
          />

          <button onClick={addPlayer} style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
            Save
          </button>
        </div>
      )}

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "1.5rem",
        }}
      >
        <thead>
          <tr>
            <th style={{ borderBottom: "2px solid #ccc", textAlign: "left", padding: "0.5rem" }}>Name</th>
            <th style={{ borderBottom: "2px solid #ccc", textAlign: "left", padding: "0.5rem" }}>GHIN</th>
            <th style={{ borderBottom: "2px solid #ccc", textAlign: "left", padding: "0.5rem" }}>Index</th>
            <th style={{ borderBottom: "2px solid #ccc", padding: "0.5rem" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              {editingId === player.id ? (
                <>
                  <td style={{ padding: "0.5rem" }}>
                    <input
                      type="text"
                      value={editPlayer.name}
                      onChange={(e) => setEditPlayer({ ...editPlayer, name: e.target.value })}
                    />
                  </td>
                  <td style={{ padding: "0.5rem" }}>
                    <input
                      type="text"
                      value={editPlayer.ghin}
                      onChange={(e) => setEditPlayer({ ...editPlayer, ghin: e.target.value })}
                    />
                  </td>
                  <td style={{ padding: "0.5rem" }}>
                    <input
                      type="number"
                      value={editPlayer.index}
                      onChange={(e) => setEditPlayer({ ...editPlayer, index: e.target.value })}
                    />
                  </td>
                  <td style={{ padding: "0.5rem" }}>
                    <button onClick={saveEdit} style={{ marginRight: "0.5rem" }}>Save</button>
                    <button onClick={() => setEditingId(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td style={{ borderBottom: "1px solid #eee", padding: "0.5rem" }}>{player.name}</td>
                  <td style={{ borderBottom: "1px solid #eee", padding: "0.5rem" }}>{player.ghin}</td>
                  <td style={{ borderBottom: "1px solid #eee", padding: "0.5rem" }}>{player.index}</td>
                  <td style={{ borderBottom: "1px solid #eee", padding: "0.5rem" }}>
                    <button onClick={() => startEdit(player)}>Edit</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}