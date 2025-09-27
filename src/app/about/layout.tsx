import * as React from "react";

import { Footer } from "@/components/nav/footer";
import { Header } from "@/components/nav/header";

interface AboutLayoutProps {
  children: React.ReactNode;
}

export default function AboutLayout({
  children,
}: AboutLayoutProps): JSX.Element {
  return (
    <div className="flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
