"use client";

import { motion } from "framer-motion";
import { HOME_CONTENT } from "@/data/mockData";

export function AboutSnippet() {
  const { about, stats } = HOME_CONTENT;

  return (
    <section className="px-global py-24 md:py-32 max-w-5xl">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-8xl font-bold mb-12 tracking-tighter text-[#333333]"
      >
        {about.title}
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl font-medium leading-tight text-[#333333]/80"
        >
          {about.bio}
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base text-[#333333]/60 leading-relaxed"
        >
          {about.description}
        </motion.p>
      </div>

      <div className="w-full h-px bg-black/5 mb-12" />
      
      <div className="flex flex-wrap gap-12 md:gap-24 py-12">
        {stats.map((stat, index) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="text-4xl md:text-5xl font-bold text-[#333333]">{stat.value}</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#333333]/40 mt-2">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="w-full h-px bg-black/5" />
    </section>
  );
}
