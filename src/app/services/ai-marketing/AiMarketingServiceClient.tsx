"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CalendarClock,
  CheckCircle2,
  Clapperboard,
  LayoutTemplate,
  Megaphone,
  PlayCircle,
  Sparkles,
  Video,
} from "lucide-react";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const automationItems = [
  { title: "AI-generated property videos", icon: Video },
  { title: "Social media content creation", icon: LayoutTemplate },
  { title: "Automated posting workflows", icon: CalendarClock },
  { title: "Scheduled campaigns", icon: Megaphone },
  { title: "AI avatars for property presentations", icon: Bot },
];

const processSteps = [
  { number: "1", title: "Add a property", body: "Property details are captured automatically" },
  { number: "2", title: "Update pricing", body: "Price change alerts are prepared instantly" },
  {
    number: "3",
    title: "Announce new listings",
    body: "Marketing workflows trigger automatically",
  },
  {
    number: "4",
    title: "System generates automatically:",
    bullets: [
      "Property listing videos",
      "Social media posts",
      "Price updates and promotions",
      "Ongoing listing exposure across channels",
    ],
  },
  {
    number: "5",
    title: "Integrated automation support:",
    bullets: [
      "Connects with a conversational AI chatbot for real estate agents to respond to enquiries instantly",
      "Syncs with real estate automated workflow solutions to move leads from interest to viewing automatically",
    ],
  },
];

const assetItems = [
  "AI presenter property listing videos",
  "Area guide and neighbourhood highlight videos",
  "Landlord education content",
  "Buyer and tenant explainer videos",
  "New instruction announcements",
  "Price drop alerts",
  "Open house promotions",
  "Short videos for Reels, TikTok, and YouTube Shorts",
];

const whyItems = [
  {
    title: "Save Time on Content Creation",
    body: "Automatically convert listing photos and descriptions into videos.",
  },
  {
    title: "Stay Active on Social Media",
    body: "Publish regular property updates without manual editing.",
  },
  {
    title: "Build Brand Trust at Scale",
    body: "Use AI presenters to explain services and introduce listings professionally.",
  },
  {
    title: "Increase Property Enquiries",
    body: "Video marketing improves engagement compared to static posts.",
  },
  {
    title: "Support Multi-Branch Agencies",
    body: "Maintain consistent messaging across locations.",
  },
];

const smarterBullets = [
  "promote listings faster",
  "educate landlords automatically",
  "attract buyers earlier in their search journey",
  "maintain consistent social media presence",
  "scale marketing without hiring extra staff",
];

