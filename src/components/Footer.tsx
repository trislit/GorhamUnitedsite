import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-dark py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="Gorham United"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-display text-base font-bold text-white">
                Gorham United
              </p>
              <p className="text-xs text-white/50">
                Thoughtful Development &bull; Strong Community &bull; Stable
                Taxes
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://facebook.com/gorhamunited"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 transition-colors hover:text-white"
              aria-label="Facebook"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Gorham United. A community
            organization of Gorham, Maine residents. Not affiliated with the
            Town of Gorham.
          </p>
          <p className="mt-2 text-xs text-white/30">
            Information presented is based on publicly available data and
            independent analysis. Tax estimates are models, not official figures.
          </p>
        </div>
      </div>
    </footer>
  );
}
