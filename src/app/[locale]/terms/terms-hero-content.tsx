"use client";

import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { getSectionTranslations } from "@/lib/utils/i18n-loader";
import Balancer from "react-wrap-balancer";

export function TermsHeroContent(): JSX.Element {
  const { locale } = useLocalizedRoutes();
  const t = getSectionTranslations(locale, "legal").terms;

  return (
    <div className="text-center space-y-6">
      <h1 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg">
        <Balancer>{t.title}</Balancer>
      </h1>
      <p className="max-w-3xl mx-auto text-lg text-white/95 sm:text-xl sm:leading-8 drop-shadow-md">
        <Balancer>{t.subtitle}</Balancer>
      </p>
    </div>
  );
}
