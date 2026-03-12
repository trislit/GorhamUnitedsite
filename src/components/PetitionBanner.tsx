"use client";

import { useState, useEffect } from "react";

export default function PetitionBanner() {
  const [visible, setVisible] = useState(true);

  // Simple guard so banner is only shown on large screens if desired in future
  useEffect(() => {
    // Could add localStorage-based persistence later if needed
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gold/95 text-navy-dark shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-xs sm:text-sm">
        <a
          href="/petition"
          className="inline-flex flex-1 items-center gap-2 text-left font-semibold hover:underline underline-offset-4"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-navy/10 text-[11px] font-bold">
            !
          </span>
          <span>
            New: Sign the Gorham United petition opposing the Amazon land sale.
          </span>
        </a>
        <div className="flex items-center gap-2">
          <a
            href="/petition"
            className="hidden rounded-full bg-navy-dark px-3 py-1 text-xs font-semibold text-gold hover:bg-navy sm:inline-flex"
          >
            Sign the petition
          </a>
          <button
            type="button"
            onClick={() => setVisible(false)}
            aria-label="Dismiss announcement"
            className="rounded-full p-1 text-navy/70 hover:bg-navy/10 hover:text-navy"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
