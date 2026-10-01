import { Expand } from "lucide-react";
import { cn } from "@/lib/cn";
import type { MediaItem } from "@/types/portfolio";

interface PhotoThumbProps {
  photo: MediaItem;
  onOpen: (photo: MediaItem) => void;
  aspect?: "video" | "square" | "portrait";
  className?: string;
}

const ASPECT_CLASSES: Record<NonNullable<PhotoThumbProps["aspect"]>, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[4/5]",
};

/** Normal (non-certificate) photo: subtle hover lift, lazy-loaded, click to enlarge. */
export function PhotoThumb({ photo, onOpen, aspect = "video", className }: PhotoThumbProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(photo)}
      className={cn(
        "group relative w-full overflow-hidden border border-line bg-ink-raised text-left transition-[border-color,transform] duration-300 can-hover:border-signal/30",
        ASPECT_CLASSES[aspect],
        className,
      )}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-can-hover:scale-[1.04]"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-can-hover:opacity-100" />
      <span className="absolute top-2.5 right-2.5 rounded-full border border-line bg-void/70 p-1.5 text-paper opacity-0 transition-opacity duration-300 group-can-hover:opacity-100">
        <Expand size={13} aria-hidden="true" />
      </span>
      {photo.caption && (
        <span className="absolute right-0 bottom-0 left-0 translate-y-2 px-3 py-2 text-xs text-paper opacity-0 transition-[opacity,transform] duration-300 group-can-hover:translate-y-0 group-can-hover:opacity-100">
          {photo.caption}
        </span>
      )}
    </button>
  );
}
