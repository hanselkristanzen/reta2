import type { CSSProperties } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import DecryptedText from "@/components/react-bits/DecryptedText";
import { profile, profilePhoto } from "@/data/portfolio";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const NAME_LINES = profile.fullName.split(" ");
const [ROLE, ...FOCUS] = profile.positioning.split(" · ");

/**
 * Editorial opening. The name is set as an oversized four-line stack and
 * revealed line by line from behind a mask; the portrait is a large,
 * sharp-edged plate that stands on the section boundary instead of a
 * small avatar. No particles, no blur-in, no pills. The one nod to the
 * subject matter is the short text-decrypt on the role line.
 */
export function Hero() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 pt-24 sm:px-8 md:pt-28">
        <div className="grid flex-1 md:grid-cols-12 md:grid-rows-[1fr_auto] md:gap-x-10">
          <div className="md:col-span-7 md:row-start-1">
            <h1 className="font-display text-[clamp(3rem,9.4vw,7.25rem)] leading-[0.92] font-medium tracking-[-0.045em] text-paper">
              {NAME_LINES.map((word, index) => (
                <span key={word} className="-my-[0.08em] block overflow-hidden py-[0.08em]">
                  <span className="hero-rise block" style={{ "--i": index } as CSSProperties}>
                    {word}
                  </span>
                </span>
              ))}
            </h1>

            <p className="mt-8 font-display text-xl text-paper sm:text-2xl">
              {reducedMotion ? (
                ROLE
              ) : (
                <DecryptedText
                  text={ROLE}
                  animateOn="view"
                  sequential
                  speed={32}
                  maxIterations={10}
                  revealDirection="start"
                  encryptedClassName="text-mist-dim"
                />
              )}
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-mist sm:text-base">{FOCUS.join("  /  ")}</p>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#projects"
                className="press-feedback can-hover:border-signal can-hover:text-signal group inline-flex items-center gap-2 border-b border-paper pb-1 text-base text-paper transition-colors duration-200"
              >
                View projects
                <ArrowDown size={15} aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="press-feedback can-hover:text-paper inline-flex items-center gap-1.5 pb-1 text-base text-mist transition-colors duration-200"
              >
                Get in touch
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          <figure className="hero-plate -mx-5 mt-10 sm:-mx-8 md:col-span-5 md:row-span-2 md:row-start-1 md:mx-0 md:mt-0">
            <div className="overflow-hidden bg-[#9c9c9c] md:h-full">
              <img
                src={profilePhoto}
                alt={`Portrait of ${profile.fullName}`}
                width={1000}
                height={1500}
                fetchPriority="high"
                decoding="async"
                className="aspect-[16/11] w-full object-cover object-[50%_20%] sm:aspect-[4/5] md:aspect-auto md:h-full"
              />
            </div>
          </figure>

          <dl className="mt-10 grid max-w-md grid-cols-2 gap-x-6 gap-y-1 border-t border-line pt-5 font-mono text-xs leading-relaxed text-mist-dim md:col-span-7 md:row-start-2 md:mt-0 md:mb-8 md:self-end">
            <div>
              <dt className="sr-only">University</dt>
              <dd className="text-mist">{profile.university}</dd>
              <dd>
                {profile.program} · GPA {profile.gpa}
              </dd>
            </div>
            <div>
              <dt className="sr-only">Location and goal</dt>
              <dd className="text-mist">{profile.contact.location}</dd>
              <dd>Eager to contribute as a SOC Analyst</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
