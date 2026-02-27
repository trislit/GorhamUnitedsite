export default function MeetingVideo() {
  return (
    <section className="bg-navy-dark py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gold/30 bg-gradient-to-r from-gold/10 to-gold/5 p-8 text-center sm:p-12">
          <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Video of the Public Meeting
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            A full recording of the February 26th public meeting presentation
            will be available on YouTube soon. Check back here or follow us on
            Facebook for the link.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white/70">
            <svg
              className="h-5 w-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Coming Soon on YouTube
          </div>
        </div>
      </div>
    </section>
  );
}
