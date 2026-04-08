"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const socialLinks = [
  { 
    name: "Instagram", 
    href: "https://www.instagram.com/oyik.realestate.ai/", 
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
    color: "hover:text-[#E4405F] hover:bg-[#E4405F]/10 hover:border-[#E4405F]/20"
  },
  { 
    name: "Facebook", 
    href: "https://www.facebook.com/share/1aPbEdmbCq/?mibextid=wwXIfr", 
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
    color: "hover:text-[#1877F2] hover:bg-[#1877F2]/10 hover:border-[#1877F2]/20"
  },
  { 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/company/oyik-realestate-ai/", 
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    color: "hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/20"
  },
  { 
    name: "X", 
    href: "https://x.com/oyik_realestate", 
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z"/>
      </svg>
    ),
    color: "hover:text-[#000000] hover:bg-[#000000]/10 hover:border-[#000000]/20"
  },
  { 
    name: "YouTube", 
    href: "https://www.youtube.com/@oyikrealestate", 
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
      </svg>
    ),
    color: "hover:text-[#FF0000] hover:bg-[#FF0000]/10 hover:border-[#FF0000]/20"
  },
  { 
    name: "Snapchat", 
    href: "https://www.snapchat.com/@realestate.ai", 
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M11.996 2.1c-2.483 0-4.471 1.988-4.471 4.471 0 .428.064.838.181 1.22-.222.126-.489.332-.733.642-.664.835-.858 1.876-.858 2.81 0 .592.15 1.123.417 1.524-.021.086-.03.179-.03.272 0 .593.45 1.011 1.006 1.365.013 1.16.377 2.176 1.16 2.848.78.672 1.979 1.06 3.328 1.06 1.349 0 2.548-.388 3.328-1.06.783-.672 1.147-1.688 1.16-2.848.556-.354 1.006-.772 1.006-1.365 0-.093-.009-.186-.03-.272.266-.401.417-.932.417-1.524 0-.934-.194-1.975-.858-2.81-.244-.31-.511-.516-.733-.642.117-.382.181-.792.181-1.22 0-2.483-1.988-4.471-4.471-4.471zM4.685 18.257c-.326 0-.647.165-.953.5-.307.333-.572.83-.75 1.417-.178.587-.276 1.303-.166 1.974.11.671.444 1.155.825 1.509.381.354.924.577 1.594.743 1.334.333 3.21.584 4.757.584.773 0 1.545-.06 2.304-.182.76.122 1.531.182 2.304.182 1.547 0 3.423-.251 4.757-.584.67-.166 1.21-.389 1.594-.743.381-.354.715-.838.825-1.509.11-.671.012-1.387-.166-1.974-.178-.587-.443-1.084-.75-1.417-.306-.335-.627-.5-0.953-.5-.227 0-.448.068-.663.2l-.034.021a1.216 1.216 0 00-.28.245l-.571.727a6.69 6.69 0 01-5.347 2.45c-2.14 0-4.045-.923-5.347-2.45l-.572-.727a1.216 1.216 0 00-.279-.245l-.034-.021a1.462 1.462 0 00-.663-.2z"/>
      </svg>
    ),
    color: "hover:text-[#FFFC00] hover:bg-[#FFFC00]/10 hover:border-[#FFFC00]/20"
  },
];

const serviceLinks = [
  { name: "AI Chatbots", href: "/services/chat" },
  { name: "Voice Agents", href: "/services/voice" },
  { name: "Automated Reminders", href: "/services/reminders" },
  { name: "Maintenance Intake", href: "/services/maintenance" },
  { name: "Email Automation", href: "/services/email" },
  { name: "AI Marketing", href: "/services/ai-marketing" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "How it works", href: "/how-it-works" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Book Demo", href: "/book-demo" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary pb-8 pt-16">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_1.15fr] xl:gap-8">
          <div className="flex flex-col gap-6">
            <Link href="/" className="group flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-[0_18px_35px_-18px_rgba(67,56,202,0.55)]">
                <Image
                  src="/oyik-logo-indigo-tech.png"
                  alt="Oyik logo"
                  width={44}
                  height={44}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="brand-signature text-[1.75rem] transition-colors group-hover:text-primary">
                  oyik<span className="text-primary">.</span>
                </span>
                <span className="brand-meta">realestate.ai</span>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              The intelligence layer for modern real estate teams. Reply instantly, qualify leads,
              and book viewings across chat, voice, email, and social.
            </p>

            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background/50 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>

            <div className="rounded-[1.7rem] border border-border bg-background/80 p-5 shadow-[0_20px_40px_-32px_rgba(15,23,42,0.18)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                Premium rollout
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Start with one workflow or design the full AI front desk for your property brand.
              </p>
              <Link
                href="/book-demo"
                className="mt-4 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/92"
              >
                Book a demo
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="mb-2 text-lg font-display font-semibold text-foreground">Services</h4>
            {serviceLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="mb-2 text-lg font-display font-semibold text-foreground">Company</h4>
            {companyLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="mb-2 text-lg font-display font-semibold text-foreground">Legal</h4>
            {legalLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="mb-2 text-lg font-display font-semibold text-foreground">Contact Us</h4>

            <a
              href="mailto:hello@oyik.ai"
              className="rounded-[1.5rem] border border-border bg-background/80 p-4 transition-colors hover:border-primary/30"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">Email</p>
                  <p className="mt-2 text-sm font-medium text-foreground">Hello@oyik.ai</p>
                </div>
              </div>
            </a>

            <a
              href="tel:+447352328646"
              className="rounded-[1.5rem] border border-border bg-background/80 p-4 transition-colors hover:border-primary/30"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">Phone</p>
                  <p className="mt-2 text-sm font-medium text-foreground">+44 7352 328646</p>
                </div>
              </div>
            </a>

            <div className="rounded-[1.5rem] border border-border bg-background/80 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">Location</p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-foreground">
                    OYIK LTD, 124 CITY ROAD LONDON, EC1V 2NX.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-[0_16px_30px_-20px_rgba(67,56,202,0.45)]">
              <Image
                src="/oyik-logo-indigo-tech.png"
                alt="Oyik logo"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              (c) {new Date().getFullYear()} oyik.realestate.ai. All Rights Reserved.
            </p>
          </div>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Built with <span className="font-medium text-primary">AI</span>. Powered by <span className="font-medium text-primary">Intelligence</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
