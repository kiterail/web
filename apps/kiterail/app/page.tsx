import { Button, Container, Section, Card } from "@kiterail/ui";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <Section className="bg-gradient-to-br from-brand-50 to-white pt-32 sm:pt-40">
        <Container size="lg" className="text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Building the{" "}
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              Future
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
            Kiterail creates modern digital experiences that help businesses
            grow. From brochure sites to complex web applications, we build what
            you need.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg">Get Started</Button>
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section>
        <Container>
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold sm:text-4xl">
              What We Do
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              We specialize in building scalable, maintainable web solutions
              using modern technology.
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

      {/* About */}
      <Section className="bg-gray-50">
        <Container size="lg">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold sm:text-4xl">
                Why Kiterail?
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                We believe in building things right the first time. Our approach
                combines modern tooling with battle-tested architecture to
                deliver products that scale with your business.
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
            <div className="rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 p-12 text-center text-white">
              <p className="text-4xl font-bold">Ready to build?</p>
              <p className="mt-4 text-brand-100">
                Let&apos;s talk about your next project.
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="mt-8 border-white bg-white text-brand-700 hover:bg-brand-50"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  );
}

const services = [
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "Custom websites and web applications built with React, Next.js, and modern tooling.",
  },
  {
    icon: "🎨",
    title: "Design Systems",
    description:
      "Consistent, reusable component libraries that keep your brand cohesive across products.",
  },
  {
    icon: "⚡",
    title: "Performance",
    description:
      "Fast-loading, SEO-optimized sites that score high on Core Web Vitals.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description:
      "Beautiful experiences on every device, from mobile to ultrawide.",
  },
  {
    icon: "🔧",
    title: "Maintenance & Support",
    description:
      "Ongoing support, updates, and monitoring to keep your sites running smoothly.",
  },
  {
    icon: "🚀",
    title: "Hosting & Deployment",
    description:
      "Affordable, scalable hosting with CI/CD pipelines for seamless updates.",
  },
];

const values = [
  "Modern tech stack — React, Next.js, Tailwind CSS, TypeScript",
  "Shared design system across all projects for consistency",
  "Performance-first approach with static generation where possible",
  "Affordable hosting on platforms like Vercel and Cloudflare",
  "Open, transparent development process",
];
