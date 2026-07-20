"use client";

import { useBooking } from "@/components/BookingContext";
import ScrollReveal from "@/components/ScrollReveal";

const offers = [
  {
    tag: "Single Session",
    title: "Career Growth Strategy Session",
    duration: "45 minutes",
    description:
      "A focused diagnostic on exactly what's blocking your next move — and the specific shift that unblocks it. You leave with clarity, not homework.",
    points: [
      "A clear read on your current positioning",
      "The single biggest lever for your next 90 days",
      "A recommendation on whether deeper mentorship is right for you",
    ],
    cta: "Book the Session",
  },
  {
    tag: "12-Week Mentorship",
    title: "Journey to C-Suite",
    duration: "12 weeks",
    description:
      "A structured mentorship for women ready to rebuild their executive presence, career brand, and promotion strategy — end to end, with direct access to Richa.",
    points: [
      "Executive presence and personal positioning work",
      "A deliberate career brand and visibility plan",
      "A promotion strategy with real conversations and timelines",
    ],
    cta: "Apply for Journey to C-Suite",
  },
];

export default function OfferCards() {
  const { openBooking } = useBooking();

  return (
    <section id="offers" className="px-6 py-24 md:px-14 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <p className="mb-4 text-sm tracking-[0.25em] text-terracotta uppercase">
            Work With Richa
          </p>
          <h2 className="mb-14 max-w-2xl font-display text-4xl leading-tight text-deep-brown sm:text-5xl">
            Two ways to start.
          </h2>
        </ScrollReveal>

        <div className="grid border-t border-l hairline md:grid-cols-2">
          {offers.map((offer, i) => (
            <ScrollReveal key={offer.title} delay={i * 0.12}>
              <div className="flex h-full flex-col border-r border-b hairline p-8 md:p-12">
                <p className="text-sm tracking-[0.2em] text-coral-fire uppercase">
                  {offer.tag}
                </p>
                <h3 className="mt-4 font-display text-2xl text-deep-brown sm:text-3xl">
                  {offer.title}
                </h3>
                <p className="mt-1 text-sm text-deep-brown/60">
                  {offer.duration}
                </p>
                <p className="mt-6 text-base leading-relaxed text-deep-brown/80">
                  {offer.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {offer.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-deep-brown/80"
                    >
                      <span className="mt-1 text-coral-fire">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openBooking}
                  className="mt-8 self-start border border-deep-brown px-7 py-3.5 text-sm tracking-wide text-deep-brown transition-colors hover:bg-deep-brown hover:text-warm-cream"
                >
                  {offer.cta}
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
