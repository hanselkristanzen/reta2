import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/data/portfolio";

export function Contact() {
  const { contact } = profile;
  const telHref = `tel:${contact.phone.replace(/[^+\d]/g, "")}`;

  return (
    <section id="contact" className="scroll-mt-16 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs tracking-wide text-mist-dim">08 — Contact</p>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-4xl font-medium text-paper sm:text-6xl">
            Let&rsquo;s build something secure.
          </h2>
          <p className="mt-5 max-w-md text-base text-mist sm:text-lg">
            Open to opportunities in cybersecurity, security engineering, penetration testing, and SOC-related
            roles.
          </p>

          <a
            href={`mailto:${contact.email}`}
            className="press-feedback can-hover:text-signal group mt-10 inline-flex items-baseline gap-3 border-t border-line pt-6 font-display text-2xl font-medium text-paper transition-colors duration-200 sm:text-4xl"
          >
            {contact.email}
            <ArrowUpRight
              size={22}
              className="shrink-0 transition-transform duration-200 group-can-hover:translate-x-1 group-can-hover:-translate-y-1"
              aria-hidden="true"
            />
          </a>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-mist">
            <a href={contact.linkedin} target="_blank" rel="noreferrer noopener" className="press-feedback can-hover:text-signal">
              LinkedIn
            </a>
            <a href={telHref} className="press-feedback can-hover:text-signal">
              {contact.phone}
            </a>
            <span className="text-mist-dim">{contact.location}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
