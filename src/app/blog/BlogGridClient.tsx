"use client";

import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BlogGridClientProps {
  initialPosts: any[];
  categories: string[];
}

export default function BlogGridClient({ initialPosts, categories }: BlogGridClientProps) {
  const [currentCategory, setCurrentCategory] = useState("All");

  const filteredPosts = currentCategory === "All" 
    ? initialPosts 
    : initialPosts.filter(post => post.category === currentCategory);

  return (
    <>
      {/* Categories Section */}
      <div className="mb-12 flex flex-wrap items-center gap-3">
        {categories.map((cat) => {
          const isActive = currentCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setCurrentCategory(cat)}
              className={`rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                isActive
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-white/80 text-slate-600 border border-slate-200 hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Blog Grid */}
      <motion.div 
        layout 
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 min-h-[400px] items-start"
      >
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post) => (
            <motion.article
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              key={post.id}
              className="glass-card group flex flex-col items-start rounded-[2.2rem] p-4 transition-all duration-500 hover:-translate-y-2 h-full w-full"
            >
              <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-[1.6rem] shadow-sm">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-primary backdrop-blur-sm">
                  {post.category}
                </div>
              </div>
              
              <div className="flex flex-1 flex-col px-3 pb-4 w-full">
                <div className="mb-4 flex gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" />
                    {post.date || new Date(post.created_at).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3 w-3" />
                    {post.read_time}
                  </span>
                </div>
                
                <h3 className="mb-4 font-display text-2xl font-medium tracking-tight text-slate-900 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="mb-8 text-sm leading-relaxed text-slate-500 line-clamp-3">
                  {post.description}
                </p>
                
                <NextLink
                  href={`/blog/${post.slug}`}
                  className="mt-auto group/read inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary"
                >
                  Read More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/read:translate-x-1" />
                </NextLink>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
        
        {filteredPosts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="col-span-full py-12 text-center text-slate-500"
          >
            No blog posts found for "{currentCategory}".
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
