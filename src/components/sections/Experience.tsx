import { Maximize2 } from "lucide-react";
import { HighlightNumbers } from "@/components/ui/HighlightNumbers";
import { useLightbox } from "@/components/ui/LightboxProvider";
import { PhotoThumb } from "@/components/ui/PhotoThumb";
import { Reveal } from "@/components/ui/Reveal";
import { organizationRoles } from "@/data/portfolio";

export function Experience() {
  const openLightbox = useLightbox();

  return (
    <section id="experience" className="scroll-mt-16 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section intro — right-weighted, distinct composition from Projects' left-aligned intro */}
        <Reveal className="mb-20 sm:mb-28">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="max-w-xl text-balance font-display text-4xl font-medium text-paper sm:text-5xl">
              Leading people, not just projects.
            </h2>
            <p className="font-mono text-xs tracking-wide text-signal sm:text-right">04 — Leadership</p>
          </div>
          <p className="mt-5 max-w-lg text-base text-mist">
            Cross-team coordination and event leadership within HIMTI, BINUS University's Informatics student
            association.
          </p>
        </Reveal>

        <div className="flex flex-col">
          {organizationRoles.map((role, index) => (
            <Reveal key={role.id}>
              <article className={index > 0 ? "border-t border-line pt-14" : ""}>
                <div className="grid gap-8 md:grid-cols-[140px_1fr] md:gap-12">
                  <p className="font-mono text-sm text-mist-dim md:pt-1">{role.dateRange}</p>

                  <div className={role.photos?.length ? "grid gap-8 lg:grid-cols-[1fr_320px] lg:gap-12" : ""}>
                    <div>
                      <h3 className="font-display text-2xl font-medium text-paper sm:text-3xl">{role.title}</h3>
                      <p className="mt-1.5 text-sm text-mist">{role.org}</p>

                      <ul className="mt-6 flex flex-col gap-2.5">
                        {role.achievements.map((achievement) => (
                          <li key={achievement} className="flex gap-2.5 text-sm leading-relaxed text-mist sm:text-[0.95rem]">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line-strong" aria-hidden="true" />
                            <span>
                              <HighlightNumbers text={achievement} />
                            </span>
                          </li>
                        ))}
                      </ul>

                      {role.certificate && (
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                          {role.certificate && (
                            <button
                              type="button"
                              onClick={() => role.certificate && openLightbox(role.certificate)}
                              className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs text-mist transition-colors can-hover:border-signal/40 can-hover:text-signal"
                            >
                              <Maximize2 size={12} aria-hidden="true" />
                              View certificate
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    {role.photos && role.photos.length > 0 && (
                      <div className="row-start-1 lg:row-auto">
                        <PhotoThumb photo={role.photos[0]} onOpen={openLightbox} aspect="portrait" />
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
