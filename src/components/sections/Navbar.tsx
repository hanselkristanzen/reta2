import { useEffect, useId, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useDialogBehavior } from "@/hooks/useDialogBehavior";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/cn";

const NAV_ITEMS = [
  { id: "home", index: "00", label: "Home" },
  { id: "about", index: "01", label: "About" },
  { id: "education", index: "02", label: "Education" },
  { id: "projects", index: "03", label: "Projects" },
  { id: "experience", index: "04", label: "Leadership" },
  { id: "skills", index: "05", label: "Skills" },
  { id: "certifications", index: "06", label: "Certifications" },
  { id: "additional", index: "07", label: "Beyond the roles" },
  { id: "contact", index: "08", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useDialogBehavior(isOpen, () => setIsOpen(false));
  const titleId = useId();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-300",
          isScrolled ? "border-b border-line bg-void/80 backdrop-blur-md" : "border-b border-transparent",
        )}
      >
        <div
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
          style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
        >
          <a href="#home" className="font-display text-sm font-medium text-paper">
            Margareta Nadya
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            className="press-feedback flex items-center gap-2 text-sm text-paper"
          >
            <span className="hidden sm:inline">Index</span>
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <span className="h-px w-full bg-paper" aria-hidden="true" />
              <span className="h-px w-full bg-paper" aria-hidden="true" />
            </span>
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-50" role="presentation">
          <div
            className="absolute inset-0 bg-void/95 backdrop-blur-md motion-safe:animate-fade-in"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          />
          <div
            ref={containerRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative flex h-full flex-col overscroll-contain motion-safe:animate-menu-in"
            style={{
              paddingTop: "env(safe-area-inset-top, 0px)",
              paddingBottom: "env(safe-area-inset-bottom, 0px)",
            }}
          >
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
              <span id={titleId} className="font-display text-sm font-medium text-paper">
                Index
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="press-feedback can-hover:text-signal text-sm text-paper"
              >
                Close
              </button>
            </div>

            <nav aria-label="Primary" className="flex flex-1 flex-col justify-center overflow-y-auto px-5 sm:px-8">
              <ol className="mx-auto flex w-full max-w-6xl flex-col">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id} className="border-t border-line first:border-t-0">
                    <a
                      href={`#${item.id}`}
                      onClick={() => setIsOpen(false)}
                      className="group can-hover:pl-3 flex items-baseline gap-5 py-4 transition-[padding] duration-200 sm:py-5"
                    >
                      <span className="font-mono text-xs text-mist-dim">{item.index}</span>
                      <span className="can-hover:text-signal font-display text-3xl font-medium text-paper transition-colors duration-200 sm:text-5xl">
                        {item.label}
                      </span>
                      <ArrowUpRight
                        size={20}
                        className="ml-auto text-mist-dim opacity-0 transition-opacity duration-200 group-can-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8">
              <a href={`mailto:${profile.contact.email}`} className="can-hover:text-signal text-sm text-mist">
                {profile.contact.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
