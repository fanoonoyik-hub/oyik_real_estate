import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Services for Real Estate | oyik.realestate.ai",
  description: "Choose one service or combine them for a complete AI front desk built for real estate teams.",
};

const services = [
  {
    id: "chat",
    title: "AI CHATBOT",
    lead:
      "An AI chat bot helps estate agents respond instantly to enquiries from websites and social media, ensuring no lead is missed.",
    paragraphTwo:
      "This conversational AI chatbot can answer property questions, share live listings, capture contact details, and check viewing availability in real time.",
    paragraphThree:
      "It works like a smart AI chatbot agent, guiding buyers, tenants, and landlords to the next step while saving your team time and improving response speed.",
    image: "/media/ai_chat_ui_light_1774519717225.png",
  },
  {
    id: "voice",
    title: "VOICE AGENT",
    lead:
      "Our AI voice agent acts as a smart front desk for property calls, answering enquiries from buyers, tenants, and landlords instantly.",
    paragraphTwo:
      "This AI voice assistant can handle inbound and outbound calls, match properties from your listings, book viewings, send confirmations, and update your CRM automatically.",
    paragraphThree:
      "It ensures every call is answered professionally while helping your team respond faster and capture more opportunities.",
    image: "/media/voice_agent_ui_light_1774519815031.png",
  },
  {
    id: "reminders",
    title: "REMINDER",
    lead:
      "An AI reminder system helps estate agents reduce missed viewings and late payments by automatically sending timely notifications across SMS, email, WhatsApp, and voice.",
    paragraphTwo:
      "This smart AI reminder assistant keeps tenants, buyers, and landlords informed about upcoming appointments, rent due dates, and deposits, while an AI reminder bot handles follow-ups automatically.",
    paragraphThree:
      "Your team spends less time chasing and more time closing.",
    image: "/media/reminders_calendar_ui_light_1774519912843.png",
  },
  {
    id: "maintenance",
    title: "MAINTENANCE",
    lead:
      "A maintenance intake service helps estate agents capture tenant repair requests quickly and accurately without manual follow-up.",
    paragraphTwo:
      "The system collects issue details, stores them in your CRM, requests photos when needed, and routes urgent problems to the right maintenance team automatically.",
    paragraphThree:
      "This keeps communication organised, reduces admin workload, and ensures faster response times for tenants.",
    image: "/media/maintenance_intake_ui_generated.svg",
  },
  {
    id: "email",
    title: "EMAIL AUTOMATION",
    lead:
      "Email automation helps estate agents respond to enquiries faster with clear, accurate, and professional replies.",
    paragraphTwo:
      "Using AI email automation, the system drafts responses for property enquiries, follow-ups, viewing confirmations, and document requests automatically while routing important messages to the right team members.",
    paragraphThree:
      "This keeps communication consistent, reduces manual work, and ensures every lead keeps moving forward.",
    image: "/media/email_automation_ui_light_1774519948355.png",
  },
  {
    id: "ai-marketing",
    title: "AI MARKETING",
    lead:
      "AI marketing helps estate agents create property videos, listing explainers, and social media content without needing filming time or being on camera.",
    paragraphTwo:
      "Using AI marketing automation, you can turn property photos and details into professional short-form videos, area guides, and update announcements that keep your listings visible online.",
    paragraphThree:
      "This marketing automation solution makes it easy to publish consistent, high-quality content across platforms while saving time for your team.",
    image: "/media/ai_marketing_ui_light_1774519968668.png",
  },
  {
    id: "workflow-automation",
    title: "WORKFLOW AUTOMATION",
    lead:
      "Workflow automation helps estate agents streamline the processes behind lead handling, viewings, lettings, and property management so tasks move forward automatically without manual follow-ups.",
    paragraphTwo:
      "This AI workflow automation solution connects your CRM, calendars, enquiry channels, and internal tools to create smooth workflows, from capturing a new lead to booking viewings, sending reminders, managing maintenance requests, and updating records in real time.",
    paragraphThree:
      "The result is faster response times, fewer missed steps, and more efficient day-to-day operations across your agency.",
    image: "/media/reminders_ui_phase8.png",
  },
];

