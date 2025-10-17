import { Footer } from "@/components/nav/footer";
import { Header } from "@/components/nav/header";
import { AccessoriesSection } from "@/components/sections/accessories-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { InstagramCarousel } from "@/components/sections/instagram-carousel";
import { LocationMapSection } from "@/components/sections/location-map-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { RentPricingSection } from "@/components/sections/rent-pricing-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ToursSection } from "@/components/sections/tours-section";
import { WhatsAppFloatButtonWrapper } from "@/components/shared/whatsapp-float-button-wrapper";
import { generatePageMetadata } from "@/lib/utils/metadata";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => generatePageMetadata(params, "home");

export default function HomePage(): JSX.Element {
  return (
    <>
      <Header />
      <div className="grid w-full grid-cols-1 items-center justify-center gap-16 md:gap-32 mt-20 lg:mt-28">
        <HeroSection />
        <ToursSection />
        <RentPricingSection />
        <AccessoriesSection />
        <TestimonialsSection />
        <InstagramCarousel />
        <PartnersSection />
        <ContactSection />
        <LocationMapSection />
      </div>
      <Footer />
      <WhatsAppFloatButtonWrapper />
    </>
  );
}
