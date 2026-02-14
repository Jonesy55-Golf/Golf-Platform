import { events } from "../eventData";

interface EventDetailPageProps {
  params: {
    id: string;
  };
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  const event = events.find((e) => e.id === params.id);

  if (!event) {
    return <div style={{ padding: "20px" }}>Event not found.</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{event.name}</h1>
      <p>Date: {event.date}</p>
      <p>Format: {event.format}</p>
    </div>
  );
}