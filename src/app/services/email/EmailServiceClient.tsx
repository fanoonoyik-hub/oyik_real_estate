"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CalendarClock,
  CheckCircle2,
  FileStack,
  Mail,
  MailCheck,
  ScanSearch,
  Send,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const whyItems = [
  "Faster first responses",
  "Fewer missed opportunities",
  "Less repetitive admin",
  "Better-qualified conversations",
];

const intentItems = [
  "Viewing requests",
  "Availability checks",
  "Document requests",
  "Pet policy questions",
  "Application steps",
  "General property information",
];

const replyItems = [
  "property details",
  "booking links",
  "next-step instructions",
  "required documents",
  "follow-up guidance",
];

const routeItems = [
  "landlord negotiations",
  "special tenancy requests",
  "application exceptions",
  "maintenance escalations",
];

const behindItems = [
  "detects viewing, availability, and policy intent",
  "drafts replies in your agency tone",
  "routes complex cases with full context",
  "triggers links, checklists, and workflows",
  "supports shared sales and lettings inboxes",
];

const builtForItems = [
  "lettings enquiries",
  "sales enquiries",
  "tenant communications",
  "landlord updates",
  "viewing coordination",
  "document requests",
];

const workflowSteps = [
  "Intent is detected automatically",
  "A reply is drafted in your agency tone",
  "Viewing links are included if relevant",
  "Documents are requested if needed",
  "Lead activity is logged in your CRM",
  "Negotiators receive a summary if escalation is required",
];

