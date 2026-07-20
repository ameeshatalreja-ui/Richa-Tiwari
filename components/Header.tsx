"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data/nav";
import { useBooking } from "@/components/BookingContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-warm-cream/95 backdrop-blur hairline"
          : "bg-warm-cream border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="#top"
          className="font-display text-lg tracking-wide text-deep-brown md:text-xl"
        >
          Greater Self Awakening
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 text-[15px] tracking-wide text-deep-brown/80 transition-colors hover:text-terracotta"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-coral-fire transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            onClick={openBooking}
            className="border border-deep-brown px-6 py-2.5 text-sm tracking-wide text-deep-brown transition-colors hover:bg-deep-brown hover:text-warm-cream"
          >
            Book a Session
          </button>
        </div>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-deep-brown transition-transform ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-deep-brown transition-transform ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t hairline bg-warm-cream px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base tracking-wide text-deep-brown"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                openBooking();
              }}
              className="mt-2 border border-deep-brown px-6 py-3 text-sm tracking-wide text-deep-brown"
            >
              Book a Session
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
