"use client";

import { motion } from "framer-motion";
import { CONTACT_CONTENT } from "@/data/mockData";

export function ContactHero() {
  const { hero } = CONTACT_CONTENT;

  return (
    <section className="relative pt-32 pb-12 px-global overflow-hidden bg-[#F0F0E8]">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFXw35USv7upg45SxHV1Vlkxur4aH39lmwv8katHJOlQamq3HCzZbAC9RTO25NAwRKKSi1yRejEnASAAD2YYmNii0_N9xQxXnXq1vmLiVyLM2f1rNvqNJJoSns031e0nBHwUSK6cm3Lk9hcaNctb7AdcwjX0IaL72cM4POFPMtFJvmegrdkYJ4HInHzYN36PQvw5Dg1NiT4GQRGharSRGR7EjgOj9DX3i6idbCb3UBUg1I7QwW3tQsRU_vzelDfRzSnln8hcdp" 
          alt="Abstract texture" 
          className="w-full h-full object-cover " 
        />
      </div>
      
      <motion.h1 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-[12vw] font-bold leading-[0.85] tracking-tighter text-[#707a5e] uppercase mb-8"
      >
        {hero.title}
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-3xl md:text-5xl font-light text-slate-700 max-w-4xl leading-tight"
      >
        Let's build something <span className="text-[#6b705c] italic font-medium">extraordinary</span> together.
      </motion.p>
    </section>
  );
}
