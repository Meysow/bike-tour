"use client";

import Balancer from "react-wrap-balancer";

import { ContactForm } from "@/components/sections/contact-form";
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { HighlightText } from "@/lib/utils/highlight";
import { getSectionTranslations } from "@/lib/utils/i18n-loader";

export function ContactSection(): JSX.Element {
  const { locale } = useLocalizedRoutes();
  const t = getSectionTranslations(locale, "contact");

  return (
    <section
      id="contact-section"
      aria-label="contact section"
      className="w-full pb-8 sm:pb-16 md:pb-32"
    >
      <div className="container grid max-w-4xl grid-cols-1 justify-center gap-8 md:gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <Balancer>
              <HighlightText>{t.title}</HighlightText>
            </Balancer>
          </h2>
          <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>{t.subtitle}</Balancer>
          </h3>
        </div>

        <div className="flex justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
