export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      {/* Hero Section */}
      <section style={{ marginBottom: "2rem" }}>
        <h1>Welcome to the Golf Platform MVP</h1>
        <p>Your future home for events, scoring, players, and club operations.</p>
      </section>

      {/* Description Section */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>What This Platform Will Do</h2>
        <p>
          This system will eventually support event setup, scoring, payouts,
          course libraries, player management, and everything a director needs
          to run a real-world golf operation.
        </p>
      </section>

      {/* Navigation Placeholder */}
      <section>
        <h2>Navigation</h2>
        <ul>
          <li>Players (coming soon)</li>
          <li>Events (coming soon)</li>
          <li>Courses (coming soon)</li>
        </ul>
      </section>
    </main>
  );
}


