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
              className="flex items-center gap-2 text-sm tracking-wide text-deep-brown underline decoration-terracotta decoration-2 underline-offset-4"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-5 fill-terracotta">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5v-7l6.3 3.5-6.3 3.5Z" />
              </svg>
              Watch on YouTube
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noreferrer"
            className="group relative mb-8 block aspect-[16/7] w-full overflow-hidden"
          >
            <Image
              src="/images/podcast/featured.svg"
              alt="Watch the latest episode on YouTube"
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-deep-brown/35 transition-colors group-hover:bg-deep-brown/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="absolute h-20 w-20 animate-ping rounded-full bg-warm-cream/30" />
              <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-warm-cream/70 bg-deep-brown/40 backdrop-blur-sm">
                <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-warm-cream">
                  <path d="M8 5v14l11-7Z" />
                </svg>
              </span>
            </div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <p className="text-xs tracking-[0.2em] text-warm-cream/80 uppercase">
                Latest Episode
              </p>
              <p className="mt-2 font-display text-2xl text-warm-cream md:text-3xl">
                Why strong performers stay stuck
              </p>
            </div>
          </a>
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
                  <div className="absolute inset-0 flex items-center justify-center bg-deep-brown/0 transition-colors group-hover:bg-deep-brown/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-warm-cream/0 bg-warm-cream/0 transition-all group-hover:border-warm-cream/70 group-hover:bg-deep-brown/30">
                      <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-warm-cream opacity-0 transition-opacity group-hover:opacity-100">
                        <path d="M8 5v14l11-7Z" />
                      </svg>
                    </span>
                  </div>
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
