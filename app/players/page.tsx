export default function PlayersPage() {
  const mockPlayers = [
    { id: 1, name: "Gary Jones", ghin: "1234567", index: 5.4 },
    { id: 2, name: "Melanie Jones", ghin: "7654321", index: 12.8 },
    { id: 3, name: "John Smith", ghin: "1122334", index: 8.1 },
  ];

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Players</h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "1rem",
        }}
      >
        <thead>
          <tr>
            <th style={{ borderBottom: "2px solid #ccc", textAlign: "left", padding: "0.5rem" }}>Name</th>
            <th style={{ borderBottom: "2px solid #ccc", textAlign: "left", padding: "0.5rem" }}>GHIN</th>
            <th style={{ borderBottom: "2px solid #ccc", textAlign: "left", padding: "0.5rem" }}>Index</th>
          </tr>
        </thead>

        <tbody>
          {mockPlayers.map((player) => (
            <tr key={player.id}>
              <td style={{ borderBottom: "1px solid #eee", padding: "0.5rem" }}>{player.name}</td>
              <td style={{ borderBottom: "1px solid #eee", padding: "0.5rem" }}>{player.ghin}</td>
              <td style={{ borderBottom: "1px solid #eee", padding: "0.5rem" }}>{player.index}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}