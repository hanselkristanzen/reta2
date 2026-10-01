import { cn } from "@/lib/cn";

interface ProjectNumeralProps {
  number: string;
  className?: string;
}

/** A large, quiet numeral used as an independent layout element, not a badge. */
export function ProjectNumeral({ number, className }: ProjectNumeralProps) {
  return (
    <span
      className={cn(
        "pointer-events-none block font-display text-[5.5rem] leading-none font-medium text-transparent select-none",
        "[-webkit-text-stroke:1px_var(--color-line-strong)] sm:text-[8rem] md:text-[10rem]",
        className,
      )}
      aria-hidden="true"
    >
      {number}
    </span>
  );
}
