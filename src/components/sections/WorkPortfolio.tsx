"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WORK_CONTENT } from "@/data/mockData";

export function WorkPortfolio() {
  const { projects } = WORK_CONTENT;

  return (
    <section className="px-global py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-sm mb-10 bg-slate-100 relative shadow-2xl transition-all duration-700 group-hover:scale-[1.02]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110   opacity-80 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-[#63cf17]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              
              <div className="flex justify-between items-start mb-8">
                <div className="flex-1">
                  <span className="text-[#63cf17] text-[10px] font-black tracking-[0.2em] uppercase mb-4 block">
                    {project.category}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter text-[#333333] group-hover:text-[#6b705c] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xl text-slate-500 max-w-lg leading-relaxed mb-10">
                    {project.description}
                  </p>
                </div>
                <div className="w-16 h-16 border-2 border-slate-100 flex items-center justify-center rounded-full group-hover:bg-[#6b705c] group-hover:border-[#6b705c] group-hover:text-white transition-all transform group-hover:rotate-45">
                  <ArrowUpRight className="w-8 h-8" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 border-t border-black/5 pt-10">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="group/metric">
                    <p className="text-4xl font-bold tracking-tighter text-[#6b705c] mb-1">
                      {metric.value}
                    </p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover/metric:text-slate-600 transition-colors">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
