import { useId } from "react";
import { CheckCircle2, Lightbulb, ShieldAlert, Target, Wrench } from "lucide-react";
import { Dialog } from "@/components/ui/Dialog";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/types/portfolio";

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

function CaseStudySection({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Target;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h3 className="flex items-center gap-2 font-mono text-xs tracking-wide text-signal uppercase">
        <Icon size={13} aria-hidden="true" />
        {title}
      </h3>
      <div className="mt-2.5">{children}</div>
    </section>
  );
}

export function ProjectCaseStudyModal({ project, onClose }: ProjectCaseStudyModalProps) {
  const titleId = useId();

  return (
    <Dialog isOpen={project !== null} onClose={onClose} titleId={titleId} panelClassName="max-w-2xl">
      {project && (
        <div className="p-6 sm:p-8">
          <span className="font-mono text-xs tracking-wide text-mist-dim">{project.category}</span>
          <h2 id={titleId} className="mt-2 font-display text-2xl font-medium text-paper sm:text-3xl">
            {project.codename ?? project.title}
          </h2>
          {project.codename && <p className="mt-1 text-sm text-mist">{project.title}</p>}

          {project.quote && (
            <p className="mt-5 border-l-2 border-signal/40 pl-4 font-display text-lg leading-snug text-paper italic">
              “{project.quote}”
            </p>
          )}

          <div className="mt-6 flex flex-col gap-6">
            <CaseStudySection icon={Target} title="Overview">
              <p className="text-sm leading-relaxed text-mist sm:text-[0.95rem]">{project.caseStudy.overview}</p>
            </CaseStudySection>

            <CaseStudySection icon={CheckCircle2} title="Role">
              <p className="text-sm leading-relaxed text-mist sm:text-[0.95rem]">{project.caseStudy.role}</p>
            </CaseStudySection>

            <CaseStudySection icon={Wrench} title="Methodology & Tools">
              <ul className="flex flex-col gap-2">
                {project.caseStudy.methodology.map((step) => (
                  <li key={step} className="flex gap-2.5 text-sm leading-relaxed text-mist sm:text-[0.95rem]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line-strong" aria-hidden="true" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.caseStudy.tools.map((tool) => (
                  <Badge key={tool} tone="wire">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CaseStudySection>

            {project.caseStudy.findings.length > 0 && (
              <CaseStudySection icon={ShieldAlert} title="Findings">
                <ul className="flex flex-col gap-2">
                  {project.caseStudy.findings.map((finding) => (
                    <li key={finding} className="flex gap-2.5 text-sm leading-relaxed text-mist sm:text-[0.95rem]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber" aria-hidden="true" />
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </CaseStudySection>
            )}

            <div className={project.caseStudy.mitigation ? "grid gap-6 sm:grid-cols-2" : undefined}>
              <CaseStudySection icon={ShieldAlert} title="Impact">
                <p className="text-sm leading-relaxed text-mist sm:text-[0.95rem]">{project.caseStudy.impact}</p>
              </CaseStudySection>
              {project.caseStudy.mitigation && (
                <CaseStudySection icon={Wrench} title="Mitigation">
                  <p className="text-sm leading-relaxed text-mist sm:text-[0.95rem]">{project.caseStudy.mitigation}</p>
                </CaseStudySection>
              )}
            </div>

            <CaseStudySection icon={Lightbulb} title="Key Takeaway">
              <p className="text-sm leading-relaxed text-paper sm:text-[0.95rem]">{project.caseStudy.takeaway}</p>
            </CaseStudySection>
          </div>
        </div>
      )}
    </Dialog>
  );
}
