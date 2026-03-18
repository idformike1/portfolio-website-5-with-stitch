import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WorkHero } from "@/components/sections/WorkHero";
import { WorkPortfolio } from "@/components/sections/WorkPortfolio";
import { WorkTestimonials } from "@/components/sections/WorkTestimonials";
import { CoachingCollaborations } from "@/components/sections/CoachingCollaborations";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#F0F0E8]">
      <div className="mx-auto">
        <Navbar />
        <WorkHero />
        <WorkPortfolio />
        <WorkTestimonials />
        <CoachingCollaborations />
        <Footer />
      </div>
    </main>
  );
}
