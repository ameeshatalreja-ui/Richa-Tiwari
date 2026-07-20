"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

type MagneticButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
};

const PULL = 0.35;

export default function MagneticButton({
  children,
  onClick,
  href,
  className,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  function handleMouseMove(e: React.MouseEvent) {
    if (shouldReduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * PULL);
    y.set(relY * PULL);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref as never}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </Component>
  );
}
