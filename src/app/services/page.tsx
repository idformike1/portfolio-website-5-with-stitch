import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { ServicePackages } from "@/components/sections/ServicePackages";
import { TechStack } from "@/components/sections/TechStack";
import { DiscoveryCTA } from "@/components/sections/DiscoveryCTA";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f2f2ed] border-[16px] border-[#707a5e] lg:border-[32px]">
      <div className="max-w-[1400px] mx-auto">
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
