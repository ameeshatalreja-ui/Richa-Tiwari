"use client";

import { useState } from "react";
import { useBooking } from "@/components/BookingContext";
import { quizQuestions, archetypes, type ArchetypeId } from "@/data/quiz";
import ScrollReveal from "@/components/ScrollReveal";

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<ArchetypeId[]>([]);
  const { openBooking } = useBooking();

  const totalSteps = quizQuestions.length;
  const isComplete = step >= totalSteps;
  const progress = Math.round((Math.min(step, totalSteps) / totalSteps) * 100);

  function selectOption(archetype: ArchetypeId) {
    setAnswers((prev) => [...prev, archetype]);
    setStep((prev) => prev + 1);
  }

  function restart() {
    setStep(0);
    setAnswers([]);
  }

  function getResult(): ArchetypeId {
    const counts: Record<ArchetypeId, number> = {
      strategist: 0,
      connector: 0,
      trailblazer: 0,
      anchor: 0,
    };
    answers.forEach((a) => (counts[a] += 1));
    return (Object.keys(counts) as ArchetypeId[]).reduce((best, key) =>
      counts[key] > counts[best] ? key : best
    , answers[0] ?? "strategist");
  }

  return (
    <section id="quiz" className="bg-blush-peach/20 px-6 py-24 md:px-14 lg:px-20">
      <div className="mx-auto max-w-2xl">
        <ScrollReveal>
          <p className="mb-4 text-center text-sm tracking-[0.25em] text-terracotta uppercase">
            The Leadership Archetype Quiz
          </p>
          <h2 className="mb-12 text-center font-display text-4xl leading-tight text-deep-brown sm:text-5xl">
            Which leadership archetype are you?
          </h2>
        </ScrollReveal>

        <div className="border hairline bg-warm-cream p-8 md:p-12">
          {!isComplete && (
            <div className="mb-10 h-[3px] w-full bg-deep-brown/10">
              <div
                className="h-full bg-coral-fire transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          {!isComplete ? (
            <div key={step}>
              <p className="mb-2 text-sm tracking-wide text-deep-brown/50">
                Question {step + 1} of {totalSteps}
              </p>
              <h3 className="font-display text-2xl leading-snug text-deep-brown sm:text-3xl">
                {quizQuestions[step].question}
              </h3>
              <div className="mt-8 flex flex-col gap-3">
                {quizQuestions[step].options.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => selectOption(option.archetype)}
                    className="border hairline px-6 py-4 text-left text-base text-deep-brown transition-colors hover:border-terracotta hover:bg-terracotta/5"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <QuizResult archetypeId={getResult()} onRestart={restart} onBook={openBooking} />
          )}
        </div>
      </div>
    </section>
  );
}

function QuizResult({
  archetypeId,
  onRestart,
  onBook,
}: {
  archetypeId: ArchetypeId;
  onRestart: () => void;
  onBook: () => void;
}) {
  const archetype = archetypes[archetypeId];

  return (
    <div>
      <p className="text-sm tracking-[0.2em] text-terracotta uppercase">
        Your result
      </p>
      <h3 className="mt-3 font-display text-3xl text-deep-brown sm:text-4xl">
        {archetype.name}
      </h3>
      <p className="mt-2 text-lg text-deep-brown/70">{archetype.tagline}</p>

      <p className="mt-6 text-base leading-relaxed text-deep-brown/85">
        {archetype.description}
      </p>
      <p className="mt-4 text-base leading-relaxed text-deep-brown/85">
        {archetype.growthEdge}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <button
          onClick={onBook}
          className="bg-deep-brown px-6 py-3.5 text-sm tracking-wide text-warm-cream hover:bg-terracotta"
        >
          Talk Through My Result
        </button>
        <button
          onClick={onRestart}
          className="border border-deep-brown px-6 py-3.5 text-sm tracking-wide text-deep-brown hover:bg-deep-brown hover:text-warm-cream"
        >
          Retake the Quiz
        </button>
      </div>
    </div>
  );
}
