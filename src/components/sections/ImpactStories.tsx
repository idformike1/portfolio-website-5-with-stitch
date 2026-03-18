"use client";

import { motion } from "framer-motion";
import { HOME_CONTENT } from "@/data/mockData";

export function ImpactStories() {
  const { impact } = HOME_CONTENT;

  return (
    <section className="px-global py-24 bg-slate-50/50">
      <div className="mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter text-[#333333]"
        >
          {impact.title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-slate-500 max-w-xl font-medium"
        >
          {impact.description}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-center">
        {impact.stories.map((story, index) => (
          <motion.div 
            key={story.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`group ${index === 1 ? 'md:scale-110 z-10' : ''}`}
          >
            <div className="aspect-[4/5] overflow-hidden rounded-lg border border-black/5 bg-white mb-6 p-4 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
              <img 
                src={story.image} 
                alt={story.title}
                className="w-full h-full object-cover   group-hover:scale-110 transition-all duration-1000" 
              />
            </div>
            <motion.h4 className="text-xl font-bold mb-1 uppercase tracking-tighter text-[#333333]">
              {story.title}
            </motion.h4>
            <p className="text-[10px] font-bold uppercase text-slate-400">
              {story.type}
            </p>
          </motion.div>
        ))}
      </div>
      
      <p className="text-center text-xs text-slate-400 max-w-2xl mx-auto mt-20 italic">
        Our methodology is constantly evolving, shaped by the intricate forms of human physiology, the organic nature of habit formation, and the rigorous demands of modern sport.
      </p>
    </section>
  );
}
