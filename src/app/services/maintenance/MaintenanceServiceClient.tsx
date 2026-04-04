"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileText,
  MessageSquareMore,
  Upload,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const whyItems = [
  "fewer back-and-forth emails with tenants",
  "faster contractor dispatch",
  "clearer urgency prioritisation",
  "better visibility inside your CRM",
  "less admin workload for your team",
];

const collectItems = [
  "tenant contact information",
  "property details",
  "issue description",
  "urgency level",
  "access availability",
];

const uploadItems = ["photos", "videos", "documents", "additional descriptions"];

const maintenanceCards = [
  {
    title: "Collects structured issue details automatically",
    body: "The system asks guided follow-up questions so tenants describe problems clearly and completely. It captures:",
    bullets: collectItems,
    closing: "All information is saved directly into your CRM.",
    icon: ClipboardCheck,
  },
  {
    title: "Routes urgent maintenance cases instantly",
    body: "Emergency issues such as leaks, heating failures, or safety risks are escalated immediately. The maintenance team receives a complete summary so they can act without additional clarification.",
    closing: "This ensures critical problems are handled faster and more efficiently.",
    icon: AlertTriangle,
  },
  {
    title: "Sends confirmation messages to tenants",
    body: "Once a request is logged, tenants automatically receive confirmation that their case has been recorded. This improves transparency and reduces repeat enquiries about whether the issue was received.",
    icon: MessageSquareMore,
  },
  {
    title: "Collects photos and supporting details for non-urgent issues",
    body: "For routine maintenance requests, the system sends a secure form link by SMS or email so tenants can upload:",
    bullets: uploadItems,
    closing: "This helps your team diagnose issues before scheduling contractors.",
    icon: Camera,
  },
  {
    title: "Keeps maintenance records updated automatically",
    body: "Each request stays organised inside your CRM with a full activity history. Your team can see what was reported, what action was taken, and what still needs attention before responding.",
    closing: "This improves coordination across lettings and property management teams.",
    icon: FileText,
  },
];

const workflowSteps = [
  "The tenant describes the issue through chat, form, or message",
  "The system asks structured follow-up questions",
  "Property and contact details are captured automatically",
  "Urgency level is identified",
  "The request is saved inside your CRM",
  "Urgent cases are routed instantly to the maintenance team",
  "Non-urgent cases receive photo upload links",
  "Tenants receive confirmation updates automatically",
];

