"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { WORK_CONTENT } from "@/data/mockData";

export function WorkTestimonials() {
  const { testimonials } = WORK_CONTENT;

  return (
    <section className="px-global py-32 bg-[#F0F0E8] border-y border-black/5">
      <div className="max-w-7xl mx-auto">
        <motion.h4 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] font-black text-[#6b705c] tracking-[0.4em] uppercase mb-24 text-center"
        >
          {testimonials.title}
        </motion.h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          {testimonials.items.map((testimonial, idx) => (
            <motion.div 
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col gap-10 group"
            >
              <Quote className="text-[#6b705c] w-12 h-12 stroke-[1px] opacity-20 transition-all group-hover:opacity-100 group-hover:scale-110" />
              <p className="text-2xl font-bold leading-tight italic tracking-tighter text-[#333333] mb-8">
                "{testimonial.quote}"
              </p>
              <div className="mt-auto flex items-center gap-6">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-200">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover  transition-transform duration-700 group-hover:scale-110 " 
                  />
                </div>
                <div>
                  <p className="font-black text-[10px] uppercase tracking-widest text-[#333333] mb-1">
                    {testimonial.author}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