function revealProps(reduceMotion: boolean, delay = 0, distance = 24) {
  return {
    initial: { opacity: 0, y: reduceMotion ? 0 : distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-90px" },
    transition: { duration: 0.8, delay, ease },
  };
}

export default function EmailServiceClient() {
  const reduceMotion = useReducedMotion();
  const inlineLinkClass =
    "font-semibold text-[#77b563] underline decoration-[#77b563]/45 underline-offset-4 transition-colors hover:text-[#5f9b4b]";

  return (
    <div className="flex w-full flex-col bg-background">
      <section className="relative overflow-hidden border-b border-border/50 bg-[linear-gradient(180deg,#f9f7f0_0%,#f3ecde_44%,#edf3fa_100%)] pb-18 pt-30 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:96px_96px]" />
        {reduceMotion ? null : (
          <>
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-[-7rem] top-12 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(217,192,140,0.18),transparent_72%)] blur-3xl"
              animate={{ x: [0, 20, 0], y: [0, -18, 0], scale: [1, 1.04, 1] }}
              transition={{ duration: 8.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-5rem] top-18 h-[23rem] w-[23rem] rounded-full bg-[radial-gradient(circle,rgba(105,138,196,0.14),transparent_72%)] blur-3xl"
              animate={{ x: [0, -22, 0], y: [0, 16, 0], scale: [1, 1.06, 1] }}
              transition={{ duration: 9.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-6xl" {...revealProps(reduceMotion)}>
            <div className="max-w-4xl">
              <div className="inline-flex w-fit items-center rounded-full border border-slate-200/80 bg-white/84 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-slate-500">
                Email automation
              </div>

              <div className="mt-7 space-y-5">
                <div className="h-px w-24 bg-[linear-gradient(90deg,#d9c08c,rgba(217,192,140,0.08))]" />
                <h1 className="max-w-5xl text-[2.85rem] font-display font-medium leading-[0.93] tracking-[-0.06em] text-slate-950 sm:text-[3.95rem] lg:text-[4.92rem]">
                  Email Automation for Estate Agents
                </h1>
                <p className="max-w-4xl text-[1.2rem] font-medium leading-8 text-slate-700 sm:text-[1.34rem]">
                  Intelligent replies that keep enquiries moving
                </p>
                <p className="max-w-4xl text-[1.03rem] leading-8 text-slate-600 sm:text-[1.06rem]">
                  Our email automation service helps estate agencies respond faster, qualify
                  enquiries automatically, and trigger next steps without turning inboxes into
                  admin backlogs. Instead of manually replying to every viewing request,
                  availability question, or document enquiry, your team gets structured,
                  ready-to-send responses that keep conversations progressing.
                </p>
                <p className="max-w-4xl text-[1.03rem] leading-8 text-slate-600 sm:text-[1.06rem]">
                  With AI powered email automation, every message is analysed, prioritised, and
                  routed so the right action happens at the right time.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/book-demo"
                  className="group inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-base font-semibold text-white shadow-[0_18px_42px_-22px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-900"
                >
                  Book a demo
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>

            <motion.div
              className="mt-10 overflow-hidden rounded-[2.7rem] border border-white/80 bg-[linear-gradient(160deg,rgba(255,255,255,0.98),rgba(241,246,252,0.92))] p-5 shadow-[0_44px_120px_-58px_rgba(15,23,42,0.35)]"
              {...revealProps(reduceMotion, 0.08, 22)}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,192,140,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(87,121,176,0.12),transparent_28%)]" />
              <div className="relative grid gap-4">
                <div className="rounded-[1.8rem] border border-slate-200/80 bg-white/88 px-5 py-4 backdrop-blur-sm">
                  <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                        Inbox intelligence
                      </p>
                      <p className="mt-1 text-sm text-slate-700">
                        Analyse, draft, route, and trigger next steps in one flow.
                      </p>
                    </div>
                    <div className="rounded-full border border-slate-200/80 bg-slate-950 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                      Live assist
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
                  <div className="grid gap-4">
                    <div className="grid gap-4 lg:grid-cols-[0.96fr_1.04fr]">
                      <motion.article
                        className="rounded-[2rem] border border-slate-200/80 bg-white/92 p-5 shadow-[0_24px_54px_-38px_rgba(15,23,42,0.14)]"
                        {...revealProps(reduceMotion, 0.12, 18)}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                              <Mail className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                                Incoming enquiry
                              </p>
                              <p className="mt-1 text-sm font-semibold text-slate-900">
                                Viewing request for Westbourne Grove
                              </p>
                            </div>
                          </div>
                          <div className="rounded-full border border-[#d9c08c]/60 bg-[#fbf6ea] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-700">
                            High intent
                          </div>
                        </div>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                          "Is the property available this weekend, and are pets allowed? We would
                          also like to know the next application steps."
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {["Viewing", "Pet policy", "Application"].map((chip) => (
                            <div
                              key={chip}
                              className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500"
                            >
                              {chip}
                            </div>
                          ))}
                        </div>
                      </motion.article>

                      <div className="grid gap-4">
                        {[
                          {
                            label: "Intent detected",
                            text: "Viewing request, pet policy question, and next-step enquiry recognised",
                            icon: ScanSearch,
                          },
                          {
                            label: "Action prepared",
                            text: "Booking links, document prompts, and reply guidance assembled automatically",
                            icon: Send,
                          },
                        ].map((item, index) => (
                          <motion.article
                            key={item.label}
                            className="rounded-[1.8rem] border border-slate-200/80 bg-white/88 p-5 shadow-[0_22px_48px_-38px_rgba(15,23,42,0.14)]"
                            {...revealProps(reduceMotion, 0.14 + index * 0.06, 16)}
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-200/80 bg-[#fbf6ea] text-slate-900">
                                <item.icon className="h-4 w-4" />
                              </div>
                              <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                                  {item.label}
                                </p>
                                <p className="mt-2 text-sm leading-7 text-slate-700">
                                  {item.text}
                                </p>
                              </div>
                            </div>
                          </motion.article>
                        ))}
                      </div>
                    </div>

                    <motion.article
                      className="rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(15,23,42,0.97),rgba(30,41,59,0.96))] p-5 text-white shadow-[0_28px_60px_-40px_rgba(15,23,42,0.55)]"
                      {...revealProps(reduceMotion, 0.22, 18)}
                    >
                      <div className="grid gap-4 lg:grid-cols-[auto_1fr_auto] lg:items-start">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#d9c08c]">
                          <Bot className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55">
                            AI draft
                          </p>
                          <p className="mt-1 text-sm font-semibold text-white">
                            Reply prepared in your agency tone
                          </p>
                        </div>
                        <div className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/72">
                          Ready to send
                        </div>
                      </div>

                      <div className="mt-4 rounded-[1.45rem] border border-white/10 bg-white/8 p-4">
                        <p className="text-sm leading-7 text-white/82">
                          "Thank you for your enquiry. The property is available to view this
                          weekend. Pets can be discussed with the landlord. Use the booking link
                          below and send the requested documents if you would like to proceed."
                        </p>
                      </div>
                    </motion.article>
                  </div>

                  <motion.article
                    className="flex h-full flex-col rounded-[2rem] border border-slate-200/80 bg-white/90 p-5 shadow-[0_24px_54px_-38px_rgba(15,23,42,0.14)]"
                    {...revealProps(reduceMotion, 0.18, 18)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-200/80 bg-[#fbf6ea] text-slate-900">
                        <FileStack className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                          Escalation ready
                        </p>
                        <p className="mt-2 text-sm leading-7 text-slate-700">
                          Complex cases pass to negotiators with full context already summarised.
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 grid flex-1 gap-3">
                      {[
                        "Intent scored and prioritised",
                        "Relevant reply blocks assembled",
                        "Booking or document next step prepared",
                        "Human handoff context included where needed",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-[1.35rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,249,253,0.94))] px-4 py-3"
                        >
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-slate-950" />
                          <p className="text-sm leading-7 text-slate-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </motion.article>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f3efe7] py-18 sm:py-22">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div className="max-w-4xl" {...revealProps(reduceMotion)}>
              <div className="inline-flex items-center rounded-full border border-slate-200/80 bg-white/86 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-slate-500">
                Operational value
              </div>
              <h2 className="mt-5 text-[2.12rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-[2.95rem]">
                Why email automation matters for property teams
              </h2>
              <div className="mt-6 max-w-4xl space-y-5 text-[1rem] leading-8 text-slate-600 sm:text-[1.04rem]">
                <p>
                  Sales and lettings inboxes carry real operational workload. Slow replies often
                  mean missed viewings, lost applicants, or delayed instructions. Our ai email
                  automation ensures enquiries are handled immediately-even outside office
                  hours-while preserving your agency's tone and workflow.
                </p>
                <p>That means:</p>
              </div>
            </motion.div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {whyItems.map((item, index) => (
                <motion.article
                  key={item}
                  className="rounded-[1.9rem] border border-slate-200/80 bg-white/92 p-5 shadow-[0_24px_54px_-38px_rgba(15,23,42,0.14)]"
                  {...revealProps(reduceMotion, index * 0.05, 18)}
                >
                  <CheckCircle2 className="h-5 w-5 text-slate-950" />
                  <p className="mt-4 text-sm leading-7 text-slate-700">{item}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#121a29_0%,#182336_100%)] py-18 text-white sm:py-22">
        <div className="pointer-events-none absolute left-[-8rem] top-20 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(217,192,140,0.1),transparent_72%)] blur-3xl" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div className="max-w-4xl" {...revealProps(reduceMotion)}>
              <div className="mb-5 h-px w-24 bg-[linear-gradient(90deg,#d9c08c,rgba(217,192,140,0.08))]" />
              <h2 className="text-[2.12rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-white sm:text-[3rem]">
                What our email automation does
              </h2>
            </motion.div>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <motion.article
                className="rounded-[2.15rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl sm:p-7"
                {...revealProps(reduceMotion, 0.06, 18)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-sm font-semibold text-[#d9c08c]">
                    1
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[1.22rem] font-display font-medium leading-[1.06] tracking-[-0.03em] text-white">
                      Detects enquiry intent automatically
                    </h3>
                    <p className="mt-3 text-[1rem] leading-8 text-white/78">
                      The system recognises what the sender needs, including:
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {intentItems.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-[1.4rem] border border-white/10 bg-white/8 px-4 py-3"
                        >
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#d9c08c]" />
                          <p className="text-sm leading-7 text-white/84">{item}</p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-[1rem] leading-8 text-white/78">
                      This allows your agency to respond instantly with the right information
                      instead of generic replies.
                    </p>
                  </div>
                </div>
              </motion.article>

              <motion.article
                className="rounded-[2.15rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl sm:p-7"
                {...revealProps(reduceMotion, 0.12, 18)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-sm font-semibold text-[#d9c08c]">
                    2
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[1.22rem] font-display font-medium leading-[1.06] tracking-[-0.03em] text-white">
                      Drafts replies in your brand tone
                    </h3>
                    <p className="mt-3 text-[1rem] leading-8 text-white/78">
                      Our ai powered email automation prepares polished responses that sound like
                      your team wrote them. Messages include:
                    </p>
                    <div className="mt-4 grid gap-3">
                      {replyItems.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-[1.4rem] border border-white/10 bg-white/8 px-4 py-3"
                        >
                          <MailCheck className="mt-1 h-4 w-4 shrink-0 text-[#d9c08c]" />
                          <p className="text-sm leading-7 text-white/84">{item}</p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-[1rem] leading-8 text-white/78">
                      Your team can approve, edit, or fully automate responses depending on your
                      workflow preferences.
                    </p>
                  </div>
                </div>
              </motion.article>

              <motion.article
                className="rounded-[2.15rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl sm:p-7"
                {...revealProps(reduceMotion, 0.16, 18)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-sm font-semibold text-[#d9c08c]">
                    3
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[1.22rem] font-display font-medium leading-[1.06] tracking-[-0.03em] text-white">
                      Routes complex cases to the right team member
                    </h3>
                    <p className="mt-3 text-[1rem] leading-8 text-white/78">
                      When a message needs human input, the system forwards it with context
                      already summarised. That means negotiators don't waste time reading long
                      email threads before acting.
                    </p>
                    <p className="mt-4 text-[1rem] leading-8 text-white/78">Examples include:</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {routeItems.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-[1.4rem] border border-white/10 bg-white/8 px-4 py-3"
                        >
                          <Sparkles className="mt-1 h-4 w-4 shrink-0 text-[#d9c08c]" />
                          <p className="text-sm leading-7 text-white/84">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>

              <motion.article
                className="rounded-[2.15rem] border border-white/10 bg-[linear-gradient(160deg,rgba(217,192,140,0.14),rgba(255,255,255,0.06))] p-6 backdrop-blur-xl sm:p-7"
                {...revealProps(reduceMotion, 0.2, 18)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-sm font-semibold text-[#d9c08c]">
                    4
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[1.22rem] font-display font-medium leading-[1.06] tracking-[-0.03em] text-white">
                      Triggers next-step workflows automatically
                    </h3>
                    <p className="mt-3 text-[1rem] leading-8 text-white/78">
                      Instead of stopping at replies, our email automation activates actions such
                      as:
                    </p>
                    <div className="mt-4 grid gap-3">
                      <div className="flex items-start gap-3 rounded-[1.4rem] border border-white/10 bg-white/8 px-4 py-3">
                        <CalendarClock className="mt-1 h-4 w-4 shrink-0 text-[#d9c08c]" />
                        <p className="text-sm leading-7 text-white/84">sending viewing booking links</p>
                      </div>
                      <div className="flex items-start gap-3 rounded-[1.4rem] border border-white/10 bg-white/8 px-4 py-3">
                        <FileStack className="mt-1 h-4 w-4 shrink-0 text-[#d9c08c]" />
                        <p className="text-sm leading-7 text-white/84">delivering document checklists</p>
                      </div>
                      <div className="flex items-start gap-3 rounded-[1.4rem] border border-white/10 bg-white/8 px-4 py-3">
                        <Send className="mt-1 h-4 w-4 shrink-0 text-[#d9c08c]" />
                        <p className="text-sm leading-7 text-white/84">
                          triggering follow-up{" "}
                          <Link href="/services/reminders" className={inlineLinkClass}>
                            reminders
                          </Link>
                        </p>
                      </div>
                      <div className="flex items-start gap-3 rounded-[1.4rem] border border-white/10 bg-white/8 px-4 py-3">
                        <Bot className="mt-1 h-4 w-4 shrink-0 text-[#d9c08c]" />
                        <p className="text-sm leading-7 text-white/84">notifying negotiators</p>
                      </div>
                      <div className="flex items-start gap-3 rounded-[1.4rem] border border-white/10 bg-white/8 px-4 py-3">
                        <ScanSearch className="mt-1 h-4 w-4 shrink-0 text-[#d9c08c]" />
                        <p className="text-sm leading-7 text-white/84">updating CRM activity logs</p>
                      </div>
                    </div>
                    <p className="mt-4 text-[1rem] leading-8 text-white/78">
                      Every enquiry continues moving forward without manual chasing.
                    </p>
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f6f2ea] py-18 sm:py-22">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
              <motion.article
                className="rounded-[2.45rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,248,252,0.94))] p-7 shadow-[0_30px_72px_-44px_rgba(15,23,42,0.16)] sm:p-9"
                {...revealProps(reduceMotion)}
              >
                <div className="inline-flex items-center rounded-full border border-slate-200/80 bg-white/86 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-slate-500">
                  Email flow
                </div>
                <h2 className="mt-5 text-[2.12rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-[2.95rem]">
                  How it works behind the scenes
                </h2>
                <div className="mt-6 grid gap-3">
                  {behindItems.map((item, index) => (
                    <motion.div
                      key={item}
                      className="flex items-start gap-3 rounded-[1.5rem] border border-slate-200/80 bg-white/90 px-4 py-4"
                      {...revealProps(reduceMotion, 0.08 + index * 0.04, 14)}
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-slate-950" />
                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                    </motion.div>
                  ))}
                </div>
                <p className="mt-6 text-[1rem] leading-8 text-slate-600 sm:text-[1.04rem]">
                  This keeps your inbox organised and operationally efficient across departments.
                </p>
              </motion.article>

              <motion.article
                className="rounded-[2.45rem] border border-slate-200/80 bg-[linear-gradient(160deg,rgba(18,26,41,0.98),rgba(26,37,56,0.95))] p-7 text-white shadow-[0_30px_78px_-46px_rgba(15,23,42,0.46)] sm:p-9"
                {...revealProps(reduceMotion, 0.08, 22)}
              >
                <div className="mb-5 h-px w-24 bg-[linear-gradient(90deg,#d9c08c,rgba(217,192,140,0.08))]" />
                <h3 className="text-[1.95rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-white sm:text-[2.45rem]">
                  Built for high-volume estate agency inboxes
                </h3>
                <p className="mt-5 text-[1rem] leading-8 text-white/78">
                  This service works especially well for:
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {builtForItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[1.4rem] border border-white/10 bg-white/8 px-4 py-3"
                    >
                      <Mail className="mt-1 h-4 w-4 shrink-0 text-[#d9c08c]" />
                      <p className="text-sm leading-7 text-white/84">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-[1rem] leading-8 text-white/78">
                  If your team spends hours replying to similar messages every day, ai powered
                  email automation removes that workload instantly.
                </p>
              </motion.article>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#111827_0%,#162032_100%)] py-18 text-white sm:py-22">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div className="max-w-4xl" {...revealProps(reduceMotion)}>
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-white/72">
                Example workflow
              </div>
              <h2 className="mt-5 text-[2.15rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-white sm:text-[3rem]">
                Example workflow in action
              </h2>
              <p className="mt-6 max-w-3xl text-[1rem] leading-8 text-white/78 sm:text-[1.04rem]">
                When a property enquiry email arrives:
              </p>
            </motion.div>

            <div className="mt-8 grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
              <motion.article
                className="rounded-[2.35rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl sm:p-7"
                {...revealProps(reduceMotion, 0.08, 18)}
              >
                <div className="grid gap-3">
                  {workflowSteps.map((step, index) => (
                    <div
                      key={step}
                      className="flex items-start gap-4 rounded-[1.45rem] border border-white/10 bg-white/8 px-4 py-4"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-semibold text-[#d9c08c]">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-7 text-white/84">{step}</p>
                    </div>
                  ))}
                </div>
              </motion.article>

              <motion.article
                className="rounded-[2.35rem] border border-[#d9c08c]/24 bg-[linear-gradient(145deg,rgba(217,192,140,0.16),rgba(255,255,255,0.05))] p-7 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.28)] sm:p-8"
                {...revealProps(reduceMotion, 0.12, 18)}
              >
                <div className="flex h-full flex-col justify-between gap-6">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#d9c08c]">
                      Result
                    </p>
                    <h3 className="mt-3 text-[2rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-white sm:text-[2.5rem]">
                      The result: faster replies and smoother conversions.
                    </h3>
                  </div>
                  <div className="rounded-[1.8rem] border border-white/10 bg-white/8 p-5">
                    <p className="text-[1rem] leading-8 text-white/82">
                      Keep enquiries moving-even when inboxes get busy
                    </p>
                    <p className="mt-3 text-[1rem] leading-8 text-white/82">
                      Manual inbox management slows momentum. Our ai email automation ensures
                      every enquiry receives a fast, accurate, and structured response so leads
                      continue progressing without delays.
                    </p>
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f4ed_0%,#fbfaf7_100%)] pb-24 pt-10 sm:pb-28">
        <div className="pointer-events-none absolute inset-x-0 top-8 text-center text-[clamp(5rem,17vw,11.5rem)] font-display leading-none tracking-[-0.08em] text-slate-900/[0.04]">
          Inbox
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-5xl overflow-hidden rounded-[2.7rem] border border-slate-200/80 bg-[linear-gradient(135deg,rgba(18,24,39,0.98),rgba(30,41,59,0.96))] px-7 py-9 text-white shadow-[0_42px_110px_-52px_rgba(15,23,42,0.55)] sm:px-10 sm:py-11"
            {...revealProps(reduceMotion)}
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-4xl">
                <h2 className="text-[2.18rem] font-display font-medium leading-[0.95] tracking-[-0.055em] text-white sm:text-[3.05rem]">
                  Keep enquiries moving-even when inboxes get busy
                </h2>

                <div className="mt-6 space-y-5 text-[1rem] leading-8 text-white/78 sm:text-[1.05rem]">
                  <p>
                    Tell us how your agency currently handles enquiries, and we'll design an an
                    email automation workflow tailored to your sales and lettings process.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  href="/book-demo"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-base font-semibold text-slate-950 shadow-[0_18px_34px_-20px_rgba(255,255,255,0.45)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Book a demo
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
