import Image from "next/image";

const idealSite = [
  "Very close to highway, rail, & airports",
  "Access road designed for semi-trucks",
  "Few homes, schools, or businesses on route",
  "No conflict with residents, commuters, children",
  "In low-income area with available workforce",
];

const gorhamSite = [
  "Not close to highway; limited access",
  "Access road (Rt. 25) NOT designed for semis",
  "Dense residential/commercial area",
  "High conflict with local traffic & safety risks",
  "In a higher-income, residential town",
];

export default function SiteComparison() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
            Site Analysis
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Gorham&rsquo;s Site Is Not Like the Others
          </h2>
          <p className="mt-4 text-lg text-slate">
            Compared to typical Amazon warehouse locations across the Northeast,
            the Gorham site is an outlier, and it raises important questions about fit and potential impacts for nearby residents and roads.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-xl">
            <Image
              src="/slides/slide-23-img-0.jpg"
              alt="Comparison chart showing typical ideal Amazon site versus Gorham site reality"
              width={900}
              height={500}
              className="w-full max-w-4xl"
            />
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green/20 bg-green/5 p-8">
            <h3 className="flex items-center gap-3 font-display text-xl font-bold text-green">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Typical Site (Ideal)
            </h3>
            <ul className="mt-4 space-y-3">
              {idealSite.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-green"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="flex items-center gap-3 font-display text-xl font-bold text-red-700">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Gorham Site (Reality)
            </h3>
            <ul className="mt-4 space-y-3">
              {gorhamSite.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-center font-display text-xl font-bold text-navy">
            Amazon Sites in Other Communities
          </h3>
          <p className="mt-2 text-center text-sm text-slate/60">
            These facilities are typically located on highways, away from
            residential areas
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="overflow-hidden rounded-xl border border-navy/10 shadow-sm">
              <Image
                src="/slides/slide-18-img-0.png"
                alt="Amazon warehouse in Littleton, Massachusetts - located near major highway"
                width={400}
                height={300}
                className="w-full"
              />
              <p className="bg-white p-2 text-center text-xs font-medium text-slate">
                Littleton, MA
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-navy/10 shadow-sm">
              <Image
                src="/slides/slide-19-img-0.png"
                alt="Amazon warehouse in Newington, Connecticut - near Hartford highways"
                width={400}
                height={300}
                className="w-full"
              />
              <p className="bg-white p-2 text-center text-xs font-medium text-slate">
                Newington, CT
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-navy/10 shadow-sm">
              <Image
                src="/slides/slide-20-img-0.png"
                alt="Amazon warehouse in Albany, New York - near highway interchange"
                width={400}
                height={300}
                className="w-full"
              />
              <p className="bg-white p-2 text-center text-xs font-medium text-slate">
                Albany, NY
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-navy/10 shadow-sm">
              <Image
                src="/slides/slide-21-img-0.png"
                alt="Amazon warehouse in East Bridgewater, Massachusetts"
                width={400}
                height={300}
                className="w-full"
              />
              <p className="bg-white p-2 text-center text-xs font-medium text-slate">
                E. Bridgewater, MA
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-xl">
            <Image
              src="/slides/slide-22-img-0.png"
              alt="The Gorham proposed site compared to typical Amazon locations"
              width={900}
              height={500}
              className="w-full max-w-4xl"
            />
            <div className="bg-white p-4">
              <p className="text-center text-sm font-medium text-slate/60">
                The proposed Gorham site &mdash; notice the proximity to
                residential areas and lack of direct highway access
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
