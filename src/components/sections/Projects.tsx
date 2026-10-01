import { lazy, Suspense, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ProjectNumeral } from "@/components/ui/ProjectNumeral";
import { PullQuote } from "@/components/ui/PullQuote";
import { Reveal } from "@/components/ui/Reveal";
import { SecurityVisual } from "@/components/sections/SecurityVisual";
import { projects } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";

const ProjectCaseStudyModal = lazy(() =>
  import("@/components/sections/ProjectCaseStudyModal").then((mod) => ({ default: mod.ProjectCaseStudyModal })),
);

const SEVERITY_LABEL: Record<string, string> = { high: "High", medium: "Medium", low: "Low" };
const SEVERITY_TONE: Record<string, "high" | "medium" | "low"> = { high: "high", medium: "medium", low: "low" };

function CaseStudyTrigger({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group mt-7 inline-flex w-fit items-center gap-1.5 border-b border-line-strong pb-1 text-sm font-medium text-paper transition-colors duration-200 can-hover:border-signal/60 can-hover:text-signal"
    >
      View full case study
      <ArrowUpRight size={14} className="transition-transform duration-200 group-can-hover:translate-x-0.5 group-can-hover:-translate-y-0.5" aria-hidden="true" />
    </button>
  );
}

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const mobile = projects.find((p) => p.id === "mobile-pentest")!;
  const threat = projects.find((p) => p.id === "threat-modeling")!;
  const edtech = projects.find((p) => p.id === "edtech-platform")!;
  const wastewise = projects.find((p) => p.id === "wastewise")!;

  return (
    <section id="projects" className="scroll-mt-16 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section intro — deliberately not the shared SectionHeading pattern */}
        <Reveal className="mb-24 sm:mb-32">
          <p className="font-mono text-xs tracking-wide text-signal">03 — Projects</p>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-4xl font-medium text-paper sm:text-6xl">
            What I've built.
          </h2>
          <p className="mt-5 max-w-lg text-base text-mist sm:text-lg">
            Hands-on security and software work from coursework and CTF-style group projects — penetration
            testing, threat modeling, and secure development.
          </p>
        </Reveal>

        {/* ============ 01 — Mobile Application Penetration Tester (featured) ============ */}
        <Reveal>
          <article className="relative">
            <ProjectNumeral number="01" className="absolute -top-8 left-0 sm:-top-14 md:-top-20" />
            <div className="relative pt-20 sm:pt-28 md:pt-36">
              <span className="font-mono text-xs tracking-wide text-signal">{mobile.category}</span>
              <h3 className="mt-2 max-w-2xl text-balance font-display text-3xl font-medium text-paper sm:text-5xl">
                {mobile.title}
              </h3>

              {/* <div className="mt-9 aspect-[16/9] w-full overflow-hidden border border-line sm:aspect-[21/9]">
                <SecurityVisual />
              </div> */}

              <div className="mt-10 grid gap-10 md:grid-cols-[1fr_260px]">
                <div>
                  <p className="max-w-xl text-base leading-relaxed text-mist sm:text-lg">{mobile.caseStudy.overview}</p>
                  {mobile.quote && <PullQuote className="mt-8">{mobile.quote}</PullQuote>}
                  <CaseStudyTrigger onClick={() => setActiveProject(mobile)} />
                </div>
                <aside className="flex flex-col gap-6 border-t border-line pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8">
                  <div>
                    <p className="font-mono text-xs text-mist-dim uppercase">Findings</p>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {mobile.severityBreakdown?.map((entry) => (
                        <Badge key={entry.severity} tone={SEVERITY_TONE[entry.severity]}>
                          {entry.count} {SEVERITY_LABEL[entry.severity]}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-mist-dim uppercase">Tools</p>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {mobile.tools.map((tool) => (
                        <Badge key={tool} tone="default">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </article>
        </Reveal>

        <div className="my-20 h-px w-full bg-line sm:my-28" />

        {/* ============ 02 — Threat Modeling & Risk Analysis (ThreatBlueprint) ============ */}
        <Reveal>
          <article className="grid gap-12 md:grid-cols-[1fr_320px] md:items-center md:gap-16">
            <div>
              <ProjectNumeral number="02" className="text-[4rem] sm:text-[5.5rem] md:text-[6.5rem]" />
              <span className="mt-4 block font-mono text-xs tracking-wide text-signal">{threat.category}</span>
              <h3 className="mt-2 font-display text-3xl font-medium text-paper sm:text-4xl">{threat.codename}</h3>
              <p className="mt-1 text-sm text-mist-dim">{threat.title}</p>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-mist">{threat.caseStudy.overview}</p>
              {threat.quote && <PullQuote className="mt-7">{threat.quote}</PullQuote>}

              <div className="mt-7 flex flex-wrap gap-8">
                {threat.metrics?.map((metric) => (
                  <div key={metric.label} className="flex flex-col gap-1">
                    <span className="font-display text-2xl font-medium text-paper tabular-nums">{metric.value}</span>
                    <span className="text-xs text-mist-dim uppercase">{metric.label}</span>
                  </div>
                ))}
              </div>
              <CaseStudyTrigger onClick={() => setActiveProject(threat)} />
            </div>

            {threat.documentImage && (
              <div className="mx-auto w-full max-w-[280px] rotate-[-2deg] bg-paper p-3 shadow-2xl shadow-black/50 transition-transform duration-300 can-hover:rotate-0 md:mx-0">
                <img
                  src={threat.documentImage.src}
                  alt={threat.documentImage.alt}
                  loading="lazy"
                  className="w-full"
                />
              </div>
            )}
          </article>
        </Reveal>

        <div className="my-20 h-px w-full bg-line sm:my-28" />

        {/* ============ 03 — EdTech Platform Development (Digi+wo) ============ */}
        <Reveal>
          <article>
            <ProjectNumeral number="03" className="text-[4rem] sm:text-[5.5rem] md:text-[6.5rem]" />
            <div className="mt-4 grid gap-10 md:grid-cols-2 md:gap-14">
              <div>
                <span className="font-mono text-xs tracking-wide text-signal">{edtech.category}</span>
                <h3 className="mt-2 font-display text-3xl font-medium text-paper sm:text-4xl">{edtech.codename}</h3>
                <p className="mt-1 text-sm text-mist-dim">{edtech.title}</p>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-mist">{edtech.caseStudy.overview}</p>
                {edtech.quote && <PullQuote className="mt-7">{edtech.quote}</PullQuote>}

                <div className="mt-7 flex flex-wrap gap-8">
                  {edtech.metrics?.map((metric) => (
                    <div key={metric.label} className="flex flex-col gap-1">
                      <span className="font-display text-2xl font-medium text-paper tabular-nums">{metric.value}</span>
                      <span className="text-xs text-mist-dim uppercase">{metric.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-5">
                  <CaseStudyTrigger onClick={() => setActiveProject(edtech)} />
                  {edtech.link && (
                    <a
                      href={edtech.link.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-7 inline-flex items-center gap-1.5 text-sm text-mist transition-colors can-hover:text-signal"
                    >
                      {edtech.link.label}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>

              {edtech.gallery && (
                <div className="grid grid-cols-2 gap-3">
                  <div className="group col-span-2 overflow-hidden border border-line">
                    <img
                      src={edtech.gallery[0].src}
                      alt={edtech.gallery[0].alt}
                      loading="lazy"
                      className="aspect-video w-full object-cover transition-transform duration-500 group-can-hover:scale-[1.03]"
                    />
                  </div>
                  {edtech.gallery.slice(1).map((shot) => (
                    <div key={shot.src} className="group overflow-hidden border border-line">
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-can-hover:scale-[1.05]"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </article>
        </Reveal>

        <div className="my-20 h-px w-full bg-line sm:my-28" />

        {/* ============ 04 — WasteWise (additional project, presented conservatively) ============ */}
        <Reveal>
          <article className="max-w-2xl">
            <p className="font-mono text-xs tracking-wide text-mist-dim uppercase">04 — Additional Project</p>
            <h3 className="mt-3 font-display text-2xl font-medium text-paper sm:text-3xl">{wastewise.title}</h3>
            <p className="mt-1 text-sm text-mist-dim">{wastewise.category}</p>
            <p className="mt-5 text-base leading-relaxed text-mist">{wastewise.caseStudy.overview}</p>

            <ul className="mt-6 flex flex-col gap-2.5 border-l-2 border-line pl-5">
              {wastewise.caseStudy.methodology.map((step) => (
                <li key={step} className="text-sm leading-relaxed text-mist">
                  {step}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {wastewise.tools.map((tool) => (
                <Badge key={tool} tone="default">
                  {tool}
                </Badge>
              ))}
            </div>

            {wastewise.quote && <PullQuote className="mt-7">{wastewise.quote}</PullQuote>}
          </article>
        </Reveal>
      </div>

      <Suspense fallback={null}>
        <ProjectCaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
      </Suspense>
    </section>
  );
}
