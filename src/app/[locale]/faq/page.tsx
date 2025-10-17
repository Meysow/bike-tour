import { Footer } from "@/components/nav/footer";
import { Header } from "@/components/nav/header";
import { FAQSection } from "@/components/sections/faq-section";
import { WhatsAppFloatButtonWrapper } from "@/components/shared/whatsapp-float-button-wrapper";

export default function FAQPage(): JSX.Element {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background mt-20 lg:mt-28">
        <div className="py-20 md:py-32">
          <FAQSection />
        </div>
      </div>
      <Footer />
      <WhatsAppFloatButtonWrapper />
    </>
  );
}
