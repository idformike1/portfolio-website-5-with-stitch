"use client";

import { motion } from "framer-motion";
import { SERVICES_CONTENT } from "@/data/mockData";

export function ServicesHero() {
  const { hero } = SERVICES_CONTENT;

  return (
    <section className="px-6 py-12 lg:px-12 text-center lg:text-left">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[15vw] lg:text-[12vw] font-bold leading-[0.85] tracking-tighter text-[#707a5e] uppercase"
        >
          {hero.title}
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-md lg:pb-4"
        >
          <p className="text-sm font-medium leading-relaxed text-slate-600">
            {hero.description}
          </p>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        className="w-full h-px bg-[#707a5e]/20 mt-12 mb-20 origin-left" 
      />
    </section>
  );
}
