import Link from "next/link";
import { events } from "../../lib/eventData";

export default function EventsPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Events</h1>

      <Link href="/events/new">
        <button style={{ marginTop: "10px", padding: "8px 12px" }}>
          Add Event
        </button>
      </Link>

      <ul style={{ marginTop: "20px" }}>
        {events.map((event) => (
          <li key={event.id} style={{ marginBottom: "10px" }}>
            <Link href={`/events/${event.id}`}>
              {event.name} — {event.date}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}