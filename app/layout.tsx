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
        {/* Navigation Bar */}
        <nav
          style={{
            background: "#f0f0f0",
            padding: "1rem",
            borderBottom: "1px solid #ccc",
          }}
        >
          <a href="/" style={{ marginRight: "1rem" }}>Home</a>
          <a href="/players">Players</a>
         <nav
  style={{
    background: "#f0f0f0",
    padding: "1rem",
    borderBottom: "1px solid #ccc",
  }}
>
  <a href="/" style={{ marginRight: "1rem" }}>Home</a>
  <a href="/players">Players</a>
  <a href="/events">Events</a>   ← Add this line here
</nav> 
        </nav>

        {/* Page Content */}
        <main style={{ padding: "2rem" }}>{children}</main>
      </body>
    </html>
  );
}