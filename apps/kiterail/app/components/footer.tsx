import { Container } from "@kiterail/ui";

export function Footer() {
  return (
    <footer className="py-12 border-t border-[var(--color-surface-border)]">
      <Container
        size="xl"
        className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left"
      >
        <p className="font-[family-name:var(--font-heading)] text-sm italic tracking-wide text-[var(--color-text-muted)] [font-variation-settings:'opsz'_36,'SOFT'_50,'WONK'_1]">
          Kite &amp; Rail
        </p>
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]/60">
          Cape Elizabeth, Maine &middot; {new Date().getFullYear()}
        </p>
        <p className="font-[family-name:var(--font-heading)] text-[12px] italic text-[var(--color-text-muted)]/70">
          “After everything that's happened, how can the world still be so beautiful? Because it is.” <br/> ― Margaret Atwood, Oryx and Crake
        </p>
      </Container>
    </footer>
  );
}
