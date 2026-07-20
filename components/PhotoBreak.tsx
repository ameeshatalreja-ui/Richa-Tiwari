"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

export default function PhotoBreak() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [1, 1] : [1.08, 1.2]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[80vh] min-h-[520px] w-full overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Image src="/images/photo-break.svg" alt="" fill sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/95 via-deep-brown/55 to-deep-brown/30" />
      <div className="relative z-10 mx-auto flex h-full max-w-4xl items-center px-6 md:px-14">
        <ScrollReveal>
          <blockquote className="font-display text-3xl leading-snug text-warm-cream sm:text-4xl lg:text-5xl">
            &ldquo;Most ambitious women aren&apos;t stuck because of skill
            gaps. They&apos;re stuck because they skipped the inner
            work.&rdquo;
          </blockquote>
          <p className="mt-8 text-sm tracking-[0.25em] text-coral-fire uppercase">
            Richa Tiwari
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