function revealProps(reduceMotion: boolean, delay = 0, distance = 24) {
  return {
    initial: { opacity: 0, y: reduceMotion ? 0 : distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-90px" },
    transition: { duration: 0.8, delay, ease },
  };
}

export default function MaintenanceServiceClient() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex w-full flex-col bg-background">
      <section className="relative overflow-hidden border-b border-border/50 bg-[linear-gradient(180deg,#f7f3ea_0%,#efe6d6_46%,#f2f4f8_100%)] pb-18 pt-30 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:98px_98px]" />
        {reduceMotion ? null : (
          <>
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-[-8rem] top-12 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(191,161,110,0.17),transparent_72%)] blur-3xl"
              animate={{ x: [0, 20, 0], y: [0, -18, 0], scale: [1, 1.04, 1] }}
              transition={{ duration: 8.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-6rem] top-20 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.08),transparent_72%)] blur-3xl"
              animate={{ x: [0, -18, 0], y: [0, 16, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 9.1, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}

        <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.96fr_1.04fr] lg:px-8">
          <motion.div className="flex flex-col gap-7" {...revealProps(reduceMotion)}>
            <div className="inline-flex w-fit items-center rounded-full border border-slate-200/80 bg-white/84 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-slate-500">
              Maintenance intake
            </div>

            <div className="space-y-5">
              <div className="h-px w-24 bg-[linear-gradient(90deg,#c4a46b,rgba(196,164,107,0.08))]" />
              <h1 className="max-w-4xl text-[2.78rem] font-display font-medium leading-[0.93] tracking-[-0.06em] text-slate-950 sm:text-[3.85rem] lg:text-[4.6rem]">
                Maintenance Intake Automation for Estate &amp; Letting Agents
              </h1>
              <p className="max-w-3xl text-[1.18rem] font-medium leading-8 text-slate-700 sm:text-[1.32rem]">
                Capture tenant issues clearly before they become admin backlogs
              </p>
              <p className="max-w-2xl text-[1.03rem] leading-8 text-slate-600 sm:text-[1.06rem]">
                Our maintenance intake automation service helps estate agents and property
                managers collect tenant repair requests accurately, store them in your CRM, and
                route urgent issues to the right team automatically. Instead of chasing incomplete
                messages across email, calls, and WhatsApp, your agency gets structured issue
                reports ready for action.
              </p>
              <p className="max-w-2xl text-[1.03rem] leading-8 text-slate-600 sm:text-[1.06rem]">
                This reduces response delays, improves tenant communication, and keeps
                maintenance workflows organised from the first report to resolution.
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
            </div>
          </motion.div>

          <motion.div className="relative" {...revealProps(reduceMotion, 0.08, 30)}>
            <div className="relative overflow-hidden rounded-[2.75rem] border border-white/80 bg-[linear-gradient(145deg,rgba(17,24,39,0.98),rgba(31,41,55,0.96))] p-6 text-white shadow-[0_44px_120px_-58px_rgba(15,23,42,0.5)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,164,107,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_26%)]" />
              <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:82px_82px]" />

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[#c4a46b]">
                      <Wrench className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55">
                        Maintenance flow
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        Intake, priority, sync, dispatch
                      </p>
                    </div>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/74">
                    Live automation
                  </div>
                </div>

                <div className="relative mt-8 min-h-[380px] rounded-[2.1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] p-6">
                  <div className="absolute inset-x-10 top-1/2 hidden h-px -translate-y-1/2 bg-[linear-gradient(90deg,rgba(196,164,107,0.05),rgba(196,164,107,0.5),rgba(196,164,107,0.08))] lg:block" />
                  <div className="absolute bottom-14 left-1/2 hidden h-[92px] w-px -translate-x-1/2 bg-[linear-gradient(180deg,rgba(196,164,107,0.45),rgba(196,164,107,0.08))] lg:block" />

                  {!reduceMotion ? (
                    <>
                      <motion.div
                        className="absolute left-[18%] top-[34%] hidden h-3 w-3 rounded-full bg-[#c4a46b] shadow-[0_0_20px_rgba(196,164,107,0.8)] lg:block"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.45, 1, 0.45] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.div
                        className="absolute left-[48%] top-[34%] hidden h-3 w-3 rounded-full bg-[#c4a46b] shadow-[0_0_20px_rgba(196,164,107,0.8)] lg:block"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.45, 1, 0.45] }}
                        transition={{ duration: 2.4, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.div
                        className="absolute right-[18%] top-[34%] hidden h-3 w-3 rounded-full bg-[#c4a46b] shadow-[0_0_20px_rgba(196,164,107,0.8)] lg:block"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.45, 1, 0.45] }}
                        transition={{ duration: 2.4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </>
                  ) : null}

                  <div className="grid gap-4 lg:grid-cols-3">
                    {[
                      {
                        title: "Report",
                        icon: MessageSquareMore,
                        tone: "from-[#ffffff12] to-[#ffffff08]",
                        body: "Tenant logs a repair issue",
                      },
                      {
                        title: "Triage",
                        icon: AlertTriangle,
                        tone: "from-[#c4a46b33] to-[#ffffff08]",
                        body: "Urgency is scored automatically",
                      },
                      {
                        title: "Sync",
                        icon: ClipboardCheck,
                        tone: "from-[#ffffff12] to-[#ffffff08]",
                        body: "CRM record is updated instantly",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        className={`rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,${item.tone})] p-5 backdrop-blur-sm`}
                        {...revealProps(reduceMotion, 0.12 + index * 0.05, 18)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[#c4a46b]">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/52">
                              {item.title}
                            </p>
                            <p className="mt-1 text-sm text-white/84">{item.body}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                    <motion.div
                      className="rounded-[1.95rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5"
                      {...revealProps(reduceMotion, 0.22, 20)}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/52">
                          Input captured
                        </p>
                        <div className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                          Structured
                        </div>
                      </div>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {[
                          "Tenant contact",
                          "Property details",
                          "Issue description",
                          "Access availability",
                        ].map((item) => (
                          <div
                            key={item}
                            className="rounded-[1.25rem] border border-white/10 bg-white/8 px-4 py-3 text-sm text-white/82"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      className="rounded-[1.95rem] border border-[#c4a46b]/28 bg-[linear-gradient(180deg,rgba(196,164,107,0.16),rgba(255,255,255,0.04))] p-5"
                      {...revealProps(reduceMotion, 0.28, 20)}
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f1d39a]">
                        Output
                      </p>
                      <div className="mt-4 space-y-3">
                        {[
                          "Urgent cases escalated",
                          "Photo upload links sent",
                          "Confirmation updates triggered",
                        ].map((item) => (
                          <div key={item} className="flex items-start gap-3 rounded-[1.25rem] bg-white/8 px-4 py-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#f1d39a]" />
                            <p className="text-sm leading-7 text-white/84">{item}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f4efe6] py-18 sm:py-22">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div className="max-w-4xl" {...revealProps(reduceMotion)}>
              <div className="inline-flex items-center rounded-full border border-slate-200/80 bg-white/86 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-slate-500">
                Why it matters
              </div>
              <h2 className="mt-5 text-[2.12rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-[2.95rem]">
                Why maintenance intake automation matters for property teams
              </h2>
              <div className="mt-6 max-w-4xl space-y-5 text-[1rem] leading-8 text-slate-600 sm:text-[1.04rem]">
                <p>
                  Maintenance requests often arrive without enough detail, creating follow-up work
                  before a job can even begin. With AI maintenance intake for estate agents, every
                  issue is captured with the right information the first time.
                </p>
                <p>That means:</p>
              </div>
            </motion.div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
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

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#121924_0%,#172230_100%)] py-18 text-white sm:py-22">
        <div className="pointer-events-none absolute right-[-8rem] top-16 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(196,164,107,0.1),transparent_72%)] blur-3xl" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div className="max-w-4xl" {...revealProps(reduceMotion)}>
              <div className="mb-5 h-px w-24 bg-[linear-gradient(90deg,#c4a46b,rgba(196,164,107,0.08))]" />
              <h2 className="text-[2.12rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-white sm:text-[3rem]">
                What the maintenance intake agent handles
              </h2>
            </motion.div>

            <div className="mt-8 grid gap-4">
              {maintenanceCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  className="rounded-[2.2rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-7"
                  {...revealProps(reduceMotion, 0.08 + index * 0.05, 18)}
                >
                  <div className="grid gap-5 lg:grid-cols-[auto_minmax(0,1fr)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[#c4a46b]">
                      <card.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[1.22rem] font-display font-medium leading-[1.06] tracking-[-0.03em] text-white">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-[1rem] leading-8 text-white/78">{card.body}</p>

                      {"bullets" in card && card.bullets ? (
                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                          {card.bullets.map((item) => (
                            <div
                              key={item}
                              className="flex items-start gap-3 rounded-[1.4rem] border border-white/10 bg-white/8 px-4 py-3"
                            >
                              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#c4a46b]" />
                              <p className="text-sm leading-7 text-white/84">{item}</p>
                            </div>
                          ))}
                        </div>
                      ) : null}

                      {"closing" in card && card.closing ? (
                        <p className="mt-4 text-[1rem] leading-8 text-white/78">{card.closing}</p>
                      ) : null}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f6f1e8] py-18 sm:py-22">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.article
              className="overflow-hidden rounded-[2.55rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,244,238,0.96))] p-7 shadow-[0_34px_84px_-46px_rgba(15,23,42,0.16)] sm:p-9"
              {...revealProps(reduceMotion)}
            >
              <div className="grid gap-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <div className="inline-flex items-center rounded-full border border-slate-200/80 bg-white/86 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-slate-500">
                      Workflow
                    </div>
                    <h2 className="mt-5 max-w-3xl text-[2.12rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-[2.95rem]">
                      How the maintenance intake workflow works
                    </h2>
                    <p className="mt-6 max-w-3xl text-[1rem] leading-8 text-slate-600 sm:text-[1.04rem]">
                      Here's what happens when a tenant reports a repair issue:
                    </p>
                  </div>

                  <div className="rounded-full border border-slate-200/80 bg-white/90 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Structured SOP flow
                  </div>
                </div>

                <div className="relative">
                  <div className="pointer-events-none absolute left-5 right-5 top-7 hidden h-px bg-[linear-gradient(90deg,rgba(196,164,107,0.08),rgba(196,164,107,0.45),rgba(196,164,107,0.08))] lg:block" />
                  <div className="grid gap-3 lg:grid-cols-2">
                    {workflowSteps.map((step, index) => (
                      <div
                        key={step}
                        className="relative flex min-h-[104px] items-start gap-4 rounded-[1.6rem] border border-slate-200/80 bg-white/92 px-4 py-4 shadow-[0_18px_42px_-34px_rgba(15,23,42,0.14)]"
                      >
                        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200/80 bg-[#fbf6ea] text-sm font-semibold text-slate-950 shadow-[0_10px_22px_-18px_rgba(196,164,107,0.7)]">
                          {index + 1}
                        </div>
                        <p className="pt-1 text-sm leading-7 text-slate-700">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div className="rounded-[1.9rem] border border-slate-200/80 bg-[linear-gradient(145deg,rgba(17,24,39,0.98),rgba(31,41,55,0.96))] p-6 text-white shadow-[0_26px_60px_-42px_rgba(15,23,42,0.42)]">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[#c4a46b]">
                        <Clock3 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#c4a46b]">
                          Result
                        </p>
                        <p className="mt-2 text-[1rem] leading-8 text-white/82">
                          The result: faster response times and fewer manual steps for your agency.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full border border-slate-200/80 bg-[#fbf6ea] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                    Faster triage
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#111827_0%,#162032_100%)] pb-24 pt-10 text-white sm:pb-28">
        <div className="pointer-events-none absolute inset-x-0 top-8 text-center text-[clamp(5rem,17vw,11.5rem)] font-display leading-none tracking-[-0.08em] text-white/[0.04]">
          Repair
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-5xl overflow-hidden rounded-[2.7rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] px-7 py-9 shadow-[0_42px_110px_-52px_rgba(0,0,0,0.48)] backdrop-blur-xl sm:px-10 sm:py-11"
            {...revealProps(reduceMotion)}
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-4xl">
                <h2 className="text-[2.18rem] font-display font-medium leading-[0.95] tracking-[-0.055em] text-white sm:text-[3.05rem]">
                  Reduce admin workload and improve response speed
                </h2>

                <div className="mt-6 space-y-5 text-[1rem] leading-8 text-white/78 sm:text-[1.05rem]">
                  <p>
                    Manual maintenance logging slows property teams and creates unnecessary
                    backlogs. With maintenance intake automation for estate agents, your agency
                    captures complete issue reports the first time and routes them to the right
                    people without delays.
                  </p>
                  <p>
                    Tell us how your team currently handles maintenance requests, and we'll design
                    a workflow that fits your lettings process.
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
