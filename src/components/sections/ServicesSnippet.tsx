"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { HOME_CONTENT } from "@/data/mockData";

export function ServicesSnippet() {
  const { services } = HOME_CONTENT;

  return (
    <section className="px-global py-24 bg-[#F0F0E8] overflow-hidden">
      <div className="mb-16">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-[#333333]"
        >
          {services.title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-slate-500 max-w-lg font-medium"
        >
          {services.description}
        </motion.p>
      </div>
      
      <div className="w-full h-px bg-black/5" />
      
      <div className="mt-8">
        <div className="w-full flex flex-col">
          {services.items.map((service, index) => (
            <div 
              key={service.name} 
              className="border-b border-black/5 py-8 group hover:bg-black/[0.02] transition-colors duration-500 px-4 cursor-pointer"
            >
              <div className="flex justify-between items-center w-full mb-4 transition-all duration-500 lg:mb-0 lg:group-hover:mb-4">
                <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-[#333333] transition-all duration-500 lg:group-hover:pl-4">
                  {service.name}
                </h3>
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 transition-colors lg:group-hover:bg-[#63cf17]">
                  <ArrowUpRight className="w-6 h-6 text-slate-400 transition-colors lg:group-hover:text-white" />
                </div>
              </div>
              <div className="grid grid-rows-[1fr] opacity-100 transition-[grid-template-rows,opacity] duration-500 ease-in-out lg:grid-rows-[0fr] lg:opacity-0 lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100">
                <div className="overflow-hidden">
                  <p className="text-slate-500 text-lg max-w-xl pb-2">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
