/*───────────────────────────────────────────────────────────────
  File:        app/portal/page.tsx
  Purpose:     Player Portal – Layout + Overview Scaffold
  Updated:     2026-02-19
  Notes:       Added top-level Portal header, kept Overview section
               using shared styles for consistent layout.
────────────────────────────────────────────────────────────────*/

export default function PlayerPortalPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Portal Top Header */}
      <header className="w-full border-b bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-semibold">Player Portal</span>
            <span className="text-xs text-gray-500">v1 Scaffold</span>
          </div>
          <nav className="flex gap-4 text-sm text-gray-600">
            <span className="font-medium text-gray-900">Overview</span>
            <span className="hover:text-gray-900 cursor-default">Players</span>
            <span className="hover:text-gray-900 cursor-default">Events</span>
            <span className="hover:text-gray-900 cursor-default">Settings</span>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="mx-auto max-w-6xl px-6 py-6">

        {/* Header Row */}
        <div className="section-header">
          <h1 className="section-title">Player Overview</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
            Add Player
          </button>
        </div>

        <p className="section-subtitle">
          Quick snapshot of your active players and recent activity.
        </p>

        <div className="section-divider" />

        {/* Grid of Overview Cards */}
        <div className="section-grid">

          <div className="section-block">
            <h2 className="font-semibold mb-1">Total Players</h2>
            <p className="text-3xl font-bold">0</p>
          </div>

          <div className="section-block">
            <h2 className="font-semibold mb-1">Active Today</h2>
            <p className="text-3xl font-bold">0</p>
          </div>

          <div className="section-block">
            <h2 className="font-semibold mb-1">Recent Additions</h2>
            <p className="text-3xl font-bold">0</p>
          </div>

        </div>

      </main>
    </div>
  );
}