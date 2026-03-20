"use client";

import Link from "next/link";
import { Circle, Menu } from "lucide-react";
import { SITE_METADATA } from "@/data/mockData";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/Magnetic";

export function Navbar() {
  const navLinks = [
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-global py-8 text-[10px] font-bold uppercase tracking-[0.2em] border-b border-black/5 bg-[#F0F0E8]/80 backdrop-blur-sm sticky top-0 z-50" aria-label="Main Navigation">
      <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity" aria-label="Go to homepage">
        <Circle className="w-2.5 h-2.5 fill-current" />
        <span>{SITE_METADATA.tagline}</span>
      </Link>

      <div className="hidden md:flex gap-12" role="menubar">
        {navLinks.map((link) => (
          <Magnetic key={link.name}>
            <Link 
              href={link.href} 
              className="hover:opacity-60 transition-opacity"
              role="menuitem"
            >
              {link.name}
            </Link>
          </Magnetic>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <span className="hidden sm:inline-block">©{SITE_METADATA.year}</span>
        
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation menu">
                <Menu className="w-5 h-5" />
              </Button>
            }
          />
          <SheetContent side="right" className="bg-[#F0F0E8] border-l border-black/5 px-8 py-12">
            <SheetHeader>
              <SheetTitle className="text-[10px] font-bold uppercase tracking-widest text-left mb-8">
                Menu
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-2xl font-bold uppercase tracking-tighter hover:text-[#63cf17] transition-colors py-2"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-auto pt-12 border-t border-black/5 text-[10px] font-bold uppercase tracking-widest opacity-60">
                ©{SITE_METADATA.year} Aisha Rao
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
