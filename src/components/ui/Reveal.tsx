import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  /** Stagger offset in ms. Keep to 30–80ms steps (emil-design-eng). */
  delay?: number;
  className?: string;
}

/**
 * Section/content entrance: a short opacity + 10px rise, driven by a CSS
 * transition (interruptible, transform/opacity only, off the main thread)
 * and triggered once by IntersectionObserver. Under prefers-reduced-motion
 * the rise is dropped and only the opacity change remains (see index.css).
 *
 * Elements already scrolled past (deep-link to #contact, then scroll up)
 * are revealed immediately rather than left invisible.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={visible ? "in" : "out"}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn("reveal", className)}
    >
      {children}
    </div>
  );
}
