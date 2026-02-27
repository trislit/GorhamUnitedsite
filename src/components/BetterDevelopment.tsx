import Image from "next/image";

export default function BetterDevelopment() {
  return (
    <section id="alternatives" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
            A Better Path Forward
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Alternative Development Potential
          </h2>
          <p className="mt-4 text-lg text-slate">
            This 94-acre parcel could generate more tax revenue, create more
            local jobs, and better serve Gorham&rsquo;s future with thoughtful
            commercial development.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-xl">
            <Image
              src="/slides/slide-38-img-0.jpg"
              alt="Alternative Development Potential - 22 acres local business, $520K tax revenue, 8 acres retained"
              width={900}
              height={500}
              className="w-full max-w-4xl"
            />
          </div>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          <div className="rounded-2xl border border-navy/10 bg-cream p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy/10">
              <svg
                className="h-8 w-8 text-navy"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21"
                />
              </svg>
            </div>
            <p className="mt-5 font-display text-4xl font-bold text-navy">
              22 acres
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Developed with local businesses like Junction Bowl, Gorham House,
              and Hannaford &mdash; the kind of businesses that build community.
            </p>
          </div>

          <div className="rounded-2xl border border-gold/30 bg-gold/5 p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
              <svg
                className="h-8 w-8 text-gold-dark"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="mt-5 font-display text-4xl font-bold text-gold-dark">
              ~$520K
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Estimated annual tax revenue &mdash; approximately{" "}
              <strong>$145K more</strong> than even the high-end Amazon estimate
              of $352K.
            </p>
          </div>

          <div className="rounded-2xl border border-green/20 bg-green/5 p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green/10">
              <svg
                className="h-8 w-8 text-green"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </div>
            <p className="mt-5 font-display text-4xl font-bold text-green">
              8 acres
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Retained as developable land for future opportunities, giving
              Gorham flexibility for years to come.
            </p>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-navy/10 bg-cream p-8 sm:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="font-display text-2xl font-bold text-navy">
              The Parcel Has Enormous Potential
            </h3>
            <p className="mt-4 leading-relaxed text-slate">
              This parcel borders Mosher&rsquo;s Corner Mixed Use, Urban
              Residential, and Office Residential zoning. It sits directly on
              the METRO bus line and borders a nature preserve. It now has access
              to public utilities. It is less than one mile from an elementary
              school and sits across from one of the most popular residential
              neighborhoods in town.
            </p>
            <p className="mt-4 font-display text-lg font-bold text-navy">
              With thoughtful planning, this land could be so much more than a
              warehouse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
