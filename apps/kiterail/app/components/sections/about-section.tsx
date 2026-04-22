import { Section, Container } from "@kiterail/ui";
import { SectionLabel } from "../section-label";
import { aboutContent } from "../../content/about";
import { siteConfig } from "../../site.config";

export function AboutSection() {
  return (
    <Section id="about" className="bg-[var(--color-surface-raised)]">
      <Container size="sm">
        <SectionLabel marker="—" label={aboutContent.eyebrow} className="mb-10" />
        <p className="font-[family-name:var(--font-heading)] text-[clamp(24px,3vw,36px)] font-[400] leading-[1.3] tracking-[-0.01em] [font-variation-settings:'opsz'_144,'SOFT'_50,'WONK'_1]">
          {aboutContent.intro}{" "}
          <em className="italic text-brand-600">{aboutContent.introEm}</em>{" "}
          {aboutContent.bio}
        </p>
        <div className="mt-12 flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-surface-border)] bg-[var(--color-surface)] font-[family-name:var(--font-heading)] text-lg italic text-brand-600">
            A
          </div>
          <div>
            <p className="font-[family-name:var(--font-heading)] text-base italic text-[var(--color-text-primary)]">
              {siteConfig.owner.name}
            </p>
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
              {siteConfig.owner.title} · {siteConfig.owner.location}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
