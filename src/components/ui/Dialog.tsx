import type { ReactNode } from "react";
import { X } from "lucide-react";
import { useDialogBehavior } from "@/hooks/useDialogBehavior";
import { cn } from "@/lib/cn";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  titleId: string;
  children: ReactNode;
  panelClassName?: string;
}

/**
 * Accessible dialog shell: focus trap, ESC to close, click-outside to
 * close, background scroll lock, and focus restore — all via
 * useDialogBehavior. Shared by ProjectCaseStudyModal and Lightbox so
 * both get identical, single-source a11y behavior.
 */
export function Dialog({ isOpen, onClose, titleId, children, panelClassName }: DialogProps) {
  const containerRef = useDialogBehavior(isOpen, onClose);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="absolute inset-0 bg-void/85 backdrop-blur-sm" aria-hidden="true" />
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          "relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-line-strong bg-ink shadow-2xl shadow-black/60",
          panelClassName,
        )}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-10 rounded-full border border-line bg-void/70 p-2 text-mist transition-colors can-hover:border-signal/40 can-hover:text-signal"
        >
          <X size={18} aria-hidden="true" />
        </button>
        {children}
      </div>
    </div>
  );
}
