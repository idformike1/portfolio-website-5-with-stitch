"use client";

import { motion } from "framer-motion";
import { BLOG_CONTENT } from "@/data/mockData";

export function BlogHero() {
  const { hero } = BLOG_CONTENT;

  return (
    <section className="px-6 pt-20 pb-12 border-b border-[#6b705c]/10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-4 text-xs font-bold uppercase tracking-widest text-slate-500"
          >
            {hero.tags.map((tag, idx) => (
              <span key={tag}>
                {tag} {idx < hero.tags.length - 1 && "•"}
              </span>
            ))}
          </motion.div>
        </div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[clamp(3rem,12vw,10rem)] leading-[0.9] tracking-[-0.04em] font-bold text-[#6b705c] mb-16 text-center md:text-left uppercase"
        >
          The<br/>Performance<br/>Hub
        </motion.h2>
        
        <div className="max-w-2xl ml-auto">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-slate-700 leading-tight mb-8"
          >
            {hero.description}
          </motion.p>
          
          <div className="flex items-center gap-12">
            {hero.stats.map((stat, idx) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
              >
                <span className="block text-2xl font-bold text-[#333333]">{stat.value}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
