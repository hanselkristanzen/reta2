import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="scroll-mt-16 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="02" title="Education" />

        <div className="flex flex-col">
          {education.map((entry) => (
            <Reveal key={entry.id}>
              <div className="grid gap-2 border-t border-line py-8 first:border-t-0 first:pt-0 sm:grid-cols-[160px_1fr] sm:gap-8">
                <p className="font-mono text-xs text-mist-dim">{entry.dateRange}</p>

                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3
                      className={
                        entry.emphasis
                          ? "font-display text-2xl font-medium text-paper sm:text-3xl"
                          : "font-display text-lg font-medium text-paper"
                      }
                    >
                      {entry.school}
                    </h3>
                    {entry.gpa && <span className="font-mono text-sm text-signal">{entry.gpa}</span>}
                  </div>
                  <p className="mt-1 text-sm text-mist">{entry.credential}</p>

                  {entry.coursework && (
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-mist-dim">
                      {entry.coursework.join(" · ")}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
