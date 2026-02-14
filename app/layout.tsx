export const metadata = {
  title: "Golf Platform MVP",
  description: "A modern golf operations platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", margin: 0 }}>
        <nav style={{ 
          display: "flex", 
          gap: "1rem", 
          padding: "1rem", 
          background: "#f5f5f5", 
          borderBottom: "1px solid #ddd",
          fontFamily: "sans-serif"
        }}>
          <a href="/players">Players</a>
          <a href="/events">Events</a>
          <a href="/courses">Courses</a>
          <a href="/scoring">Scoring</a>
          <a href="/payouts">Payouts</a>
          <a href="/side-games">Side Games</a>
          <a href="/season">Season</a>
          <a href="/rules">Rules</a>
          <a href="/history">History</a>
          <a href="/settings">Settings</a>
          <a href="/director">Director</a>
        </nav>

        <main style={{ padding: "2rem" }}>
          {children}
        </main>
      </body>
    </html>
  );
}