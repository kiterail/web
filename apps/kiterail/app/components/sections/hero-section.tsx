import Image from "next/image";
import { SectionLabel } from "../section-label";
import { heroContent } from "../../content/hero";

function FrondSVG() {
  return (
    <svg width="80" height="192" viewBox="0 0 40 96" fill="none">
      <path d="M20 96 L20 4" stroke="currentColor" strokeWidth="1" className="text-brand-600" />
      {Array.from({ length: 14 }).map((_, i) => {
        const y = 8 + i * 6;
        const len = Math.max(2, 16 - i * 0.9);
        return (
          <g key={i}>
            <path
              d={`M20 ${y} Q ${20 - len * 0.4} ${y - 1.5}, ${20 - len} ${y - 3}`}
              stroke="currentColor"
              strokeWidth="0.9"
              strokeLinecap="round"
              className="text-brand-600"
            />
            <path
              d={`M20 ${y} Q ${20 + len * 0.4} ${y - 1.5}, ${20 + len} ${y - 3}`}
              stroke="currentColor"
              strokeWidth="0.9"
              strokeLinecap="round"
              className="text-brand-600"
            />
          </g>
        );
      })}
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen px-6 pt-40 pb-24 sm:px-12 lg:px-24">
      <div className="pointer-events-none absolute right-[12%] top-36 opacity-[0.12] select-none hidden lg:block">
        <FrondSVG />
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_400px] lg:items-center">
        <div>
          <SectionLabel label={heroContent.eyebrow} className="mb-10" />
          <h1 className="font-[family-name:var(--font-heading)] text-[clamp(56px,8vw,108px)] font-[400] leading-[0.95] tracking-[-0.02em] [font-variation-settings:'opsz'_144,'SOFT'_50,'WONK'_1]">
            {heroContent.tagline}
            <br />
            <em className="italic text-brand-600">{heroContent.taglineEm}</em>
          </h1>
          <p className="mt-10 max-w-lg text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
            {heroContent.body}
          </p>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
            <Image
              src={heroContent.image.src}
              alt={heroContent.image.alt}
              fill
              priority
              className="object-cover saturate-90 sepia-[8%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[oklch(96.5%_0.012_88)]/10 to-[oklch(86%_0.022_84)]/10" />
          </div>
          <p className="absolute -bottom-6 -left-8 border border-[var(--color-surface-border)] bg-[var(--color-surface)] px-4 py-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            {heroContent.image.caption}
          </p>
        </div>
      </div>
    </section>
  );
}
