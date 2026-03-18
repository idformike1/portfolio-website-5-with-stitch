import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogHero } from "@/components/sections/BlogHero";
import { BlogFeed } from "@/components/sections/BlogFeed";
import { ResourcesList } from "@/components/sections/ResourcesList";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f0ede5]">
      <div className="mx-auto">
        <Navbar />
        <BlogHero />
        <BlogFeed />
        <ResourcesList />
        <Footer />
      </div>
    </main>
  );
}
