export default function NewEventPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Create New Event</h1>

      <div style={{ marginTop: "20px", maxWidth: "400px" }}>
        <label>
          Event Name<br />
          <input type="text" style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
        </label>

        <br /><br />

        <label>
          Date<br />
          <input type="date" style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
        </label>

        <br /><br />

        <label>
          Format<br />
          <select style={{ width: "100%", padding: "8px", marginTop: "5px" }}>
            <option>Scramble</option>
            <option>Best Ball</option>
            <option>Stroke Play</option>
            <option>Shamble</option>
          </select>
        </label>

        <br /><br />

        <button
          style={{
            padding: "10px 15px",
            cursor: "pointer",
            marginTop: "10px"
          }}
        >
          Save Event
        </button>
      </div>
    </div>
  );
}