"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ContactFormSection() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    router.prefetch("/thank-you");
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const names = formData.name.trim().split(" ");
    const first_name = names[0] || "Unknown";
    const last_name = names.slice(1).join(" ") || "Unknown";

    // Since the main table has no dedicated phone column, we append it to the message or company
    const payload = {
      first_name,
      last_name,
      email: formData.email,
      company: formData.phone || "N/A", // Saving phone here
      message: formData.message,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const thankYouUrl = new URL("/thank-you", window.location.origin).toString();
        window.location.assign(thankYouUrl);
      } else {
        alert("Failed to send message. Please try again or email us directly at hello@oyik.ai.");
      }
    } catch (err) {
      alert("Failed to send message. Please try again or email us directly at hello@oyik.ai.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f5f0_0%,#f2f4fb_54%,#f8f4ec_100%)] py-20 sm:py-24">
      <div className="pointer-events-none absolute left-[-6rem] top-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(63,55,184,0.13),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-8rem] right-[-4rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.1),transparent_72%)] blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl"
        >
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="relative overflow-hidden rounded-[2.35rem] border border-white/65 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(247,249,255,0.72))] p-7 shadow-[0_36px_100px_-52px_rgba(15,23,42,0.28)] backdrop-blur-2xl sm:p-9 lg:p-10">
              <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(63,55,184,0.28),transparent)]" />
              <h2 className="max-w-2xl text-[2.5rem] font-display font-medium leading-[0.96] tracking-[-0.05em] text-slate-950 sm:text-[3.35rem]">
                Smarter Conversations Start With AI for Real Estate
              </h2>

              <div className="mt-7 max-w-2xl space-y-4 text-[1.02rem] leading-8 text-slate-600 sm:text-[1.08rem]">
                <p>
                  Discover how AI for real estate can help your agency respond faster, qualify
                  leads automatically, and move enquiries to booked viewings without extra manual
                  work.
                </p>
                <p>
                  Using artificial intelligence for real estate, we connect your enquiries, CRM,
                  calendar, and communication channels into one smooth workflow so no opportunity
                  is missed and your team saves hours each week.
                </p>
                <p>
                  Our intelligent real estate chatbot can answer property questions, share
                  listings, capture lead details, and guide buyers, tenants, and landlords to the
                  next step, 24/7.
                </p>
                <p>
                  Tell us what you&apos;d like to automate, and we&apos;ll show you how it can work for
                  your agency.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:+447352328646"
                  className="inline-flex items-center gap-3 rounded-full border border-primary/12 bg-white/80 px-5 py-3 text-sm font-medium text-slate-700 shadow-[0_16px_36px_-26px_rgba(15,23,42,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-950"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  +44 7352 328646
                </a>
                <a
                  href="mailto:hello@oyik.ai"
                  className="inline-flex items-center gap-3 rounded-full border border-primary/12 bg-white/80 px-5 py-3 text-sm font-medium text-slate-700 shadow-[0_16px_36px_-26px_rgba(15,23,42,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-950"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  hello@oyik.ai
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.35rem] border border-[#22356f]/15 bg-[linear-gradient(180deg,rgba(11,20,44,0.96),rgba(26,40,88,0.95))] p-7 text-white shadow-[0_42px_110px_-52px_rgba(10,16,37,0.6)] sm:p-9">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(147,197,253,0.14),transparent_28%)]" />
              <div className="relative">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-white/84">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full rounded-2xl border border-white/12 bg-white/8 px-5 py-4 text-white placeholder:text-white/35 transition-all duration-300 focus:border-indigo-300/60 focus:outline-none focus:ring-2 focus:ring-indigo-300/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-white/84">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full rounded-2xl border border-white/12 bg-white/8 px-5 py-4 text-white placeholder:text-white/35 transition-all duration-300 focus:border-indigo-300/60 focus:outline-none focus:ring-2 focus:ring-indigo-300/20"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-white/84">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-2xl border border-white/12 bg-white/8 px-5 py-4 text-white placeholder:text-white/35 transition-all duration-300 focus:border-indigo-300/60 focus:outline-none focus:ring-2 focus:ring-indigo-300/20"
                      placeholder="+44 20 1234 5678"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white/84">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="w-full resize-none rounded-2xl border border-white/12 bg-white/8 px-5 py-4 text-white placeholder:text-white/35 transition-all duration-300 focus:border-indigo-300/60 focus:outline-none focus:ring-2 focus:ring-indigo-300/20"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[linear-gradient(135deg,#ffffff,#eef2ff)] px-8 py-5 text-lg font-semibold text-slate-950 shadow-[0_26px_60px_-30px_rgba(255,255,255,0.36)] transition-all duration-300 hover:shadow-[0_30px_64px_-28px_rgba(255,255,255,0.44)] disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
