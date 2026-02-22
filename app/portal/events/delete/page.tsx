"use client";

/*----------------------------------------------------------------
  File:        app/portal/events/delete/page.tsx
  Module:      Portal Events
  Role:        Delete Event Page (Suspense Wrapper)
  Notes:       Required by Next.js 16 to wrap useSearchParams()
               inside a Suspense boundary.
  Updated:     2026‑02‑21 18:22 PST
----------------------------------------------------------------*/

import { Suspense } from "react";
import DeleteEventPageInner from "./DeleteEventPageInner";

export default function DeleteEventPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DeleteEventPageInner />
    </Suspense>
  );
}