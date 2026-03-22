"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { QrCode } from "lucide-react";
import { HOME_CONTENT } from "@/data/mockData";

export function Hero() {
  const { hero } = HOME_CONTENT;

  return (
    <section className="relative pt-12 overflow-hidden" aria-label="Hero Section">
      <div className="relative px-global text-center z-10">
        <div className="flex justify-between items-start mb-2 md:mb-[-4rem]">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left text-[10px] font-bold uppercase leading-tight tracking-widest text-[#333333]"
          >
            Elite Performance<br />Nutritionist
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-right text-[10px] font-bold uppercase leading-tight tracking-widest text-[#333333]"
          >
            Science-Backed<br />Methodology
          </motion.div>
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[clamp(4rem,20vw,15rem)] font-bold text-[#333333] uppercase select-none leading-[0.85] tracking-[-0.05em]"
        >
          {hero.name}
        </motion.h1>
      </div>

      <div className="px-global relative mt-0 md:-mt-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-xl bg-slate-200 shadow-2xl group"
        >
          <Image 
            src={hero.portrait} 
            alt="Aisha Rao Portrait" 
            fill
            priority
            className="w-full h-full object-cover brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-1000 ease-in-out" 
            sizes="(max-width: 768px) 100vw, 1440px"
          />
          
          {/* QR Code / Badge Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
            className="absolute top-8 right-8 w-24 h-24 bg-white/10 backdrop-blur-md border border-white/20 p-2 flex items-center justify-center rounded shadow-inner"
          >
            <QrCode className="w-16 h-16 text-white text-6xl opacity-80" aria-label="QR Code Badge" />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#6B705C]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