const whyChooseItems = [
  {
    number: "01",
    title: "Startup-Friendly Pricing That Scales With You",
    body: "We offer flexible, affordable automation plans designed to support growing estate agencies. Start small, expand as needed, and invest only where automation creates real impact.",
  },
  {
    number: "02",
    title: "Experts in Both Coding & No-Code Automation",
    body: "Our team builds the right solution for your workflow, whether that means custom development or fast deployment using trusted no-code platforms. You get speed, flexibility, and reliability in one setup.",
  },
  {
    number: "03",
    title: "Proven Results Across Industries",
    body: "From startups to established SMEs, we deliver automation systems that improve response times, reduce manual workload, and keep operations running smoothly across multiple business functions.",
  },
  {
    number: "04",
    title: "Transparent Process With Real, Trackable ROI",
    body: "We keep everything clear, from workflow planning to deployment and results tracking, so you always know what's being built, how it works, and the value it delivers to your agency.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex w-full flex-col pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-background pb-10 pt-28 lg:pb-8 lg:pt-30">
        <div className="absolute inset-0 bg-[url('/media/ai_marketing_ui_light_1774519968668.png')] bg-cover bg-center opacity-10 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background" />
        <div className="pointer-events-none absolute left-[-6rem] top-20 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(63,55,184,0.12),transparent_72%)] blur-3xl" />
        <div className="pointer-events-none absolute right-[-4rem] top-28 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.1),transparent_72%)] blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-6xl px-4 pt-4 text-center sm:px-6 lg:px-8">
          <h1 className="page-title mb-4">
            <span className="text-gradient">Services</span>
          </h1>
          <div className="mx-auto mt-6 max-w-6xl overflow-hidden rounded-[2.4rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(244,247,255,0.72))] text-left shadow-[0_38px_110px_-56px_rgba(15,23,42,0.22)] backdrop-blur-2xl">
            <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="relative overflow-hidden border-b border-white/10 bg-[linear-gradient(145deg,rgba(17,27,58,0.98),rgba(34,51,109,0.94))] px-6 py-8 text-white sm:px-8 lg:border-b-0 lg:border-r lg:border-white/10 lg:px-10 lg:py-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(147,197,253,0.16),transparent_28%)]" />
                <div className="relative">
                  <div className="mb-5 h-px w-24 bg-[linear-gradient(90deg,#ffffff,rgba(255,255,255,0.08))]" />
                  <p className="max-w-[26rem] text-[1.85rem] font-display font-medium leading-[1.02] tracking-[-0.045em] text-white sm:text-[2.15rem] lg:text-[2.55rem]">
                    Manual communication slows property teams down and causes missed opportunities.
                  </p>
                </div>
              </div>

              <div className="space-y-4 px-6 py-7 text-[0.98rem] leading-7 text-slate-600 sm:px-8 sm:py-8 sm:text-[1.02rem] sm:leading-8 lg:px-10 lg:py-10">
                <p className="font-medium text-slate-700">
                  With AI automation for estate agencies, enquiries, lead capture, and follow-ups
                  happen automatically across channels.
                </p>
                <p>
                  Powered by real estate artificial intelligence, your agency stays responsive
                  without increasing staff effort.
                </p>
                <p>
                  A practical solution designed to support long-term AI for real estate business
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-10 sm:py-12 lg:py-14">
        <div className="container mx-auto flex flex-col gap-16 px-4 sm:gap-20 sm:px-6 lg:gap-32 lg:px-8">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16 ${idx % 2 !== 0 ? "lg:[&>div:first-child]:order-last" : ""}`}
            >
              <div className="flex flex-col gap-6">
                <div className="mb-1 inline-flex w-fit items-center rounded-full border border-border bg-secondary px-5 py-3 text-primary shadow-lg">
                  <span className="font-display text-lg font-semibold uppercase tracking-[0.16em] text-foreground sm:text-xl">
                    {service.title}
                  </span>
                </div>

                <div className="relative overflow-hidden rounded-[2.05rem] border border-primary/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(245,248,255,0.76))] p-6 shadow-[0_30px_76px_-44px_rgba(15,23,42,0.2)] backdrop-blur-xl sm:p-8">
                  <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(63,55,184,0.28),transparent)]" />
                  <div className="space-y-5">
                    <p className="max-w-2xl text-[1.16rem] font-medium leading-8 text-slate-700 sm:text-[1.26rem] sm:leading-9">
                      {service.lead}
                    </p>
                    <div className="h-px w-full bg-[linear-gradient(90deg,rgba(63,55,184,0.14),rgba(63,55,184,0.05),transparent)]" />
                    <p className="text-[1.01rem] leading-8 text-slate-600 sm:text-[1.05rem]">
                      {service.paragraphTwo}
                    </p>
                    <p className="text-[1.01rem] leading-8 text-slate-600 sm:text-[1.05rem]">
                      {service.paragraphThree}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/services/${service.id}`}
                  className="group mt-1 inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-[0_16px_34px_-18px_rgba(67,56,202,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/92 hover:shadow-[0_20px_40px_-18px_rgba(67,56,202,0.72)] sm:w-fit"
                >
                  See full details
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/14 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>

              <div className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-card glass-card glow-border sm:aspect-[4/3]">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-[0.8] transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 z-10 rounded-2xl border border-border bg-background/60 p-6 shadow-2xl backdrop-blur-xl">
                  <div className="mb-2 flex items-center gap-4">
                    <div className="h-3 w-3 animate-pulse rounded-full bg-primary" />
                    <div className="text-xs font-mono font-bold uppercase tracking-widest text-primary">
                      Live Demo
                    </div>
                  </div>
                  <p className="mb-3 text-lg font-display font-semibold text-foreground">
                    {service.title}
                  </p>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                    <div className="h-full w-2/3 animate-[pulse_2s_ease-in-out_infinite] bg-gradient-to-r from-primary to-accent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8f4eb_0%,#fbfaf7_36%,#f4f7fb_100%)] py-18 sm:py-22">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0.75),transparent)]" />
        <div className="pointer-events-none absolute left-[-8rem] top-10 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(194,154,87,0.13),transparent_72%)] blur-3xl" />
        <div className="pointer-events-none absolute right-[-7rem] bottom-0 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(76,110,179,0.12),transparent_72%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:96px_96px]" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-4xl text-center">
              <h3 className="text-xs font-semibold uppercase tracking-[0.38em] text-slate-500 sm:text-sm">
                Why Choose Us
              </h3>
              <h2 className="mt-5 text-[2.35rem] font-display font-medium leading-[0.95] tracking-[-0.055em] text-slate-950 sm:text-[3.1rem] lg:text-[4rem]">
                Why Choose Oyik Real Estate AI as Your AI Automation Partner for Estate Agencies in the UK?
              </h2>
            </div>

            <div className="relative mx-auto mt-10 max-w-5xl overflow-hidden rounded-[2.55rem] border border-white/75 bg-[linear-gradient(135deg,rgba(18,24,39,0.98),rgba(37,46,70,0.95))] p-7 text-white shadow-[0_44px_110px_-52px_rgba(15,23,42,0.55)] sm:p-9 lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(194,154,87,0.18),transparent_24%)]" />
              <div className="absolute inset-y-8 left-8 w-px bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.38),rgba(255,255,255,0.02))]" />
              <div className="relative pl-6 sm:pl-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#d9c08c]">
                  Estate-agency focused
                </p>
                <p className="mt-5 max-w-4xl text-[1.05rem] leading-8 text-white/84 sm:text-[1.12rem] sm:leading-9">
                  We specialise in building practical AI automation tailored specifically for estate
                  agents, helping you capture leads faster, respond instantly, streamline
                  operations, and reduce manual workload across your agency. From enquiries to
                  viewings, maintenance to marketing, our solutions are designed to support the
                  full property lifecycle with measurable results.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-12">
              {whyChooseItems.map((item, index) => (
                <article
                  key={item.title}
                  className={`group relative overflow-hidden rounded-[2rem] border border-slate-200/80 p-6 shadow-[0_24px_58px_-36px_rgba(15,23,42,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_72px_-34px_rgba(15,23,42,0.22)] sm:p-7 ${
                    index === 0
                      ? "bg-[linear-gradient(160deg,rgba(255,255,255,0.96),rgba(250,244,233,0.92))] lg:col-span-7"
                      : index === 1
                        ? "bg-[linear-gradient(160deg,rgba(246,248,255,0.96),rgba(255,255,255,0.92))] lg:col-span-5 lg:mt-10"
                        : index === 2
                          ? "bg-[linear-gradient(160deg,rgba(255,255,255,0.96),rgba(244,247,255,0.92))] lg:col-span-5"
                          : "bg-[linear-gradient(160deg,rgba(255,255,255,0.96),rgba(249,243,255,0.92))] lg:col-span-7 lg:-mt-8"
                  }`}
                >
                  <div className="absolute left-0 top-7 h-16 w-1 rounded-r-full bg-[linear-gradient(180deg,#c6a562,#657ce8)] opacity-85" />
                  <div className="absolute right-5 top-4 text-[4.5rem] font-display leading-none tracking-[-0.08em] text-slate-900/[0.05]">
                    {item.number}
                  </div>

                  <div className="relative flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/80 bg-white/78 text-sm font-semibold text-slate-900 shadow-[0_12px_28px_-18px_rgba(15,23,42,0.22)]">
                      {item.number}
                    </div>
                    <div className="max-w-xl">
                      <h4 className="text-[1.22rem] font-display font-medium leading-[1.08] tracking-[-0.03em] text-slate-950 sm:text-[1.32rem]">
                        {item.title}
                      </h4>
                      <p className="mt-3 text-[1rem] leading-8 text-slate-600">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
