import { ShieldHalf, Smartphone } from "lucide-react";

/**
 * Original decorative graphic representing "mobile security analysis"
 * in the abstract — deliberately not a mockup of any real application
 * screen. The actual technical evidence for this project (HTTP traffic,
 * token payloads, brute-force sequences) names a real hospital and its
 * live API domain, so it is not reproduced here or anywhere on the
 * public site; this graphic stands in as the project's visual anchor
 * instead. Sized for a full-width banner rather than a small card.
 */
export function SecurityVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-ink via-ink to-ink-raised">
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(73,216,141,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(73,216,141,0.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* oversized quiet background glyph for scale at banner size */}
      <Smartphone
        size={340}
        strokeWidth={0.6}
        className="absolute -right-12 text-paper/[0.04] sm:size-[420px]"
        aria-hidden="true"
      />

      <div
        className="absolute inset-x-10 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-signal/60 to-transparent motion-safe:animate-pulse"
        aria-hidden="true"
      />

      <div className="relative flex flex-col items-center gap-4">
        <div className="relative flex h-28 w-28 items-center justify-center rounded-2xl border border-signal/30 bg-void/60 sm:h-32 sm:w-32">
          <Smartphone size={42} className="text-mist" aria-hidden="true" />
          <ShieldHalf
            size={26}
            className="absolute -right-3 -bottom-3 rounded-full bg-void p-1 text-signal"
            aria-hidden="true"
          />
        </div>
        <span className="rounded-full border border-line-strong bg-void/70 px-3.5 py-1.5 font-mono text-[11px] tracking-wide text-mist">
          STATIC + DYNAMIC ANALYSIS
        </span>
      </div>

      {(["top-4 left-4", "top-4 right-4", "bottom-4 left-4", "bottom-4 right-4"] as const).map((pos) => (
        <span
          key={pos}
          className={`absolute ${pos} h-4 w-4 border-signal/50 ${pos.includes("top") ? "border-t" : "border-b"} ${pos.includes("left") ? "border-l" : "border-r"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
