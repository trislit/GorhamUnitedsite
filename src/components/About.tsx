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
            Watch the full recording of the February 26, 2026 public meeting
            about the proposed Amazon warehouse (posted as a Facebook Reel).
          </p>
          <div className="mx-auto mt-4 max-w-lg overflow-hidden rounded-xl border border-navy/10 bg-navy/5">
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F807265081721928&width=500&show_text=false&height=280"
              width="500"
              height="280"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              title="Gorham United public meeting – Facebook Reel"
              className="max-w-full"
            />
          </div>
          <a
            href="https://www.facebook.com/reel/807265081721928"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#166FE5] hover:shadow-md"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Watch on Facebook</span>
          </a>
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
