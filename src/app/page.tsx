import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PetitionBanner from "@/components/PetitionBanner";
import About from "@/components/About";
import TakeAction from "@/components/TakeAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <PetitionBanner />
      <main className="pt-30 md:pt-34">
        <Hero />
        <About />
        <TakeAction />
      </main>
      <Footer />
    </>
  );
}
