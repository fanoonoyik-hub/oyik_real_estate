import type { Metadata, Viewport } from "next";
import { Roboto, Urbanist } from "next/font/google";
import AppShell from "@/components/shared/AppShell";
import "@n8n/chat/dist/style.css";
import "./globals.css";
import Script from "next/script";

const fontSans = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontMono = Roboto({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const fontDisplay = Urbanist({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f7f5f0",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://oyik.realestate.ai"),
  title: {
    default: "oyik.realestate.ai | Luxury AI Automation for Real Estate Growth",
    template: "%s | oyik.realestate.ai",
  },
  description:
    "oyik.realestate.ai helps real estate businesses automate website chat, voice calls, lead qualification, viewing bookings, reminders, maintenance intake, and AI property marketing with a premium client experience.",
  keywords: [
    "real estate AI",
    "real estate chatbot",
    "real estate voice agents",
    "property viewing automation",
    "maintenance intake automation",
    "real estate marketing automation",
    "AI employees for real estate",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oyik.realestate.ai",
    title: "oyik.realestate.ai | Luxury AI Automation for Real Estate Growth",
    description:
      "Premium AI systems for real estate teams across chat, voice, booking, reminders, maintenance intake, and property marketing.",
    siteName: "oyik.realestate.ai",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "oyik.realestate.ai luxury real estate AI automation website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "oyik.realestate.ai | Luxury AI Automation for Real Estate Growth",
    description:
      "Premium AI systems for real estate businesses that want faster lead response, better qualification, and more booked viewings.",
    creator: "@oyikai",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "oyik.realestate.ai",
  operatingSystem: "Web",
  applicationCategory: "BusinessApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "A luxury AI automation platform for real estate businesses, covering website chat, voice agents, lead qualification, viewing bookings, maintenance intake, reminders, email automation, and AI marketing.",
  provider: {
    "@type": "Organization",
    name: "oyik.realestate.ai",
    url: "https://oyik.realestate.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable} ${fontDisplay.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KVTNKW3W');`,
          }}
        />
        <meta name="google-site-verification" content="iG4MsXnd6nBL_s7Z3DEJZ_Rz67imbAL-eVYmBmHXpVg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-background font-sans text-foreground">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KVTNKW3W"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <AppShell>{children}</AppShell>
        <Script src="/chatbot.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
