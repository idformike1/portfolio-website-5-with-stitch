"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { WORK_CONTENT } from "@/data/mockData";

export function CoachingCollaborations() {
  const { collaborations } = WORK_CONTENT;

  return (
    <section className="px-global py-24 mb-0 bg-white rounded-t-3xl shadow-2xl overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        <div className="w-full lg:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl lg:text-[100px] font-bold mb-12 leading-[0.85] tracking-tighter text-[#333333] uppercase"
          >
            {collaborations.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-slate-600 mb-12 font-medium leading-tight"
          >
            {collaborations.description}
          </motion.p>
          <div className="space-y-6">
            {collaborations.features.map((feature, idx) => (
              <motion.div 
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <CheckCircle2 className="text-[#63cf17] w-12 h-12 stroke-[1px] group-hover:scale-110 transition-transform" />
                <span className="text-xl font-bold uppercase tracking-tighter text-[#333333] group-hover:pl-4 transition-all duration-500">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          {collaborations.partners.map((partner, idx) => (
            <motion.div 
              key={partner.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="h-48 rounded-sm bg-slate-50 flex flex-col items-center justify-center p-8 transition-all duration-700 hover:bg-[#6b705c] hover:text-white cursor-pointer group"
            >
              <div className="text-4xl font-black mb-4 opacity-10 group-hover:opacity-20 transition-all uppercase tracking-tighter -rotate-12 group-hover:rotate-0">
                {partner.logo}
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-center opacity-40 group-hover:opacity-100 transition-all group-hover:text-white text-slate-900">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
