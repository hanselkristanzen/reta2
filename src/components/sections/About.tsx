import ScrollReveal from "@/components/react-bits/ScrollReveal";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/portfolio";

const FOCUS_AREAS = [
  "Offensive Security",
  "Blue Team Fundamentals",
  "Secure Programming",
  "Threat Modeling",
  "Leadership",
  "Cross-Team Coordination",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="01" title="About" />

        <div className="grid gap-12 md:grid-cols-[1fr_260px] md:gap-20">
          <Reveal>
            <ScrollReveal
              containerClassName=""
              textClassName="max-w-2xl text-lg leading-normal text-paper sm:text-xl md:text-2xl"
              baseOpacity={0.15}
              blurStrength={3}
            >
              {profile.summary}
            </ScrollReveal>
          </Reveal>

          <Reveal delay={120}>
            <p className="font-mono text-xs text-mist-dim uppercase">Focus areas</p>
            <ul className="mt-4">
              {FOCUS_AREAS.map((label) => (
                <li key={label} className="border-t border-line py-3 text-sm text-mist first:pt-0 last:border-b">
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
