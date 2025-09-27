import * as React from "react";

import { Footer } from "@/components/nav/footer";
import { Header } from "@/components/nav/header";

interface ToursLayoutProps {
  children: React.ReactNode;
}

export default function ToursLayout({
  children,
}: ToursLayoutProps): JSX.Element {
  return (
    <div className="flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
