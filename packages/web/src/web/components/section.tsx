import type { ReactNode } from "react";
import { cn } from "../lib/utils";
import { Reveal } from "./reveal";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Fundo alternativo levemente mais claro que o preto profundo. */
  tone?: "ink" | "soft" | "light";
}

export function Section({ id, children, className, tone = "ink" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "grain relative overflow-hidden px-6 py-24 md:px-10 md:py-32",
        tone === "ink" && "bg-ink",
        tone === "soft" && "bg-ink-soft",
        tone === "light" && "bg-offwhite text-graphite",
        className,
      )}
    >
      <div className="relative mx-auto w-full max-w-[1200px]">{children}</div>
    </section>
  );
}

interface EyebrowProps {
  index?: string;
  children: ReactNode;
  tone?: "gold" | "graphite";
}

export function Eyebrow({ index, children, tone = "gold" }: EyebrowProps) {
  return (
    <Reveal className="flex items-center gap-4">
      {index ? (
        <span
          className={cn(
            "label-xs",
            tone === "gold" ? "text-gold/70" : "text-graphite/50",
          )}
        >
          {index}
        </span>
      ) : null}
      <span className={cn("h-px w-10", tone === "gold" ? "bg-gold/40" : "bg-graphite/25")} />
      <span className={cn("label-xs", tone === "gold" ? "text-gold" : "text-graphite/70")}>
        {children}
      </span>
    </Reveal>
  );
}

interface TitleProps {
  children: ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: TitleProps) {
  return (
    <Reveal delay={80}>
      <h2 className={cn("display mt-7 max-w-3xl text-4xl md:text-6xl", className)}>{children}</h2>
    </Reveal>
  );
}
