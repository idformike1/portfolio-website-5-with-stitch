"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, BookOpen } from "lucide-react";
import { SERVICES_CONTENT } from "@/data/mockData";

const iconMap = {
  dashboard: LayoutDashboard,
  menu_book: BookOpen,
};

export function TechStack() {
  const { techStack } = SERVICES_CONTENT;

  return (
    <section className="px-6 lg:px-12 mb-32">
      <div className="border-t border-[#707a5e]/20 pt-24 pb-12">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold tracking-tight mb-4 uppercase text-[#333333]"
        >
          {techStack.title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-16"
        >
          {techStack.subtitle}
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {techStack.tools.map((tool, index) => {
            const Icon = iconMap[tool.icon as keyof typeof iconMap];
            return (
              <motion.div 
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex flex-col gap-6 group"
              >
                <div className="aspect-video bg-slate-900 overflow-hidden relative rounded-sm">
                  <div className="absolute inset-0 bg-[#707a5e]/20 mix-blend-overlay"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white/10 group-hover:text-white/20 transition-colors duration-700">
                    <Icon className="w-48 h-48 stroke-[1px]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold uppercase mb-2 text-[#333333]">
                    {tool.name}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
                    {tool.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
