import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function Founder() {
  return (
    <section className="px-6 py-24 md:px-14 lg:px-20">
      <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-[minmax(0,420px)_1fr] md:gap-20">
        <ScrollReveal>
          <div className="relative aspect-[4/5] w-full">
            <Image
              src="/images/founder-portrait.svg"
              alt="Richa Tiwari, founder of Greater Self Awakening"
              fill
              sizes="(min-width: 768px) 420px, 100vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>

        <div className="flex flex-col justify-center">
          <ScrollReveal delay={0.1}>
            <p className="mb-4 text-sm tracking-[0.25em] text-terracotta uppercase">
              The Founder
            </p>
            <h2 className="font-display text-4xl leading-tight text-deep-brown sm:text-5xl">
              Richa Tiwari
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-deep-brown/85">
              <p>
                Before coaching, Richa spent over a decade inside the rooms
                where promotion decisions actually get made — as an HR
                Director, and in senior roles at KPMG and Shell. She has an
                MBA from IIM Bangalore and has seen, from the inside, exactly
                why talented women get passed over.
              </p>
              <p>
                That experience is the foundation of Greater Self Awakening:
                a practice built on how organizations actually decide who
                gets the next room, not generic career advice.
              </p>
              <p>
                Richa works with a limited number of clients at a time — the
                work is direct, personal, and built around your specific
                position, not a cohort curriculum.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 border-t hairline pt-8 text-sm tracking-wide text-deep-brown/70">
              <span>Former HR Director</span>
              <span>IIM Bangalore</span>
              <span>Ex-KPMG</span>
              <span>Ex-Shell</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
