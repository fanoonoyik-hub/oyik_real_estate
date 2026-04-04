"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BellRing,
  CalendarClock,
  CheckCircle2,
  CreditCard,
  FileCheck2,
  MapPinned,
  MessageSquareMore,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const channels = ["SMS", "Email", "WhatsApp", "Voice calls"];

const reminderCategories = [
  {
    title: "Property Viewing Reminders",
    icon: CalendarClock,
    intro:
      "Automatically notify buyers or tenants:",
    bullets: [
      "24 hours before viewings",
      "2 hours before appointments",
      "With property address and Google Maps link",
      "Option to confirm or reschedule instantly",
    ],
    closing:
      "This smart AI reminder bot reduces no-shows and keeps your viewing schedule running smoothly.",
    tone: "dark",
  },
  {
    title: "Rent & Payment Reminders",
    icon: CreditCard,
    intro: "Send automated alerts:",
    bullets: [
      "Before rent is due",
      "On the due date",
      "After missed payments",
    ],
    closing:
      "Optional voice call reminders from the AI reminder assistant increase response rates and help agencies collect payments faster without manual follow-ups.",
    tone: "light",
  },
  {
    title: "Tenant Onboarding Reminders",
    icon: FileCheck2,
    intro: "Keep move-ins on track with automatic prompts for:",
    bullets: [
      "Deposit payments",
      "Document submissions",
      "Contract signatures",
    ],
    closing:
      "The AI reminder bot ensures tenants complete required steps on time, creating a smoother onboarding experience for both tenants and your team.",
    tone: "accent",
  },
] as const;

const exampleTriggers = [
  "Viewing booked → confirmation and reminders sent",
  "Rent due → tenant notified automatically",
  "Lead inactive → follow-up reminder triggered",
  "Documents pending → completion reminder sent",
];

