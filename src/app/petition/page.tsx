import Navigation from "@/components/Navigation";
import Link from "next/link";
import Footer from "@/components/Footer";
import Petition from "@/components/Petition";

export default function PetitionPage() {
  return (
    <>
      <Navigation variant="static" />
      <main className="bg-cream min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-navy/80 hover:text-navy hover:underline underline-offset-4"
          >
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <span>Back to Gorham United home</span>
          </Link>
        </div>
        <div className="mt-6">
          <Petition />
        </div>
      </main>
      <Footer />
    </>
  );
}
