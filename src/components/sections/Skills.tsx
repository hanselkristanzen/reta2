import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="05" title="Skills" />

        <div className="grid gap-x-10 gap-y-10 border-t border-line pt-10 sm:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.label} delay={index * 60}>
              <h3 className="font-mono text-xs tracking-wide text-mist-dim uppercase">{group.label}</h3>
              <p className="mt-4 text-base leading-relaxed text-paper">{group.items.join(", ")}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
