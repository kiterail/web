import { Section, Container } from "@kiterail/ui";
import { SectionLabel } from "../section-label";
import { benchItems, type BenchItem } from "../../content/bench";

function BenchCard({ item, index }: { item: BenchItem; index: number }) {
  return (
    <div className="flex flex-col gap-4 p-8 sm:p-10">
      <div className="flex items-center justify-between">
        <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
          №{String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-brand-600">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
          {item.status}
        </span>
      </div>
      <h3 className="font-[family-name:var(--font-heading)] text-[22px] font-[400] leading-[1.15] tracking-[-0.015em] [font-variation-settings:'opsz'_36,'SOFT'_50,'WONK'_1]">
        {item.title}
      </h3>
      <p className="flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {item.description}
      </p>
      <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
        {item.kind}
      </p>
    </div>
  );
}

export function BenchSection() {
  return (
    <Section id="bench">
      <Container size="lg">
        <div className="mb-16 grid gap-10 lg:grid-cols-[220px_1fr] lg:items-start">
          <div>
            <SectionLabel marker="02" label="Currently" className="mb-5" />
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(32px,4vw,44px)] font-[400] leading-[1.05] tracking-[-0.02em] [font-variation-settings:'opsz'_144,'SOFT'_50,'WONK'_1]">
              On the <em className="italic text-brand-600">bench</em>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] lg:pt-10 lg:max-w-lg">
            A view of what&apos;s in progress at the moment.
          </p>
        </div>

        <div className="grid divide-x divide-y divide-[var(--color-surface-border)] border border-[var(--color-surface-border)] sm:grid-cols-3">
          {benchItems.map((item, i) => (
            <BenchCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
