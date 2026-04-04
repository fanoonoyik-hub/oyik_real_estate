# oyik.realestate.ai (Oyik RealEstate.ai) - Project Summary

**Last Updated:** 2026-04-03 (Asia/Calcutta)

## What This Repo Is

- Next.js site (static export) deployed on Netlify.
- Project root: `oyik-ai-site`
- Netlify config: `netlify.toml` (build: `npm run build`, publish: `out`)
- Netlify site ID: `76cdcaff-711b-4a34-8480-c01044ca5a11`

## Key Pages

- Home: `/`
- About: `/about`
- Services index: `/services`
- Service detail pages:
  - `/services/chat`
  - `/services/voice`
  - `/services/reminders`
  - `/services/email`
  - `/services/maintenance`
  - `/services/ai-marketing`
  - `/services/workflow-automation`

## What’s Implemented (Current)

- Premium UI refresh across home, about, services index, and all service detail pages.
- SEO-first content: keep user-provided H1/H2/body copy structure exactly unless explicitly asked to change wording.
- Navigation scroll behavior: route changes land at the top of the new page.
- FAQ: bottom-of-page FAQs are driven by `src/components/shared/PageFaqSection.tsx` and have been replaced with the latest approved copy.
- Mobile-first improvements:
  - Flagship chatbot showcase is resized to fit a single viewport (no forced scroll), and listing “Tomorrow | time” labels removed.
  - Services/products section uses swipeable horizontal cards on mobile, grid on tablet+.
  - Smooth scrolling is disabled on touch devices (enabled on desktop only) to avoid mobile jank.

## Dev Commands

- Install: `npm i`
- Run local: `npm run dev` (http://localhost:3000)
- Build/export: `npm run build` (outputs `out/`)

## Key Files To Touch

- `src/components/shared/PageFaqSection.tsx` (FAQs)
- `src/components/shared/SmoothScroll.tsx` (scroll behavior)
- `src/components/sections/features/ChatbotShowcase.tsx` (homepage flagship chatbot)
- `src/components/sections/Products.tsx` (mobile swipe cards)
