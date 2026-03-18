"use client";

import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "@/data/mockData";

export function MyStory() {
  const { story } = ABOUT_CONTENT;

  return (
    <section className="py-24 px-global">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold mb-12 tracking-tighter text-[#333333]"
      >
        {story.title}
      </motion.h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
        <div className="space-y-6 text-xl leading-snug text-[#333333]/80">
          {story.paragraphs.map((p, idx) => (
            <motion.p 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              {p}
            </motion.p>
          ))}
        </div>
        
        <div className="flex gap-16">
          {story.stats.map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="text-4xl font-bold text-[#333333]">{stat.value}</div>
              <div className="text-[10px] uppercase font-bold tracking-widest mt-1 opacity-40 text-[#333333]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
