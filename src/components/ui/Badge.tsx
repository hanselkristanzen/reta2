import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeTone = "default" | "signal" | "wire" | "high" | "medium" | "low";

const TONE_CLASSES: Record<BadgeTone, string> = {
  default: "border-line text-mist bg-ink-raised/60",
  signal: "border-signal/30 text-signal bg-signal-soft",
  wire: "border-wire/30 text-wire bg-wire-soft",
  high: "border-crimson/30 text-crimson bg-crimson-soft",
  medium: "border-amber/30 text-amber bg-amber-soft",
  low: "border-wire/30 text-wire bg-wire-soft",
};

interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  mono?: boolean;
  className?: string;
}

export function Badge({ children, tone = "default", mono = true, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs leading-none whitespace-nowrap",
        mono && "font-mono tracking-tight",
        TONE_CLASSES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
