export default function Petition() {
  return (
    <section id="petition" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
            Sign the Petition
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
            Oppose the Amazon Land Sale
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Add your name to our community petition asking the Town of Gorham to
            pause the sale of this 94-acre parcel and fully consider impacts,
            alternatives, and resident input.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl border border-navy/10 bg-white p-2 sm:p-4">
          <div className="relative h-[900px] w-full sm:h-[1000px]">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfV-6T9voMwi1_MEh8i3LiNaSrbcZUdbhhAv2xyQX3Shi5Okw/viewform?embedded=true"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Gorham United petition"
              className="h-full w-full"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
