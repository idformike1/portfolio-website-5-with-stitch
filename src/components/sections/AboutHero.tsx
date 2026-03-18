"use client";

import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "@/data/mockData";

export function AboutHero() {
  const { hero } = ABOUT_CONTENT;

  return (
    <section className="pt-12 pb-24 px-global relative overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[11px] font-bold uppercase tracking-tighter leading-tight text-[#333333]"
        >
          {hero.roles[0]}<br />{hero.roles[1]}
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[clamp(4rem,15vw,14rem)] font-bold text-[#333333] text-center uppercase mb-[-2vw] leading-[0.85] tracking-[-0.05em] w-full lg:w-auto"
        >
          {hero.title}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block text-[11px] font-bold uppercase tracking-tighter leading-tight text-[#333333]"
        >
          {hero.since}
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="relative w-full aspect-[16/9] lg:aspect-[21/9] overflow-hidden   transition-all duration-700 cursor-pointer rounded-sm"
      >
        <img 
          src={hero.image} 
          alt="Aisha Rao Portrait" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out" 
        />
      </motion.div>
    </section>
  );
}
