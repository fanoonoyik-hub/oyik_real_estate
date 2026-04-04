import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Chatbots for Real Estate | oyik.realestate.ai",
  description:
    "Turn every property message into a qualified next step with a conversational chatbot built for estate agencies.",
};

const benefits = [
  "Instant engagement",
  "Consistent communication",
  "Automated follow-up",
  "Lead qualification before human interaction",
];

const steps = [
  {
    title: "Step 1: Instant Engagement",
    body: "A visitor asks a question. The conversational ai chatbot responds immediately, day or night, creating instant interaction and preventing drop-offs.",
  },
  {
    title: "Step 2: Lead Qualification",
    body: "The chatbot gathers essential details through smart, conversational automation. This real estate chatbot ensures your team receives organised, qualified enquiries directly into your CRM.",
  },
  {
    title: "Step 3: Automatic Booking",
    body: "Once qualified, the lead is offered available viewing slots. The system confirms the appointment instantly and sends reminders. Your agency benefits from a fully automated enquiry-to-viewing funnel.",
  },
];

const outcomes = [
  "3x faster response times",
  "Up to 60% more qualified leads",
  "Reduced missed enquiries",
  "Increased viewing bookings",
  "Improved customer satisfaction",
  "Lower administrative workload",
];

const propertyKnowledge = [
  "UK property terminology",
  "Buyer and tenant behaviour",
  "Lettings compliance processes",
  "Viewing workflows",
  "Valuation requests",
];

const inlineLinkClass =
  "font-semibold text-[#77b563] underline decoration-[#77b563]/45 underline-offset-4 transition-colors hover:text-[#5f9b4b]";

