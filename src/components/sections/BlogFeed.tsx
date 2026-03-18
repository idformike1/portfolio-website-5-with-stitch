"use client";

import { motion } from "framer-motion";
import { ArrowRight, Beaker } from "lucide-react";
import { BLOG_CONTENT } from "@/data/mockData";

const iconMap = {
  science: Beaker,
  psychology: (props: any) => <div {...props}><span className="material-symbols-outlined text-6xl text-[#6b705c]/30">psychology</span></div>,
};

export function BlogFeed() {
  const { recentInsights } = BLOG_CONTENT;

  return (
    <section className="px-global py-24 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight mb-4 text-[#333333]"
          >
            {recentInsights.title}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-xl"
          >
            {recentInsights.description}
          </motion.p>
        </div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 group/featured"
        >
          <div className="lg:col-span-7">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-sm bg-[#f0ede5] relative">
              <img 
                src={recentInsights.featured.image} 
                alt={recentInsights.featured.title} 
                className="h-full w-full object-cover transition-transform duration-1000 group-hover/featured:scale-110" 
              />
              <div className="absolute inset-0 bg-[#6b705c]/10 opacity-0 group-hover/featured:opacity-100 transition-opacity duration-700" />
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#6b705c] mb-6">
              <span>{recentInsights.featured.category}</span>
              <span className="h-px w-8 bg-[#6b705c]/30" />
              <span className="text-slate-400">{recentInsights.featured.readTime}</span>
            </div>
            <h4 className="text-3xl md:text-4xl font-bold leading-tight mb-6 hover:text-[#6b705c] transition-colors cursor-pointer text-[#333333]">
              {recentInsights.featured.title}
            </h4>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {recentInsights.featured.excerpt}
            </p>
            <a className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-[#6b705c] pb-1 self-start hover:gap-4 transition-all text-[#333333]" href="#">
              Read Full Story <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Grid Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {recentInsights.posts.map((post, idx) => (
            <motion.article 
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-square mb-6 overflow-hidden bg-[#f0ede5] relative">
                {post.image ? (
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                  />
                ) : (
                  <div className="h-full w-full bg-[#6b705c]/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-6xl text-[#6b705c]/40 group-hover:scale-110 transition-transform duration-700">
                      {post.icon}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h5 className="text-xl font-bold mb-4 group-hover:text-[#6b705c] transition-colors text-[#333333]">
                {post.title}
              </h5>
              <p className="text-sm text-slate-500 line-clamp-2">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
