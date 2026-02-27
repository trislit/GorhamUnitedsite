import Image from "next/image";

const speakers = [
  {
    name: "Sam Purinton",
    role: "Gorham Resident",
    topic: "Overview of the Proposed Facility",
    image: "/slides/slide-07-img-0.jpg",
  },
  {
    name: "Lou Simms",
    role: "Gorham Town Council",
    topic: "How We Got Here & Town Process",
    image: "/slides/slide-07-img-1.jpg",
  },
  {
    name: "Myles Smith",
    role: "Mainers for Smarter Transportation",
    topic: "Traffic Impacts & Alternatives",
    image: "/slides/slide-07-img-2.jpg",
  },
  {
    name: "Michelle Littlefield",
    role: "Gorham Resident",
    topic: "Tax Math & Analysis",
    image: "/slides/slide-07-img-0.jpg",
  },
];

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
            responsible development and amplifying residents&rsquo; voices in
            town government. We organized a public meeting on February 26, 2026
            to educate the community about the proposed Amazon warehouse, hear
            from residents, and answer questions.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="rounded-2xl border border-navy/10 bg-cream p-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy/10">
              <svg
                className="h-7 w-7 text-navy"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.331 0 4.472.89 6.075 2.356m0-14.314A8.967 8.967 0 0118 3.75c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-navy">
              Educate
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Share factual information about the Amazon project, its impacts on
              residents, traffic, taxes, and our community.
            </p>
          </div>

          <div className="rounded-2xl border border-navy/10 bg-cream p-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy/10">
              <svg
                className="h-7 w-7 text-navy"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-navy">
              Amplify
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Your voice matters. We ensure Gorham residents have a seat at the
              table when decisions about our town are made.
            </p>
          </div>

          <div className="rounded-2xl border border-navy/10 bg-cream p-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy/10">
              <svg
                className="h-7 w-7 text-navy"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                />
              </svg>
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-navy">
              Advocate
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Push for thoughtful development that truly benefits Gorham &mdash;
              not just any development at any cost.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-center font-display text-2xl font-bold text-navy">
            Public Meeting Speakers
          </h3>
          <p className="mt-2 text-center text-sm text-slate/60">
            February 26, 2026 &mdash; Video coming soon
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {speakers.map((speaker) => (
              <div key={speaker.name} className="text-center">
                <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border-3 border-gold/30 bg-navy/10 sm:h-28 sm:w-28">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={112}
                    height={112}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-4 font-display text-base font-bold text-navy">
                  {speaker.name}
                </p>
                <p className="text-xs text-gold-dark">{speaker.role}</p>
                <p className="mt-1 text-xs text-slate/60">{speaker.topic}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
