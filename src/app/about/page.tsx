import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/AboutHero";
import { MyStory } from "@/components/sections/MyStory";
import { Credentials } from "@/components/sections/Credentials";
import { Ethics } from "@/components/sections/Ethics";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F0F0E8]">
      <div className="mx-auto">
        <Navbar />
        <AboutHero />
        <MyStory />
        <Credentials />
        <Ethics />
        <Footer />
      </div>
    </main>
  );
}