function revealProps(reduceMotion: boolean, delay = 0, distance = 24) {
  return {
    initial: { opacity: 0, y: reduceMotion ? 0 : distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-90px" },
    transition: { duration: 0.8, delay, ease },
  };
}

export default function ReminderServiceClient() {
  const reduceMotion = useReducedMotion();
  const inlineLinkClass =
    "font-semibold text-[#77b563] underline decoration-[#77b563]/45 underline-offset-4 transition-colors hover:text-[#5f9b4b]";

  return (
    <div className="flex w-full flex-col bg-background">
      <section className="relative overflow-hidden border-b border-border/50 bg-[linear-gradient(180deg,#fbfaf7_0%,#f4efe4_52%,#eef5fb_100%)] pb-18 pt-30 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:94px_94px]" />
        {reduceMotion ? (
          <>
            <div className="pointer-events-none absolute left-[-7rem] top-12 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(217,192,140,0.16),transparent_72%)] blur-3xl" />
            <div className="pointer-events-none absolute right-[-6rem] top-20 h-[25rem] w-[25rem] rounded-full bg-[radial-gradient(circle,rgba(109,147,86,0.12),transparent_72%)] blur-3xl" />
          </>
        ) : (
          <>
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-[-7rem] top-12 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(217,192,140,0.16),transparent_72%)] blur-3xl"
              animate={{ x: [0, 22, 0], y: [0, -18, 0], scale: [1, 1.06, 1] }}
              transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-6rem] top-20 h-[25rem] w-[25rem] rounded-full bg-[radial-gradient(circle,rgba(109,147,86,0.13),transparent_72%)] blur-3xl"
              animate={{ x: [0, -26, 0], y: [0, 20, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 9.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}

        <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.96fr_1.04fr] lg:px-8">
          <motion.div className="flex flex-col gap-7" {...revealProps(reduceMotion)}>
            <div className="inline-flex w-fit items-center rounded-full border border-[#ddd3bf] bg-white/78 px-5 py-2 text-[0.74rem] font-semibold uppercase tracking-[0.28em] text-slate-600 shadow-[0_16px_28px_-22px_rgba(15,23,42,0.18)] backdrop-blur-xl">
              Smart reminders | Viewings + Rent + Documents
            </div>

            <div className="space-y-5">
              <div className="h-px w-24 bg-[linear-gradient(90deg,#d9c08c,rgba(217,192,140,0.08))]" />
              <h1 className="max-w-4xl text-[2.85rem] font-display font-medium leading-[0.93] tracking-[-0.06em] text-slate-950 sm:text-[3.95rem] lg:text-[4.78rem]">
                Smart AI Reminder Assistant That Reduce No-Shows and Late Payments
              </h1>
              <p className="max-w-2xl text-[1.16rem] font-medium leading-8 text-slate-700 sm:text-[1.24rem] sm:leading-9">
                Automated reminders for viewings, rent, deposits, and documents-sent through SMS,
                email, WhatsApp, or voice calls.
              </p>
              <p className="max-w-2xl text-[1.02rem] leading-8 text-slate-600 sm:text-[1.06rem]">
                Stop chasing tenants and buyers manually. Our AI reminder assistant automatically
                notifies people at the right time, confirms attendance, and helps your team avoid
                missed appointments and overdue payments. The system works quietly in the
                background so your agency stays organised without extra admin.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href="/book-demo"
                className="group inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-base font-semibold text-white shadow-[0_18px_42px_-22px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-900"
              >
                Book a demo
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <a
                href="#how-it-works"
                className="inline-flex items-center gap-3 rounded-full border border-slate-300/80 bg-white/80 px-7 py-4 text-base font-semibold text-slate-700 shadow-[0_18px_34px_-26px_rgba(15,23,42,0.16)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400"
              >
                See how it works
              </a>
            </div>
          </motion.div>

          <motion.div className="relative" {...revealProps(reduceMotion, 0.08, 30)}>
            <div className="absolute -left-4 top-14 hidden h-20 w-20 rounded-[1.8rem] border border-white/60 bg-white/56 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.26)] backdrop-blur-xl lg:block" />
            <div className="absolute -right-6 bottom-10 hidden h-28 w-28 rounded-[2rem] border border-white/50 bg-white/42 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.22)] backdrop-blur-xl lg:block" />

            <div className="relative overflow-hidden rounded-[2.65rem] border border-white/75 bg-[linear-gradient(145deg,rgba(17,24,39,0.98),rgba(31,41,63,0.96))] p-5 text-white shadow-[0_44px_120px_-58px_rgba(15,23,42,0.56)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,192,140,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(109,147,86,0.14),transparent_28%)]" />
              <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:82px_82px]" />

              <div className="relative grid gap-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9c08c]">
                      Quiet background automation
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/72">
                      Timed reminders, confirmation prompts, and payment nudges across every key
                      stage.
                    </p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/74">
                    Reminder flow
                  </div>
                </div>

                <div className="grid gap-4">
                  {[
                    {
                      time: "24h before",
                      text: "Viewing reminder with address and Google Maps link",
                      icon: MapPinned,
                    },
                    {
                      time: "2h before",
                      text: "Quick confirm or reschedule prompt sent automatically",
                      icon: BellRing,
                    },
                    {
                      time: "Due date",
                      text: "Rent or payment reminder triggered across selected channels",
                      icon: CreditCard,
                    },
                    {
                      time: "Pending docs",
                      text: "Move-in checklist prompt for deposits, documents, and signatures",
                      icon: FileCheck2,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.time}
                      className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/8 p-4 backdrop-blur-sm"
                      {...revealProps(reduceMotion, 0.12 + index * 0.06, 16)}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[#d9c08c]">
                          <item.icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/56">
                            {item.time}
                          </p>
                          <p className="mt-2 text-sm leading-7 text-white/84">{item.text}</p>
                        </div>
                      </div>
                      {!reduceMotion ? (
                        <motion.div
                          aria-hidden="true"
                          className="absolute inset-y-3 right-3 w-1 rounded-full bg-[linear-gradient(180deg,rgba(217,192,140,0.18),rgba(109,147,86,0.4),rgba(255,255,255,0.18))]"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 2.2, delay: index * 0.15, repeat: Infinity, ease: "easeInOut" }}
                        />
                      ) : null}
                    </motion.div>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-4">
                  {channels.map((channel, index) => (
                    <motion.div
                      key={channel}
                      className="rounded-[1.25rem] border border-white/10 bg-white/8 px-3 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80"
                      {...revealProps(reduceMotion, 0.14 + index * 0.05, 12)}
                    >
                      {channel}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f2efe8] py-18 sm:py-22">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div className="max-w-4xl" {...revealProps(reduceMotion)}>
              <div className="inline-flex items-center rounded-full border border-slate-200/80 bg-white/84 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-slate-500">
                Reminder coverage
              </div>
              <h2 className="mt-5 text-[2.12rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-[2.95rem]">
                What Our Smart Reminders Do
              </h2>
              <p className="mt-6 max-w-4xl text-[1rem] leading-8 text-slate-600 sm:text-[1.04rem]">
                Our AI reminder assistant helps estate agents reduce missed appointments, late
                payments, and onboarding delays automatically. Each reminder is triggered at the
                right stage of the property journey, ensuring clients stay informed and responsive.
              </p>
            </motion.div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:items-start">
              {reminderCategories.map((item, index) => (
                <motion.article
                  key={item.title}
                  className={`group relative overflow-hidden rounded-[2.15rem] border p-6 shadow-[0_28px_70px_-40px_rgba(15,23,42,0.15)] transition-all duration-300 hover:-translate-y-1 sm:p-7 ${
                    item.tone === "dark"
                      ? "border-slate-900/10 bg-[linear-gradient(145deg,rgba(17,24,39,0.98),rgba(37,46,70,0.95))] text-white shadow-[0_32px_86px_-46px_rgba(15,23,42,0.42)]"
                      : item.tone === "accent"
                        ? "border-[#dfcc9c]/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(250,244,229,0.96))]"
                        : "border-slate-200/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,247,255,0.95))]"
                  }`}
                  {...revealProps(reduceMotion, index * 0.07, 18)}
                >
                  <div
                    className={`absolute inset-x-7 top-0 h-px ${
                      item.tone === "dark"
                        ? "bg-[linear-gradient(90deg,transparent,rgba(217,192,140,0.85),transparent)]"
                        : "bg-[linear-gradient(90deg,transparent,rgba(217,192,140,0.7),transparent)]"
                    }`}
                  />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${
                          item.tone === "dark"
                            ? "border-white/12 bg-white/10 text-[#d9c08c]"
                            : "border-slate-200/90 bg-white/92 text-slate-950 shadow-[0_12px_28px_-18px_rgba(15,23,42,0.22)]"
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3
                          className={`text-[1.24rem] font-display font-medium leading-[1.08] tracking-[-0.03em] ${
                            item.tone === "dark" ? "text-white" : "text-slate-950"
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <p
                      className={`mt-5 text-[1rem] leading-8 ${
                        item.tone === "dark" ? "text-white/78" : "text-slate-600"
                      }`}
                    >
                      {item.intro}
                    </p>

                    <div className="mt-4 grid gap-3">
                      {item.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className={`flex items-start gap-3 rounded-[1.45rem] border px-4 py-3 ${
                            item.tone === "dark"
                              ? "border-white/10 bg-white/8"
                              : item.tone === "accent"
                                ? "border-[#eadcb2]/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(251,247,238,0.94))]"
                                : "border-slate-200/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,249,253,0.94))]"
                          }`}
                        >
                          <CheckCircle2
                            className={`mt-1 h-4 w-4 shrink-0 ${
                              item.tone === "dark" ? "text-[#d9c08c]" : "text-[#6d9356]"
                            }`}
                          />
                          <p
                            className={`text-sm leading-7 ${
                              item.tone === "dark" ? "text-white/84" : "text-slate-700"
                            }`}
                          >
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>

                    <p
                      className={`mt-5 text-[1rem] leading-8 ${
                        item.tone === "dark" ? "text-white/78" : "text-slate-600"
                      }`}
                    >
                      {item.closing}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#111827_0%,#162032_100%)] py-18 text-white sm:py-22">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
              <motion.article
                className="rounded-[2.4rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl sm:p-9"
                {...revealProps(reduceMotion)}
              >
                <div className="mb-5 h-px w-24 bg-[linear-gradient(90deg,#d9c08c,rgba(217,192,140,0.06))]" />
                <h2 className="text-[2.1rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-white sm:text-[2.95rem]">
                  Why Reminders Matter
                </h2>
                <div className="mt-6 space-y-5 text-[1rem] leading-8 text-white/78 sm:text-[1.04rem]">
                  <p>
                    Missed viewings and delayed payments cost estate agencies time and revenue. A
                    simple reminder sent at the right time can significantly improve attendance and
                    reduce administrative workload.
                  </p>
                  <p>
                    Instead of manually messaging every tenant or buyer, your AI reminder
                    assistant handles confirmations, follow-ups, and document prompts
                    automatically. Your agency stays organised while delivering a professional
                    experience to every client.
                  </p>
                </div>
              </motion.article>

              <motion.div
                id="how-it-works"
                className="grid gap-4 scroll-mt-32"
                {...revealProps(reduceMotion, 0.08)}
              >
                <article className="rounded-[2.05rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-6 shadow-[0_28px_72px_-42px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9c08c]">
                    How it works
                  </p>
                  <h2 className="mt-4 text-[2rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-white sm:text-[2.7rem]">
                    How It Works
                  </h2>
                  <div className="mt-5 space-y-5 text-[1rem] leading-8 text-white/78 sm:text-[1.04rem]">
                    <p>
                      The AI reminder bot connects directly with your booking systems and{" "}
                      <Link href="/services/workflow-automation" className={inlineLinkClass}>
                        workflow automation
                      </Link>{" "}
                      tools to trigger reminders at the right moment.
                    </p>
                    <p>Example triggers include:</p>
                  </div>

                  <div className="mt-5 grid gap-3">
                    {exampleTriggers.map((trigger, index) => (
                      <motion.div
                        key={trigger}
                        className="flex items-start gap-3 rounded-[1.45rem] border border-white/10 bg-white/8 px-4 py-3"
                        {...revealProps(reduceMotion, 0.12 + index * 0.06, 14)}
                      >
                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#d9c08c]">
                          {index === 0 ? (
                            <CalendarClock className="h-4 w-4" />
                          ) : index === 1 ? (
                            <CreditCard className="h-4 w-4" />
                          ) : index === 2 ? (
                            <MessageSquareMore className="h-4 w-4" />
                          ) : (
                            <FileCheck2 className="h-4 w-4" />
                          )}
                        </div>
                        <p className="text-sm leading-7 text-white/84">{trigger}</p>
                      </motion.div>
                    ))}
                  </div>
                </article>

                <article className="rounded-[1.95rem] border border-[#d9c08c]/24 bg-[linear-gradient(145deg,rgba(217,192,140,0.16),rgba(255,255,255,0.05))] p-6 shadow-[0_22px_60px_-40px_rgba(0,0,0,0.28)]">
                  <p className="text-[1rem] leading-8 text-white/84 sm:text-[1.04rem]">
                    Everything runs in the background while your team focuses on valuations,
                    negotiations, and closing deals.
                  </p>
                </article>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f4ed_0%,#fbfaf7_100%)] pb-24 pt-10 sm:pb-28">
        <div className="pointer-events-none absolute inset-x-0 top-8 text-center text-[clamp(5rem,17vw,11.5rem)] font-display leading-none tracking-[-0.08em] text-slate-900/[0.04]">
          Demo
        </div>
        <div className="pointer-events-none absolute right-[-8rem] top-16 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(109,147,86,0.1),transparent_72%)] blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-5xl overflow-hidden rounded-[2.65rem] border border-slate-200/80 bg-[linear-gradient(135deg,rgba(18,24,39,0.98),rgba(30,41,59,0.96))] px-7 py-9 text-white shadow-[0_42px_110px_-52px_rgba(15,23,42,0.55)] sm:px-10 sm:py-11"
            {...revealProps(reduceMotion)}
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-4xl">
                <div className="mt-1 space-y-5 text-[1rem] leading-8 text-white/78 sm:text-[1.05rem]">
                  <p>Stop chasing clients manually.</p>
                  <p>
                    Let an AI reminder assistant confirm viewings, collect payments, and keep
                    everything on schedule.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  href="/book-demo"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-base font-semibold text-slate-950 shadow-[0_18px_34px_-20px_rgba(255,255,255,0.45)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Book a demo.
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
