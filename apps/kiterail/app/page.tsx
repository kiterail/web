import Image from "next/image";
import { Button, Container, Section } from "@kiterail/ui";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero — full viewport, image with overlay */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="/images/golden-forest.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[var(--color-surface)]/70" />
        <div className="relative z-10 px-6 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-light leading-snug tracking-wide sm:text-5xl md:text-6xl lg:text-7xl">
            Thoughtful things,
            <br />
            <em className="text-brand-300">built with care.</em>
          </h1>
          <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed tracking-wide text-[var(--color-text-secondary)]">
            Kite &amp; Rail is a small technology studio building websites,
            platforms, games, and digital experiences.
          </p>
        </div>
      </section>

      {/* About */}
      <Section id="about">
        <Container size="sm">
          <p className="text-[13px] uppercase tracking-[0.16em] text-brand-400">
            About
          </p>
          <h2 className="mt-6 font-[family-name:var(--font-heading)] text-3xl font-light leading-snug sm:text-4xl">
            Hi, I&apos;m Amy.
          </h2>
          <div className="mt-10 space-y-6 text-[var(--color-text-secondary)] leading-relaxed">
            <p>
              Kite &amp; Rail is the studio of Amy Turrin, a technical platform
              leader with 15+ years building digital experiences at scale. By
              day, I lead engineering teams and platform strategy at the
              enterprise level. Here, I build the things I want to exist.
            </p>
            <p>
              The name is a nod to Margaret Atwood&apos;s MaddAddam trilogy,
              where creatures are named in pairs. A kite and a rail are two
              birds with very different dispositions, and that felt right for a
              studio that moves between big ambitions and quiet, careful craft.
            </p>
            <p>Right now we&apos;re building the foundation. More to come.</p>
          </div>
        </Container>
      </Section>

      {/* Image break */}
      <div className="relative h-[40vh] sm:h-[50vh]">
        <Image
          src="/images/forest-mist.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[var(--color-surface)]/40" />
      </div>

      {/* What we do — minimal */}
      <Section>
        <Container size="sm">
          <p className="text-[13px] uppercase tracking-[0.16em] text-brand-400">
            What we do
          </p>
          <h2 className="mt-6 font-[family-name:var(--font-heading)] text-3xl font-light leading-snug sm:text-4xl">
            Build, ship, evolve.
          </h2>
          <div className="mt-14 space-y-12">
            {services.map((service) => (
              <div
                key={service.title}
                className="border-l border-[var(--color-surface-border)] pl-8"
              >
                <h3 className="text-sm tracking-wide text-[var(--color-text-primary)]">
                  {service.title}
                </h3>
                <p className="mt-2 text-[var(--color-text-secondary)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        className="border-t border-[var(--color-surface-border)]"
      >
        <Container size="sm">
          <p className="text-[13px] uppercase tracking-[0.16em] text-brand-400">
            Contact
          </p>
          <h2 className="mt-6 font-[family-name:var(--font-heading)] text-3xl font-light leading-snug sm:text-4xl">
            Say hello.
          </h2>
          <p className="mt-6 text-[var(--color-text-secondary)]">
            Have a project in mind, or just want to connect?
          </p>
          <form
            className="mt-12 space-y-6"
            action="https://formspree.io/f/placeholder"
            method="POST"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-[13px] uppercase tracking-[0.1em] text-[var(--color-text-muted)]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="block w-full border-0 border-b border-[var(--color-surface-border)] bg-transparent px-0 py-3 text-sm text-[var(--color-text-primary)] transition-colors focus:border-brand-400 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[13px] uppercase tracking-[0.1em] text-[var(--color-text-muted)]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="block w-full border-0 border-b border-[var(--color-surface-border)] bg-transparent px-0 py-3 text-sm text-[var(--color-text-primary)] transition-colors focus:border-brand-400 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-[13px] uppercase tracking-[0.1em] text-[var(--color-text-muted)]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="block w-full border-0 border-b border-[var(--color-surface-border)] bg-transparent px-0 py-3 text-sm text-[var(--color-text-primary)] transition-colors focus:border-brand-400 focus:outline-none"
              />
            </div>
            <div className="pt-6">
              <Button type="submit" size="lg">
                Send Message
              </Button>
            </div>
          </form>
        </Container>
      </Section>

      <Footer />
    </>
  );
}

const services = [
  {
    title: "Websites & Platforms",
    description:
      "Modern web experiences built with React, Next.js, and TypeScript. From brochure sites to complex multi-brand ecosystems.",
  },
  {
    title: "Creative Projects",
    description:
      "Games, interactive tools, and community platforms. The things that are fun to make and worth using.",
  },
  {
    title: "Platform & Architecture Consulting",
    description:
      "CMS strategy, cloud migration, platform modernization, and engineering governance for teams navigating complexity at scale.",
  },
  {
    title: "Compliance & Accessibility",
    description:
      "GDPR, CCPA, COPPA, and WCAG expertise baked in from the start, not bolted on at the end.",
  },
];
