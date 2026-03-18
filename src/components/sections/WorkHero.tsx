"use client";

import { motion } from "framer-motion";
import { WORK_CONTENT } from "@/data/mockData";

export function WorkHero() {
  const { hero } = WORK_CONTENT;

  return (
    <section className="pt-32 pb-12 px-6 md:px-20 lg:px-40 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-[120px] md:text-[200px] font-bold leading-[0.8] tracking-tighter text-black absolute -z-10 select-none top-20 left-6 pointer-events-none"
        >
          {hero.subtitle}
        </motion.h2>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10 pb-16">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-8xl md:text-[140px] font-bold leading-none tracking-tighter mb-8 text-[#333333]"
            >
              {hero.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-600 max-w-lg leading-tight"
            >
              {hero.description}
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 overflow-x-auto pb-2 no-scrollbar"
          >
            {hero.filters.map((filter, index) => (
              <span 
                key={filter}
                className={`px-6 py-3 rounded-full text-[10px] font-bold tracking-widest whitespace-nowrap cursor-pointer transition-all ${
                  index === 0 
                  ? "bg-[#63cf17] text-white" 
                  : "bg-white border border-black/5 text-slate-500 hover:bg-slate-50"
                }`}
              >
                {filter}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