export default function ChatServicePage() {
  return (
    <div className="flex w-full flex-col bg-background">
      <section className="relative overflow-hidden border-b border-border/50 bg-[linear-gradient(180deg,#fbfaf7_0%,#f7f4ee_55%,#f4f7fb_100%)] pb-18 pt-30 lg:pb-24">
        <div className="pointer-events-none absolute left-[-7rem] top-14 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(193,155,90,0.12),transparent_72%)] blur-3xl" />
        <div className="pointer-events-none absolute right-[-6rem] top-24 h-[25rem] w-[25rem] rounded-full bg-[radial-gradient(circle,rgba(93,112,211,0.11),transparent_72%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:92px_92px]" />

        <div className="container relative z-10 mx-auto grid items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-8">
          <div className="flex flex-col gap-7">
            <div className="inline-flex w-fit items-center rounded-full border border-[#cfd8c8] bg-white/76 px-5 py-2 text-[0.74rem] font-semibold uppercase tracking-[0.28em] text-slate-600 shadow-[0_16px_28px_-22px_rgba(15,23,42,0.18)] backdrop-blur-xl">
              AI Chatbots | Website + All Social Media
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-[2.85rem] font-display font-medium leading-[0.93] tracking-[-0.06em] text-slate-950 sm:text-[3.95rem] lg:text-[4.85rem]">
                Turn every message into a qualified next step with our conversational chatbot.
              </h1>
              <p className="max-w-2xl text-[1.16rem] font-medium leading-8 text-slate-700 sm:text-[1.25rem] sm:leading-9">
                Instant replies, lead qualification, and viewing booking in one chat flow.
              </p>
              <p className="max-w-2xl text-[1.02rem] leading-8 text-slate-600 sm:text-[1.06rem]">
                Turn every property enquiry into a qualified lead with a powerful AI chatbot agent
                designed specifically for estate agencies.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href="/book-demo"
                className="group inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-base font-semibold text-white shadow-[0_18px_42px_-22px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-900"
              >
                Book a Demo
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-5 top-8 hidden h-20 w-20 rounded-[1.8rem] border border-white/60 bg-white/55 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.26)] backdrop-blur-xl lg:block" />
            <div className="relative h-[520px] overflow-hidden rounded-[2.45rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(245,248,255,0.64))] p-4 shadow-[0_40px_110px_-52px_rgba(15,23,42,0.32)] backdrop-blur-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(193,155,90,0.12),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(93,112,211,0.14),transparent_26%)]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/76 shadow-[inset_0_1px_0_rgba(255,255,255,0.92)]">
                <div className="flex items-center gap-3 border-b border-slate-200/80 px-5 py-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(94,118,210,0.18),rgba(119,181,99,0.22))] text-slate-900">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-950">Oyik Assistant</p>
                    <p className="text-xs font-medium text-[#77b563]">Online now</p>
                  </div>
                </div>

                <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
                  <div className="ml-auto max-w-[82%] rounded-3xl rounded-tr-md border border-slate-200 bg-[#f7f5ef] px-4 py-3 text-sm leading-6 text-slate-700">
                    Hi, is the 2-bed flat on Queen Street still available?
                  </div>
                  <div className="max-w-[82%] rounded-3xl rounded-tl-md border border-[#cbdac4] bg-[linear-gradient(180deg,rgba(239,248,235,0.95),rgba(248,252,246,0.98))] px-4 py-3 text-sm leading-6 text-slate-800">
                    Yes, it is. The rent is GBP 1,800 pcm. Would you like photos first or should I
                    offer viewing times?
                  </div>
                  <div className="ml-auto max-w-[82%] rounded-3xl rounded-tr-md border border-slate-200 bg-[#f7f5ef] px-4 py-3 text-sm leading-6 text-slate-700">
                    Please book a viewing for tomorrow afternoon.
                  </div>
                  <div className="max-w-[86%] rounded-3xl rounded-tl-md border border-[#cbdac4] bg-[linear-gradient(180deg,rgba(239,248,235,0.95),rgba(248,252,246,0.98))] px-4 py-3 text-sm leading-6 text-slate-800">
                    I can offer 2:00 PM or 4:30 PM. Share your email and I will lock the slot in
                    with a confirmation.
                  </div>
                </div>

                <div className="border-t border-slate-200/80 px-5 py-4">
                  <div className="flex items-center justify-between rounded-full border border-slate-200 bg-white/92 px-4 py-3 text-sm text-slate-400 shadow-[0_12px_24px_-22px_rgba(15,23,42,0.3)]">
                    <span>Type a message...</span>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 text-white">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f2efe8] py-18 sm:py-22">
        <div className="pointer-events-none absolute inset-x-0 top-8 text-center text-[clamp(5rem,18vw,12rem)] font-display leading-none tracking-[-0.08em] text-slate-900/[0.04]">
          Response
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
              <article className="rounded-[2.4rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(249,246,240,0.86))] p-7 shadow-[0_30px_70px_-42px_rgba(15,23,42,0.18)] sm:p-9">
                <div className="mb-5 inline-flex items-center rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-slate-500">
                  Always on
                </div>
                <h2 className="max-w-4xl text-[2.05rem] font-display font-medium leading-[0.97] tracking-[-0.05em] text-slate-950 sm:text-[2.7rem] lg:text-[3.15rem]">
                  Why Estate Agents Are Turning to AI Chatbot agent
                </h2>
                <div className="mt-6 space-y-5 text-[1rem] leading-8 text-slate-600 sm:text-[1.04rem]">
                  <p className="font-medium text-slate-700">
                    Speed is everything in today&apos;s property market.
                  </p>
                  <p>
                    Research shows that the first agency to respond is significantly more likely to
                    win the instruction or secure the viewing. Without automation, many agencies
                    lose enquiries simply due to delayed responses.
                  </p>
                  <p>
                    Our{" "}
                    <Link href="/services" className={inlineLinkClass}>
                      AI automation system
                    </Link>{" "}
                    works 24/7 to ensure every website visitor and social media message receives an
                    instant response.
                  </p>
                  <p>
                    This intelligent system functions as a smart chatbot for customer support,
                    providing immediate answers while capturing valuable prospect information.
                  </p>
                  <p>
                    Instead of relying on staff availability, your agency benefits from less
                    friction and better conversion from the very first interaction.
                  </p>
                </div>
              </article>

              <div className="grid gap-4 self-start">
                {benefits.map((benefit, index) => (
                  <article
                    key={benefit}
                    className={`group flex min-h-[108px] items-center rounded-[1.8rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,249,255,0.9))] px-6 py-5 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.15)] transition-all duration-300 hover:-translate-y-0.5 ${
                      index % 2 === 1 ? "lg:ml-10" : ""
                    }`}
                  >
                    <div className="mr-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#d4decf] bg-[#f5fbf0] text-[#77b563]">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <p className="text-[1.03rem] font-medium leading-7 text-slate-800">{benefit}</p>
                    <div className="ml-auto hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white shadow-[0_10px_24px_-16px_rgba(15,23,42,0.4)] sm:flex">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#111827_0%,#162032_100%)] py-18 text-white sm:py-22">
        <div className="pointer-events-none absolute left-[-5rem] top-0 h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(119,181,99,0.18),transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute right-[-6rem] bottom-0 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(102,124,232,0.22),transparent_72%)] blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="max-w-4xl text-[2.2rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-white sm:text-[3rem]">
              How Our Conversational AI Chatbot Converts Enquiries into Viewings
            </h2>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_24px_60px_-38px_rgba(0,0,0,0.45)] backdrop-blur-xl"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-sm font-semibold text-[#d9c08c]">
                    0{index + 1}
                  </div>
                  <h3 className="text-[1.28rem] font-display font-medium leading-[1.05] tracking-[-0.03em] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[0.98rem] leading-7 text-white/76">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f2efe8] py-18 sm:py-22">
        <div className="pointer-events-none absolute inset-x-0 top-6 text-center text-[clamp(5rem,16vw,11rem)] font-display leading-none tracking-[-0.08em] text-slate-900/[0.04]">
          Results
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
              <div>
                <div className="inline-flex items-center rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-slate-500">
                  Performance uplift
                </div>
                <h2 className="mt-5 max-w-3xl text-[2.02rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-[2.65rem] lg:text-[3.1rem]">
                  Why Estate Agencies Choose Our Property AI Chatbot Agent
                </h2>
              </div>

              <article className="rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,250,255,0.9))] p-6 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.15)] sm:p-7">
                <p className="text-[1rem] leading-8 text-slate-600 sm:text-[1.04rem]">
                  Because the system also functions as a powerful chatbot for customer support, your
                  agency delivers consistent, professional communication at scale.
                </p>
              </article>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {outcomes.map((outcome, index) => (
                <article
                  key={outcome}
                  className={`rounded-[1.75rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,255,0.92))] px-6 py-5 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.14)] ${
                    index === 1 || index === 4 ? "xl:translate-y-5" : ""
                  }`}
                >
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-slate-400">
                      Metric
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white shadow-[0_10px_24px_-16px_rgba(15,23,42,0.35)]">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="text-[1rem] font-medium leading-7 text-slate-800">{outcome}</p>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
              <article className="rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(248,245,238,0.9))] p-6 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.14)] sm:p-7">
                <p className="text-[1rem] leading-8 text-slate-600 sm:text-[1.04rem]">
                  By automating repetitive tasks, your negotiators can focus on closing deals rather
                  than answering routine questions.
                </p>
              </article>

              <article className="rounded-[2rem] border border-[#d6e2cf] bg-[linear-gradient(180deg,rgba(245,251,241,0.96),rgba(255,255,255,0.92))] p-6 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.14)] sm:p-7">
                <p className="text-[1rem] leading-8 text-slate-600 sm:text-[1.04rem]">
                  Explore our full{" "}
                  <Link href="/services/ai-marketing" className={inlineLinkClass}>
                    Real Estate Marketing Solutions
                  </Link>{" "}
                  to maximise your growth strategy.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f4ed_0%,#fbfaf7_100%)] py-18 sm:py-22">
        <div className="pointer-events-none absolute inset-x-0 top-8 text-center text-[clamp(5rem,17vw,11.5rem)] font-display leading-none tracking-[-0.08em] text-slate-900/[0.04]">
          Specialist
        </div>
        <div className="pointer-events-none absolute right-[-8rem] top-16 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(119,181,99,0.1),transparent_72%)] blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
              <div className="space-y-4">
                <article className="relative overflow-hidden rounded-[2.35rem] border border-slate-900/10 bg-[linear-gradient(145deg,rgba(17,24,39,0.98),rgba(37,46,70,0.95))] p-7 text-white shadow-[0_34px_80px_-42px_rgba(15,23,42,0.34)] sm:p-9">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,192,140,0.14),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(119,181,99,0.16),transparent_24%)]" />
                  <div className="relative">
                    <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-white/72">
                      Built for UK estate agencies
                    </div>
                    <h2 className="max-w-3xl text-[2.08rem] font-display font-medium leading-[0.98] tracking-[-0.05em] text-white sm:text-[2.85rem]">
                      What Makes Our Conversational AI Chatbot Different
                    </h2>

                    <div className="mt-6 space-y-5 text-[1rem] leading-8 text-white/78 sm:text-[1.04rem]">
                      <p>
                        Unlike generic chat tools, our conversational ai chatbot is tailored specifically
                        for UK estate agents, not adapted later, but designed from the ground up for the
                        property industry.
                      </p>
                      <p>It understands how your business actually works, including:</p>
                    </div>
                  </div>
                </article>

                <div className="grid gap-3 sm:grid-cols-2">
                  {propertyKnowledge.map((item, index) => (
                    <article
                      key={item}
                      className={`rounded-[1.55rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,250,255,0.9))] px-5 py-5 shadow-[0_18px_34px_-24px_rgba(15,23,42,0.14)] ${
                        index === propertyKnowledge.length - 1 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-[0.98rem] font-medium leading-7 text-slate-800">{item}</p>
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white shadow-[0_10px_24px_-16px_rgba(15,23,42,0.35)]">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <article className="rounded-[2rem] border border-[#d7e4d1] bg-[linear-gradient(180deg,rgba(245,251,241,0.96),rgba(255,255,255,0.9))] p-7 shadow-[0_26px_60px_-40px_rgba(15,23,42,0.16)] sm:p-8">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#77b563]" />
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-500">
                      Natural conversations
                    </span>
                  </div>
                  <div className="space-y-5 text-[1rem] leading-8 text-slate-700 sm:text-[1.05rem]">
                    <p>
                      This means conversations feel natural, relevant, and helpful, not robotic or
                      scripted.
                    </p>
                    <p>
                      Even better, your AI chatbot agent keeps learning from every interaction. Over
                      time, it becomes faster, smarter, and more accurate at qualifying leads and
                      supporting your customers.
                    </p>
                  </div>
                </article>

                <article className="rounded-[1.95rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,250,255,0.92))] p-6 shadow-[0_18px_34px_-24px_rgba(15,23,42,0.14)] sm:p-7">
                  <div className="flex items-start justify-between gap-5">
                    <p className="max-w-sm text-[1.28rem] font-display font-medium leading-[1.12] tracking-[-0.03em] text-slate-950">
                      You&apos;re not just installing another piece of software.
                    </p>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white shadow-[0_12px_28px_-18px_rgba(15,23,42,0.38)]">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </div>
                </article>

                <article className="overflow-hidden rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(135deg,rgba(17,24,39,0.98),rgba(37,46,70,0.95))] p-7 text-white shadow-[0_28px_70px_-42px_rgba(15,23,42,0.36)] sm:p-8">
                  <div className="mb-5 h-px w-24 bg-[linear-gradient(90deg,#d9c08c,rgba(217,192,140,0.06))]" />
                  <p className="text-[1rem] leading-8 text-white/80 sm:text-[1.05rem]">
                    You&apos;re adding a reliable digital team member that works 24/7 to capture
                    enquiries, qualify prospects, and support your agency while you focus on
                    closing deals.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background pb-24 pt-4 sm:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.65rem] border border-slate-200/80 bg-[linear-gradient(135deg,rgba(18,24,39,0.98),rgba(30,41,59,0.96))] px-7 py-9 text-white shadow-[0_42px_110px_-52px_rgba(15,23,42,0.55)] sm:px-10 sm:py-11">
            <div className="max-w-4xl">
              <h2 className="text-[2.3rem] font-display font-medium leading-[0.95] tracking-[-0.055em] text-white sm:text-[3.2rem]">
                Don&apos;t Let Another Property Lead Slip Away
              </h2>

              <div className="mt-6 space-y-5 text-[1rem] leading-8 text-white/78 sm:text-[1.05rem]">
                <p>
                  With our{" "}
                  <Link href="/" className={inlineLinkClass}>
                    AI automation platform for estate agents
                  </Link>
                  , your agency can respond instantly, qualify serious prospects, and book more
                  viewings automatically.
                </p>
                <p>
                  Experience how a purpose-built real estate chatbot can reduce admin, improve
                  response times, and increase conversions, all while operating 24/7.
                </p>
                <p>Book your personalised demo today.</p>
              </div>

              <div className="mt-8">
                <Link
                  href="/book-demo"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-base font-semibold text-slate-950 shadow-[0_18px_34px_-20px_rgba(255,255,255,0.45)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Book a Demo
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-white transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
