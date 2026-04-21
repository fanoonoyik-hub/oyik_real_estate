import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, Share2, Globe, Mail, Link as LinkIcon } from "lucide-react";
import SafeHtml from "@/components/shared/SafeHtml";
import BlogFaqSection from "@/components/shared/BlogFaqSection";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug).replace(/ /g, "-");
  
  const { data: post } = await supabase
    .from("blogs")
    .select("title, description")
    .eq("slug", decodedSlug)
    .single();

  if (!post) return { title: "Post Not Found" };

  return {
    title: {
      absolute: post.title
    },
    description: post.description,
  };
}

export async function generateStaticParams() {
  const { data: posts } = await supabase.from("blogs").select("slug");
  if (!posts) return [];
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug).replace(/ /g, "-");
  
  const { data: post } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", decodedSlug)
    .single();

  if (!post) {
    notFound();
  }

  return (
    <article className="relative min-h-screen pb-24 pt-36">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(63,55,184,0.08),transparent_40%),linear-gradient(180deg,rgba(248,245,239,0.8),rgba(244,246,251,0.9))]" />
      
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <Link
          href="/blog"
          className="group mb-12 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-400 transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Journal
        </Link>

        {/* Post Header */}
        <header className="mb-12">
          <div className="mb-6 flex flex-wrap gap-4 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1.5 text-primary">
              <Tag className="h-3.5 w-3.5" />
              {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {post.date || new Date(post.created_at).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.read_time}
            </span>
          </div>

          <h1 className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          {post.author && (
            <div className="mt-8 flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-full border border-slate-200 bg-white p-1">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {post.author.charAt(0)}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-900">{post.author}</p>
                <p className="text-[10px] font-medium text-slate-400">Content Specialists</p>
              </div>
            </div>
          )}
        </header>

        {/* Featured Image */}
        <div className="relative mb-16 aspect-[21/9] w-full overflow-hidden rounded-[2.5rem] border border-white/60 shadow-[0_32px_64px_-24px_rgba(63,55,184,0.12)]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-slate prose-lg mx-auto max-w-none prose-headings:font-display prose-headings:font-medium prose-headings:tracking-tight prose-a:text-primary prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-img:rounded-[2rem]">
          <SafeHtml html={post.content || ""} className="article-content space-y-6 text-slate-700" />
        </div>

        {/* Blog Specific FAQs */}
        {post.faqs && post.faqs.length > 0 && (
          <BlogFaqSection faqs={post.faqs} />
        )}

        {/* Footer / Share */}
        <footer className="mt-20 border-t border-slate-200 pt-10">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Share this post</span>
              <div className="flex gap-2">
                {[Globe, Mail, LinkIcon, Share2].map((Icon, i) => (
                  <button key={i} className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all hover:border-primary hover:text-primary hover:shadow-lg">
                    <Icon className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>
            
            <Link
              href="/blog"
              className="text-sm font-bold uppercase tracking-widest text-primary hover:underline"
            >
              More from the Journal
            </Link>
          </div>
        </footer>

        {/* Newsletter Signup */}
        <div className="mt-24 overflow-hidden rounded-[3rem] border border-primary/20 bg-primary/5 p-8 text-center sm:p-16">
          <h3 className="mb-4 font-display text-3xl font-medium tracking-tight text-slate-900">
            Enjoyed this read?
          </h3>
          <p className="mb-8 text-slate-600">
            Subscribe to our weekly insights and never miss an update on the future of real estate automation.
          </p>
          <form className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-full border border-slate-200 bg-white px-6 py-3 text-sm outline-none focus:border-primary"
            />
            <button className="rounded-full bg-primary px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-transform hover:-translate-y-0.5">
              Join
            </button>
          </form>
        </div>
      </div>
    </article>
  );
}
