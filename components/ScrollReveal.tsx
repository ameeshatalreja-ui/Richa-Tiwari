"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "span";
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const sharedProps = {
    className,
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, margin: "-80px" },
    variants,
  };

  if (as === "section") {
    return <motion.section {...sharedProps}>{children}</motion.section>;
  }
  if (as === "span") {
    return <motion.span {...sharedProps}>{children}</motion.span>;
  }
  return <motion.div {...sharedProps}>{children}</motion.div>;
}
