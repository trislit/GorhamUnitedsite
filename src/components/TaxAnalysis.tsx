import Image from "next/image";

export default function TaxAnalysis() {
  return (
    <section id="taxes" className="bg-navy py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Financial Analysis
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            The Tax Math
          </h2>
          <p className="mt-4 text-lg text-white/70">
            No estimated property tax revenues have been provided in any
            official resources to date. Here is our independent analysis.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold">
                Low Estimate
              </span>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-sm text-white/60">Land Value</span>
                <span className="text-sm font-semibold text-white">
                  $4,000,000
                </span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-sm text-white/60">
                  Warehouse Value (146,280 sf &times; $72/sf)
                </span>
                <span className="text-sm font-semibold text-white">
                  $10,532,160
                </span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-sm text-white/60">Total Value</span>
                <span className="text-sm font-semibold text-white">
                  $14,532,160
                </span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-sm text-white/60">
                  Assessment Ratio / Mill Rate
                </span>
                <span className="text-sm font-semibold text-white">
                  90% / $14.80
                </span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-base font-semibold text-gold">
                  Estimated Property Tax
                </span>
                <span className="font-display text-2xl font-bold text-gold">
                  $193,568
                </span>
              </div>
            </div>
            <p className="mt-4 text-xs text-white/40">
              Uses $72/sf (current Nappi Distributors valuation) and purchase
              price as land value.
            </p>
          </div>

          <div className="rounded-2xl border border-gold/30 bg-white/5 p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold">
                High Estimate
              </span>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-sm text-white/60">Land Value</span>
                <span className="text-sm font-semibold text-white">
                  $4,500,000
                </span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-sm text-white/60">
                  Warehouse Value (146,280 sf &times; $150/sf)
                </span>
                <span className="text-sm font-semibold text-white">
                  $21,942,000
                </span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-sm text-white/60">Total Value</span>
                <span className="text-sm font-semibold text-white">
                  $26,442,000
                </span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-sm text-white/60">
                  Assessment Ratio / Mill Rate
                </span>
                <span className="text-sm font-semibold text-white">
                  90% / $14.80
                </span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-base font-semibold text-gold">
                  Estimated Property Tax
                </span>
                <span className="font-display text-2xl font-bold text-gold">
                  $352,207
                </span>
              </div>
            </div>
            <p className="mt-4 text-xs text-white/40">
              Uses $150/sf (above Harvey&rsquo;s $115/sf) and land valued above
              purchase price.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/slides/slide-33-img-1.png"
                alt="Chart showing commercial vs residential tax share over time - commercial share declining since 2022 revaluation"
                width={700}
                height={400}
                className="w-full bg-white"
              />
              <div className="bg-white p-4">
                <p className="text-sm text-slate">
                  <strong>Historical Valuation Data:</strong> The 2022/23
                  revaluation created a significant shift in valuation share.
                  For example, Nappi Distributors paid $179K in property tax in
                  2022 &mdash; in 2023, that same property paid only $144K.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-gold/30 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="font-display text-xl font-bold text-white">
                The Big Question
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Gorham needs to stabilize the property tax base and should do so
                in part by increasing high-value commercial development. This
                parcel borders mixed-use, urban residential, and office
                residential zoning. It sits directly on the METRO line, borders
                a nature preserve, and has access to public utilities. It is less
                than one mile from an elementary school and across from one of
                the most popular residential neighborhoods in town.
              </p>
              <p className="mt-4 font-display text-lg font-bold text-gold">
                Is industrial use the best value for this parcel?
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h4 className="text-sm font-semibold text-white/80">
                Important Context
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-white/60">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  No TIF or other tax abatement is currently involved
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  Amazon (or the developer) is paying ~$42,500 per acre
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  BETE: Huge business equipment tax break paid for by residents
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  K-12 school population is 20 students LOWER than 20 years ago
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
