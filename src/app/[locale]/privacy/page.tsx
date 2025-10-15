import Image from "next/image";

import { Footer } from "@/components/nav/footer";
import { Header } from "@/components/nav/header";
import { WhatsAppFloatButtonWrapper } from "@/components/shared/whatsapp-float-button-wrapper";
import { PrivacyPageContent } from "./privacy-page-content";

export default function PrivacyPage(): JSX.Element {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background mt-20 lg:mt-28">
        {/* Hero Section with Banner */}
        <section className="relative py-20 md:py-32 min-h-[400px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/cgu/cgu.jpg"
              alt="Privacy Policy"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <PrivacyPageContent />
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppFloatButtonWrapper />
    </>
  );
}
