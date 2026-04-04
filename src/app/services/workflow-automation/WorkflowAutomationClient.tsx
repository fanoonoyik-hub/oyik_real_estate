"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BellRing,
  Bot,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Database,
  FileCheck2,
  MessageSquare,
  Sparkles,
  Workflow,
} from "lucide-react";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const heroTags = ["CRM", "Calendar", "Messaging platforms", "Lead sources"];

const flowNodes = [
  { label: "Enquiry", x: 80, y: 108, width: 92 },
  { label: "Qualification", x: 198, y: 108, width: 118 },
  { label: "CRM", x: 330, y: 108, width: 80 },
  { label: "Viewing", x: 452, y: 108, width: 92 },
  { label: "Reminder", x: 452, y: 242, width: 98 },
  { label: "Follow-up", x: 330, y: 242, width: 102 },
  { label: "Offer", x: 198, y: 242, width: 82 },
  { label: "Management", x: 80, y: 242, width: 114 },
];

const supportAreas = [
  {
    number: "01",
    title: "Lead Capture & CRM Workflow Automation",
    icon: Database,
    className: "lg:col-span-7",
    tone: "light",
    paragraphs: [
      "Estate agents receive enquiries from websites, portals, social media, calls, and email. Without structure, these leads are often delayed or missed. Our AI workflow automation ensures every enquiry is captured instantly through intelligent CRM workflow automation.",
      "Leads are automatically created in your CRM, tagged as buyer, tenant, or landlord, segmented by budget and location, assigned to the right negotiator, and moved into qualification sequences.",
      "This creates a reliable automated workflow solution that keeps every opportunity moving.",
    ],
    footerTitle: "Lead flow coverage",
    footerItems: ["Website", "Portals", "Social media", "Calls", "Email", "CRM synced"],
  },
  {
    number: "02",
    title: "Viewing Workflow Automation",
    icon: CalendarDays,
    className: "lg:col-span-5 lg:mt-12",
    tone: "dark",
    paragraphs: [
      "Managing viewings manually takes time and slows response speed. Our real estate workflow automation handles the entire process automatically.",
    ],
    bulletsLabel: "When a lead qualifies:",
    bullets: [
      "viewing slots are offered instantly",
      "bookings are confirmed automatically",
      "calendar events are created",
      "confirmations and reminders are sent",
      "follow-ups trigger after the appointment",
    ],
    closing:
      "If a client cannot attend, the system offers new times automatically. This workflow automation solution reduces admin work and helps improve attendance rates.",
  },
  {
    number: "03",
    title: "Lettings & Property Management Workflows",
    icon: FileCheck2,
    className: "lg:col-span-5",
    tone: "accent",
    paragraphs: [
      "Lettings require structured processes to stay compliant and organised. Our AI workflow automation supports tenant onboarding, rent reminders, and maintenance coordination automatically.",
    ],
    bulletsLabel: "The system can:",
    bullets: [
      "send document checklist reminders",
      "trigger right-to-rent steps",
      "manage rent due alerts",
      "escalate late payments",
      "track maintenance requests from report to completion",
    ],
    closing:
      "This automated workflow solution improves tenant experience while reducing manual coordination.",
  },
  {
    number: "04",
    title: "Offer & Sales Progression Automation",
    icon: Bot,
    className: "lg:col-span-7 lg:-mt-8",
    tone: "light",
    paragraphs: [
      "Offers can slow down when follow-ups depend on manual tracking. Our real estate workflow automation keeps deals progressing automatically.",
    ],
    bulletsLabel: "The system:",
    bullets: [
      "sends offer confirmation emails",
      "notifies staff instantly",
      "creates progression tasks",
      "tracks deal stages",
      "alerts negotiators when activity stalls",
    ],
    closing: "This ensures no opportunity is lost due to internal delays.",
    footerTitle: "Progression visibility",
    footerItems: ["Offer emails", "Staff alerts", "Task creation", "Stage tracking"],
  },
  {
    number: "05",
    title: "Internal Operations Automation",
    icon: ClipboardList,
    className: "lg:col-span-12",
    tone: "light",
    paragraphs: [
      "Efficient agencies rely on structured systems. Our workflow automation solution connects internal processes so teams stay aligned without chasing updates.",
    ],
    bulletsLabel: "Automations can:",
    bullets: [
      "create tasks after bookings",
      "notify managers about hot leads",
      "send daily pipeline summaries",
      "flag overdue actions",
      "track response performance",
    ],
    closing:
      "Instead of reacting to inboxes, your agency runs on a clear AI workflow automation framework that supports consistent operations.",
  },
] as const;

