import SplitText from "@/components/react-bits/SplitText";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  index: string;
  title: string;
  description?: string;
  className?: string;
}

/**
 * Consistent section header: a small index mark beside the title
 * (wayfinding, not a decorative eyebrow), the title itself revealed
 * word-by-word via SplitText on scroll, an optional one-line
 * description, and a thin rule closing the block.
 */
export function SectionHeading({ index, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 sm:mb-14", className)}>
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm text-signal">{index}</span>
        <SplitText
          text={title}
          tag="h2"
          className="font-display text-3xl font-medium text-paper sm:text-4xl md:text-[2.75rem]"
          textAlign="left"
          splitType="words"
          delay={40}
          duration={0.7}
          from={{ opacity: 0, y: 18 }}
          to={{ opacity: 1, y: 0 }}
        />
      </div>
      {description && <p className="mt-4 max-w-xl text-sm text-mist sm:text-base">{description}</p>}
      <div className="mt-6 h-px w-full bg-line" />
    </div>
  );
}
