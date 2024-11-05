import { AccessoriesSection } from "@/components/sections/accessories-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FAQSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { RentPricingSection } from "@/components/sections/rent-pricing-section";
import { TechSection } from "@/components/sections/tech-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ToursSection } from "@/components/sections/tours-section";

export default function LandingPage(): JSX.Element {
  return (
    <div className="grid w-full grid-cols-1 items-center justify-center gap-16 md:gap-32">
      <HeroSection />
      <ToursSection />
      <RentPricingSection />
      <AccessoriesSection />
      <TestimonialsSection />
      <FAQSection />
      <TechSection />
      <ContactSection />
    </div>
  );
}
