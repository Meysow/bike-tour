"use client";

import Link from "next/link";

import { PartnersStack } from "@/data/partners-stack";

import { Icons } from "@/components/shared/icons";
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { HighlightText } from "@/lib/utils/highlight";
import { getSectionTranslations } from "@/lib/utils/i18n-loader";
import Balancer from "react-wrap-balancer";

export function PartnersSection(): JSX.Element {
  const { locale } = useLocalizedRoutes();
  const t = getSectionTranslations(locale, "partners");

  return (
    <section id="partners-section" aria-label="partners section">
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <Balancer>
            <HighlightText gradient={true}>{t.title}</HighlightText>
          </Balancer>
        </h2>
        <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
          <Balancer>
            <HighlightText gradient={false} className="text-foreground">
              {t.subtitle}
            </HighlightText>
          </Balancer>
        </h3>
      </div>
      <div className="hidden w-full bg-background py-8 sm:grid mt-8">
        <div className="container flex w-full max-w-4xl flex-wrap place-items-center items-center justify-center gap-6 sm:gap-[38px] md:gap-[36px] lg:gap-x-12">
          {PartnersStack.map((partner) => {
            const Icon = Icons[partner.icon as keyof typeof Icons];

            return (
              <Link
                key={partner.title}
                href={partner.href}
                target="_blank"
                rel="noreferrer"
                className="transition-all duration-200 ease-out hover:opacity-70"
              >
                <Icon />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
