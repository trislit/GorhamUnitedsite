import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy-dark">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-navy-light)_0%,_var(--color-navy-dark)_70%)]" />
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M30%200v60M0%2030h60%22%20stroke%3D%22%23fff%22%20stroke-width%3D%221%22%20fill%3D%22none%22%2F%3E%3C%2Fsvg%3E')]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-center">
          <Image
            src="/logo.jpeg"
            alt="Gorham United"
            width={200}
            height={200}
            className="rounded-2xl shadow-2xl"
            priority
          />
        </div>

        <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Gorham United
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-gold sm:text-xl md:text-2xl">
          Thoughtful Development &bull; Strong Community &bull; Stable Taxes
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
          A group of Gorham, Maine residents committed to promoting responsible
          development and amplifying residents&rsquo; voices in town government.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#issue"
            className="inline-flex items-center rounded-full bg-gold px-8 py-3.5 text-base font-semibold text-navy-dark shadow-lg transition-all hover:bg-gold-light hover:shadow-xl hover:-translate-y-0.5"
          >
            Learn What&rsquo;s Happening
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
          <a
            href="#action"
            className="inline-flex items-center rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
          >
            Take Action Now
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-xl bg-white/5 px-6 py-5 backdrop-blur-sm">
            <p className="font-display text-3xl font-bold text-gold">94</p>
            <p className="mt-1 text-sm text-white/60">Acres at Stake</p>
          </div>
          <div className="rounded-xl bg-white/5 px-6 py-5 backdrop-blur-sm">
            <p className="font-display text-3xl font-bold text-gold">24/7</p>
            <p className="mt-1 text-sm text-white/60">Warehouse Operation</p>
          </div>
          <div className="rounded-xl bg-white/5 px-6 py-5 backdrop-blur-sm">
            <p className="font-display text-3xl font-bold text-gold">146K</p>
            <p className="mt-1 text-sm text-white/60">Sq Ft Facility</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-white/40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
