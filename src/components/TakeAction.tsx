export default function TakeAction() {
  return (
    <section id="action" className="bg-navy-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Your Voice Matters
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Take Action
          </h2>
          <p className="mt-4 text-lg text-white/70">
            The decisions being made now will shape Gorham for decades. Here&rsquo;s
            how you can make your voice heard.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gold/30 bg-white/5 p-8 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20">
              <svg
                className="h-6 w-6 text-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-white">
              Attend the Town Council Meeting
            </h3>
            <div className="mt-4 rounded-xl bg-gold/10 p-4">
              <p className="font-display text-lg font-bold text-gold">
                Tuesday, March 3rd
              </p>
              <p className="mt-1 text-sm text-white/70">6:30 PM</p>
              <p className="text-sm text-white/70">Gorham Municipal Center</p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Show up and be willing to speak. When residents share their own
              perspectives at Town Council meetings, it tells local leaders that
              people are paying attention and expect open, transparent
              decision-making on major issues.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <svg
                className="h-6 w-6 text-white"
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
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-white">
              Stay Informed
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Keep up with town agendas, public notices, and upcoming meetings so
              you always know what&rsquo;s being discussed before decisions are made.
            </p>
            <p className="mt-4 text-sm text-white/60">
              Start by subscribing to town updates so you receive agendas and
              notices directly from the town:
            </p>
            <a
              href="https://www.gorhammaine.gov/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-navy-dark shadow-sm transition-all hover:bg-gold hover:text-navy-dark hover:shadow-lg"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold/20 text-[11px] font-bold text-gold-dark">
                ★
              </span>
              <span>Subscribe to Gorham town updates</span>
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-white">
              Spread the Word
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Share this website and our Facebook page with your neighbors,
              friends, and family in Gorham. The more residents who are informed,
              the stronger our collective voice.
            </p>
            <a
              href="https://facebook.com/gorhamunited"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#166FE5] hover:shadow-lg"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Follow on Facebook
            </a>
          </div>
        </div>


        <div className="mt-12 rounded-2xl border border-white/15 bg-white/5 p-8 sm:p-10">
          <h3 className="text-center font-display text-xl font-bold text-white sm:text-2xl">
            Resources &amp; Links
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-white/60">
            Save and share these links with your neighbors.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href="https://www.gofundme.com/f/support-gorham-united?attribution_id=sl:494f48ab-70a7-448a-b542-c4d7ae1b32bf&amp;lang=en_US&amp;ts=1772116559&amp;utm_campaign=man_ss_icons&amp;utm_content=amp17_tb-amp20_control&amp;utm_medium=customer&amp;utm_source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-xl border border-gold/40 bg-gold/10 px-4 py-4 text-left transition-all hover:border-gold hover:bg-gold/20"
            >
              <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-gold">
                $
              </span>
              <div>
                <p className="text-sm font-semibold text-white">
                  Support Gorham United &mdash; GoFundMe
                </p>
                <p className="mt-1 text-xs text-white/70">
                  Help cover the basic costs of organizing, outreach, and
                  community engagement for this all-volunteer group.
                </p>
              </div>
            </a>
            <a
              href="mailto:depinfo@maine.gov?subject=Public%20comment%20from%20Gorham%20resident"
              className="group flex items-start gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-4 text-left transition-all hover:border-white/40 hover:bg-white/10"
            >
              <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white">
                DE
              </span>
              <div>
                <p className="text-sm font-semibold text-white">
                  Email Maine DEP
                </p>
                <p className="mt-1 text-xs text-white/70">
                  Send written comments to the Maine Department of Environmental
                  Protection about the proposed Amazon warehouse project in Gorham.
                </p>
              </div>
            </a>
            <a
              href="mailto:customerservice.dot@maine.gov?subject=Public%20comment%20from%20Gorham%20resident"
              className="group flex items-start gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-4 text-left transition-all hover:border-white/40 hover:bg-white/10"
            >
              <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white">
                DO
              </span>
              <div>
                <p className="text-sm font-semibold text-white">
                  Email Maine DOT
                </p>
                <p className="mt-1 text-xs text-white/70">
                  Share your perspective with MaineDOT on traffic and safety
                  impacts of the proposed Amazon warehouse project and its truck
                  traffic.
                </p>
              </div>
            </a>
            <a
              href="https://facebook.com/gorhamunited"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-4 text-left transition-all hover:border-white/40 hover:bg-white/10"
            >
              <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white">
                f
              </span>
              <div>
                <p className="text-sm font-semibold text-white">
                  Gorham United on Facebook
                </p>
                <p className="mt-1 text-xs text-white/70">
                  Follow updates about meetings, permit hearings, and new
                  resources as they become available.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
