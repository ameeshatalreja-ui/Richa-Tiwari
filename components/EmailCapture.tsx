"use client";

import { useState, type FormEvent } from "react";
import { subscribeToNewsletter } from "@/lib/email";
import ScrollReveal from "@/components/ScrollReveal";

type Status = "idle" | "loading" | "success" | "error";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const result = await subscribeToNewsletter(email);

    if (result.ok) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
      setErrorMessage(result.error);
    }
  }

  return (
    <section className="bg-deep-brown px-6 py-24 text-warm-cream md:px-14 lg:px-20">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <ScrollReveal>
          <p className="mb-4 text-sm tracking-[0.25em] text-coral-fire uppercase">
            Free Resource
          </p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            10 Leadership Frameworks to Skyrocket Your Career
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-warm-cream/80">
            The exact frameworks Richa uses with her private clients — on
            visibility, positioning, and turning performance into
            promotion. Delivered straight to your inbox.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          {status === "success" ? (
            <div className="border hairline-light p-8">
              <p className="font-display text-xl">You&apos;re in.</p>
              <p className="mt-2 text-warm-cream/80">
                Check your inbox for the frameworks — and welcome to the
                list.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label htmlFor="email" className="text-sm text-warm-cream/70">
                Enter your email to get instant access
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full border hairline-light bg-transparent px-5 py-3.5 text-warm-cream placeholder:text-warm-cream/40 focus:border-coral-fire focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="whitespace-nowrap bg-coral-fire px-7 py-3.5 text-sm tracking-wide text-deep-brown transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  {status === "loading" ? "Sending..." : "Send It To Me"}
                </button>
              </div>
              {status === "error" && (
                <p className="text-sm text-coral-fire">{errorMessage}</p>
              )}
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
