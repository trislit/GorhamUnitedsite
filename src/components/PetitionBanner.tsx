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
    <div
      className="fixed top-0 left-0 right-0 z-60 border-b-2 border-navy-dark/35 bg-gold text-navy-dark shadow-[0_4px_24px_rgba(15,31,56,0.22)]"
      role="region"
      aria-label="Petition announcement"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:py-3.5">
        <a
          href="/petition"
          className="inline-flex min-w-0 flex-1 items-center gap-2.5 text-left text-sm font-bold leading-snug hover:underline hover:decoration-2 underline-offset-4 sm:gap-3 sm:text-base"
        >
          <span
            className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-dark text-sm font-bold text-gold shadow-sm sm:h-8 sm:w-8"
            aria-hidden
          >
            !
          </span>
          <span>
            Sign the Gorham United petition opposing the Amazon land sale.
          </span>
        </a>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href="/petition"
            className="inline-flex rounded-full bg-navy-dark px-3 py-1.5 text-xs font-bold text-gold shadow-md transition hover:bg-navy hover:shadow-lg sm:px-4 sm:py-2 sm:text-sm"
          >
            <span className="sm:hidden">Sign</span>
            <span className="hidden sm:inline">Sign the petition</span>
          </a>
          <button
            type="button"
            onClick={() => setVisible(false)}
            aria-label="Dismiss announcement"
            className="rounded-full p-1.5 text-navy-dark/80 hover:bg-navy/10 hover:text-navy-dark"
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
