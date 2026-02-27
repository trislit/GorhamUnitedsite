import Image from "next/image";

export default function TheIssue() {
  return (
    <section id="issue" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
            What&rsquo;s Happening
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            The Proposed Amazon Warehouse
          </h2>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-8">
            <div className="rounded-2xl border border-red-200 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-3 font-display text-xl font-bold text-navy">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </span>
                The Sale
              </h3>
              <p className="mt-3 leading-relaxed text-slate">
                Gorham authorized the sale of a{" "}
                <strong>94-acre parcel to Amazon for $4 million</strong>. The
                Town Council meeting to authorize the sale had the{" "}
                <strong>minimum 24 hours public notice</strong> and{" "}
                <strong>no opportunity for public comment</strong>.
              </p>
            </div>

            <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-3 font-display text-xl font-bold text-navy">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21"
                    />
                  </svg>
                </span>
                The Facility
              </h3>
              <p className="mt-3 leading-relaxed text-slate">
                On December 1st, Amazon presented preliminary plans for a{" "}
                <strong>&ldquo;last-mile delivery&rdquo; warehouse</strong>{" "}
                &mdash; a{" "}
                <strong>146,280 sq ft facility that will operate 24/7</strong>.
                Semi-trucks will deliver goods, which are then loaded onto vans
                for residential delivery across the region.
              </p>
            </div>

            <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-3 font-display text-xl font-bold text-navy">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-dark">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                Current Status
              </h3>
              <p className="mt-3 leading-relaxed text-slate">
                Amazon is in the process of getting DEP site location and
                stormwater permits, Maine DOT traffic movement permits, and Army
                Corps wetland permits. Amazon has{" "}
                <strong>
                  extended their option to purchase through April
                </strong>
                . The land sale has not yet been finalized.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-lg">
              <Image
                src="/slides/slide-17-img-0.jpg"
                alt="Amazon last mile delivery facility comparison"
                width={800}
                height={500}
                className="w-full"
              />
              <div className="bg-white p-4">
                <p className="text-sm font-medium text-slate/60">
                  Typical Amazon Last Mile Delivery Station &mdash; the type of
                  facility proposed for Gorham
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-gold/30 bg-gold/10 p-6">
              <h4 className="font-display text-lg font-bold text-navy">
                Key Permits Being Sought
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-slate">
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  DEP Site Location &amp; Stormwater Permits
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Maine DOT Traffic Movement Permit
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Army Corps Wetland Permit
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Gorham Planning Board Site Plan Review
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
