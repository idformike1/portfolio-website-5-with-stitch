import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactForm } from "@/components/sections/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F0F0E8]">
      <div className="mx-auto">
        <Navbar />
        <ContactHero />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}
