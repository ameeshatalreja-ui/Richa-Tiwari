"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useBooking } from "@/components/BookingContext";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  const { openBooking } = useBooking();
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 90]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="grid overflow-hidden md:min-h-[calc(100vh-73px)] md:grid-cols-2"
    >
      <div className="flex flex-col justify-center px-6 py-20 md:px-14 lg:px-20 lg:py-0">
        <ScrollReveal delay={0.05}>
          <p className="mb-6 text-sm tracking-[0.25em] text-terracotta uppercase">
            Executive Leadership Coaching
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h1 className="font-display text-[2.75rem] leading-[1.08] text-deep-brown sm:text-6xl lg:text-[4.25rem]">
            Step into promotions,
            <br />
            visibility, and{" "}
            <span className="signature-underline">real influence.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.28}>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-deep-brown/80">
            You&apos;ve delivered the results. You still watch the room reward
            someone else. If you&apos;re a strong performer who keeps getting
            overlooked, the gap isn&apos;t your skill — it&apos;s how you&apos;re
            positioned.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <MagneticButton
              onClick={openBooking}
              className="bg-deep-brown px-8 py-4 text-sm tracking-wide text-warm-cream transition-colors hover:bg-terracotta"
            >
              Book a Career Strategy Session
            </MagneticButton>
            <a
              href="#quiz"
              className="text-sm tracking-wide text-deep-brown underline decoration-terracotta decoration-2 underline-offset-4"
            >
              Take the Archetype Quiz
            </a>
          </div>
        </ScrollReveal>
      </div>

      <div className="relative h-[70vh] md:h-auto">
        <motion.div className="absolute -inset-y-16 inset-x-0" style={{ y }}>
          <Image
            src="/images/hero-portrait.svg"
            alt="Richa Tiwari, executive leadership coach"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
