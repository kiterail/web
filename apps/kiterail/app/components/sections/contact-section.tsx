import { Section, Container } from "@kiterail/ui";
import { SectionLabel } from "../section-label";
import { siteConfig } from "../../site.config";

export function ContactSection() {
  return (
    <Section id="contact" className="bg-[var(--color-surface-raised)]">
      <Container size="sm">
        <div className="text-center">
          <SectionLabel marker="03" label="Reach out" className="mb-8 justify-center" />
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(48px,7vw,76px)] font-[400] leading-[1.0] tracking-[-0.02em] [font-variation-settings:'opsz'_144,'SOFT'_50,'WONK'_1]">
            Say <em className="italic text-brand-600">hello.</em>
          </h2>
          <p className="mx-auto mt-7 max-w-md text-base leading-relaxed text-[var(--color-text-secondary)]">
            A project, a collaboration, or just want to trade notes?
            I&apos;m based in Cape Elizabeth, Maine — but the work goes anywhere.
          </p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="mt-12 inline-flex items-center gap-3 rounded-full border border-[var(--color-text-primary)] px-8 py-5 font-[family-name:var(--font-sans)] text-sm tracking-[0.06em] text-[var(--color-text-primary)] transition-all hover:bg-[var(--color-text-primary)] hover:text-[var(--color-surface)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            {siteConfig.contact.email}
            <span className="text-base">→</span>
          </a>
        </div>
      </Container>
    </Section>
  );
}
