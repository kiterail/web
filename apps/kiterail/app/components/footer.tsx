import { Container } from "@kiterail/ui";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="font-[family-name:var(--font-heading)] text-sm font-semibold text-brand-700">
          Kite <span className="text-brand-400">&amp;</span> Rail
        </p>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Kite &amp; Rail. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
}