function revealProps(reduceMotion: boolean, delay = 0, distance = 24) {
  return {
    initial: { opacity: 0, y: reduceMotion ? 0 : distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-90px" },
    transition: { duration: 0.8, delay, ease },
  };
}

export default function AiMarketingServiceClient() {
  const reduceMotion = useReducedMotion();
  const inlineLinkClass =
    "font-semibold text-[#77b563] underline decoration-[#77b563]/45 underline-offset-4 transition-colors hover:text-[#5f9b4b]";

  return (
    <div className="flex w-full flex-col bg-background">
      <section className="relative overflow-hidden border-b border-border/50 bg-[linear-gradient(180deg,#fbfaf7_0%,#f4ecdd_48%,#eef4fb_100%)] pb-18 pt-30 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:94px_94px]" />
        {reduceMotion ? null : (
          <>
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-[-7rem] top-10 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(217,192,140,0.16),transparent_72%)] blur-3xl"
              animate={{ x: [0, 24, 0], y: [0, -18, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-6rem] top-18 h-[25rem] w-[25rem] rounded-full bg-[radial-gradient(circle,rgba(125,108,242,0.14),transparent_72%)] blur-3xl"
              animate={{ x: [0, -26, 0], y: [0, 20, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 9.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}

        <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.96fr_1.04fr] lg:px-8">
          <motion.div className="flex flex-col gap-7" {...revealProps(reduceMotion)}>
            <h2 className="text-[1.3rem] font-display font-medium leading-[1.08] tracking-[-0.03em] text-slate-700 sm:text-[1.65rem]">
              Scale Your Property Marketing with AI Video Automation
            </h2>

            <div className="space-y-5">
              <div className="h-px w-24 bg-[linear-gradient(90deg,#d9c08c,rgba(217,192,140,0.08))]" />
              <h1 className="max-w-4xl text-[2.8rem] font-display font-medium leading-[0.93] tracking-[-0.06em] text-slate-950 sm:text-[3.9rem] lg:text-[4.72rem]">
                Premium listing content and AI presenters powered by AI marketing automation.
              </h1>
              <p className="max-w-2xl text-[1.1rem] font-medium leading-8 text-slate-700 sm:text-[1.2rem] sm:leading-9">
                Automate property videos, social media content, and listing promotion with AI
                marketing automation for estate agents. Stay visible every week without manual
                effort.
              </p>
              <p className="max-w-2xl text-[1.02rem] leading-8 text-slate-600 sm:text-[1.06rem]">
                Our marketing automation for real estate solves this by automatically creating and
                publishing marketing content for your agency and property listings. No filming,
                editing, or design required.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href="/book-demo"
                className="group inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-base font-semibold text-white shadow-[0_18px_42px_-22px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-900"
              >
                See Avatar Demo
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </motion.div>

          <motion.div className="relative" {...revealProps(reduceMotion, 0.08, 30)}>
            <div className="absolute -left-5 top-10 hidden h-20 w-20 rounded-[1.8rem] border border-white/60 bg-white/55 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.26)] backdrop-blur-xl lg:block" />
            <div className="absolute -right-5 bottom-12 hidden h-28 w-28 rounded-[2rem] border border-white/50 bg-white/42 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.22)] backdrop-blur-xl lg:block" />

            <div className="relative overflow-hidden rounded-[2.65rem] border border-white/75 bg-[linear-gradient(145deg,rgba(17,24,39,0.98),rgba(31,41,63,0.96))] p-5 text-white shadow-[0_44px_120px_-58px_rgba(15,23,42,0.56)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,192,140,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(125,108,242,0.18),transparent_28%)]" />
              <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:82px_82px]" />

              <div className="relative grid gap-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9c08c]">
                      AI marketing automation
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/72">
                      Premium listing videos, AI presenters, and weekly content output.
                    </p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/74">
                    Always publishing
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-[0.92fr_1.08fr]">
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-4">
                    <div className="absolute inset-0 bg-[url('/media/ai_marketing_ui_light_1774519968668.png')] bg-cover bg-center opacity-25 mix-blend-screen" />
                    <div className="relative flex h-full min-h-[320px] flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <div className="rounded-full border border-white/10 bg-white/8 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/74">
                          Avatar presenter
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-[#d9c08c]">
                          <PlayCircle className="h-5 w-5" />
                        </div>
                      </div>

                      <div className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.36),rgba(17,24,39,0.18))] p-5 backdrop-blur-sm">
                        <div className="mb-4 flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#d9c08c]">
                            <Bot className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">AI presenter script ready</p>
                            <p className="text-xs text-white/62">Listing intro + CTA + pricing notes</p>
                          </div>
                        </div>
                        <p className="text-sm leading-7 text-white/82">
                          &ldquo;Welcome to this premium listing. Here&apos;s what buyers should know
                          before they book a viewing...&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {[
                      {
                        label: "Listing video",
                        text: "Property photos and details become a polished video automatically",
                        icon: Video,
                      },
                      {
                        label: "Posting workflow",
                        text: "Ready-to-publish content is prepared for weekly social output",
                        icon: LayoutTemplate,
                      },
                      {
                        label: "Campaign support",
                        text: "Price updates, promotions, and ongoing exposure stay active across channels",
                        icon: Megaphone,
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        className="rounded-[1.55rem] border border-white/10 bg-white/8 p-4 backdrop-blur-sm"
                        {...revealProps(reduceMotion, 0.12 + index * 0.06, 16)}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[#d9c08c]">
                            <item.icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/58">
                              {item.label}
                            </p>
                            <p className="mt-2 text-sm leading-7 text-white/84">{item.text}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
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
                Estate agency visibility
              </div>
              <h2 className="mt-5 text-[2.12rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-[2.95rem]">
                How AI Marketing Automation Helps Estate Agents
              </h2>
              <div className="mt-6 max-w-4xl space-y-5 text-[1rem] leading-8 text-slate-600 sm:text-[1.04rem]">
                <p>
                  This is a complete marketing automation solution for real estate{" "}
                  <Link href="/" className={inlineLinkClass}>
                    system
                  </Link>{" "}
                  built for UK estate agencies.
                </p>
                <p>
                  Instead of relying on costly teams or time-consuming processes, our platform
                  automates:
                </p>
              </div>
            </motion.div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {automationItems.map((item, index) => (
                <motion.article
                  key={item.title}
                  className="rounded-[1.85rem] border border-slate-200/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,249,253,0.95))] p-5 shadow-[0_24px_54px_-38px_rgba(15,23,42,0.15)]"
                  {...revealProps(reduceMotion, index * 0.05, 18)}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-slate-200/90 bg-white/92 text-slate-900">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <p className="text-sm leading-7 text-slate-700">{item.title}</p>
                  </div>
                </motion.article>
              ))}
            </div>

            <article className="mt-6 rounded-[2rem] border border-[#dfcc9c]/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(250,244,229,0.96))] p-6 shadow-[0_26px_58px_-40px_rgba(15,23,42,0.15)] sm:p-7">
              <p className="text-[1rem] leading-8 text-slate-600 sm:text-[1.04rem]">
                Your agency stays active online every week&mdash;without extra workload.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#111827_0%,#162032_100%)] py-18 text-white sm:py-22">
        <div className="pointer-events-none absolute left-0 top-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(217,192,140,0.08),transparent_70%)] blur-3xl" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.article
              className="overflow-hidden rounded-[2.6rem] border border-white/10 bg-[linear-gradient(140deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-7 shadow-[0_30px_80px_-48px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-9"
              {...revealProps(reduceMotion)}
            >
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <div className="mb-5 h-px w-24 bg-[linear-gradient(90deg,#d9c08c,rgba(217,192,140,0.08))]" />
                  <h2 className="text-[2.12rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-white sm:text-[3rem]">
                    The Process Behind Smart Real Estate Marketing Automation
                  </h2>
                </div>

                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {[
                    "Add a property",
                    "Update pricing",
                    "Announce new listings",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="rounded-[1.45rem] border border-white/10 bg-white/8 px-4 py-4"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d9c08c]">
                        0{index + 1}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>

            <motion.div className="relative mt-6 grid gap-4" {...revealProps(reduceMotion, 0.08)}>
              <div className="pointer-events-none absolute bottom-10 left-[1.38rem] top-10 hidden w-px bg-[linear-gradient(180deg,rgba(217,192,140,0.42),rgba(217,192,140,0.08))] lg:block" />

              {processSteps.map((step, index) => (
                <motion.article
                  key={step.number}
                  className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(140deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-6 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-7"
                  {...revealProps(reduceMotion, 0.1 + index * 0.05, 16)}
                >
                  <div className="absolute inset-y-0 left-0 w-[3px] bg-[linear-gradient(180deg,rgba(217,192,140,0.7),rgba(217,192,140,0.15))]" />
                  <div className="grid gap-5 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-start">
                    <div className="flex items-center gap-4 lg:gap-5">
                      <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.08))] text-sm font-semibold text-[#d9c08c] shadow-[0_14px_34px_-24px_rgba(217,192,140,0.9)]">
                        {step.number}
                      </div>
                      <div className="lg:hidden">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/46">
                          Step 0{step.number}
                        </p>
                        <h3 className="mt-1 text-[1.18rem] font-display font-medium leading-[1.08] tracking-[-0.03em] text-white">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <div className="min-w-0">
                      <div className="hidden lg:block">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/46">
                          Step 0{step.number}
                        </p>
                        <h3 className="mt-2 text-[1.28rem] font-display font-medium leading-[1.05] tracking-[-0.03em] text-white">
                          {step.title}
                        </h3>
                      </div>

                      {"body" in step ? (
                        <p className="mt-3 text-[1rem] leading-8 text-white/78">{step.body}</p>
                      ) : null}

                      {"bullets" in step ? (
                        <div
                          className={`mt-4 grid gap-3 ${
                            index === 3 ? "xl:grid-cols-2" : "lg:grid-cols-2"
                          }`}
                        >
                          {step.bullets.map((bullet, bulletIndex) => (
                            <div
                              key={bullet}
                              className="flex items-start gap-3 rounded-[1.45rem] border border-white/10 bg-white/8 px-4 py-3"
                            >
                              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#d9c08c]">
                                {index === 3 ? (
                                  bulletIndex === 0 ? (
                                    <Clapperboard className="h-4 w-4" />
                                  ) : bulletIndex === 1 ? (
                                    <LayoutTemplate className="h-4 w-4" />
                                  ) : bulletIndex === 2 ? (
                                    <Sparkles className="h-4 w-4" />
                                  ) : (
                                    <Megaphone className="h-4 w-4" />
                                  )
                                ) : (
                                  <CheckCircle2 className="h-4 w-4" />
                                )}
                              </div>
                              <p className="text-sm leading-7 text-white/84">
                                {index === 4 && bulletIndex === 0 ? (
                                  <>
                                    Connects with a{" "}
                                    <Link href="/services/chat" className={inlineLinkClass}>
                                      conversational AI chatbot
                                    </Link>{" "}
                                    for real estate agents to respond to enquiries instantly
                                  </>
                                ) : index === 4 && bulletIndex === 1 ? (
                                  <>
                                    Syncs with{" "}
                                    <Link
                                      href="/services/workflow-automation"
                                      className={inlineLinkClass}
                                    >
                                      real estate automated workflow solutions
                                    </Link>{" "}
                                    to move leads from interest to viewing automatically
                                  </>
                                ) : (
                                  bullet
                                )}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>

                    <div className="hidden lg:flex">
                      <div className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/62">
                        {index < 3 ? "Trigger" : index === 3 ? "Generate" : "Sync"}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}

              <article className="rounded-[2rem] border border-[#d9c08c]/24 bg-[linear-gradient(145deg,rgba(217,192,140,0.16),rgba(255,255,255,0.05))] p-6 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.28)]">
                <p className="text-[1rem] leading-8 text-white/82 sm:text-[1.04rem]">
                  This structured real estate ai marketing automation flow keeps your listings
                  visible, consistent, and active without manual follow-ups.
                </p>
              </article>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f2efe8] py-18 sm:py-22">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
              <motion.article
                className="rounded-[2.4rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(249,243,233,0.94))] p-7 shadow-[0_28px_70px_-42px_rgba(15,23,42,0.16)] sm:p-9"
                {...revealProps(reduceMotion)}
              >
                <div className="mb-5 inline-flex items-center rounded-full border border-slate-200/80 bg-white/84 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-slate-500">
                  Client-first marketing
                </div>
                <h2 className="text-[2.08rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-[2.95rem]">
                  Real Estate Marketing Automation That Works While You Focus on Clients
                </h2>
                <div className="mt-6 space-y-5 text-[1rem] leading-8 text-slate-600 sm:text-[1.04rem]">
                  <p>
                    Consistent marketing is one of the biggest challenges for estate agents. Our
                    AI marketing automation platform turns your property details into
                    ready-to-publish video content that attracts buyers, tenants, and landlords
                    automatically.
                  </p>
                  <p>
                    Instead of spending hours creating posts manually, your team can publish
                    professional marketing content every week with minimal effort.
                  </p>
                  <p>
                    This is a complete marketing automation solution designed specifically for
                    property businesses.
                  </p>
                </div>
              </motion.article>

              <motion.article
                className="rounded-[2rem] border border-slate-200/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,247,255,0.95))] p-6 shadow-[0_24px_54px_-38px_rgba(15,23,42,0.15)] sm:p-7"
                {...revealProps(reduceMotion, 0.08)}
              >
                <h2 className="text-[2rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-[2.6rem]">
                  What Our Marketing Automation Solutions Create for You
                </h2>
                <p className="mt-5 text-[1rem] leading-8 text-slate-600 sm:text-[1.04rem]">
                  Our system transforms your listings into high-performing marketing assets:
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {assetItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[1.45rem] border border-slate-200/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,249,253,0.94))] px-4 py-3"
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#6d9356]" />
                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[1rem] leading-8 text-slate-600 sm:text-[1.04rem]">
                  All generated through intelligent marketing automation for real estate agencies.
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
                Platform value
              </div>
              <h2 className="mt-5 text-[2.15rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-white sm:text-[3rem]">
                Why Estate Agents Use AI Marketing Automation
              </h2>
            </motion.div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {whyItems.map((item, index) => (
                <motion.article
                  key={item.title}
                  className="rounded-[1.85rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl"
                  {...revealProps(reduceMotion, index * 0.05, 18)}
                >
                  <h3 className="text-[1.1rem] font-display font-medium leading-[1.08] tracking-[-0.03em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/78">{item.body}</p>
                </motion.article>
              ))}
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
              <motion.article
                className="rounded-[2.4rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl sm:p-9"
                {...revealProps(reduceMotion, 0.08)}
              >
                <div className="mb-5 h-px w-24 bg-[linear-gradient(90deg,#d9c08c,rgba(217,192,140,0.08))]" />
                <h2 className="text-[2.08rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-white sm:text-[2.95rem]">
                  A Smarter Marketing Automation Solution for Property Businesses
                </h2>
                <div className="mt-6 space-y-5 text-[1rem] leading-8 text-white/78 sm:text-[1.04rem]">
                  <p>
                    Unlike generic tools, our AI marketing automation solution is designed
                    specifically for estate agents and letting agencies.
                  </p>
                  <p>It helps you:</p>
                  <p>
                    This makes it one of the most practical marketing automation solutions for
                    real estate agencies looking to grow efficiently.
                  </p>
                </div>
              </motion.article>

              <motion.div className="grid gap-3" {...revealProps(reduceMotion, 0.12)}>
                {smarterBullets.map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-start gap-3 rounded-[1.55rem] border border-white/10 bg-white/[0.06] px-4 py-4 backdrop-blur-xl"
                    {...revealProps(reduceMotion, 0.14 + index * 0.05, 14)}
                  >
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#d9c08c]">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <p className="text-sm leading-7 text-white/82">{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f4ed_0%,#fbfaf7_100%)] pb-24 pt-10 sm:pb-28">
        <div className="pointer-events-none absolute inset-x-0 top-8 text-center text-[clamp(5rem,17vw,11.5rem)] font-display leading-none tracking-[-0.08em] text-slate-900/[0.04]">
          Demo
        </div>
        <div className="pointer-events-none absolute right-[-8rem] top-16 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(125,108,242,0.1),transparent_72%)] blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-5xl overflow-hidden rounded-[2.65rem] border border-slate-200/80 bg-[linear-gradient(135deg,rgba(18,24,39,0.98),rgba(30,41,59,0.96))] px-7 py-9 text-white shadow-[0_42px_110px_-52px_rgba(15,23,42,0.55)] sm:px-10 sm:py-11"
            {...revealProps(reduceMotion)}
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-4xl">
                <h2 className="text-[2.18rem] font-display font-medium leading-[0.95] tracking-[-0.055em] text-white sm:text-[3.05rem]">
                  Start Using Real Estate Marketing Automation Today
                </h2>

                <div className="mt-6 space-y-5 text-[1rem] leading-8 text-white/78 sm:text-[1.05rem]">
                  <p>
                    Let your agency generate content, promote listings, and stay visible&mdash;every
                    week. That&apos;s the power of AI marketing automation for real estate agents.
                  </p>
                  <p>
                    We&apos;ll show you exactly how your listings and brand can be promoted
                    automatically using our real estate marketing automation platform.
                  </p>
                  <p>
                    Create professional listing videos, explain your services clearly, and stay
                    visible online &mdash; without filming or manual editing.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  href="/book-demo"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-base font-semibold text-slate-950 shadow-[0_18px_34px_-20px_rgba(255,255,255,0.45)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Book your AI marketing demo today
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
