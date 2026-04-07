import NextLink from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog | oyik.realestate.ai",
  description: "Updates, launch notes, and real estate AI insights from oyik.realestate.ai.",
};

import { createClient } from "@supabase/supabase-js";

// Initialize standard Supabase client for public fetches
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const categories = ["All", "AI Strategy", "Automation", "Case Studies", "Product Updates"];

import BlogGridClient from "./BlogGridClient";

export const revalidate = 60; // Revalidate public blog list every 60s

export default async function BlogPage() {
  const { data: dbPosts } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  const posts = dbPosts || [];
  
  let featuredPost = posts.find((p) => p.is_featured);
  
  if (!featuredPost && posts.length > 0) {
    featuredPost = posts[0]; // Fallback to newest
  }

  // The user explicitly requested to show the featured post in the main grid below as well
  const gridPosts = posts;
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-36 sm:px-6 lg:px-8">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(63,55,184,0.12),transparent_38%),linear-gradient(180deg,rgba(248,245,239,0.95),rgba(244,246,251,0.98))]" />
      
      <div className="relative mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            Oyik Journal
          </p>
          <h1 className="page-title text-slate-900">
            Notes, <span className="text-primary italic">launches</span>, and ideas for modern real estate AI.
          </h1>
          <p className="page-subtitle mt-6 text-slate-600">
            Stay ahead of the curve with our latest insights on property automation, AI voice agents, and high-performance real estate operations.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
        <div className="group relative mb-20 overflow-hidden rounded-[2.5rem] border border-slate-200/60 bg-white/60 shadow-[0_32px_64px_-24px_rgba(63,55,184,0.12)] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_45px_80px_-24px_rgba(63,55,184,0.18)]">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent lg:hidden" />
              <div className="absolute left-6 top-6 rounded-full bg-primary px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                Featured Post
              </div>
            </div>
            
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <div className="mb-6 flex flex-wrap gap-4 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5 text-primary">
                  <Tag className="h-3.5 w-3.5" />
                  {featuredPost.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {featuredPost.readTime}
                </span>
              </div>
              
              <h2 className="mb-6 font-display text-3xl font-medium leading-[1.1] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {featuredPost.title}
              </h2>
              
              <p className="mb-10 text-lg leading-relaxed text-slate-600">
                {featuredPost.description}
              </p>
              
              <NextLink
                href={`/blog/${featuredPost.slug}`}
                className="group/btn inline-flex items-center gap-3 self-start text-sm font-bold uppercase tracking-widest text-primary transition-all hover:gap-4"
              >
                Read Article
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover/btn:bg-primary group-hover/btn:text-white">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </NextLink>
            </div>
          </div>
        </div>
        <BlogGridClient initialPosts={posts} categories={categories} />

        {/* CTA Section */}
        <div className="mt-24 overflow-hidden rounded-[2.5rem] border border-primary/20 bg-primary/5 p-8 sm:p-14 lg:p-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 font-display text-3xl font-medium leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Get the latest insights on <span className="text-primary italic">Real Estate AI</span> directly in your inbox.
            </h2>
            <p className="mb-10 text-lg text-slate-600">
              Join 500+ forward-thinking agency directors who receive our weekly breakdown of property automation trends.
            </p>
            <form className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="Work email address"
                className="w-full rounded-full border border-slate-200 bg-white px-8 py-4 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 sm:w-[320px]"
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-10 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30"
              >
                Join the Journal
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
