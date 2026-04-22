import Image from "next/image";
import { Container, Section } from "@kiterail/ui";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { siteConfig } from "./site.config";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero — editorial split: type left, photo right */}
      <section className="relative min-h-screen px-6 pt-40 pb-24 sm:px-12 lg:px-24">
        {/* Subtle frond ornament */}
        <div className="pointer-events-none absolute right-[12%] top-36 opacity-[0.12] select-none hidden lg:block">
          <FrondSVG />
        </div>

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_400px] lg:items-center">
          {/* Type column */}
          <div>
            <p className="mb-10 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
              <span className="h-px w-5 bg-[var(--color-surface-border)] inline-block" />
              Kite &amp; Rail · est. 2026
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-[clamp(56px,8vw,108px)] font-[400] leading-[0.95] tracking-[-0.02em] [font-variation-settings:'opsz'_144,'SOFT'_50,'WONK'_1]">
              Thoughtful things,
              <br />
              <em className="italic text-brand-600">built with care.</em>
            </h1>
            <p className="mt-10 max-w-lg text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
              I&apos;m Amy Turrin — platform leader, engineer, builder.{" "}
              Kite &amp; Rail is how I work: consulting, websites, and the occasional strange game.
            </p>
          </div>

          {/* Photo column */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src="/images/forest-mist.jpg"
                alt="Misty ridge, somewhere in the woods"
                fill
                priority
                className="object-cover saturate-90 sepia-[8%]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[oklch(96.5%_0.012_88)]/10 to-[oklch(86%_0.022_84)]/10" />
            </div>
            <p className="absolute -bottom-6 -left-8 border border-[var(--color-surface-border)] bg-[var(--color-surface)] px-4 py-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              A small studio · Cape Elizabeth, ME
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" className="bg-[var(--color-surface-raised)]">
        <Container size="sm">
          <p className="mb-10 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
            <span className="text-brand-600">—</span>
            <span className="h-px w-5 bg-[var(--color-surface-border)] inline-block" />
            A short note
          </p>
          <p className="font-[family-name:var(--font-heading)] text-[clamp(24px,3vw,36px)] font-[400] leading-[1.3] tracking-[-0.01em] [font-variation-settings:'opsz'_144,'SOFT'_50,'WONK'_1]">
            Hi, I&apos;m Amy.{" "}
            <em className="italic text-brand-600">I ship things at scale.</em>{" "}
            Fifteen years of platform leadership, digital architecture, and engineering team building
            — most recently running a $5M digital portfolio across global consumer brands at
            Kimberly-Clark. Now looking for the right opportunity and building freely, from the Maine coast.
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

      {/* Image break — Portland Head Light */}
      <div className="relative h-[480px]">
        <Image
          src="/images/maine-lighthouse.jpg"
          alt="Portland Head Light, Cape Elizabeth, Maine"
          fill
          className="object-cover brightness-[0.92] saturate-75 sepia-[6%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(96.5%_0.012_88)]/12 to-[oklch(96.5%_0.012_88)]/35" />
        <p className="absolute bottom-8 right-16 font-[family-name:var(--font-heading)] text-lg italic text-white/90">
          Portland Head Light · Cape Elizabeth, ME
        </p>
      </div>

      {/* On the bench */}
      <Section id="bench">
        <Container size="lg">
          <div className="mb-16 grid gap-10 lg:grid-cols-[220px_1fr] lg:items-start">
            <div>
              <p className="mb-5 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                <span className="text-brand-600">02</span>
                <span className="h-px w-5 bg-[var(--color-surface-border)] inline-block" />
                Currently
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(32px,4vw,44px)] font-[400] leading-[1.05] tracking-[-0.02em] [font-variation-settings:'opsz'_144,'SOFT'_50,'WONK'_1]">
                On the{" "}
                <em className="italic text-brand-600">bench</em>
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] lg:pt-10 lg:max-w-lg">
              A view of what&apos;s in progress at the moment.
            </p>
          </div>

          {/* Cards grid */}
          <div
            className="grid divide-x divide-y divide-[var(--color-surface-border)] border border-[var(--color-surface-border)] sm:grid-cols-3"
          >
            {currentlyItems.map((item, i) => (
              <div key={i} className="flex flex-col gap-4 p-8 sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                    №{String(i + 1).padStart(2, "0")}
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
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        className="bg-[var(--color-surface-raised)]"
      >
        <Container size="sm">
          <div className="text-center">
            <p className="mb-8 flex items-center justify-center gap-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
              <span className="text-brand-600">03</span>
              <span className="h-px w-5 bg-[var(--color-surface-border)] inline-block" />
              Reach out
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(48px,7vw,76px)] font-[400] leading-[1.0] tracking-[-0.02em] [font-variation-settings:'opsz'_144,'SOFT'_50,'WONK'_1]">
              Say{" "}
              <em className="italic text-brand-600">hello.</em>
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

      <Footer />
    </>
  );
}

// Minimal SVG frond ornament
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

const currentlyItems = [
  {
    status: "Open",
    title: "Platform & engineering consulting",
    description:
      "Modern CMS management and composable architecture, platform modernization, engineering team leadership. I've led organizations of 50+ and portfolios up to $5M. Get in touch.",
    kind: "Consulting · available",
  },
  {
    status: "In progress",
    title: "Mindful task management",
    description:
      "A small app for staying on top of what's important. Accessible, thoughtful visuals, no distractions.",
    kind: "App · personal",
  },
  {
    status: "Dreaming",
    title: "A walk in the woods",
    description:
      "Cozy and relaxing. Finding enjoyment in simple movement. Still mostly notes in a book.",
    kind: "Games · wip",
  },
];
