"use client";

import { useState } from "react";
import { Container } from "@kiterail/ui";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-[var(--color-surface)]/80 backdrop-blur-xl">
      <Container size="xl" className="flex h-20 items-center justify-between">
        <a
          href="/"
          className="font-[family-name:var(--font-heading)] text-lg tracking-wide text-[var(--color-text-primary)]"
        >
          Kite <span className="text-brand-400">&amp;</span> Rail
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] uppercase tracking-[0.12em] text-[var(--color-text-muted)] transition-colors duration-300 hover:text-[var(--color-text-primary)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-5 w-5 text-[var(--color-text-muted)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </Container>

      {mobileOpen && (
        <div className="border-t border-[var(--color-surface-border)] bg-[var(--color-surface)] md:hidden">
          <Container className="flex flex-col gap-5 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
