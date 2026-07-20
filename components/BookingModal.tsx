"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useBooking } from "@/components/BookingContext";
import { submitBookingRequest } from "@/lib/booking";

type Status = "idle" | "loading" | "success" | "error";

export default function BookingModal() {
  const { isOpen, closeBooking } = useBooking();
  const [form, setForm] = useState({ name: "", email: "", role: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleClose() {
    closeBooking();
    setStatus("idle");
    setErrorMessage("");
    setForm({ name: "", email: "", role: "", message: "" });
  }

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const result = await submitBookingRequest(form);

    if (result.ok) {
      setStatus("success");
      setForm({ name: "", email: "", role: "", message: "" });
    } else {
      setStatus("error");
      setErrorMessage(result.error);
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            className="absolute inset-0 bg-deep-brown/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto border hairline bg-warm-cream p-8 md:p-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute right-6 top-6 text-2xl text-deep-brown/60 hover:text-deep-brown"
            >
              ×
            </button>

            {status === "success" ? (
              <div className="py-6">
                <p className="font-display text-2xl text-deep-brown">
                  Request received.
                </p>
                <p className="mt-3 text-deep-brown/75">
                  Richa&apos;s team will follow up by email within 1-2
                  business days to confirm your session time.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-8 border border-deep-brown px-6 py-3 text-sm tracking-wide text-deep-brown hover:bg-deep-brown hover:text-warm-cream"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h2
                  id="booking-modal-title"
                  className="font-display text-2xl text-deep-brown sm:text-3xl"
                >
                  Book a Career Strategy Session
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-deep-brown/70">
                  Tell us a little about where you are — we&apos;ll confirm a
                  time by email.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="name" className="text-sm text-deep-brown/70">
                      Full name
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-2 w-full border hairline bg-transparent px-4 py-3 text-deep-brown focus:border-terracotta focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="booking-email" className="text-sm text-deep-brown/70">
                      Email
                    </label>
                    <input
                      id="booking-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-2 w-full border hairline bg-transparent px-4 py-3 text-deep-brown focus:border-terracotta focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="text-sm text-deep-brown/70">
                      Current role / title
                    </label>
                    <input
                      id="role"
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      className="mt-2 w-full border hairline bg-transparent px-4 py-3 text-deep-brown focus:border-terracotta focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm text-deep-brown/70">
                      What&apos;s the situation you want to change?
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="mt-2 w-full border hairline bg-transparent px-4 py-3 text-deep-brown focus:border-terracotta focus:outline-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-terracotta">{errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-deep-brown px-6 py-4 text-sm tracking-wide text-warm-cream transition-colors hover:bg-terracotta disabled:opacity-60"
                  >
                    {status === "loading" ? "Sending..." : "Request My Session"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
