export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
            Who We Are
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Gorham United
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate">
            Gorham United is a group of Gorham residents committed to promoting
            responsible development, stable taxes, and a strong sense of
            community. Our mission is to make sure residents have clear
            information about major decisions, real opportunities to be heard,
            and a meaningful role in shaping Gorham&rsquo;s future.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-navy/10 bg-cream p-6 text-left sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
            Current Focus
          </p>
          <h3 className="mt-2 font-display text-xl font-bold text-navy">
            Proposed Amazon Warehouse Land Sale
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate">
            Gorham United is opposed to the proposed sale of 94 acres
            of town-owned land for an Amazon last-mile warehouse at this
            location. On February 26, 2026, we organized a public meeting
            specifically about this project to share clear, factual information,
            hear from residents, and answer questions.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate">
            Our goal is to ensure that Gorham residents understand what is being
            proposed, what the implications could be, and how to share their
            perspectives with the Town of Gorham and state agencies before any
            final decisions are made.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-gold/20 bg-white p-6 text-center sm:p-8">
          <h3 className="font-display text-xl font-bold text-navy sm:text-2xl">
            Video of the Public Meeting
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate">
            A full recording of the February 26, 2026 public meeting about the
            proposed Amazon warehouse will be available on YouTube soon. Check
            back here or follow us on Facebook for the link.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold/10 px-5 py-2 text-xs font-medium text-navy">
            <svg
              className="h-4 w-4 text-red-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            <span>Recording link coming soon</span>
          </div>
          <a
            href="https://docs.google.com/presentation/d/1t3G9pAMMzj61A3MGGQyjZxXG4bNpD7oxszJMlPMDlwc/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-full border border-gold/70 bg-white px-5 py-2 text-xs font-semibold text-navy shadow-sm transition-all hover:bg-gold hover:text-navy-dark hover:shadow-md"
          >
            <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold/10 text-[11px] font-bold text-gold-dark">
              i
            </span>
            <span>View the full Amazon Public Meeting slide deck</span>
          </a>
        </div>
      </div>
    </section>
  );
}
