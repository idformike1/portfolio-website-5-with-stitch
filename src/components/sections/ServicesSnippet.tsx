"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { HOME_CONTENT } from "@/data/mockData";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

export function ServicesSnippet() {
  const { services } = HOME_CONTENT;

  return (
    <section className="px-6 md:px-12 py-24 bg-[#F0F0E8] overflow-hidden">
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
          initial={{ opacity: 0, opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-slate-500 max-w-lg font-medium"
        >
          {services.description}
        </motion.p>
      </div>
      
      <div className="w-full h-px bg-black/5" />
      
      <div className="mt-8">
        <Accordion type="single" collapsible className="w-full">
          {services.items.map((service, index) => (
            <AccordionItem 
              key={service.name} 
              value={`item-${index}`} 
              className="border-b border-black/5 py-6 group hover:bg-black/[0.02] transition-colors px-4"
            >
              <div className="flex justify-between items-center w-full">
                <AccordionTrigger className="hover:no-underline flex-1 text-left py-0">
                  <div className="flex justify-between items-center w-full group">
                    <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-[#333333] group-hover:pl-4 transition-all duration-500">
                      {service.name}
                    </h3>
                    <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-[#63cf17] transition-colors">
                      <ArrowUpRight className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </AccordionTrigger>
              </div>
              <AccordionContent className="mt-4 text-slate-500 text-lg max-w-xl transition-all duration-500 ease-in-out">
                {service.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
