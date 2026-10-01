import { cn } from "@/lib/cn";

interface PullQuoteProps {
  children: string;
  className?: string;
}

/** A short reflective statement styled as an editorial pull-quote, not a testimonial card. */
export function PullQuote({ children, className }: PullQuoteProps) {
  return (
    <p className={cn("max-w-md font-display text-xl leading-snug text-paper italic sm:text-2xl", className)}>
      “{children}”
    </p>
  );
}
