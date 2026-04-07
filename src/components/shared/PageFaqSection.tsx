"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqContent = {
  eyebrow: string;
  title: string;
  items: FaqItem[];
};

const faqByRoute: Record<string, FaqContent> = {
  "/": {
    eyebrow: "",
    title: "Everything visitors typically want to know about implementing AI for real estate",
    items: [
      {
        question: "Is AI automation suitable for small estate agencies?",
        answer: "Yes. AI automation for estate agencies helps small teams manage enquiries, qualify leads, and book viewings without hiring extra staff.",
      },
      {
        question: "Does AI automation reduce staffing costs?",
        answer: "Yes. AI automation for estate agents handles repetitive tasks like replying to enquiries and scheduling appointments, improving efficiency without increasing headcount.",
      },
      {
        question: "What return on investment can we expect from AI automation?",
        answer: "Most agencies using AI automation for real estate see faster responses, more qualified leads, and increased viewing bookings that improve conversion rates.",
      },
      {
        question: "Do we need technical knowledge to use the system?",
        answer: "No. Our real estate automation platform is designed for estate agents and includes full setup support.",
      },
      {
        question: "How expensive is AI automation for estate agencies?",
        answer: "The cost of AI automation for estate agencies depends on enquiry volume, features, and communication channels required.",
      },
      {
        question: "Can the system be customised for our agency?",
        answer: "Yes. Our AI chatbot for estate agents can be customised to match your qualification questions, tone, and viewing workflow.",
      },
      {
        question: "Will AI automation affect our current enquiry process?",
        answer: "No. AI automation for real estate businesses works alongside your existing systems without disrupting daily operations.",
      },
    ],
  },
  "/about": {
    eyebrow: "About FAQ",
    title: "More context on who oyik is for and how the approach works.",
    items: [
      {
        question: "Who is Oyik Real Estate.AI for?",
        answer: "AI for estate agencies is designed for estate agents, letting agents, and property teams that want faster responses, more booked viewings, and better communication.",
      },
      {
        question: "What problems does Oyik Real Estate.AI solve?",
        answer: "Real estate workflow automation helps reduce missed enquiries, delayed replies, manual follow-ups, and inefficient scheduling.",
      },
      {
        question: "How is Oyik Real Estate.AI different from general AI tools?",
        answer: "AI for real estate businesses is built specifically for property enquiries, viewing coordination, landlord requests, and lead qualification.",
      },
      {
        question: "Why was Oyik Real Estate.AI created?",
        answer: "AI solutions for property professionals help agencies convert more enquiries into viewings while reducing repetitive admin work.",
      },
      {
        question: "What makes Oyik Real Estate.AI reliable for property businesses?",
        answer: "Property enquiry automation ensures consistent responses, accurate listing information, and 24/7 enquiry capture.",
      },
      {
        question: "What results do agencies typically see with Oyik Real Estate.AI?",
        answer: "AI for estate agency automation improves response speed, lead qualification, and confirmed property viewing bookings.",
      },
    ],
  },
  "/blog": {
    eyebrow: "Blog FAQ",
    title: "Common questions readers have after browsing the content.",
    items: [
      {
        question: "Will the blog focus on real estate workflows or general AI news?",
        answer: "The strongest fit is practical real estate automation guidance, rollout ideas, and examples that property teams can act on.",
      },
      {
        question: "Can blog readers book a demo directly?",
        answer: "Yes. The Book Demo page is the right destination when a reader wants to move from education into a live walkthrough.",
      },
      {
        question: "Will blog insights map to the actual product pages?",
        answer: "That should remain the goal so readers can move from an idea in the blog to the matching service page without a disconnect.",
      },
    ],
  },
  "/contact": {
    eyebrow: "Contact FAQ",
    title: "Short answers before someone sends a message or books time.",
    items: [
      {
        question: "Should I use the form or book a demo?",
        answer: "Book a demo when you want a quick walkthrough and clearer next steps. Use the form when you want to describe your setup first.",
      },
      {
        question: "What details help the team respond faster?",
        answer: "Current lead volume, tools already in use, key bottlenecks, and which workflows matter most will make the first response more useful.",
      },
      {
        question: "Can I ask about one service only?",
        answer: "Yes. You do not need to scope the entire platform at once.",
      },
    ],
  },
  "/book-demo": {
    eyebrow: "Book Demo FAQ",
    title: "What prospects usually want to know before scheduling a session.",
    items: [
      {
        question: "What will the demo cover?",
        answer: "The session focuses on live real estate workflows like chat, voice, booking, reminders, and CRM-style handoff depending on your priorities.",
      },
      {
        question: "Do I need technical preparation before booking?",
        answer: "No. It is helpful to know your current tools and pain points, but the walkthrough can start from your existing process.",
      },
      {
        question: "Can the demo be tailored for my agency?",
        answer: "Yes. The strongest version of the demo is shaped around your enquiry flow, lead response process, and service mix.",
      },
    ],
  },
  "/how-it-works": {
    eyebrow: "How It Works FAQ",
    title: "Clarifying how the automation layer is meant to operate.",
    items: [
      {
        question: "Does every enquiry go through the same flow?",
        answer: "No. The point is to route buyers, renters, landlords, maintenance requests, and follow-up conversations through different logic paths.",
      },
      {
        question: "Where does the lead data go?",
        answer: "The site messaging positions the system around CRM-ready handoff, confirmation flows, and internal follow-up actions after qualification.",
      },
      {
        question: "Can humans still step in quickly?",
        answer: "Yes. High-intent or urgent conversations should escalate cleanly instead of trapping a prospect inside automation.",
      },
    ],
  },
  "/faq": {
    eyebrow: "FAQ Page",
    title: "A second quick layer of answers for visitors already exploring the FAQ route.",
    items: [
      {
        question: "Is this different from the main FAQ content?",
        answer: "Yes. This footer section acts like a contextual quick-answer strip tied to the route you are on.",
      },
      {
        question: "Where should deeper pre-sales questions go?",
        answer: "Complex rollout or pricing conversations should move to the contact or book-demo flow instead of staying inside static FAQs.",
      },
      {
        question: "Will service pages have their own FAQs too?",
        answer: "Yes. Each service route can surface questions that match the specific workflow shown on that page.",
      },
    ],
  },
  "/services": {
    eyebrow: "Services FAQ",
    title: "Quick guidance for people comparing the available automation categories.",
    items: [
      {
        question: "How does Oyik Real Estate AI measure results from automation?",
        answer: "Performance can be tracked through response speed improvements, increased enquiry handling, reduced missed appointments, and higher viewing bookings.",
      },
      {
        question: "Can the AI voice agent answer calls like a receptionist?",
        answer: "Yes. The AI voice agent handles inbound and outbound calls, matches properties from your listings, books viewings, sends confirmations, and updates your CRM automatically.",
      },
      {
        question: "Will email automation replace my team's communication with clients?",
        answer: "No. It supports your team by drafting responses and routing messages efficiently while agents stay in control of important conversations.",
      },
      {
        question: "Can I start with one automation feature and expand later?",
        answer: "Yes. Many agencies begin with chatbot or reminders and add voice agents, marketing automation, and workflow automation as their needs grow.",
      },
      {
        question: "How do I measure the results from AI automation?",
        answer: "Results can be tracked through faster response times, fewer missed enquiries, improved viewing attendance, reduced admin workload, and increased lead conversion.",
      },
    ],
  },
  "/services/voice": {
    eyebrow: "Voice FAQ",
    title: "Answers tied to the voice-agent experience on this page.",
    items: [
      {
        question: "Can the AI voice assistant respond to multiple calls at once?",
        answer: "Yes. Unlike human staff, an AI voice agent can handle multiple simultaneous conversations without delays.",
      },
      {
        question: "Is the AI voice assistant customisable for our agency scripts?",
        answer: "Yes. AI voice agents can be trained using your agency tone, qualification logic, escalation rules, and viewing workflows.",
      },
      {
        question: "How is an AI voice assistant different from a regular phone system?",
        answer: "An AI voice assistant for estate agents sounds natural and conversational, not like a basic phone menu. It can answer property questions, qualify callers, check availability, and book viewings automatically.",
      },
      {
        question: "Does the AI voice assistant work during business hours only?",
        answer: "No - this is one of the main advantages. Your AI call agent works 24/7, which is critical because most property enquiries happen outside traditional office hours.",
      },
      {
        question: "Does the AI voice agent log call activity automatically?",
        answer: "Yes. Call summaries, qualification answers, and booking details can be recorded inside your CRM automatically.",
      },
      {
        question: "Can the AI voice assistant send follow-up messages after calls?",
        answer: "Yes. It can trigger SMS confirmations, reminders, or viewing details automatically after the conversation.",
      },
    ],
  },
  "/services/chat": {
    eyebrow: "Chat FAQ",
    title: "Questions that match the website-chatbot service page.",
    items: [
      {
        question: "Can the chatbot answer questions about specific listings?",
        answer: "Yes. A conversational AI chatbot can provide property details such as price, availability, features, location information, and viewing options instantly.",
      },
      {
        question: "Will conversations feel robotic to customers?",
        answer: "Modern conversational AI chatbots are designed to sound natural and helpful, creating a smooth experience that feels similar to speaking with a team member.",
      },
      {
        question: "Is setup complicated for estate agencies?",
        answer: "No. Most AI chatbot implementations are configured around your existing workflow, listings, and qualification process.",
      },
      {
        question: "Will an AI chatbot replace my negotiators?",
        answer: "No. A conversational AI chatbot supports your negotiators by handling repetitive questions, capturing enquiry details, and scheduling appointments so your team can focus on closing deals.",
      },
      {
        question: "What kind of information does the AI chatbot collect from prospects?",
        answer: "Our property AI chatbot collects essential information through conversational automation, including buyer budget, preferred locations, property type, timeline, and availability for viewings.",
      },
    ],
  },
  "/services/reminders": {
    eyebrow: "Reminders FAQ",
    title: "Short answers for reminder automation prospects.",
    items: [
      {
        question: "What does an AI reminder assistant do for estate agents?",
        answer: "An AI reminder assistant automatically sends reminders for property viewings, rent payments, document submissions, and appointments so your team doesn't have to follow up manually.",
      },
      {
        question: "Can reminders be customised for different stages of the property journey?",
        answer: "Yes. Messages can be tailored for viewings, rent due dates, onboarding steps, and document completion requests.",
      },
      {
        question: "Can the AI reminder assistant follow up with inactive leads?",
        answer: "Yes. If a prospect stops responding, the system can send automated follow-up reminders to re-engage them.",
      },
      {
        question: "Can an AI reminder assistant confirm viewing attendance automatically?",
        answer: "Yes. The AI reminder assistant can ask buyers or tenants to confirm attendance and notify your team if someone cancels or needs to reschedule.",
      },
      {
        question: "Can reminders be personalised for each client?",
        answer: "Yes. Messages can include property details, appointment times, addresses, and next-step instructions tailored to each enquiry.",
      },
    ],
  },
  "/services/email": {
    eyebrow: "Email FAQ",
    title: "Contextual answers for the email automation page.",
    items: [
      {
        question: "Will email automation reduce inbox workload?",
        answer: "Yes. Real estate email automation handles repetitive replies automatically, helping your team focus on valuations, negotiations, and closing deals.",
      },
      {
        question: "Can AI email automation respond to Rightmove or portal enquiries automatically?",
        answer: "Yes. AI email automation for estate agents can detect portal enquiries and send instant replies with property details, viewing links, and next-step instructions.",
      },
      {
        question: "Will AI email automation organise shared team inboxes?",
        answer: "Yes. It routes enquiries to the correct department and keeps communication structured across sales and lettings teams.",
      },
      {
        question: "Can automated emails send property brochures automatically?",
        answer: "Yes. The system can attach brochures, floor plans, or listing links based on the enquiry type.",
      },
      {
        question: "Does AI email automation improve response consistency across teams?",
        answer: "Yes. Every client receives accurate, professional replies aligned with your agency's communication standards.",
      },
      {
        question: "Can email automation notify negotiators when a hot lead replies?",
        answer: "Yes. Priority responses can trigger alerts so negotiators can act quickly on serious prospects.",
      },
    ],
  },
  "/services/maintenance": {
    eyebrow: "Maintenance FAQ",
    title: "Questions tied to the maintenance intake workflow.",
    items: [
      {
        question: "What is maintenance intake automation for estate agents?",
        answer: "Maintenance intake automation captures tenant repair requests in a structured format and routes them to the right team automatically, reducing manual follow-ups and delays.",
      },
      {
        question: "Does maintenance intake automation prioritise urgent repairs automatically?",
        answer: "Yes. Emergency issues such as leaks, heating failures, or safety risks are flagged and escalated instantly to the maintenance team.",
      },
      {
        question: "Will the system collect all required repair information from tenants?",
        answer: "Yes. It gathers contact details, property information, issue descriptions, urgency level, and access availability automatically.",
      },
      {
        question: "Can agencies track maintenance history for each property?",
        answer: "Yes. Each request is recorded with timestamps and updates, creating a clear maintenance activity timeline.",
      },
      {
        question: "Does maintenance intake automation help coordinate contractors faster?",
        answer: "Yes. Complete issue summaries allow contractors to prepare before attending the property, reducing delays.",
      },
      {
        question: "Will contractors receive structured repair summaries before attending?",
        answer: "Yes. Contractors can receive clear issue descriptions, tenant access details, and supporting images before visiting the property.",
      },
    ],
  },
  "/services/ai-marketing": {
    eyebrow: "AI Marketing FAQ",
    title: "Questions prospects usually have around content creation and listing media.",
    items: [
      {
        question: "Can AI marketing automation post content to social media automatically?",
        answer: "Yes. The system can schedule and publish posts across platforms so your agency stays active without manual effort.",
      },
      {
        question: "Does AI marketing automation improve brand consistency?",
        answer: "Yes. Every listing video and post follows a structured format aligned with your agency's branding and messaging.",
      },
      {
        question: "Can AI marketing automation help attract landlords?",
        answer: "Yes. It can generate landlord education videos, service explainers, and valuation-focused content to support instruction growth.",
      },
      {
        question: "Will AI marketing automation help my agency stay visible between instructions?",
        answer: "Yes. It keeps your agency active online with regular branded content even when you don't have new listings to promote.",
      },
      {
        question: "Can the system create seasonal property campaigns for the UK market?",
        answer: "Yes. Campaigns can highlight spring listings, summer moves, student lettings periods, or end-of-year landlord updates.",
      },
      {
        question: "Will AI-generated property videos match UK estate agency branding?",
        answer: "Yes. Videos can be customised with your logo, colours, messaging style, and branch contact details.",
      },
    ],
  },
  "/services/workflow-automation": {
    eyebrow: "Workflow Automation FAQ",
    title: "Questions tied to the workflow automation system.",
    items: [
      {
        question: "How does workflow automation help estate agencies save time?",
        answer: "It removes repetitive admin tasks like manual lead entry, appointment confirmations, reminders, and follow-ups so negotiators can focus on closing deals.",
      },
      {
        question: "Will AI workflow automation reduce missed opportunities?",
        answer: "Yes. Every enquiry is tracked and progressed through structured steps, reducing the risk of leads being overlooked.",
      },
      {
        question: "Can workflow automation help with offer progression tracking?",
        answer: "Yes. It monitors deal stages and alerts negotiators when activity slows or follow-ups are needed.",
      },
      {
        question: "Can automated workflow solutions help track negotiator performance?",
        answer: "Yes. Automated workflow solutions provide visibility into response times, lead handling activity, and pipeline movement.",
      },
      {
        question: "What is included in an AI workflow automation system for estate agents?",
        answer: "An AI workflow automation system for estate agents connects enquiries, CRM updates, viewing bookings, reminders, and follow-ups into one structured process that runs automatically in the background.",
      },
      {
        question: "Will AI workflow automation support seller lead nurturing before instruction?",
        answer: "Yes. Real estate workflow automation can send valuation reminders, follow-up emails, and seller education content automatically.",
      },
      {
        question: "Can AI workflow automation improve pipeline visibility for managers?",
        answer: "Yes. Managers can track enquiry progress, viewing activity, and deal movement across the entire sales and lettings pipeline.",
      },
    ],
  },
  "/privacy": {
    eyebrow: "Privacy FAQ",
    title: "A simpler summary layer for the privacy route.",
    items: [
      {
        question: "Where should privacy concerns be directed?",
        answer: "The privacy page should remain the source of truth, while detailed questions should be escalated through the contact route.",
      },
      {
        question: "Does this replace the legal policy?",
        answer: "No. This section is only a readable summary and does not override the legal copy on the page.",
      },
      {
        question: "Can product-specific data questions be discussed in a demo?",
        answer: "Yes, but the formal legal wording still belongs in the policy pages and any signed agreements.",
      },
    ],
  },
  "/terms": {
    eyebrow: "Terms FAQ",
    title: "Short clarifications for visitors reading the terms page.",
    items: [
      {
        question: "Are these FAQ answers the legal terms?",
        answer: "No. They are plain-language support only. The full terms on the page remain the controlling text.",
      },
      {
        question: "Where do commercial questions belong?",
        answer: "Pre-sales and commercial details are better handled through contact or a live demo discussion.",
      },
      {
        question: "Will the terms change over time?",
        answer: "Potentially, which is why the full terms page is the correct reference point rather than a summary card.",
      },
    ],
  },
  "/cookies": {
    eyebrow: "Cookies FAQ",
    title: "A quick guide for visitors who want the plain version first.",
    items: [
      {
        question: "Does this section replace the cookie policy?",
        answer: "No. It is just a quick-reading companion to the full cookie page.",
      },
      {
        question: "Why include this on the page at all?",
        answer: "Because visitors often want a simpler explanation before they read the full legal wording.",
      },
      {
        question: "Where should technical consent questions go?",
        answer: "Those should be handled through the site owner or legal contact path if the policy itself does not answer them clearly.",
      },
    ],
  },
  "/thank-you": {
    eyebrow: "Next Step FAQ",
    title: "Helpful answers for visitors who have already completed an action.",
    items: [
      {
        question: "What happens after this page?",
        answer: "The next step depends on what was submitted, but usually it means the team will review the request and continue the conversation from there.",
      },
      {
        question: "Can I still book a demo after submitting a form?",
        answer: "Yes. If the thank-you page follows a message, booking a demo can still be the fastest way to keep momentum.",
      },
      {
        question: "Should I expect an instant reply?",
        answer: "Not always. A live booking is the fastest path when immediate discussion matters.",
      },
    ],
  },
};

