"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Gauge,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  Target,
  Waves,
} from "lucide-react";

const values = [
  {
    title: "Speed",
    description:
      "Instant responses increase property viewing bookings and improve conversion rates.",
    icon: Gauge,
  },
  {
    title: "Clarity",
    description:
      "Accurate property information builds trust with buyers and tenants.",
    icon: BadgeCheck,
  },
  {
    title: "Professionalism",
    description:
      "Consistent messaging strengthens your agency brand across all channels.",
    icon: ShieldCheck,
  },
  {
    title: "Reliability",
    description: "24/7 enquiry capture ensures no missed opportunities.",
    icon: Waves,
  },
  {
    title: "Results",
    description:
      "Our automation focuses on measurable outcomes like qualified leads and booked viewings.",
    icon: Target,
  },
];

const differentiators = [
  {
    title: "AI Built for Estate Agencies",
    description:
      "Designed for real estate workflows including lead qualification, property enquiries, and viewing scheduling.",
    icon: Building2,
  },
  {
    title: "Omnichannel Communication",
    description:
      "Capture enquiries from website chat, social media, email, and phone in one system.",
    icon: MessagesSquare,
  },
  {
    title: "Human Handover When Needed",
    description:
      "Seamlessly transfer conversations to your sales team with full context.",
    icon: Sparkles,
  },
  {
    title: "Fully Customisable Automation",
    description:
      "Match workflows, qualification questions, and messaging to your agency process.",
    icon: BadgeCheck,
  },
];

const heroPills = [
  "Estate-agency AI systems",
  "Premium automation",
  "Built for faster viewings",
];

