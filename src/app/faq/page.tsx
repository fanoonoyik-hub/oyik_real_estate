import { Metadata } from "next";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | oyik.realestate.ai",
  description: "Common questions about oyik.realestate.ai real estate AI chat, voice, and workflow systems.",
};

import { createClient } from "@supabase/supabase-js";

// Initialize standard Supabase client for public fetches
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const revalidate = 60; // Revalidate every 60s


export default async function FAQPage() {
  const { data: dbFaqs } = await supabase
    .from("faqs")
    .select("*")
    .eq("page_route", "/faq")
    .order("sort_order", { ascending: true });
    
  const faqs = dbFaqs || [];

  return (
    <div className="flex flex-col w-full pb-24">
      <section className="pt-32 pb-16 bg-background relative border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="page-title mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="page-subtitle mx-auto">
            Everything you need to know about setting up and running oyik.realestate.ai for your team.
          </p>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <div className="grid gap-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-[1.75rem] border border-border bg-white/80 px-6 py-5 shadow-[0_18px_40px_-34px_rgba(67,56,202,0.45)] backdrop-blur-xl open:border-primary/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg sm:text-xl font-display font-semibold text-foreground">
                  <span>{faq.question}</span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-open:rotate-180">
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </summary>
                <p className="pt-4 text-lg leading-relaxed text-muted-foreground pr-12">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
