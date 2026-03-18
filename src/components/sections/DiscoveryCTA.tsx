"use client";

import { motion } from "framer-motion";
import { SERVICES_CONTENT } from "@/data/mockData";
import { Button } from "@/components/ui/button";

export function DiscoveryCTA() {
  const { cta } = SERVICES_CONTENT;

  return (
    <section className="px-global mb-32">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="border border-[#707a5e]/20 p-8 lg:p-20 relative bg-white overflow-hidden rounded-sm group"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#707a5e]/5 -skew-x-12 translate-x-1/4 group-hover:bg-[#707a5e]/10 transition-colors duration-1000" />
        
        <div className="relative z-10 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-5xl lg:text-7xl font-bold tracking-tight uppercase leading-tight mb-8 text-[#333333]"
          >
            {cta.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-lg text-slate-600 mb-12"
          >
            {cta.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <Button size="lg" className="bg-[#707a5e] text-white px-10 py-8 rounded-none font-black uppercase tracking-[0.2em] text-xs hover:bg-[#5a634a] transition-all transform hover:-translate-y-1">
              {cta.buttonText}
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
