"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  Database,
  Headphones,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const heroHighlights = [
  "Captures every enquiry",
  "Qualifies prospects",
  "Books viewings 24/7",
  "Turns conversations into confirmed appointments",
];

const conversationItems = [
  "Property details (price, location, features, availability)",
  "Buyer qualification questions",
  "Lettings criteria checks",
  "Viewing coordination",
  "Objection handling",
  "Smart escalation when needed",
];

const challengeItems = [
  {
    number: "01",
    title: "Missed Calls",
    body: "Even one missed call can mean a lost buyer or tenant.",
    icon: PhoneCall,
    className: "lg:col-span-4",
    tone: "light",
  },
  {
    number: "02",
    title: "Inconsistent Qualification",
    body: "Different negotiators ask different questions. The ai call handler ensures uniform qualification standards.",
    icon: CheckCircle2,
    className: "lg:col-span-4 lg:mt-10",
    tone: "light",
  },
  {
    number: "03",
    title: "Staffing Limitations",
    body: "Hiring more staff increases fixed overhead. An AI voice agent scales instantly without added salaries.",
    icon: Users,
    className: "lg:col-span-4",
    tone: "light",
  },
  {
    number: "04",
    title: "After-Hours Gaps",
    body: "Most enquiries happen outside traditional office hours. Your AI voice assistant works 24/7.",
    icon: Clock3,
    className: "lg:col-span-5",
    tone: "light",
  },
  {
    number: "05",
    title: "Seamless Integration with Your Existing Systems",
    body: "Our AI voice assistant connects easily with your CRM, property platforms, calendars, SMS, and email tools, automatically logging call details, qualification answers, and bookings to keep your workflow organised.",
    icon: Database,
    className: "lg:col-span-7",
    tone: "light",
  },
  {
    number: "06",
    title: "Data, Compliance & Professional Standards",
    body: "The AI call agent follows your scripts, records interactions securely, maintains consistent messaging, and escalates sensitive cases when needed—ensuring compliant and professional communication.",
    icon: ShieldCheck,
    className: "lg:col-span-7 lg:-mt-8",
    tone: "dark",
  },
  {
    number: "07",
    title: "The Competitive Advantage",
    body: "Using an AI voice agent helps your agency respond faster, book more viewings, improve lead quality, reduce admin tasks, and increase negotiator productivity—making your business appear modern and reliable.",
    icon: Sparkles,
    className: "lg:col-span-5 lg:mt-10",
    tone: "accent",
  },
];

