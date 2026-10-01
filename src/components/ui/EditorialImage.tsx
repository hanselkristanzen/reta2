import { cn } from "@/lib/cn";
import type { MediaItem } from "@/types/portfolio";

interface EditorialImageProps {
  photo: MediaItem;
  onOpen: (photo: MediaItem) => void;
  /** Tailwind aspect utility, e.g. "aspect-[16/10]". */
  aspect?: string;
  /** Vertical focal point for object-cover cropping. */
  position?: string;
  showCaption?: boolean;
  className?: string;
}

/**
 * A sharp-edged, click-to-enlarge photograph. Deliberately not a card:
 * no radius, no border, no gradient overlay. Motion is a barely-there
 * scale on hover (pointer devices only), and the caption is static text
 * so it exists on touch screens too.
 */
export function EditorialImage({
  photo,
  onOpen,
  aspect = "aspect-[16/10]",
  position = "object-center",
  showCaption = true,
  className,
}: EditorialImageProps) {
  return (
    <figure className={className}>
      <button
        type="button"
        onClick={() => onOpen(photo)}
        aria-label={`Enlarge: ${photo.caption ?? photo.alt}`}
        className="group block w-full overflow-hidden bg-ink"
      >
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
          className={cn(
            "w-full object-cover transition-transform duration-500 ease-out group-can-hover:scale-[1.02]",
            aspect,
            position,
          )}
        />
      </button>
      {showCaption && photo.caption && (
        <figcaption className="mt-2 font-mono text-[11px] leading-snug text-mist-dim">{photo.caption}</figcaption>
      )}
    </figure>
  );
}
