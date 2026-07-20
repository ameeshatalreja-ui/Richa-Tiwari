import ScrollReveal from "@/components/ScrollReveal";

const points = [
  {
    number: "01",
    text: "You're overlooked despite performance — the results are there, the recognition isn't.",
  },
  {
    number: "02",
    text: "You're stuck despite consistent delivery — the ceiling moved, but your role didn't.",
  },
  {
    number: "03",
    text: "You're unsure how to advocate for yourself without it feeling like self-promotion.",
  },
  {
    number: "04",
    text: "This is a positioning problem, not a skill gap — and it has a different fix.",
  },
];

export default function Manifesto() {
  return (
    <section id="coaching" className="bg-deep-brown px-6 py-24 text-warm-cream md:px-14 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <p className="mb-4 text-sm tracking-[0.25em] text-coral-fire uppercase">
            The pattern
          </p>
          <h2 className="mb-16 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            If this sounds familiar, you&apos;re not imagining it.
          </h2>
        </ScrollReveal>

        <div className="grid gap-0 md:grid-cols-2 md:gap-x-16">
          {points.map((point, i) => (
            <ScrollReveal key={point.number} delay={i * 0.1}>
              <div className="flex gap-6 border-t hairline-light py-8 md:py-10">
                <span className="font-display text-2xl text-coral-fire">
                  {point.number}
                </span>
                <p className="max-w-md text-lg leading-relaxed text-warm-cream/90">
                  {point.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
