import { Button, Container, Section, Card } from "@kiterail/ui";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <Section className="bg-gradient-to-br from-brand-50 via-white to-brand-50/30 pt-32 sm:pt-40">
        <Container size="lg" className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Creative Technology Studio
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Design. Code.{" "}
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              Launch.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
            Kite &amp; Rail builds modern web experiences, interactive products,
            and digital platforms — from first sketch to live deployment.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg">
              <a href="#contact">Start a Project</a>
            </Button>
            <Button variant="secondary" size="lg">
              <a href="#projects">See Our Work</a>
            </Button>
          </div>
        </Container>
      </Section>

      {/* What We Do */}
      <Section>
        <Container>
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold sm:text-4xl">
              What We Build
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              We take ideas from concept to production using modern, scalable
              technology.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-2xl">
                  {service.icon}
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Projects */}
      <Section id="projects" className="bg-gray-50">
        <Container>
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold sm:text-4xl">
              Projects
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Things we&apos;re building and shipping.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{project.icon}</span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${project.statusColor}`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-brand-50 px-2 py-1 text-xs font-medium text-brand-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* About */}
      <Section id="about">
        <Container size="lg">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold sm:text-4xl">
                About Kite &amp; Rail
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                I&apos;m Aspen — a developer and designer who loves building
                things from scratch. Kite &amp; Rail is my studio for turning
                ideas into real, shipped products.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Whether it&apos;s a branding site, a social platform, or an
                interactive game, I care about clean code, thoughtful design,
                and getting things live.
              </p>
              <ul className="mt-8 space-y-4">
                {values.map((value) => (
                  <li key={value} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500 text-xs text-white">
                      ✓
                    </span>
                    <span className="text-gray-700">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-12 text-center text-white">
              <p className="font-[family-name:var(--font-heading)] text-3xl font-bold">
                Let&apos;s build something together.
              </p>
              <p className="mt-4 text-brand-200">
                Got a project idea? I&apos;d love to hear about it.
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="mt-8 border-white bg-white text-brand-700 hover:bg-brand-50"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact */}
      <Section id="contact" className="bg-gray-50">
        <Container size="md">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-600">
              Have a project in mind, want a consultation, or just want to say
              hello? Drop me a line.
            </p>
          </div>
          <form
            className="mt-12 space-y-6"
            action="https://formspree.io/f/placeholder"
            method="POST"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                What are you looking for?
              </label>
              <select
                id="subject"
                name="subject"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              >
                <option>New website or web app</option>
                <option>Consultation</option>
                <option>Collaboration / partnership</option>
                <option>Just saying hello</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
            </div>
            <div className="text-center">
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
    icon: "🌐",
    title: "Websites & Web Apps",
    description:
      "Custom sites and applications built with React, Next.js, and TypeScript — fast, accessible, and built to last.",
  },
  {
    icon: "🎨",
    title: "Brand & Design",
    description:
      "Cohesive visual identity and component systems that keep your product looking sharp across every screen.",
  },
  {
    icon: "🎮",
    title: "Interactive Experiences",
    description:
      "Games, creative tools, and interactive platforms that go beyond the standard web page.",
  },
  {
    icon: "🚀",
    title: "Launch & Hosting",
    description:
      "Affordable, scalable deployment on modern platforms — from static sites to full-stack applications.",
  },
  {
    icon: "🔧",
    title: "Consulting",
    description:
      "Technical guidance on architecture, tooling, and strategy for teams building digital products.",
  },
  {
    icon: "📱",
    title: "Responsive & Accessible",
    description:
      "Every project is built mobile-first and accessible by default — no audience left behind.",
  },
];

const projects = [
  {
    icon: "🦌",
    title: "Fawnlight",
    description:
      "An upcoming interactive experience. More details coming soon.",
    status: "Coming Soon",
    statusColor: "bg-amber-100 text-amber-800",
    tech: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: "📓",
    title: "Journal Platform",
    description:
      "A modern take on personal blogging and community journaling — inspired by the golden age of LiveJournal.",
    status: "In Development",
    statusColor: "bg-blue-100 text-blue-800",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
  },
  {
    icon: "🏠",
    title: "Kite & Rail",
    description:
      "This very site — our monorepo-powered hub with a shared design system across all projects.",
    status: "Live",
    statusColor: "bg-green-100 text-green-800",
    tech: ["Next.js", "Turborepo", "Tailwind", "Vercel"],
  },
  {
    icon: "✨",
    title: "Your Project?",
    description:
      "Got an idea you want to bring to life? Let's talk about making it real.",
    status: "Open",
    statusColor: "bg-brand-100 text-brand-800",
    tech: ["Let's Chat"],
  },
];

const values = [
  "Full-stack development — React, Next.js, TypeScript, Tailwind",
  "Shared design system across every project for consistency",
  "Performance-first with static generation where possible",
  "Affordable modern hosting on Vercel and Cloudflare",
  "Transparent process from concept to launch",
];
