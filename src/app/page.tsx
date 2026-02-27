import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TheIssue from "@/components/TheIssue";
import Timeline from "@/components/Timeline";
import SiteComparison from "@/components/SiteComparison";
import TrafficImpact from "@/components/TrafficImpact";
import TaxAnalysis from "@/components/TaxAnalysis";
import BetterDevelopment from "@/components/BetterDevelopment";
import TakeAction from "@/components/TakeAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <TheIssue />
        <Timeline />
        <SiteComparison />
        <TrafficImpact />
        <TaxAnalysis />
        <BetterDevelopment />
        <TakeAction />
      </main>
      <Footer />
    </>
  );
}
