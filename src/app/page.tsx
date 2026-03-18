import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutSnippet } from "@/components/sections/AboutSnippet";
import { ServicesSnippet } from "@/components/sections/ServicesSnippet";
import { ImpactStories } from "@/components/sections/ImpactStories";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSnippet />
      <ImpactStories />
      <ServicesSnippet />
      <Footer />
    </main>
  );
}
