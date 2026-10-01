import { useId } from "react";
import { Dialog } from "@/components/ui/Dialog";
import type { MediaItem } from "@/types/portfolio";

interface LightboxProps {
  item: MediaItem | null;
  onClose: () => void;
}

/**
 * Full-size image view for certificates and photos. Uses
 * object-fit: contain so the entire certificate stays visible and
 * legible rather than being cropped to fill a frame.
 */
export function Lightbox({ item, onClose }: LightboxProps) {
  const titleId = useId();

  return (
    <Dialog isOpen={item !== null} onClose={onClose} titleId={titleId} panelClassName="max-w-4xl bg-void">
      {item && (
        <div className="flex flex-col">
          <div className="flex max-h-[75vh] items-center justify-center bg-void p-3 sm:p-6">
            <img
              src={item.src}
              alt={item.alt}
              className="max-h-[70vh] w-auto max-w-full object-contain"
            />
          </div>
          {item.caption ? (
            <p id={titleId} className="border-t border-line px-6 py-4 text-sm text-mist">
              {item.caption}
            </p>
          ) : (
            <span id={titleId} className="sr-only">
              {item.alt}
            </span>
          )}
        </div>
      )}
    </Dialog>
  );
}
