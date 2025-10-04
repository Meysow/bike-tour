import { Footer } from "@/components/nav/footer";
import { Header } from "@/components/nav/header";
import { AccessoriesSection } from "@/components/sections/accessories-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FAQSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { InstagramCarousel } from "@/components/sections/instagram-carousel";
import { PartnersSection } from "@/components/sections/partners-section";
import { RentPricingSection } from "@/components/sections/rent-pricing-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ToursSection } from "@/components/sections/tours-section";
import { WhatsAppFloatButton } from "@/components/shared/whatsapp-float-button";

export default function HomePage(): JSX.Element {
  return (
    <>
      <Header />
      <div className="grid w-full grid-cols-1 items-center justify-center gap-16 md:gap-32 mt-20">
        <HeroSection />
        <ToursSection />
        <RentPricingSection />
        <AccessoriesSection />
        <TestimonialsSection />
        <InstagramCarousel />
        <PartnersSection />
        <FAQSection />
        <ContactSection />
      </div>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}
