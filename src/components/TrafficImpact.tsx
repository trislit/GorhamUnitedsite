import Image from "next/image";

const roadCosts = [
  {
    project: "School Street Repaving (1.6 mi)",
    year: "2025",
    cost: "$500,000",
  },
  {
    project: "Adaptive Traffic Signals (4 intersections, Scarborough)",
    year: "Recent",
    cost: "$346,000",
  },
  {
    project: "N. Scarborough Rt 22/114 Intersections",
    year: "Recent",
    cost: "$2.3M",
  },
  {
    project: "Main Street Repaving",
    year: "2019",
    cost: "$8.9M ($11.3M+ today)",
  },
  {
    project: "Gorham Bypass",
    year: "2007",
    cost: "$28.8M ($45M today)",
  },
];

export default function TrafficImpact() {
  return (
    <section id="traffic" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
            Community Impact
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Traffic, Roads &amp; Safety
          </h2>
          <p className="mt-4 text-lg text-slate">
            A 24/7 warehouse means constant semi-truck traffic through Gorham
            Village on roads not designed for it. The costs &mdash; financial and
            human &mdash; are significant.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-lg">
              <Image
                src="/slides/slide-30-img-0.jpg"
                alt="Map showing traffic routes and delivery driver commute patterns through Gorham"
                width={700}
                height={400}
                className="w-full"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-lg">
              <Image
                src="/slides/slide-27-img-0.jpg"
                alt="Trucking costs society - externalized costs of road damage, crashes, congestion, health, and climate"
                width={700}
                height={400}
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-red-200 bg-white p-6 shadow-sm">
              <h3 className="font-display text-xl font-bold text-navy">
                Trucks Destroy Local Roads
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-red-50 p-4 text-center">
                  <p className="font-display text-3xl font-bold text-red-600">
                    2,500&ndash;10,000x
                  </p>
                  <p className="mt-1 text-xs text-slate">
                    More road damage than passenger vehicles
                  </p>
                </div>
                <div className="rounded-xl bg-red-50 p-4 text-center">
                  <p className="font-display text-3xl font-bold text-red-600">
                    70&ndash;91%
                  </p>
                  <p className="mt-1 text-xs text-slate">
                    Of all highway damage caused by trucks
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                Estimated road damage cost per round trip from I-95 to the
                Amazon site:{" "}
                <strong className="text-red-600">$5 to $66 per trip</strong>,
                depending on load. Maine DOT and our towns are on the hook for
                these costs.
              </p>
            </div>

            <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
              <h3 className="font-display text-xl font-bold text-navy">
                Road Expansion Is Expensive
              </h3>
              <p className="mt-2 text-sm text-slate/60">
                Amazon will need turning lanes and signals &mdash; and when
                local roads balloon, who pays?
              </p>
              <div className="mt-4 divide-y divide-navy/10">
                {roadCosts.map((item) => (
                  <div
                    key={item.project}
                    className="flex items-center justify-between py-3"
                  >
                    <div>
                      <p className="text-sm font-medium text-navy">
                        {item.project}
                      </p>
                      <p className="text-xs text-slate/50">{item.year}</p>
                    </div>
                    <p className="text-sm font-bold text-gold-dark">
                      {item.cost}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
              <h3 className="font-display text-lg font-bold text-red-700">
                Safety &amp; Quality of Life
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Semi trucks are involved in a disproportionate number of fatal
                crashes.{" "}
                <strong>
                  82% of truck crash fatalities are other vehicle occupants,
                  pedestrians, and cyclists
                </strong>
                . 47% of truck fatalities occur during school hours &mdash; a
                much higher rate than cars. The proposed route passes near
                neighborhoods and an elementary school less than one mile away.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-lg">
            <Image
              src="/slides/slide-29-img-0.png"
              alt="Safety data on truck crashes and fatalities"
              width={700}
              height={400}
              className="w-full"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-lg">
            <Image
              src="/slides/slide-29-img-1.png"
              alt="Additional safety and quality of life data for truck traffic near residential areas"
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