function fadeUp(reduceMotion: boolean, delay = 0) {
  return {
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 28, filter: "blur(8px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
}

export default function AboutPageClient() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative flex w-full flex-col overflow-hidden bg-[linear-gradient(180deg,#f9f7f1_0%,#f6f5f2_22%,#f1f4fb_58%,#f8f6ef_100%)] text-foreground">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-28 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(63,55,184,0.16),transparent_68%)] blur-3xl" />
        <div className="absolute right-[-7rem] top-44 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.12),transparent_68%)] blur-3xl" />
        <div className="absolute bottom-24 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(63,55,184,0.08),transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.34] [background-image:linear-gradient(rgba(63,55,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(63,55,184,0.06)_1px,transparent_1px)] [background-size:96px_96px]" />
      </div>

      <section className="relative overflow-hidden px-4 pb-18 pt-30 sm:px-6 sm:pt-36 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <motion.div {...fadeUp(reduceMotion, 0.05)} className="relative">
              <div className="inline-flex items-center gap-3 rounded-full border border-primary/12 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary shadow-[0_16px_40px_-26px_rgba(63,55,184,0.28)] backdrop-blur-xl">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                </span>
                About Oyik
              </div>

              <h1 className="mt-7 max-w-5xl text-[3rem] font-display font-medium leading-[0.9] tracking-[-0.06em] text-slate-950 sm:text-[4.4rem] lg:text-[6.25rem]">
                Meet Oyik Real Estate.AI
              </h1>

              <h2 className="mt-6 max-w-3xl text-2xl font-display font-medium leading-[1.02] tracking-[-0.04em] text-primary sm:text-[2.35rem] lg:text-[2.9rem]">
                AI Automation for Modern Real Estate Business
              </h2>

              <div className="mt-7 flex flex-wrap gap-3">
                {heroPills.map((pill, index) => (
                  <motion.span
                    key={pill}
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.15 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-full border border-primary/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0.72))] px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_12px_30px_-22px_rgba(15,23,42,0.18)] backdrop-blur-xl"
                  >
                    {pill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeUp(reduceMotion, 0.18)}
              className="relative rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(245,247,255,0.76))] p-6 shadow-[0_32px_90px_-48px_rgba(15,23,42,0.28)] backdrop-blur-2xl sm:p-7"
            >
              <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(63,55,184,0.3),transparent)]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/80">
                Real estate automation division
              </p>
              <p className="mt-5 text-[1.02rem] leading-8 text-slate-700 sm:text-[1.08rem]">
                Oyik Real Estate is the AI automation division of Oyik.ai designed for estate
                agencies, helping teams automate enquiries, qualify leads, and book viewings
                without increasing workload.
              </p>
              <p className="mt-5 text-[1.02rem] leading-8 text-slate-700 sm:text-[1.08rem]">
                By automating repetitive tasks, replying to enquiries, answering listing
                questions, qualifying leads, scheduling viewings, and sending confirmations,
                Oyik helps estate agency teams focus on what matters most: closing deals and
                building relationships.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Instant replies", value: "Web, call, social" },
                  { label: "Lead flow", value: "Qualified faster" },
                  { label: "Core outcome", value: "More booked viewings" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.4rem] border border-primary/10 bg-white/72 px-4 py-4"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/70">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-800">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            {...fadeUp(reduceMotion, 0.28)}
            className="relative mt-10 overflow-hidden rounded-[2.25rem] border border-slate-200/70 bg-[linear-gradient(125deg,rgba(11,21,46,0.94),rgba(31,40,96,0.92)_58%,rgba(80,88,190,0.85)_100%)] p-6 text-white shadow-[0_40px_120px_-52px_rgba(10,16,37,0.6)] sm:p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(147,197,253,0.18),transparent_24%)]" />
            <div className="relative grid gap-5 md:grid-cols-3">
              {[
                "Automate repetitive admin without losing your premium brand feel.",
                "Move every enquiry forward with faster qualification and cleaner follow-up.",
                "Create a sales journey where responsiveness feels like a competitive edge.",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.18 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-[1.6rem] border border-white/12 bg-white/8 p-5 backdrop-blur-md"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-indigo-200/80">
                    0{index + 1}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-white/88">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.article
              {...fadeUp(reduceMotion)}
              className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(250,247,240,0.74))] p-7 shadow-[0_28px_80px_-46px_rgba(15,23,42,0.2)] backdrop-blur-xl sm:p-8"
            >
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(63,55,184,0.14),transparent_70%)] blur-2xl" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/80">
                Mission
              </p>
              <h3 className="mt-5 max-w-md text-[2rem] font-display font-medium leading-[1] tracking-[-0.04em] text-slate-950 sm:text-[2.35rem]">
                Convert more enquiries into booked viewings.
              </h3>
              <p className="mt-5 text-base leading-8 text-slate-700 sm:text-[1.02rem]">
                Our mission is simple: help estate agencies convert more enquiries into booked
                viewings while reducing administrative workload.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 sm:text-[1.02rem]">
                Our AI systems ensure every enquiry is answered instantly across websites,
                calls, and social media so no opportunity is missed and every lead moves
                forward in the sales journey.
              </p>
            </motion.article>

            <motion.article
              {...fadeUp(reduceMotion, 0.1)}
              className="relative overflow-hidden rounded-[2rem] border border-white/16 bg-[linear-gradient(160deg,rgba(14,24,53,0.98),rgba(25,43,93,0.94)_58%,rgba(54,70,150,0.88)_100%)] p-7 text-white shadow-[0_32px_90px_-46px_rgba(10,16,37,0.56)] sm:p-8"
            >
              <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:88px_88px]" />
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-indigo-200">
                  Vision
                </p>
                <h3 className="mt-5 max-w-md text-[2rem] font-display font-medium leading-[1] tracking-[-0.04em] text-white sm:text-[2.35rem]">
                  A real estate industry with no missed enquiry.
                </h3>
                <p className="mt-5 text-base leading-8 text-white/82 sm:text-[1.02rem]">
                  Our vision is a real estate industry where no enquiry is missed and no
                  opportunity is lost because of slow responses or administrative overload.
                </p>
                <p className="mt-4 text-base leading-8 text-white/82 sm:text-[1.02rem]">
                  By combining AI conversations, automation, and estate agency workflows, we
                  aim to create a world where property teams can scale operations without
                  increasing workload. In this future, agents spend less time on repetitive
                  tasks and more time doing what matters most: building trust, advising
                  clients, and closing deals.
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp(reduceMotion)} className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary/80">
              Our Values
            </p>
            <h2 className="mt-4 text-[2.5rem] font-display font-medium leading-[0.96] tracking-[-0.05em] text-slate-950 sm:text-[3.6rem]">
              The operating principles behind every Oyik workflow.
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.62, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                className={`group relative overflow-hidden rounded-[1.9rem] border border-white/70 p-6 shadow-[0_24px_70px_-42px_rgba(15,23,42,0.22)] backdrop-blur-xl ${
                  index % 2 === 0
                    ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(246,244,238,0.76))]"
                    : "bg-[linear-gradient(180deg,rgba(246,248,255,0.92),rgba(255,255,255,0.82))]"
                }`}
              >
                <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(63,55,184,0.32),transparent)]" />
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/10 transition-transform duration-300 group-hover:scale-105">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/60">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-[1.7rem] font-display font-medium leading-[1.02] tracking-[-0.03em] text-slate-950">
                  {value.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{value.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-22 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <motion.div {...fadeUp(reduceMotion)} className="lg:sticky lg:top-28">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary/80">
                What Makes Oyik Different
              </p>
              <h2 className="mt-4 text-[2.55rem] font-display font-medium leading-[0.96] tracking-[-0.05em] text-slate-950 sm:text-[3.7rem]">
                Premium automation shaped around real estate reality.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-8 text-slate-600">
                Everything here is designed to feel sharper, cleaner, and more useful for
                modern estate agencies that want speed without sacrificing brand quality.
              </p>
            </motion.div>

            <div className="space-y-5">
              {differentiators.map((diff, index) => (
                <motion.article
                  key={diff.title}
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(245,248,255,0.78))] p-6 shadow-[0_26px_74px_-44px_rgba(15,23,42,0.22)] backdrop-blur-xl sm:p-7"
                >
                  <div className="absolute inset-y-0 left-0 w-1 bg-[linear-gradient(180deg,#3F37B8,#8FA4FF)] opacity-70" />
                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white">
                      <diff.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary/65">
                          0{index + 1}
                        </span>
                        <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(63,55,184,0.18),transparent)]" />
                      </div>
                      <h3 className="mt-3 text-[1.45rem] font-display font-medium leading-[1.04] tracking-[-0.03em] text-slate-950">
                        {diff.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-slate-600">
                        {diff.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            {...fadeUp(reduceMotion)}
            className="relative overflow-hidden rounded-[2.4rem] border border-white/18 bg-[linear-gradient(135deg,#101933_0%,#1e2d69_45%,#4c57c8_100%)] p-8 text-white shadow-[0_44px_120px_-52px_rgba(10,16,37,0.6)] sm:p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(147,197,253,0.18),transparent_28%)]" />
            {!reduceMotion ? (
              <motion.div
                aria-hidden="true"
                className="absolute inset-y-0 left-[-20%] w-[36%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)] blur-xl"
                animate={{ x: ["0%", "230%"] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              />
            ) : null}

            <div className="relative z-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-indigo-200">
                Ready to See It in Action?
              </p>
              <h2 className="mx-auto mt-5 max-w-4xl text-[2.45rem] font-display font-medium leading-[0.96] tracking-[-0.05em] text-white sm:text-[3.6rem]">
                Book a short demo and see the enquiry-to-viewing process in motion.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/82">
                Book a short demo and we&apos;ll show you how Oyik can automate your
                enquiry-to-viewing process and help your agency convert more leads.
              </p>
              <motion.div
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="mt-9"
              >
                <Link
                  href="/book-demo"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[0_20px_44px_-24px_rgba(255,255,255,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_58px_-24px_rgba(255,255,255,0.62)]"
                >
                  Book a demo
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
