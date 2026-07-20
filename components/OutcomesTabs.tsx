"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const tabs = [
  {
    key: "presence",
    label: "Executive Presence",
    heading: "Command the room before you say a word.",
    body: "Learn how to hold weight in high-stakes rooms — board meetings, leadership offsites, negotiations — without over-explaining or shrinking. This is presence built on substance, not performance.",
  },
  {
    key: "brand",
    label: "Career Brand",
    heading: "Be known for the right thing, on purpose.",
    body: "Most careers are shaped by accident — whatever reputation formed along the way. We build a deliberate career brand so the right opportunities come to you before you have to ask.",
  },
  {
    key: "promotion",
    label: "Promotion Strategy",
    heading: "Turn results into recognition, on a timeline.",
    body: "Delivering isn't the same as being recognized for delivering. We build the specific case, conversations, and timeline that convert your track record into your next title.",
  },
] as const;

export default function OutcomesTabs() {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>(
    tabs[0].key
  );
  const activeTab = tabs.find((t) => t.key === active)!;

  return (
    <section className="bg-blush-peach/25 px-6 py-24 md:px-14 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <p className="mb-4 text-sm tracking-[0.25em] text-terracotta uppercase">
            What we build
          </p>
          <h2 className="mb-14 max-w-2xl font-display text-4xl leading-tight text-deep-brown sm:text-5xl">
            Three outcomes. One coherent strategy.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-x-10 gap-y-3 border-b hairline pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`relative pb-4 text-base tracking-wide transition-colors ${
                  active === tab.key
                    ? "text-deep-brown"
                    : "text-deep-brown/50 hover:text-deep-brown/80"
                }`}
              >
                {tab.label}
                {active === tab.key && (
                  <span className="absolute -bottom-px left-0 h-[2px] w-full bg-coral-fire" />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-12 max-w-2xl" key={activeTab.key}>
          <ScrollReveal>
            <h3 className="font-display text-2xl text-deep-brown sm:text-3xl">
              {activeTab.heading}
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-deep-brown/80">
              {activeTab.body}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