const supportRows = [
  [supportAreas[0], supportAreas[1]],
  [supportAreas[2], supportAreas[3]],
  [supportAreas[4]],
] as const;

const packageItems = [
  "Workflow mapping session (we document your current processes)",
  "Identification of operational bottlenecks",
  "Custom automation strategy tailored to your agency",
  "Full build and system configuration",
  "CRM integration and Calendar integration",
  "Communication channel integration (SMS, WhatsApp, email)",
  "Testing and refinement",
  "Go-live deployment",
  "Ongoing optimisation support",
];

const flowOpsAdvantages = [
  "estate agency-specific workflows built around your actual operations",
  "end-to-end operational design",
  "structured CRM workflow automation",
  "AI-driven trigger logic",
  "integrated communication systems",
  "long-term scalability to support growth",
];

const exampleWorkflow = [
  "When a Facebook lead form is submitted",
  "create lead in CRM",
  "outbound voice agent calls within seconds",
  "qualify",
  "if qualified, book viewing",
  "confirmations + reminders sent",
  "negotiator notified with full lead summary",
];

function revealProps(reduceMotion: boolean, delay = 0, distance = 24) {
  return {
    initial: { opacity: 0, y: reduceMotion ? 0 : distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-90px" },
    transition: { duration: 0.8, delay, ease },
  };
}

export default function WorkflowAutomationClient() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex w-full flex-col bg-background">
      <section className="relative overflow-hidden border-b border-border/50 bg-[linear-gradient(180deg,#fbfaf7_0%,#f5efe1_48%,#eef4fb_100%)] pb-18 pt-30 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:96px_96px]" />
        {reduceMotion ? (
          <>
            <div className="pointer-events-none absolute left-[-7rem] top-14 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(217,192,140,0.16),transparent_72%)] blur-3xl" />
            <div className="pointer-events-none absolute right-[-6rem] top-18 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(86,103,184,0.12),transparent_72%)] blur-3xl" />
          </>
        ) : (
          <>
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-[-7rem] top-14 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(217,192,140,0.18),transparent_72%)] blur-3xl"
              animate={{ x: [0, 26, 0], y: [0, -16, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-6rem] top-18 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(86,103,184,0.14),transparent_72%)] blur-3xl"
              animate={{ x: [0, -28, 0], y: [0, 22, 0], scale: [1, 1.06, 1] }}
              transition={{ duration: 9.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}

        <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.98fr_1.02fr] lg:px-8">
          <motion.div className="flex flex-col gap-7" {...revealProps(reduceMotion)}>
            <div className="inline-flex w-fit items-center rounded-full border border-[#dfd4bc] bg-white/76 px-5 py-2 text-[0.74rem] font-semibold uppercase tracking-[0.28em] text-slate-600 shadow-[0_16px_28px_-22px_rgba(15,23,42,0.18)] backdrop-blur-xl">
              FlowOps | UK estate agencies
            </div>

            <div className="space-y-5">
              <div className="h-px w-24 bg-[linear-gradient(90deg,#d9c08c,rgba(217,192,140,0.08))]" />
              <h1 className="max-w-4xl text-[2.85rem] font-display font-medium leading-[0.93] tracking-[-0.06em] text-slate-950 sm:text-[3.95rem] lg:text-[4.75rem]">
                Real Estate Workflow Automation That Runs Behind the Scenes
              </h1>
              <p className="max-w-2xl text-[1.02rem] leading-8 text-slate-600 sm:text-[1.06rem]">
                We build a complete automated workflow solution for estate agents in the UK -
                connecting your CRM, calendar, messaging platforms, and lead sources into
                intelligent systems that run 24/7.
              </p>
              <p className="max-w-2xl text-[1.16rem] font-medium leading-8 text-slate-700 sm:text-[1.23rem] sm:leading-9">
                Our real estate workflow automation systems remove repetitive work so your team
                focuses on valuations, negotiations, and winning business - not admin.
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

            <div className="flex flex-wrap gap-2 pt-2">
              {heroTags.map((item, index) => (
                <motion.span
                  key={item}
                  className="rounded-full border border-[#e6ddca] bg-white/74 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600 shadow-[0_14px_24px_-22px_rgba(15,23,42,0.2)] backdrop-blur-xl"
                  {...revealProps(reduceMotion, 0.08 + index * 0.05, 16)}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div className="relative" {...revealProps(reduceMotion, 0.08, 30)}>
            <div className="absolute -left-5 top-12 hidden h-20 w-20 rounded-[1.8rem] border border-white/60 bg-white/55 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.26)] backdrop-blur-xl lg:block" />
            <div className="absolute -right-4 bottom-14 hidden h-28 w-28 rounded-[2rem] border border-white/50 bg-white/42 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.22)] backdrop-blur-xl lg:block" />

            <div className="relative overflow-hidden rounded-[2.7rem] border border-white/75 bg-[linear-gradient(145deg,rgba(14,21,40,0.98),rgba(28,38,64,0.95))] p-5 text-white shadow-[0_44px_120px_-58px_rgba(15,23,42,0.56)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,192,140,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(102,124,232,0.22),transparent_28%)]" />
              <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:82px_82px]" />

              <div className="relative">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9c08c]">
                      Vector workflow map
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/72">
                      A structured operational flow that keeps every estate-agency task moving.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
                    <Clock3 className="h-3.5 w-3.5 text-[#d9c08c]" />
                    Runs 24/7
                  </div>
                </div>

                <div className="overflow-hidden rounded-[2.1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-3 backdrop-blur-sm">
                  <svg
                    viewBox="0 0 540 340"
                    className="h-[360px] w-full"
                    fill="none"
                    aria-label="Workflow automation flow map"
                  >
                    <defs>
                      <linearGradient id="flowops-line" x1="80" y1="108" x2="452" y2="242" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#d9c08c" />
                        <stop offset="0.5" stopColor="#ffffff" />
                        <stop offset="1" stopColor="#7c91ff" />
                      </linearGradient>
                      <linearGradient id="flowops-node" x1="0" y1="0" x2="1" y2="1">
                        <stop stopColor="rgba(255,255,255,0.18)" />
                        <stop offset="1" stopColor="rgba(255,255,255,0.06)" />
                      </linearGradient>
                      <filter id="flowops-glow" x="-60%" y="-60%" width="220%" height="220%">
                        <feGaussianBlur stdDeviation="6" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    <path
                      id="flowops-path"
                      d="M80 108 H452 V242 H80"
                      stroke="rgba(255,255,255,0.18)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M80 108 H452 V242 H80"
                      stroke="url(#flowops-line)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      filter="url(#flowops-glow)"
                      opacity="0.88"
                    />

                    {!reduceMotion ? (
                      <>
                        <path
                          d="M80 108 H452 V242 H80"
                          stroke="url(#flowops-line)"
                          strokeWidth="9"
                          strokeLinecap="round"
                          strokeDasharray="160 860"
                          strokeDashoffset="860"
                          filter="url(#flowops-glow)"
                        >
                          <animate
                            attributeName="stroke-dashoffset"
                            values="860;0"
                            dur="5s"
                            repeatCount="indefinite"
                          />
                        </path>

                        <circle r="9" fill="#ffffff" filter="url(#flowops-glow)">
                          <animateMotion dur="5s" repeatCount="indefinite" rotate="auto">
                            <mpath href="#flowops-path" />
                          </animateMotion>
                        </circle>

                        <circle r="5" fill="#d9c08c" filter="url(#flowops-glow)">
                          <animateMotion dur="5s" begin="0.16s" repeatCount="indefinite" rotate="auto">
                            <mpath href="#flowops-path" />
                          </animateMotion>
                        </circle>
                      </>
                    ) : null}

                    {flowNodes.map((node, index) => (
                      <g key={node.label} transform={`translate(${node.x} ${node.y})`}>
                        {!reduceMotion ? (
                          <circle r="40" fill="rgba(217,192,140,0.12)">
                            <animate
                              attributeName="opacity"
                              values="0.08;0.24;0.08"
                              dur={`${2.8 + index * 0.16}s`}
                              repeatCount="indefinite"
                            />
                          </circle>
                        ) : null}
                        <rect
                          x={-node.width / 2}
                          y={-22}
                          width={node.width}
                          height={44}
                          rx={18}
                          fill="url(#flowops-node)"
                          stroke="rgba(255,255,255,0.18)"
                        />
                        <text
                          x="0"
                          y="5"
                          textAnchor="middle"
                          fill="#ffffff"
                          style={{
                            fontSize: node.label === "Qualification" || node.label === "Management" ? 11 : 12,
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                          }}
                        >
                          {node.label}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.7rem] border border-white/10 bg-white/8 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d9c08c]">
                      Operational backbone
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/78">
                      Each trigger, reminder, and handoff runs from one defined system instead of
                      relying on memory.
                    </p>
                  </div>
                  <div className="rounded-[1.7rem] border border-white/10 bg-white/8 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d9c08c]">
                      Built for estate agencies
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/78">
                      CRM, communications, and lead-routing logic are designed around property
                      operations rather than generic templates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#101827_0%,#162035_100%)] py-18 text-white sm:py-22">
        {reduceMotion ? (
          <>
            <div className="pointer-events-none absolute left-[-5rem] top-0 h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(217,192,140,0.16),transparent_72%)] blur-3xl" />
            <div className="pointer-events-none absolute right-[-6rem] bottom-0 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(102,124,232,0.22),transparent_72%)] blur-3xl" />
          </>
        ) : (
          <>
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-[-5rem] top-0 h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(217,192,140,0.16),transparent_72%)] blur-3xl"
              animate={{ x: [0, 22, 0], y: [0, 16, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-6rem] bottom-0 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(102,124,232,0.22),transparent_72%)] blur-3xl"
              animate={{ x: [0, -24, 0], y: [0, -18, 0] }}
              transition={{ duration: 9.3, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
              <motion.article
                className="rounded-[2.4rem] border border-white/10 bg-white/[0.06] p-7 shadow-[0_28px_70px_-42px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:p-9"
                {...revealProps(reduceMotion)}
              >
                <div className="mb-5 h-px w-24 bg-[linear-gradient(90deg,#d9c08c,rgba(217,192,140,0.06))]" />
                <h2 className="text-[2.1rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-white sm:text-[2.95rem]">
                  How Our Automated Workflow Solution Works
                </h2>
                <div className="mt-6 space-y-5 text-[1rem] leading-8 text-white/78 sm:text-[1.04rem]">
                  <p>
                    FlowOps is a fully implemented automated workflow solution designed
                    specifically for estate agencies - not a simple Zapier setup and not just a
                    chatbot.
                  </p>
                  <p>
                    We design and implement structured, AI-driven operational systems so every
                    enquiry follows a defined path automatically:
                  </p>
                </div>
              </motion.article>

              <motion.div className="grid gap-5" {...revealProps(reduceMotion, 0.08)}>
                <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))] p-6 shadow-[0_34px_90px_-46px_rgba(0,0,0,0.44)] backdrop-blur-xl">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9c08c]">
                    Defined path
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    {[
                      "Enquiry",
                      "Qualification",
                      "CRM",
                      "Viewing",
                      "Reminder",
                      "Follow-up",
                      "Offer",
                      "Management",
                    ].map((step, index) => (
                      <div key={step} className="flex items-center gap-3">
                        <span className="rounded-full border border-white/10 bg-white/8 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/86">
                          {step}
                        </span>
                        {index < 7 ? (
                          <span className="text-[#d9c08c]">
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    "Instead of staff remembering tasks, the system triggers them.",
                    "Instead of reactive inboxes, you operate a controlled pipeline.",
                    "Instead of relying on individuals, you run a scalable workflow automation solution.",
                  ].map((item, index) => (
                    <motion.article
                      key={item}
                      className="rounded-[1.8rem] border border-white/10 bg-white/8 p-5 backdrop-blur-sm"
                      {...revealProps(reduceMotion, 0.12 + index * 0.06, 18)}
                    >
                      <p className="text-sm leading-7 text-white/82">{item}</p>
                    </motion.article>
                  ))}
                </div>

                <article className="rounded-[2rem] border border-[#d9c08c]/24 bg-[linear-gradient(145deg,rgba(217,192,140,0.16),rgba(255,255,255,0.05))] p-6 shadow-[0_28px_70px_-42px_rgba(0,0,0,0.3)]">
                  <p className="text-[1rem] leading-8 text-white/82 sm:text-[1.04rem]">
                    This is true AI workflow automation built around estate agency operations -
                    not generic tech retrofitted into property.
                  </p>
                </article>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8f4eb_0%,#fbfaf7_38%,#f3f6fb_100%)] py-18 sm:py-22">
        <div className="pointer-events-none absolute inset-x-0 top-8 text-center text-[clamp(5rem,17vw,11rem)] font-display leading-none tracking-[-0.08em] text-slate-900/[0.04]">
          Systems
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
              <motion.article
                className="rounded-[2.4rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,243,233,0.92))] p-7 shadow-[0_28px_70px_-42px_rgba(15,23,42,0.16)] sm:p-9"
                {...revealProps(reduceMotion)}
              >
                <div className="mb-5 inline-flex items-center rounded-full border border-slate-200/80 bg-white/84 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-slate-500">
                  Modern agencies
                </div>
                <h2 className="text-[2.08rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-[2.95rem]">
                  Why AI Workflow Automation Is Essential for Modern Agencies
                </h2>
                <div className="mt-6 space-y-5 text-[1rem] leading-8 text-slate-600 sm:text-[1.04rem]">
                  <p>
                    Most agencies operate with strong negotiators but weak systems. Common problems
                    include missed enquiries, slow follow-ups, inconsistent qualification, admin
                    overload, poor lead tracking, negotiators spending time on admin instead of
                    selling, manual CRM updates, viewing no-shows, and delayed offer progression.
                    These are not people problems - they are process problems.
                  </p>
                </div>
              </motion.article>

              <motion.div className="grid gap-4" {...revealProps(reduceMotion, 0.08)}>
                <article className="rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(145deg,rgba(17,24,39,0.98),rgba(37,46,70,0.95))] p-7 text-white shadow-[0_34px_80px_-42px_rgba(15,23,42,0.34)] sm:p-8">
                  <div className="mb-5 h-px w-24 bg-[linear-gradient(90deg,#d9c08c,rgba(217,192,140,0.08))]" />
                  <p className="text-[1rem] leading-8 text-white/80 sm:text-[1.04rem]">
                    A properly implemented automated workflow solution standardises your
                    operational flow so every enquiry is captured, every lead is tagged and
                    routed, every viewing is confirmed, every reminder is sent, and every
                    follow-up is triggered automatically.
                  </p>
                </article>

                <article className="rounded-[2rem] border border-[#d9c08c]/28 bg-[linear-gradient(160deg,rgba(255,255,255,0.96),rgba(251,245,232,0.92))] p-6 shadow-[0_22px_48px_-30px_rgba(15,23,42,0.16)] sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-[0_12px_28px_-18px_rgba(15,23,42,0.35)]">
                      <Workflow className="h-5 w-5" />
                    </div>
                    <p className="text-[1rem] leading-8 text-slate-600 sm:text-[1.04rem]">
                      This is what professional real estate workflow automation looks like when
                      deployed correctly.
                    </p>
                  </div>
                </article>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f1e6_0%,#fbfaf7_48%,#f3f6fb_100%)] py-18 sm:py-22">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div className="max-w-4xl" {...revealProps(reduceMotion)}>
              <div className="inline-flex items-center rounded-full border border-slate-200/80 bg-white/82 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-slate-500">
                Operational coverage
              </div>
              <h2 className="mt-5 text-[2.18rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-[3rem]">
                How Our AI Workflow Automation Supports Your Agency
              </h2>
            </motion.div>

            <div className="mt-10 space-y-6">
              {supportRows.map((row, rowIndex) => (
                <div
                  key={`support-row-${rowIndex}`}
                  className={`grid gap-6 ${
                    row.length === 1
                      ? ""
                      : rowIndex === 1
                        ? "lg:grid-cols-[0.96fr_1.04fr]"
                        : "lg:grid-cols-[1.04fr_0.96fr]"
                  } lg:items-stretch`}
                >
                  {row.map((item, itemIndex) => (
                    <motion.article
                      key={item.title}
                      className={`group relative overflow-hidden rounded-[2.15rem] border p-6 shadow-[0_28px_68px_-38px_rgba(15,23,42,0.15)] transition-all duration-300 hover:-translate-y-1 sm:p-7 ${
                        item.tone === "dark"
                          ? "border-slate-900/10 bg-[linear-gradient(145deg,rgba(17,24,39,0.98),rgba(37,46,70,0.95))] text-white shadow-[0_30px_80px_-42px_rgba(15,23,42,0.4)]"
                          : item.tone === "accent"
                            ? "border-[#e0cd98]/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(250,244,229,0.96))] shadow-[0_30px_70px_-40px_rgba(15,23,42,0.17)]"
                            : "border-slate-200/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,247,255,0.95))] shadow-[0_30px_70px_-40px_rgba(15,23,42,0.15)]"
                      }`}
                      {...revealProps(reduceMotion, rowIndex * 0.08 + itemIndex * 0.05, 18)}
                    >
                      <div
                        className={`absolute inset-x-7 top-0 h-px ${
                          item.tone === "dark"
                            ? "bg-[linear-gradient(90deg,transparent,rgba(217,192,140,0.85),transparent)]"
                            : "bg-[linear-gradient(90deg,transparent,rgba(217,192,140,0.75),transparent)]"
                        }`}
                      />
                      <div
                        className={`absolute right-5 top-4 text-[4.5rem] font-display leading-none tracking-[-0.08em] ${
                          item.tone === "dark" ? "text-white/[0.05]" : "text-slate-900/[0.05]"
                        }`}
                      >
                        {item.number}
                      </div>

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

                          <div className="max-w-3xl">
                            <p
                              className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${
                                item.tone === "dark" ? "text-white/55" : "text-slate-400"
                              }`}
                            >
                              {item.number}
                            </p>
                            <h3
                              className={`mt-2 text-[1.24rem] font-display font-medium leading-[1.08] tracking-[-0.03em] ${
                                item.tone === "dark" ? "text-white" : "text-slate-950"
                              }`}
                            >
                              {item.title}
                            </h3>
                          </div>
                        </div>

                        <div
                          className={`mt-5 space-y-4 text-[1rem] leading-8 ${
                            item.tone === "dark" ? "text-white/76" : "text-slate-600"
                          }`}
                        >
                          {item.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>

                        {item.footerItems ? (
                          <div className="mt-auto pt-6">
                            <div
                              className={`rounded-[1.8rem] border p-5 ${
                                item.tone === "dark"
                                  ? "border-white/10 bg-white/8"
                                  : item.tone === "accent"
                                    ? "border-[#eadcb2]/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(251,247,238,0.94))]"
                                    : "border-slate-200/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,249,253,0.95))] shadow-[0_18px_34px_-24px_rgba(15,23,42,0.12)]"
                              }`}
                            >
                              <p
                                className={`text-sm font-semibold uppercase tracking-[0.22em] ${
                                  item.tone === "dark" ? "text-[#d9c08c]" : "text-slate-400"
                                }`}
                              >
                                {item.footerTitle}
                              </p>
                              <div className="mt-4 flex flex-wrap gap-2">
                                {item.footerItems.map((footerItem) => (
                                  <span
                                    key={footerItem}
                                    className={`rounded-full border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                                      item.tone === "dark"
                                        ? "border-white/10 bg-white/8 text-white/80"
                                        : "border-slate-200/90 bg-white/92 text-slate-600"
                                    }`}
                                  >
                                    {footerItem}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : null}

                        {item.bulletsLabel ? (
                          <div className="mt-5">
                            <p
                              className={`text-sm font-semibold uppercase tracking-[0.22em] ${
                                item.tone === "dark" ? "text-[#d9c08c]" : "text-slate-400"
                              }`}
                            >
                              {item.bulletsLabel}
                            </p>
                            <div className="mt-4 grid gap-3">
                              {item.bullets?.map((bullet) => (
                                <div
                                  key={bullet}
                                  className={`flex items-start gap-3 rounded-[1.45rem] border px-4 py-3 shadow-[0_16px_30px_-24px_rgba(15,23,42,0.12)] ${
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
                                      item.tone === "dark" ? "text-white/82" : "text-slate-700"
                                    }`}
                                  >
                                    {bullet}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : null}

                        {item.closing ? (
                          <p
                            className={`mt-5 text-[1rem] leading-8 ${
                              item.tone === "dark" ? "text-white/76" : "text-slate-600"
                            }`}
                          >
                            {item.closing}
                          </p>
                        ) : null}
                      </div>
                    </motion.article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#111827_0%,#162032_100%)] py-18 text-white sm:py-22">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <motion.article
                className="rounded-[2.45rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl sm:p-9"
                {...revealProps(reduceMotion)}
              >
                <div className="mb-5 h-px w-24 bg-[linear-gradient(90deg,#d9c08c,rgba(217,192,140,0.08))]" />
                <h2 className="text-[2.12rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-white sm:text-[3rem]">
                  What&apos;s Included in Your Automated Workflow Solution
                </h2>
                <div className="mt-6 space-y-5 text-[1rem] leading-8 text-white/78 sm:text-[1.04rem]">
                  <p>We don&apos;t sell software licences - we implement operational systems.</p>
                  <p>
                    We build a working real estate workflow automation infrastructure that becomes
                    part of your daily operations.
                  </p>
                </div>
              </motion.article>

              <motion.div className="grid gap-3 sm:grid-cols-2" {...revealProps(reduceMotion, 0.08)}>
                {packageItems.map((item, index) => (
                  <motion.article
                    key={item}
                    className="rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.32)] backdrop-blur-xl"
                    {...revealProps(reduceMotion, 0.1 + index * 0.04, 16)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[#d9c08c]">
                        {index < 2 ? (
                          <ClipboardList className="h-4 w-4" />
                        ) : index < 5 ? (
                          <Workflow className="h-4 w-4" />
                        ) : index < 7 ? (
                          <MessageSquare className="h-4 w-4" />
                        ) : index === 7 ? (
                          <Sparkles className="h-4 w-4" />
                        ) : (
                          <BellRing className="h-4 w-4" />
                        )}
                      </div>
                      <p className="text-sm leading-7 text-white/82">{item}</p>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fbfaf7_0%,#f4f7fb_100%)] py-18 sm:py-22">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <motion.article
                className="rounded-[2.45rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(250,245,233,0.92))] p-7 shadow-[0_30px_70px_-42px_rgba(15,23,42,0.16)] sm:p-9"
                {...revealProps(reduceMotion)}
              >
                <div className="mb-5 inline-flex items-center rounded-full border border-slate-200/80 bg-white/84 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-slate-500">
                  FlowOps difference
                </div>
                <h2 className="text-[2.1rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-[3rem]">
                  Why FlowOps Instead of Generic Automation Tools?
                </h2>
                <div className="mt-6 space-y-5 text-[1rem] leading-8 text-slate-600 sm:text-[1.04rem]">
                  <p>
                    Many agencies attempt automation using disconnected tools, but without
                    structured design and strategic implementation, those tools often create more
                    confusion than clarity.
                  </p>
                  <p>
                    FlowOps delivers estate agency-specific workflows built around your actual
                    operations, not generic templates. We provide end-to-end operational design,
                    structured CRM workflow automation, AI-driven trigger logic, integrated
                    communication systems, and long-term scalability to support growth.
                  </p>
                  <p>
                    We don&apos;t simply install tools - we implement a fully functioning automated
                    workflow solution that becomes the operational backbone of your agency.
                  </p>
                </div>
              </motion.article>

              <motion.div className="grid gap-4" {...revealProps(reduceMotion, 0.08)}>
                <article className="rounded-[2.2rem] border border-slate-900/10 bg-[linear-gradient(145deg,rgba(17,24,39,0.98),rgba(37,46,70,0.95))] p-7 text-white shadow-[0_34px_80px_-42px_rgba(15,23,42,0.34)] sm:p-8">
                  <div className="mb-5 h-px w-24 bg-[linear-gradient(90deg,#d9c08c,rgba(217,192,140,0.08))]" />
                  <div className="grid gap-3">
                    {flowOpsAdvantages.map((item, index) => (
                      <motion.div
                        key={item}
                        className="flex items-start gap-3 rounded-[1.45rem] border border-white/10 bg-white/8 px-4 py-4"
                        {...revealProps(reduceMotion, 0.12 + index * 0.05, 14)}
                      >
                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#d9c08c]">
                          {index === 0 ? (
                            <Building2 className="h-4 w-4" />
                          ) : index === 1 ? (
                            <ClipboardList className="h-4 w-4" />
                          ) : index === 2 ? (
                            <Database className="h-4 w-4" />
                          ) : index === 3 ? (
                            <Bot className="h-4 w-4" />
                          ) : index === 4 ? (
                            <MessageSquare className="h-4 w-4" />
                          ) : (
                            <Sparkles className="h-4 w-4" />
                          )}
                        </div>
                        <p className="text-sm leading-7 text-white/82">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </article>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f2efe8] py-18 sm:py-22">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div className="max-w-4xl" {...revealProps(reduceMotion)}>
              <div className="inline-flex items-center rounded-full border border-slate-200/80 bg-white/82 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-slate-500">
                Website-ready example
              </div>
              <h2 className="mt-5 text-[2.15rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-[3rem]">
                Example Workflow
              </h2>
            </motion.div>

            <motion.div
              className="mt-8 overflow-hidden rounded-[2.6rem] border border-slate-200/80 bg-[linear-gradient(145deg,rgba(17,24,39,0.98),rgba(30,41,59,0.96))] p-7 text-white shadow-[0_38px_100px_-52px_rgba(15,23,42,0.46)] sm:p-9"
              {...revealProps(reduceMotion, 0.08)}
            >
              <div className="mb-5 h-px w-24 bg-[linear-gradient(90deg,#d9c08c,rgba(217,192,140,0.08))]" />
              <div className="flex flex-wrap items-center gap-3">
                {exampleWorkflow.map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="rounded-full border border-white/10 bg-white/8 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/84">
                      {step}
                    </span>
                    {index < exampleWorkflow.length - 1 ? (
                      <span className="text-[#d9c08c]">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
                <p className="text-[1rem] leading-8 text-white/82 sm:text-[1.04rem]">
                  &ldquo;When a Facebook lead form is submitted - create lead in CRM - outbound
                  voice agent calls within seconds - qualify - if qualified, book viewing -
                  confirmations + reminders sent - negotiator notified with full lead
                  summary.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f4ed_0%,#fbfaf7_100%)] pb-24 pt-8 sm:pb-28">
        <div className="pointer-events-none absolute inset-x-0 top-8 text-center text-[clamp(5rem,17vw,11.5rem)] font-display leading-none tracking-[-0.08em] text-slate-900/[0.04]">
          ROI
        </div>
        <div className="pointer-events-none absolute right-[-8rem] top-16 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(217,192,140,0.12),transparent_72%)] blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-5xl overflow-hidden rounded-[2.65rem] border border-slate-200/80 bg-[linear-gradient(135deg,rgba(18,24,39,0.98),rgba(30,41,59,0.96))] px-7 py-9 text-white shadow-[0_42px_110px_-52px_rgba(15,23,42,0.55)] sm:px-10 sm:py-11"
            {...revealProps(reduceMotion)}
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-4xl">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-white/72">
                  Agency operations
                </div>
                <h2 className="mt-5 text-[2.28rem] font-display font-medium leading-[0.95] tracking-[-0.055em] text-white sm:text-[3.15rem]">
                  Ready to Automate Your Agency Operations?
                </h2>

                <div className="mt-6 space-y-5 text-[1rem] leading-8 text-white/78 sm:text-[1.05rem]">
                  <p>
                    We&apos;ll map your current process and show exactly what automated workflows we
                    can implement for your estate agency. You&apos;ll gain clear visibility into
                    where leads are leaking, where admin is consuming valuable time, and where
                    automation can create immediate ROI.
                  </p>
                  <p>
                    Most importantly, you&apos;ll see what your customised automated workflow
                    solution would look like in practice - structured, scalable, and built around
                    how your agency actually operates.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  href="/book-demo"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-base font-semibold text-slate-950 shadow-[0_18px_34px_-20px_rgba(255,255,255,0.45)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Automate your ops.
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
