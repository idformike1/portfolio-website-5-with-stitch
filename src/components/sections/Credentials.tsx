"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ABOUT_CONTENT } from "@/data/mockData";

export function Credentials() {
  const { credentials } = ABOUT_CONTENT;

  return (
    <section className="py-24 px-global">
      <div className="section-divider-top mb-12 h-px bg-black/10" />
      
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold mb-4 tracking-tighter text-[#333333]"
      >
        {credentials.title}
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-slate-500 mb-16 max-w-lg"
      >
        {credentials.description}
      </motion.p>
      
      <div className="space-y-px bg-slate-200">
        {credentials.items.map((item, index) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group bg-[#F4F3EE] py-10 flex flex-col md:flex-row md:items-center justify-between transition-all hover:bg-[#6B705C] hover:text-white px-4 cursor-pointer relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-4xl font-bold tracking-tight text-[#333333] group-hover:text-white transition-colors duration-500">
                {item.title}
              </h3>
              <p className="text-slate-500 group-hover:text-white/70 mt-2 max-w-md text-sm md:text-base leading-snug transition-colors duration-500">
                {item.description}
              </p>
            </div>

            <div className="mt-8 md:mt-0 flex items-center gap-4 relative z-10">
              <motion.div 
                className="hidden lg:block opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-100 scale-90 origin-right"
              >
                <img 
                   src={item.image} 
                   alt={item.title} 
                   className="h-32 w-48 object-cover rounded-sm shadow-2xl grayscale brightness-110" 
                />
              </motion.div>
              <ArrowUpRight className="w-10 h-10 group-hover:rotate-45 transition-transform duration-500 text-slate-400 group-hover:text-white" />
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="section-divider-bottom h-px bg-black/10 mt-12" />
    </section>
  );
}
