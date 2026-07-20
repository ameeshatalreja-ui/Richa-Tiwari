# Greater Self Awakening

Marketing site for Richa Tiwari's executive leadership coaching practice.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion for scroll-triggered animation

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/                Root layout, global styles, page assembly
components/          One component per section (Hero, Manifesto, Founder, ...)
data/                Static content: nav links, FAQ, quiz questions/archetypes, podcast episodes
lib/                 Placeholder submit functions for the booking form and email capture
public/images/       Photography — see public/images/README.md
```

`app/page.tsx` assembles the sections in order; each section is a standalone
component so copy or layout changes stay isolated.

## Outstanding TODOs before launch

1. **Real photography.** `public/images/hero-portrait.svg`,
   `founder-portrait.svg`, and `photo-break.svg` are placeholder art. Replace
   with real files of the same name (details in `public/images/README.md`).
2. **Podcast episodes.** `data/podcast.ts` uses placeholder thumbnails and
   links to the channel root — real episode URLs/thumbnails weren't provided.
3. **Email capture ESP.** `lib/email.ts` simulates a network call. Wire in
   ConvertKit or Mailchimp per the comment at the top of that file.
4. **Booking flow backend.** `lib/booking.ts` simulates a submission. Wire it
   to a real calendar/CRM integration (Calendly, Cal.com, an API route, etc.).
5. **Favicon.** Still the default Next.js icon at `app/favicon.ico`.

## Deploy

Deploys as-is to [Vercel](https://vercel.com/new) — no environment variables
required until the ESP/booking integrations above are wired in.
