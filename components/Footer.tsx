import { navLinks } from "@/data/nav";

export default function Footer() {
  return (
    <footer className="border-t hairline bg-warm-cream px-6 py-14 md:px-14 lg:px-20">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-xl text-deep-brown">
            Greater Self Awakening
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-deep-brown/70">
            Executive leadership coaching for ambitious women moving toward
            Director and VP roles.
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-deep-brown/70 hover:text-terracotta"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/richatiwari1"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center border hairline text-deep-brown/70 transition-colors hover:border-terracotta hover:text-terracotta"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM.5 8.98h4V23h-4V8.98ZM8.98 8.98h3.83v1.9h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V23h-4v-6.98c0-1.66-.03-3.8-2.32-3.8-2.32 0-2.68 1.81-2.68 3.68V23h-4V8.98Z" />
            </svg>
          </a>
          <a
            href="https://youtube.com/@realrichatiwari"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="flex h-10 w-10 items-center justify-center border hairline text-deep-brown/70 transition-colors hover:border-terracotta hover:text-terracotta"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-5 fill-current">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5v-7l6.3 3.5-6.3 3.5Z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1400px] border-t hairline pt-6 text-xs text-deep-brown/50">
        © {new Date().getFullYear()} Greater Self Awakening. All rights reserved.
      </div>
    </footer>
  );
}
