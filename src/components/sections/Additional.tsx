import { EditorialImage } from "@/components/ui/EditorialImage";
import { useLightbox } from "@/components/ui/LightboxProvider";
import { Reveal } from "@/components/ui/Reveal";
import { additionalInvolvement } from "@/data/portfolio";

/**
 * Events and recognition that have photographic evidence but no CV entry.
 * Presented as a plain ledger — event, role label, images — with no
 * invented titles, dates, or responsibilities.
 */
export function Additional() {
  const openLightbox = useLightbox();

  return (
    <section id="additional" className="scroll-mt-16 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-14 sm:mb-20">
          <p className="font-mono text-xs tracking-wide text-mist-dim">07 — Beyond the roles</p>
          <h2 className="mt-3 max-w-md text-balance font-display text-3xl font-medium text-paper sm:text-4xl">
            Other events and recognition.
          </h2>
        </Reveal>

        <ul>
          {additionalInvolvement.map((entry) => (
            <li key={entry.id} className="border-t border-line py-10 first:border-t-0 first:pt-0 sm:py-14">
              <Reveal>
                <div className="grid gap-6 md:grid-cols-[240px_1fr] md:gap-14">
                  <div>
                    <h3 className="font-display text-xl font-medium text-paper">{entry.event}</h3>
                    <p className="mt-1 text-sm text-mist-dim">{entry.role}</p>

                    {entry.recognition && (
                      <div className="mt-5">
                        <p className="text-sm leading-snug text-signal">{entry.recognition.label}</p>
                        <button
                          type="button"
                          onClick={() => entry.recognition && openLightbox(entry.recognition.image)}
                          className="press-feedback can-hover:text-signal mt-2 border-b border-line-strong pb-0.5 text-xs text-mist"
                        >
                          View award
                        </button>
                      </div>
                    )}
                  </div>

                  <div className={entry.photos.length > 1 ? "grid gap-4 sm:grid-cols-2" : ""}>
                    {entry.photos.map((photo) => (
                      <EditorialImage
                        key={photo.src}
                        photo={photo}
                        onOpen={openLightbox}
                        aspect={entry.photos.length > 1 ? "aspect-[4/3]" : "aspect-[16/10]"}
                        position="object-[center_40%]"
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
