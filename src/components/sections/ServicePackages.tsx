"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { SERVICES_CONTENT } from "@/data/mockData";
import { Button } from "@/components/ui/button";

export function ServicePackages() {
  const { packages } = SERVICES_CONTENT;

  return (
    <section className="px-global mb-32">
      <div className="mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold tracking-tight mb-4 text-[#333333]"
        >
          {packages.title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xs font-medium text-slate-500 uppercase tracking-widest"
        >
          {packages.subtitle}
        </motion.p>
      </div>

      <div className="space-y-12">
        {packages.items.map((pkg, index) => (
          <motion.div 
            key={pkg.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="border-t border-[#707a5e]/20 py-12 group transition-all"
          >
            {pkg.popular ? (
              <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-3xl lg:text-5xl font-bold tracking-tight uppercase text-[#333333]">
                      {pkg.title}
                    </h3>
                    <div className="bg-[#707a5e] text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest">
                      Most Popular
                    </div>
                  </div>
                  
                  <p className="text-lg text-slate-600 mb-8 max-w-2xl">
                    {pkg.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 mb-10">
                    {pkg.features?.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <ArrowRight className="text-[#707a5e] w-5 h-5" />
                        <span className="text-sm font-bold uppercase tracking-wide text-[#333333]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-baseline gap-4 mt-8">
                    <span className="text-4xl lg:text-6xl font-bold tracking-tighter text-[#707a5e]">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">
                      / {pkg.period}
                    </span>
                  </div>
                </div>

                <div className="w-full lg:w-96 aspect-square bg-white border border-[#707a5e]/10 p-2 shadow-2xl relative group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="w-full h-full bg-[#707a5e]/5 flex flex-col items-center justify-center p-8 text-center">
                    <Star className="w-12 h-12 text-[#707a5e]/40 mb-4 fill-current" />
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-[#333333]">
                      {pkg.tagline}
                    </p>
                    <Button className="w-full bg-[#707a5e] text-white py-6 rounded-none font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#5a634a] transition-colors">
                      {pkg.cta}
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between cursor-pointer group/item">
                <div>
                  <h3 className="text-3xl lg:text-5xl font-bold tracking-tight uppercase group-hover/item:translate-x-2 transition-transform text-[#333333]">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center gap-6 mt-2 opacity-60">
                    <span className="text-xs font-black uppercase tracking-widest text-[#333333]">
                      {pkg.tagline}
                    </span>
                    <span className="text-sm font-bold text-[#707a5e]">
                      {pkg.price} {pkg.period}
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 border border-[#707a5e]/20 flex items-center justify-center group-hover/item:bg-[#707a5e] group-hover/item:text-white transition-all">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
