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

        <div className="flex flex-col gap-3">
          <a
            href="https://www.linkedin.com/in/richatiwari1"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-deep-brown/70 hover:text-terracotta"
          >
            LinkedIn
          </a>
          <a
            href="https://youtube.com/@realrichatiwari"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-deep-brown/70 hover:text-terracotta"
          >
            YouTube
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1400px] border-t hairline pt-6 text-xs text-deep-brown/50">
        © {new Date().getFullYear()} Greater Self Awakening. All rights reserved.
      </div>
    </footer>
  );
}
