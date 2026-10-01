import { cn } from "@/lib/cn";

interface StatCalloutProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCallout({ value, label, className }: StatCalloutProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className="font-display text-3xl font-medium text-paper tabular-nums sm:text-4xl">{value}</span>
      <span className="text-xs text-mist-dim uppercase tracking-wide">{label}</span>
    </div>
  );
}
