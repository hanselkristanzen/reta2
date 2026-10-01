import { Maximize2 } from "lucide-react";
import { cn } from "@/lib/cn";
import type { MediaItem } from "@/types/portfolio";

interface CertificateThumbProps {
  image: MediaItem;
  onOpen: (image: MediaItem) => void;
  className?: string;
}

/**
 * Certificate-specific image treatment: object-fit: contain (never
 * crops the document), click or Enter/Space to open the full-size
 * lightbox view.
 */
export function CertificateThumb({ image, onOpen, className }: CertificateThumbProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(image)}
      className={cn(
        "group relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden border border-line bg-void p-3 transition-colors duration-300 can-hover:border-signal/30",
        className,
      )}
    >
      <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-contain" />
      <span className="absolute inset-0 flex items-center justify-center bg-void/0 opacity-0 transition-[opacity,background-color] duration-300 group-can-hover:bg-void/50 group-can-hover:opacity-100">
        <span className="flex items-center gap-2 rounded-full border border-line-strong bg-ink px-3.5 py-1.5 text-xs text-paper">
          <Maximize2 size={13} aria-hidden="true" />
          View Certificate
        </span>
      </span>
    </button>
  );
}
