import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutSnippet } from "@/components/sections/AboutSnippet";
import { ServicesSnippet } from "@/components/sections/ServicesSnippet";
import { ImpactStories } from "@/components/sections/ImpactStories";
import { WorkPortfolio } from "@/components/sections/WorkPortfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <AboutSnippet />
        <WorkPortfolio />
        <ImpactStories />
        <ServicesSnippet />
      </main>
      <Footer />
    </>
  );
}
