"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useBooking } from "@/components/BookingContext";

export default function StickyBookBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { openBooking, isOpen } = useBooking();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const show = visible && !dismissed && !isOpen;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-30 border-t hairline bg-deep-brown"
        >
          <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-4 md:px-14">
            <p className="hidden text-sm text-warm-cream/90 sm:block">
              Ready to be seen for what you deliver?
            </p>
            <div className="flex w-full items-center justify-between gap-4 sm:w-auto">
              <button
                onClick={openBooking}
                className="bg-coral-fire px-6 py-3 text-sm tracking-wide text-deep-brown transition-opacity hover:opacity-90"
              >
                Book a Career Strategy Session
              </button>
              <button
                onClick={() => setDismissed(true)}
                aria-label="Dismiss"
                className="text-xl text-warm-cream/60 hover:text-warm-cream"
              >
                ×
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
