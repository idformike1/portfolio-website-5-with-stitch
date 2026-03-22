"use client";

import { motion } from "framer-motion";
import { ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";
import { CONTACT_CONTENT } from "@/data/mockData";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const { info, form } = CONTACT_CONTENT;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 px-global py-24 bg-[#F0F0E8]/50 border-t border-black/5">
      <div className="lg:col-span-5 flex flex-col justify-between space-y-16">
        <div className="space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#6b705c] mb-6">Email</h3>
            <a 
              href={`mailto:${info.email}`} 
              className="text-3xl md:text-5xl font-black tracking-tighter text-[#333333] hover:text-[#63cf17] transition-all duration-500"
            >
              {info.email}
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#6b705c] mb-6">Location</h3>
            <p className="text-3xl md:text-5xl font-black tracking-tighter text-[#333333]">
              {info.location}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#6b705c] mb-6">Social</h3>
            <div className="flex flex-col gap-6">
              {info.socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  className="text-2xl font-bold tracking-tighter text-[#333333] flex items-center gap-4 hover:translate-x-4 transition-all duration-500 group"
                >
                  <span className="w-8 h-px bg-slate-200 group-hover:w-16 group-hover:bg-[#63cf17] transition-all" />
                  {social.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="hidden lg:block relative aspect-[4/5] rounded overflow-hidden shadow-2xl"
        >
          <img 
            src="/images/aisha-hero.jpg" 
            alt="Professional portrait" 
            className="w-full h-full object-cover  transition-transform duration-1000 hover:scale-110" 
          />
          <div className="absolute inset-0 bg-[#63cf17]/5" />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-7 bg-white p-12 md:p-20 shadow-[-40px_40px_80px_rgba(0,0,0,0.03)] rounded-3xl"
      >
        <form className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Name</label>
              <input 
                className="w-full border-0 border-b border-black/5 focus:ring-0 focus:border-[#63cf17] bg-transparent py-6 text-xl tracking-tighter transition-all" 
                placeholder="YOUR FULL NAME" 
                type="text"
              />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
              <input 
                className="w-full border-0 border-b border-black/5 focus:ring-0 focus:border-[#63cf17] bg-transparent py-6 text-xl tracking-tighter transition-all" 
                placeholder="HELLO@EXAMPLE.COM" 
                type="email"
              />
            </div>
          </div>
          <div className="space-y-4">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Subject</label>
            <select className="w-full border-0 border-b border-black/5 focus:ring-0 focus:border-[#63cf17] bg-transparent py-6 text-xl tracking-tighter transition-all appearance-none uppercase cursor-pointer">
              <option>Sports Nutrition Coaching</option>
              <option>Speaking Engagement</option>
              <option>Collaboration</option>
              <option>Other</option>
            </select>
          </div>
          <div className="space-y-4">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Message</label>
            <textarea 
              className="w-full border-0 border-b border-black/5 focus:ring-0 focus:border-[#63cf17] bg-transparent py-6 text-xl tracking-tighter transition-all resize-none h-48" 
              placeholder="HOW CAN I HELP YOU?"
            />
          </div>
          <div className="pt-8">
            <Button className="w-full md:w-auto bg-[#333333] hover:bg-[#63cf17] text-white px-16 py-8 rounded-full text-sm font-black tracking-widest transition-all gap-4">
              {form.buttonText}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
