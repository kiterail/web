import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/sections/hero-section";
import { AboutSection } from "./components/sections/about-section";
import { ImageBreak } from "./components/sections/image-break";
import { BenchSection } from "./components/sections/bench-section";
import { ContactSection } from "./components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ImageBreak
        src="/images/maine-lighthouse.jpg"
        alt="Portland Head Light, Cape Elizabeth, Maine"
        caption="Portland Head Light · Cape Elizabeth, ME"
      />
      <BenchSection />
      <ContactSection />
      <Footer />
    </>
  );
}
