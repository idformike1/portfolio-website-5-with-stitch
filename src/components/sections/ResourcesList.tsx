"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BLOG_CONTENT } from "@/data/mockData";
import { Button } from "@/components/ui/button";

export function ResourcesList() {
  const { resources } = BLOG_CONTENT;

  return (
    <section className="px-6 py-32 border-t border-[#6b705c]/10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold tracking-tight mb-4 text-[#333333]"
            >
              {resources.title}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 max-w-md"
            >
              {resources.description}
            </motion.p>
          </div>
          <Button className="px-8 py-6 bg-[#6b705c] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#4a4e31] transition-colors rounded-none">
            View All Resources
          </Button>
        </div>

        <div className="space-y-4">
          {resources.items.map((resource, idx) => (
            <motion.div 
              key={resource.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group border-t border-[#6b705c]/20 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#6b705c]/5 transition-all px-4 cursor-pointer"
            >
              <div className="max-w-xl">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#6b705c] mb-2">
                  {resource.category}
                </div>
                <h4 className="text-2xl font-bold text-[#333333] group-hover:text-[#6b705c] transition-colors">{resource.name}</h4>
                <p className="mt-4 text-slate-600 opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden transition-all duration-500 ease-in-out">
                  {resource.description}
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-50 transition-opacity text-[#333333]">Visit Site</span>
                <div className="h-10 w-10 flex items-center justify-center border border-[#6b705c]/20 rounded-full group-hover:bg-[#6b705c] group-hover:text-white transition-all transform group-hover:scale-110">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-b border-[#6b705c]/20" />
        </div>
      </div>
    </section>
  );
}