const fallbackFaq: FaqContent = {
  eyebrow: "Quick FAQ",
  title: "A few route-aware answers to keep visitors moving.",
  items: [
    {
      question: "Can I book a live walkthrough?",
      answer: "Yes. The Book Demo route is the fastest way to turn page interest into a real conversation.",
    },
    {
      question: "Is this built specifically for real estate teams?",
      answer: "Yes. The site positions the product around property workflows rather than generic business automation.",
    },
    {
      question: "Can I start with one use case first?",
      answer: "Absolutely. Most teams begin with one high-friction workflow and expand once the first rollout proves value.",
    },
  ],
};

function resolveFaq(pathname: string): FaqContent {
  return faqByRoute[pathname] ?? fallbackFaq;
}

export default function PageFaqSection() {
  const pathname = usePathname() || "/";
  const contentMap = useMemo(() => resolveFaq(pathname), [pathname]);
  const [openIndex, setOpenIndex] = useState(0);
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const supabase = createClient();

  useEffect(() => {
    setOpenIndex(0);
    
    // Fetch FAQs for this specific route
    const fetchRouteFaqs = async () => {
      const { data } = await supabase
        .from("faqs")
        .select("*")
        .eq("page_route", pathname)
        .order("sort_order", { ascending: true });
        
      if (data && data.length > 0) {
        setFaqs(data);
      } else {
        // Fallback to the hardcoded items if none are found in the database yet
        setFaqs(contentMap.items);
      }
    };
    
    fetchRouteFaqs();
  }, [pathname, contentMap, supabase]);

  if (!faqs.length) return null;

  return (
    <section className="relative overflow-hidden border-t border-slate-200/70 bg-[linear-gradient(180deg,#f8faff_0%,#eef3ff_100%)] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_28%)]" />

      <div className="container relative mx-auto px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            {contentMap.eyebrow ? (
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-indigo-600">
                {contentMap.eyebrow}
              </p>
            ) : null}
            <h2 className="mt-4 text-4xl font-display font-medium tracking-[-0.04em] text-slate-950 sm:text-5xl">
              FAQ
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 sm:text-xl">
              {contentMap.title}
            </p>
          </div>

          <div className="mx-auto mb-10 h-px w-full max-w-2xl bg-[linear-gradient(90deg,transparent,rgba(79,70,229,0.24),transparent)]" />

          <div className="space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/88 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.22)] backdrop-blur-xl"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-lg font-medium text-slate-950">{item.question}</span>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.22 }}>
                      <ChevronDown className="h-5 w-5 text-slate-500" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-base leading-relaxed text-slate-600">
                          {item.answer}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
