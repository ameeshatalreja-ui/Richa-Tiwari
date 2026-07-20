"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion, animate } from "framer-motion";

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1.4,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, shouldReduceMotion, value, duration]);

  const shown = shouldReduceMotion ? value : display;

  return (
    <span ref={ref}>
      {prefix}
      {shown.toLocaleString()}
      {suffix}
    </span>
  );
}
