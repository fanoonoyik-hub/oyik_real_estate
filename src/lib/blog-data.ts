export interface BlogPost {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  content?: string;
  author?: string;
}

export const posts: BlogPost[] = [
  {
    title: "Why real estate teams are replacing slow follow-up with AI",
    description:
      "A quick look at how agencies are using AI to respond faster, qualify leads better, and keep viewings moving without losing the premium feel.",
    category: "AI Strategy",
    date: "May 12, 2026",
    readTime: "5 min read",
    image: "/media/blog/post1.png",
    slug: "replacing-slow-follow-up-with-ai",
    author: "Oyik AI Lab",
    content: `
      <h2>The Speed Paradox in UK Real Estate</h2>
      <p>In the high-stakes world of UK property, the first 5 minutes are everything. Statistics show that responding to a lead within 5 minutes increases the chance of qualification by over 400%. Yet, most agencies average 4.5 hours for an initial email response.</p>
      
      <h3>Why Humans Struggle with Instant Follow-up</h3>
      <p>Your team is busy. They are at viewings, in valuations, or negotiating deals. They aren't sitting at their desks waiting for a Rightmove enquiry to drop into their inbox. This is where the gap occurs.</p>

      <blockquote>"Speed is the new luxury. High-intent buyers don't want to wait until Monday morning for a reply to a Saturday night enquiry."</blockquote>

      <h3>The AI Layer: Qualification Without Friction</h3>
      <p>By implementing a smart AI response layer, agencies can capture details, verify budgets, and even check viewing availability instantly. The tech handles the "speed" while your team handles the "expertise."</p>
      
      <ul>
        <li><strong>Instant WhatsApp/SMS follow-up:</strong> Engaging the lead where they are most active.</li>
        <li><strong>Automatic Lead Scoring:</strong> Identifying high-value buyers before a human even picks up the phone.</li>
        <li><strong>Calendar Integration:</strong> Booking viewings directly into your team's diary based on real-time availability.</li>
      </ul>
    `
  },
  {
    title: "The luxury real estate client journey needs instant response",
    description:
      "High-intent buyers and tenants expect immediate, polished communication. This post breaks down where speed matters most.",
    category: "Automation",
    date: "May 08, 2026",
    readTime: "4 min read",
    image: "/media/blog/post2.png",
    slug: "luxury-client-journey-instant-response",
    author: "Studio Oyik",
    content: `
      <h2>Luxury is Not Just an Aesthetic—It's a Response Time</h2>
      <p>When dealing with £2M+ properties, clients expect a level of service that matches the asset price. Waiting 24 hours for a viewing confirmation feels like a breakdown in the brand promise.</p>

      <h3>Maintaining the "Personal Touch" with AI</h3>
      <p>The biggest fear in luxury real estate is that AI will feel "robotic." However, modern Large Language Models (LLMs) can be trained to match your agency's specific tone—be it formal, boutique, or high-energy.</p>

      <h3>Polished Communication at Scale</h3>
      <p>Imagine every enquiry receiving a beautifully written, context-aware response that references the specific property features they asked about. AI doesn't get tired, it doesn't make typos, and it never forgets to follow up.</p>
    `
  },
  {
    title: "What an AI operating layer actually does for an agency",
    description:
      "From calls and chat to reminders and maintenance intake, here is the practical side of a modern AI setup for property businesses.",
    category: "Product Updates",
    date: "May 02, 2026",
    readTime: "6 min read",
    image: "/media/blog/featured.png",
    slug: "ai-operating-layer-for-agency",
    author: "Product Team",
    content: `
      <h2>Beyond Just Chatbots</h2>
      <p>To many, AI in real estate means a simple chat widget on a website. In reality, a true AI Operating Layer connects every touchpoint of your business.</p>

      <h3>The Four Pillars of the AI Operating Layer</h3>
      <ol>
        <li><strong>Enquiry Management:</strong> Centralizing leads from portals, website, and social media.</li>
        <li><strong>Voice Automation:</strong> Handling inbound calls when the office is closed or busy.</li>
        <li><strong>Workflow Orchestration:</strong> Moving data between your CRM (like Reapit or Jupix) and your communication tools.</li>
        <li><strong>Post-Instruction Support:</strong> Automating maintenance intake and rent reminders.</li>
      </ol>

      <p>By connecting these pillars, directors gain a "bird's eye view" of their agency's performance while significantly reducing the overhead of manual data entry.</p>
    `
  }
];

export const featuredPost: BlogPost = {
  title: "The Future of Real Estate: How AI Agents are Transforming the UK Property Market",
  description:
    "Explore the shift from traditional lead management to fully automated AI operating layers. Learn how top-tier agencies are leveraging voice and chat agents to scale their operations while maintaining a boutique, high-end client experience.",
  category: "AI Strategy",
  date: "May 15, 2026",
  readTime: "8 min read",
  image: "/media/blog/featured.png",
  slug: "future-of-real-estate-ai-agents",
  author: "Agency Director Guide",
  content: `
    <h2>The Great Decoupling: Scaling Without Hiring</h2>
    <p>Traditionally, if an agency wanted to handle more leads, they had to hire more negotiators. This created a linear relationship between growth and overhead. AI agents represent a "decoupling" of this relationship.</p>

    <h3>Why AI Agents are Different from Software</h3>
    <p>Traditional software is a tool you use. An AI Agent is a "worker" you manage. It can reason, make decisions within its guardrails, and actually complete tasks like booking a viewing or updating a CRM record.</p>

    <h3>The 2026 Outlook for UK Agencies</h3>
    <p>By the end of 2026, we predict that 70% of initial property enquiries in the UK will be handled by some form of AI before reaching a human negotiator. The agencies that adopt early will own the market's most valuable asset: speed-to-lead.</p>

    <h3>Key Takeaways for Directors</h3>
    <ul>
      <li>AI is not a replacement for negotiators; it's a filter for them.</li>
      <li>Data cleanliness is the prerequisite for automation success.</li>
      <li>The client journey starts the moment they click "Enquire," not the moment you call them back.</li>
    </ul>
  `
};

export const allPosts = [featuredPost, ...posts];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((post) => post.slug === slug);
}
