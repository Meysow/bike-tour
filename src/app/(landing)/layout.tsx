import * as React from "react";

import { Footer } from "@/components/nav/footer";
import { Header } from "@/components/nav/header";
import { WhatsAppFloatButton } from "@/components/shared/whatsapp-float-button";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default function LandingPageLayout({
  children,
}: LandingLayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">{children}</main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}
