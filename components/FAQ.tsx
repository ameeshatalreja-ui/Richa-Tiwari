"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";
import ScrollReveal from "@/components/ScrollReveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-6 py-24 md:px-14 lg:px-20">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="mb-4 text-sm tracking-[0.25em] text-terracotta uppercase">
            Questions
          </p>
          <h2 className="mb-14 font-display text-4xl leading-tight text-deep-brown sm:text-5xl">
            Frequently asked.
          </h2>
        </ScrollReveal>

        <div className="border-t hairline">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={faq.question} delay={i * 0.05}>
                <div className="border-b hairline">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-lg text-deep-brown sm:text-xl">
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 text-2xl text-terracotta transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 text-base leading-relaxed text-deep-brown/80">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
