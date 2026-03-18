"use client";

import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "@/data/mockData";

export function Ethics() {
  const { ethics } = ABOUT_CONTENT;

  return (
    <section className="py-24 px-global">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold mb-16 tracking-tighter text-[#333333]"
      >
        {ethics.title}
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ethics.items.map((item, index) => (
          <motion.div 
            key={item.number}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="aspect-square p-8 flex flex-col justify-between border border-slate-100 shadow-sm transition-all hover:scale-105 duration-500 cursor-pointer bg-white group hover:bg-[#6B705C] hover:shadow-xl z-10"
          >
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-30 text-[#333333] group-hover:text-white transition-colors">
              {item.number} / {item.label}
            </div>
            
            <div>
              <h4 className="text-2xl font-bold mb-4 text-[#333333] group-hover:text-white transition-colors">{item.title}</h4>
              <p className="text-sm leading-relaxed text-slate-500 group-hover:text-white/70 transition-colors">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
