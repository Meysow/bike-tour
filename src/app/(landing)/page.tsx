import { ContactSection } from "@/components/sections/contact-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { TechSection } from "@/components/sections/tech-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ToursSection } from "@/components/sections/tours-section";

export default function LandingPage(): JSX.Element {
  return (
    <div className="grid w-full grid-cols-1 items-center justify-center gap-16 md:gap-32">
      <HeroSection />
      <ToursSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <TechSection />
      <ContactSection />
    </div>
  );
}
