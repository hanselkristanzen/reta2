import { Award } from "lucide-react";
import { CertificateThumb } from "@/components/ui/CertificateThumb";
import { useLightbox } from "@/components/ui/LightboxProvider";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications, languages } from "@/data/portfolio";

export function Certifications() {
  const openLightbox = useLightbox();

  return (
    <section id="certifications" className="scroll-mt-16 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="06" title="Certifications & Languages" />

        <div className="grid gap-14 lg:grid-cols-[1fr_220px]">
          <div className="grid gap-8 sm:grid-cols-2">
            {certifications.map((cert) => (
              <Reveal key={cert.id}>
                <div>
                  {cert.certificateImage ? (
                    <CertificateThumb image={cert.certificateImage} onOpen={openLightbox} className="mb-4" />
                  ) : (
                    <div className="mb-4 flex aspect-[4/3] w-full items-center justify-center border border-line bg-ink">
                      <Award size={26} className="text-mist-dim" aria-hidden="true" />
                    </div>
                  )}
                  <h3 className="font-display text-base font-medium text-paper">{cert.title}</h3>
                  <p className="mt-1 text-sm text-mist">{cert.issuer}</p>
                  <p className="mt-1 font-mono text-xs text-mist-dim">{cert.date}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="font-mono text-xs text-mist-dim uppercase">Languages</p>
            <ul className="mt-4">
              {languages.map((entry) => (
                <li
                  key={entry.language}
                  className="flex items-baseline justify-between border-t border-line py-2.5 first:border-t-0 first:pt-0"
                >
                  <span className="text-sm text-paper">{entry.language}</span>
                  <span className="font-mono text-xs text-mist-dim">{entry.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
