import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/AboutHero";
import { MyStory } from "@/components/sections/MyStory";
import { Credentials } from "@/components/sections/Credentials";
import { Ethics } from "@/components/sections/Ethics";

export default function AboutPage() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 lg:px-12 bg-[#F4F3EE]">
      <Navbar />
      <AboutHero />
      <MyStory />
      <Credentials />
      <Ethics />
      <Footer />
    </main>
  );
}
