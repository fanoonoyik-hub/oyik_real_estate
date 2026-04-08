"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface BlogFaqSectionProps {
  faqs: FaqItem[];
}

export default function BlogFaqSection({ faqs }: BlogFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="mt-20 pt-16 border-t border-slate-200">
      <div className="mb-10">
        <h2 className="font-display text-3xl font-medium tracking-tight text-slate-900 mb-4">
          Frequently Asked <span className="text-primary italic">Questions</span>
        </h2>
        <p className="text-slate-500 max-w-2xl">
          Quick answers to common questions about this article and its implementation.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white/50 shadow-sm backdrop-blur-sm transition-all hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-8 py-6 text-left"
              >
                <span className="text-lg font-semibold text-slate-900">{item.question}</span>
                <motion.span 
                  animate={{ rotate: isOpen ? 180 : 0 }} 
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className={`h-5 w-5 transition-colors ${isOpen ? 'text-primary' : 'text-slate-400'}`} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-base leading-relaxed text-slate-600">
                      {item.answer}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
