export default function EventsPage() {
  const events = [
    { id: "1", name: "Opening Day Scramble", date: "2025-04-12", format: "Scramble", status: "Upcoming" },
    { id: "2", name: "Member-Member", date: "2025-05-03", format: "Best Ball", status: "Upcoming" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Events</h1>

      <button
        style={{
          marginTop: "10px",
          marginBottom: "20px",
          padding: "10px 15px",
          cursor: "pointer",
        }}
      >
        Add Event
      </button>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Name</th>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Date</th>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Format</th>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Status</th>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td style={{ padding: "8px" }}>{event.name}</td>
              <td style={{ padding: "8px" }}>{event.date}</td>
              <td style={{ padding: "8px" }}>{event.format}</td>
              <td style={{ padding: "8px" }}>{event.status}</td>
              <td style={{ padding: "8px" }}>
                <a href={`/events/${event.id}`} style={{ color: "blue" }}>
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}