import Image from "next/image";
import { podcastEpisodes, YOUTUBE_CHANNEL_URL } from "@/data/podcast";
import ScrollReveal from "@/components/ScrollReveal";

export default function PodcastGrid() {
  return (
    <section id="podcast" className="px-6 py-24 md:px-14 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-sm tracking-[0.25em] text-terracotta uppercase">
                Watch &amp; Listen
              </p>
              <h2 className="max-w-xl font-display text-4xl leading-tight text-deep-brown sm:text-5xl">
                The podcast for women done waiting.
              </h2>
            </div>
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noreferrer"
              className="text-sm tracking-wide text-deep-brown underline decoration-terracotta decoration-2 underline-offset-4"
            >
              Watch on YouTube
            </a>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {podcastEpisodes.map((episode, i) => (
            <ScrollReveal key={episode.title} delay={i * 0.1}>
              <a
                href={episode.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={episode.thumbnail}
                    alt={episode.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl text-deep-brown">
                  {episode.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-deep-brown/70">
                  {episode.description}
                </p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
