import { Container } from "@kiterail/ui";

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center gap-4 text-center">
        <p className="font-[family-name:var(--font-heading)] text-sm tracking-wide text-[var(--color-text-muted)]">
          Kite &amp; Rail
        </p>
        <p className="text-xs text-[var(--color-text-muted)]/60">
          &copy; {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
}
