"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { SITE_METADATA, HOME_CONTENT } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/Magnetic";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#6B705C] pt-24 pb-12 px-global text-[#F0F0E8] relative mt-32" aria-label="Site Footer">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-end">
        <div className="space-y-12">
          <header>
            <p className="text-sm font-medium mb-2 opacity-80 uppercase tracking-widest text-[#F0F0E8]/80">
              I&apos;m excited to hear from you!
            </p>
            <a 
              href={`mailto:${SITE_METADATA.email}`}
              className="text-3xl md:text-5xl font-bold hover:underline selection:bg-white selection:text-[#6B705C]"
              aria-label={`Send email to ${SITE_METADATA.email}`}
            >
              {SITE_METADATA.email}
            </a>
          </header>
          
          <div className="flex flex-col gap-8">
            <nav className="flex gap-6" aria-label="Social links">
              {Object.entries(SITE_METADATA.socials).map(([key, value]) => (
                <a 
                  key={key} 
                  href="#" 
                  className="opacity-80 hover:opacity-100 uppercase tracking-widest text-[10px] font-bold"
                >
                  {value}
                </a>
              ))}
            </nav>
            <div className="text-[10px] font-bold opacity-60 uppercase tracking-widest">
              © {SITE_METADATA.year} Aisha All rights reserved
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-12">
          {/* Mobile Device Mockup */}
          <div className="hidden md:block w-48 aspect-[9/19] bg-slate-900 rounded-[2rem] border-[4px] border-slate-800 shadow-2xl relative overflow-hidden mb-[-2rem] z-20 hover:scale-105 transition-transform duration-500">
            <Image 
              src={HOME_CONTENT.hero.portrait} 
              alt="Aisha Rao Mobile Mockup"
              fill
              className="w-full h-full object-cover brightness-90 contrast-110" 
              sizes="192px"
            />
          </div>
          <nav className="text-right space-y-2 text-[10px] font-bold uppercase tracking-widest opacity-80 decoration-[#63cf17]" aria-label="Footer Sitemap">
            <Link href="/work" className="block hover:text-[#63cf17] transition-colors">My Work</Link>
            <Link href="/about" className="block hover:text-[#63cf17] transition-colors">About Me</Link>
            <Link href="/contact" className="block hover:text-[#63cf17] transition-colors">Contact Me</Link>
          </nav>
        </div>
      </div>

      <div className="relative mt-20 border-t border-white/10 pt-12">
        <div className="flex justify-between items-baseline">
          <Magnetic>
            <Button 
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-[#F0F0E8] text-[#6B705C] border-none hover:scale-110 transition-transform active:scale-95 z-30"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </Magnetic>
          
          <h2 className="text-[clamp(4rem,15vw,12rem)] font-bold uppercase text-[#F0F0E8]/20 leading-none select-none tracking-tighter mix-blend-soft-light">
            Aisha
          </h2>
          
          <div className="text-[10px] font-bold opacity-60 uppercase tracking-widest text-right">
            @aisharao.perform_
          </div>
        </div>
      </div>
    </footer>
  );
}