function revealProps(reduceMotion: boolean, delay = 0, distance = 24) {
  return {
    initial: { opacity: 0, y: reduceMotion ? 0 : distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-90px" },
    transition: { duration: 0.75, delay, ease },
  };
}

export default function VoiceServiceClient() {
  const reduceMotion = useReducedMotion();
  const waveformHeights = [34, 68, 52, 74, 40, 64, 48, 58, 36, 70, 44, 62];

  return (
    <div className="flex w-full flex-col bg-background">
      <section className="relative overflow-hidden border-b border-border/50 bg-[linear-gradient(180deg,#fbfaf7_0%,#f7f4ee_55%,#f4f7fb_100%)] pb-18 pt-30 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:92px_92px]" />
        {reduceMotion ? (
          <>
            <div className="pointer-events-none absolute left-[-7rem] top-14 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(193,155,90,0.12),transparent_72%)] blur-3xl" />
            <div className="pointer-events-none absolute right-[-6rem] top-24 h-[25rem] w-[25rem] rounded-full bg-[radial-gradient(circle,rgba(93,112,211,0.11),transparent_72%)] blur-3xl" />
          </>
        ) : (
          <>
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-[-7rem] top-14 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(193,155,90,0.14),transparent_72%)] blur-3xl"
              animate={{ x: [0, 28, 0], y: [0, -18, 0], scale: [1, 1.06, 1] }}
              transition={{ duration: 8.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-6rem] top-24 h-[25rem] w-[25rem] rounded-full bg-[radial-gradient(circle,rgba(93,112,211,0.13),transparent_72%)] blur-3xl"
              animate={{ x: [0, -24, 0], y: [0, 24, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 9.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}

        <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div className="flex flex-col gap-7" {...revealProps(reduceMotion)}>
            <div className="inline-flex w-fit items-center rounded-full border border-[#cfd8c8] bg-white/76 px-5 py-2 text-[0.74rem] font-semibold uppercase tracking-[0.28em] text-slate-600 shadow-[0_16px_28px_-22px_rgba(15,23,42,0.18)] backdrop-blur-xl">
              AI Voice Assistant | Inbound Call Handling
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-[2.85rem] font-display font-medium leading-[0.93] tracking-[-0.06em] text-slate-950 sm:text-[3.95rem] lg:text-[4.85rem]">
                A human-sounding AI voice assistant that never misses a call.
              </h1>
              <p className="max-w-2xl text-[1.16rem] font-medium leading-8 text-slate-700 sm:text-[1.25rem] sm:leading-9">
                Answer, qualify, and route serious prospects without phone bottlenecks.
              </p>
              <p className="max-w-2xl text-[1.02rem] leading-8 text-slate-600 sm:text-[1.06rem]">
                Property moves fast — and so should you. Our ai voice assistant captures every
                enquiry, qualifies prospects, and books viewings 24/7 without adding headcount.
                Designed exclusively for real estate teams, this intelligent ai voice agent turns
                conversations into confirmed appointments.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href="/book-demo"
                className="group inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-base font-semibold text-white shadow-[0_18px_42px_-22px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-900"
              >
                Request Your Demo
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {heroHighlights.map((item, index) => (
                <motion.div
                  key={item}
                  className={`rounded-[1.35rem] border border-white/80 bg-white/72 px-4 py-4 text-sm font-medium leading-6 text-slate-700 shadow-[0_18px_34px_-28px_rgba(15,23,42,0.18)] backdrop-blur-xl ${
                    index % 2 === 1 ? "sm:translate-y-4" : ""
                  }`}
                  {...revealProps(reduceMotion, 0.1 + index * 0.06, 18)}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="relative" {...revealProps(reduceMotion, 0.08, 30)}>
            <div className="absolute -left-5 top-8 hidden h-20 w-20 rounded-[1.8rem] border border-white/60 bg-white/55 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.26)] backdrop-blur-xl lg:block" />
            <div className="absolute -right-4 bottom-10 hidden h-28 w-28 rounded-[2rem] border border-white/50 bg-white/45 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.22)] backdrop-blur-xl lg:block" />

            <div className="relative overflow-hidden rounded-[2.45rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(245,248,255,0.64))] p-4 shadow-[0_40px_110px_-52px_rgba(15,23,42,0.32)] backdrop-blur-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(193,155,90,0.12),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(93,112,211,0.14),transparent_26%)]" />
              <div className="relative grid gap-4">
                <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.92)]">
                  <div className="flex items-center justify-between gap-4 border-b border-slate-200/80 px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(94,118,210,0.18),rgba(119,181,99,0.22))] text-slate-900">
                        <PhoneCall size={18} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-950">Oyik Voice Desk</p>
                        <p className="text-xs font-medium text-[#77b563]">Live call automation</p>
                      </div>
                    </div>
                    <motion.div
                      className="flex items-center gap-2 rounded-full border border-[#d8e5d2] bg-[#f5fbf0] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#5f9b4b]"
                      animate={reduceMotion ? undefined : { opacity: [0.72, 1, 0.72] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <span className="h-2 w-2 rounded-full bg-[#77b563]" />
                      Active
                    </motion.div>
                  </div>

                  <div className="space-y-5 px-5 py-5">
                    <div className="rounded-[1.6rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(246,248,255,0.95),rgba(255,255,255,0.95))] p-4">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                            Live transcript
                          </p>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            "Hi, I am calling about the two-bed flat in Canary Wharf. Is it still
                            available this week?"
                          </p>
                        </div>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
                          <Headphones className="h-4 w-4" />
                        </div>
                      </div>

                      <div className="flex h-12 items-end gap-1.5">
                        {waveformHeights.map((height, index) => (
                          <motion.span
                            key={`${height}-${index}`}
                            className="w-1.5 rounded-full bg-[linear-gradient(180deg,#d6c089,#6a7df0)]"
                            style={{ height }}
                            animate={
                              reduceMotion
                                ? undefined
                                : { height: [height * 0.55, height, height * 0.7, height * 0.9] }
                            }
                            transition={{
                              duration: 1.6,
                              repeat: Infinity,
                              delay: index * 0.08,
                              ease: "easeInOut",
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
                      <div className="rounded-[1.6rem] border border-[#d7e4d1] bg-[linear-gradient(180deg,rgba(245,251,241,0.96),rgba(255,255,255,0.92))] p-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                          Assistant action
                        </p>
                        <h3 className="mt-3 text-[1.3rem] font-display font-medium leading-[1.05] tracking-[-0.03em] text-slate-950">
                          Qualified and ready to book
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          The caller is matched to a property, screened for fit, and offered live
                          viewing slots while the conversation is still open.
                        </p>
                      </div>

                      <div className="rounded-[1.6rem] border border-slate-200/80 bg-[linear-gradient(145deg,rgba(17,24,39,0.98),rgba(37,46,70,0.95))] p-4 text-white shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)]">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d9c08c]">
                          Routed instantly
                        </p>
                        <div className="mt-4 space-y-3 text-sm leading-6 text-white/78">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#cfd7ff]" />
                            <span>Viewing options sent to the caller immediately</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#cfd7ff]" />
                            <span>Call notes and qualification answers logged for the team</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#cfd7ff]" />
                            <span>Urgent escalation triggered only when needed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[1.45rem] border border-white/80 bg-white/76 px-4 py-4 text-center shadow-[0_18px_34px_-28px_rgba(15,23,42,0.18)] backdrop-blur-xl">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Coverage
                    </p>
                    <p className="mt-3 font-display text-[2.4rem] leading-none tracking-[-0.06em] text-slate-950">
                      24/7
                    </p>
                  </div>
                  <div className="rounded-[1.45rem] border border-white/80 bg-white/76 px-4 py-4 text-center shadow-[0_18px_34px_-28px_rgba(15,23,42,0.18)] backdrop-blur-xl">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Outcome
                    </p>
                    <p className="mt-3 font-display text-[2.2rem] leading-none tracking-[-0.05em] text-slate-950">
                      Faster
                    </p>
                  </div>
                  <div className="rounded-[1.45rem] border border-white/80 bg-white/76 px-4 py-4 text-center shadow-[0_18px_34px_-28px_rgba(15,23,42,0.18)] backdrop-blur-xl">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Team fit
                    </p>
                    <p className="mt-3 font-display text-[2.2rem] leading-none tracking-[-0.05em] text-slate-950">
                      Seamless
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f2efe8] py-18 sm:py-22">
        <div className="pointer-events-none absolute inset-x-0 top-8 text-center text-[clamp(5rem,18vw,12rem)] font-display leading-none tracking-[-0.08em] text-slate-900/[0.04]">
          Voice
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
              <motion.article
                className="rounded-[2.4rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(249,246,240,0.9))] p-7 shadow-[0_30px_70px_-42px_rgba(15,23,42,0.18)] sm:p-9"
                {...revealProps(reduceMotion)}
              >
                <div className="mb-5 inline-flex items-center rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-slate-500">
                  Upgrade your agency
                </div>
                <h2 className="max-w-4xl text-[2.05rem] font-display font-medium leading-[0.97] tracking-[-0.05em] text-slate-950 sm:text-[2.7rem] lg:text-[3.15rem]">
                  Upgrade Your Agency with a Powerful AI Voice Assistant
                </h2>
                <p className="mt-6 text-[1rem] leading-8 text-slate-600 sm:text-[1.04rem]">
                  Speed matters in property. Buyers contact multiple agents, tenants enquire about
                  several listings, and landlords expect quick responses. If you’re not first to
                  engage, you’re often overlooked. Our AI voice assistant ensures every enquiry is
                  answered instantly, professionally, and consistently—whether it’s a buyer asking
                  about a 2-bed flat, a tenant checking availability, or a landlord requesting a
                  valuation.
                </p>
              </motion.article>

              <motion.div className="grid gap-4" {...revealProps(reduceMotion, 0.08)}>
                <article className="overflow-hidden rounded-[2.2rem] border border-slate-900/10 bg-[linear-gradient(145deg,rgba(17,24,39,0.98),rgba(37,46,70,0.95))] p-6 text-white shadow-[0_28px_70px_-42px_rgba(15,23,42,0.36)] sm:p-8">
                  <div className="mb-5 h-px w-24 bg-[linear-gradient(90deg,#d9c08c,rgba(217,192,140,0.06))]" />
                  <p className="text-[1rem] leading-8 text-white/82 sm:text-[1.04rem]">
                    This is not a robotic phone menu or basic chatbot. It’s a fully conversational
                    AI voice agent designed specifically for estate agency conversations and trained
                    to handle:
                  </p>
                  <div className="mt-6 grid gap-3">
                    {conversationItems.map((item, index) => (
                      <motion.div
                        key={item}
                        className="rounded-[1.55rem] border border-white/10 bg-white/8 p-4 backdrop-blur-sm"
                        {...revealProps(reduceMotion, 0.12 + index * 0.05, 16)}
                      >
                        <div className="flex items-start gap-4">
                          <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-white">
                            {index === 0 ? (
                              <Building2 className="h-4 w-4" />
                            ) : index === 1 ? (
                              <CheckCircle2 className="h-4 w-4" />
                            ) : index === 2 ? (
                              <Users className="h-4 w-4" />
                            ) : index === 3 ? (
                              <CalendarCheck2 className="h-4 w-4" />
                            ) : index === 4 ? (
                              <Headphones className="h-4 w-4" />
                            ) : (
                              <Workflow className="h-4 w-4" />
                            )}
                          </div>
                          <p className="text-[1rem] leading-7 text-white/82">{item}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <article className="mt-4 rounded-[1.85rem] border border-[#d7e4d1] bg-[linear-gradient(180deg,rgba(245,251,241,0.96),rgba(255,255,255,0.92))] p-6 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.15)]">
                    <p className="text-[1rem] leading-8 text-slate-600 sm:text-[1.04rem]">
                      With a reliable AI voice assistant, your agency stays responsive at all
                      times—without increasing headcount or overloading negotiators
                    </p>
                  </article>
                </article>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#111827_0%,#162032_100%)] py-18 text-white sm:py-22">
        {reduceMotion ? (
          <>
            <div className="pointer-events-none absolute left-[-5rem] top-0 h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(119,181,99,0.18),transparent_70%)] blur-3xl" />
            <div className="pointer-events-none absolute right-[-6rem] bottom-0 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(102,124,232,0.22),transparent_72%)] blur-3xl" />
          </>
        ) : (
          <>
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-[-5rem] top-0 h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(119,181,99,0.18),transparent_70%)] blur-3xl"
              animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-6rem] bottom-0 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(102,124,232,0.22),transparent_72%)] blur-3xl"
              animate={{ x: [0, -24, 0], y: [0, -20, 0] }}
              transition={{ duration: 9.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div className="max-w-4xl" {...revealProps(reduceMotion)}>
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-white/72">
                Why agencies choose it
              </div>
              <h2 className="mt-5 text-[2.2rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-white sm:text-[3rem]">
                Why Real Estate Agencies Choose an AI Voice Assistant
              </h2>
              <div className="mt-6 max-w-3xl space-y-4 text-[1rem] leading-8 text-white/76 sm:text-[1.04rem]">
                <p>
                  Estate agencies operate in a high-pressure, high-volume environment. Calls are
                  unpredictable. Enquiries spike after new listings go live. Negotiators juggle
                  viewings, valuations, and deal progression.
                </p>
                <p>An intelligent ai call agent solves several core challenges:</p>
              </div>
            </motion.div>

            <div className="mt-10 grid gap-5 lg:grid-cols-12">
              {challengeItems.map((item, index) => (
                <motion.article
                  key={item.title}
                  className={`group relative overflow-hidden rounded-[2rem] border p-6 shadow-[0_24px_60px_-38px_rgba(0,0,0,0.32)] transition-all duration-300 hover:-translate-y-1 ${item.className} ${
                    item.tone === "dark"
                      ? "border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] backdrop-blur-xl"
                      : item.tone === "accent"
                        ? "border-[#d9c08c]/30 bg-[linear-gradient(145deg,rgba(217,192,140,0.18),rgba(255,255,255,0.08))] backdrop-blur-xl"
                        : "border-white/10 bg-white/[0.06] backdrop-blur-xl"
                  }`}
                  {...revealProps(reduceMotion, index * 0.06, 20)}
                >
                  <div className="absolute right-5 top-4 text-[4.5rem] font-display leading-none tracking-[-0.08em] text-white/[0.05]">
                    {item.number}
                  </div>
                  <div className="relative flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-[#d9c08c]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="max-w-xl">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55">
                        {item.number}
                      </p>
                      <h3 className="mt-2 text-[1.22rem] font-display font-medium leading-[1.08] tracking-[-0.03em] text-white sm:text-[1.32rem]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[0.98rem] leading-7 text-white/72">{item.body}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f4ed_0%,#fbfaf7_100%)] pb-24 pt-10 sm:pb-28">
        <div className="pointer-events-none absolute inset-x-0 top-8 text-center text-[clamp(5rem,17vw,11.5rem)] font-display leading-none tracking-[-0.08em] text-slate-900/[0.04]">
          Demo
        </div>
        <div className="pointer-events-none absolute right-[-8rem] top-16 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(119,181,99,0.1),transparent_72%)] blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-5xl overflow-hidden rounded-[2.65rem] border border-slate-200/80 bg-[linear-gradient(135deg,rgba(18,24,39,0.98),rgba(30,41,59,0.96))] px-7 py-9 text-white shadow-[0_42px_110px_-52px_rgba(15,23,42,0.55)] sm:px-10 sm:py-11"
            {...revealProps(reduceMotion)}
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-4xl">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-white/72">
                  Elevate your client communication
                </div>
                <h2 className="mt-5 text-[2.3rem] font-display font-medium leading-[0.95] tracking-[-0.055em] text-white sm:text-[3.2rem]">
                  Elevate Your Client Communication
                </h2>

                <div className="mt-6 space-y-5 text-[1rem] leading-8 text-white/78 sm:text-[1.05rem]">
                  <p>
                    If you’re ready to modernise your call management and convert more enquiries
                    into viewings, book a demo today and see how an advanced ai voice assistant can
                    transform your agency’s performance.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  href="/book-demo"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-base font-semibold text-slate-950 shadow-[0_18px_34px_-20px_rgba(255,255,255,0.45)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Request Your Demo
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-white transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
