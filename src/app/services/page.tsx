import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { ServicePackages } from "@/components/sections/ServicePackages";
import { TechStack } from "@/components/sections/TechStack";
import { DiscoveryCTA } from "@/components/sections/DiscoveryCTA";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F0F0E8]">
      <div className="mx-auto">
        <Navbar />
        <ServicesHero />
        <ServicePackages />
        <TechStack />
        <DiscoveryCTA />
        <Footer />
      </div>
    </main>
  );
}
