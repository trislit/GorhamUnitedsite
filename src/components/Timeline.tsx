import Image from "next/image";

const events = [
  {
    date: "November 2019",
    title: "Town Vote",
    description:
      "Town vote to borrow $5.9M to purchase & improve 140 acres for industrial park expansion. Passed 1,378 Yes / 1,016 No. Created 1 large lot (94 acres) on Main St & 5 small lots off New Portland Rd with new road construction (Cyr Dr).",
    icon: (
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
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    date: "2020–2024",
    title: "Tepid Interest",
    description:
      "Only 2 small lots sold. 2 prior buyers walked away from purchasing large lot splits. Restrictive land uses (industrial only), COVID tanked the commercial real estate market, no direct access to sewer & water.",
    icon: (
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
          d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.15c0 .415.336.75.75.75z"
        />
      </svg>
    ),
  },
  {
    date: "August 2025",
    title: "Council Vote",
    description:
      "Town Council voted 5-2 to agree to sale with Amazon. The meeting had minimum required public notice and no opportunity for public comment on this decision.",
    icon: (
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
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
  {
    date: "December 2025",
    title: "Planning Board",
    description:
      "Amazon presented preliminary plans for a 146,280 sq ft last-mile delivery warehouse to the Gorham Planning Board. The facility would operate 24/7.",
    icon: (
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
    ),
  },
  {
    date: "February 2026",
    title: "Where We Are Now",
    description:
      "Amazon has extended their option to purchase through April. Land sale not finalized. Permits under review. Public meeting held February 26 by Gorham United to inform residents.",
    icon: (
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
    ),
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="bg-navy py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            The Full Story
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            How Did We Get Here?
          </h2>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/slides/slide-12-img-0.jpg"
              alt="Timeline showing how the Amazon deal progressed from 2019 town vote to present"
              width={900}
              height={500}
              className="w-full max-w-4xl"
            />
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gold/30 sm:left-1/2 sm:-translate-x-px" />

          {events.map((event, i) => (
            <div
              key={event.date}
              className={`relative mb-12 flex items-start gap-6 sm:mb-16 ${
                i % 2 === 0
                  ? "sm:flex-row sm:text-right"
                  : "sm:flex-row-reverse sm:text-left"
              }`}
            >
              <div className={`hidden flex-1 sm:block ${i % 2 === 0 ? "sm:pr-12" : "sm:pl-12"}`}>
                <p className="text-sm font-semibold text-gold">{event.date}</p>
                <h3 className="mt-1 font-display text-xl font-bold text-white">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {event.description}
                </p>
              </div>

              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-navy text-gold">
                {event.icon}
              </div>

              <div className={`flex-1 sm:hidden`}>
                <p className="text-sm font-semibold text-gold">{event.date}</p>
                <h3 className="mt-1 font-display text-xl font-bold text-white">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {event.description}
                </p>
              </div>

              <div className={`hidden flex-1 sm:block`} />
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/slides/slide-13-img-0.jpg"
              alt="Why so few prospective buyers - restrictive land uses, market mismatch, COVID impact, no utilities"
              width={700}
              height={400}
              className="w-full"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/slides/slide-14-img-0.jpg"
              alt="Why Industrial Park Expansion - assumptions vs facts about tax base and development"
              width={700}
              height={400}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
