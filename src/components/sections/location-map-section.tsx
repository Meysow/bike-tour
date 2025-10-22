"use client";

import {
  CalendarIcon,
  ClockIcon,
  DrawingPinIcon,
  EnvelopeClosedIcon,
  MobileIcon,
  PaperPlaneIcon,
} from "@radix-ui/react-icons";

import { GoogleMap } from "@/components/shared/google-map";
import { siteConfig } from "@/config/site";
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { HighlightText } from "@/lib/utils/highlight";
import { getSectionTranslations } from "@/lib/utils/i18n-loader";

export function LocationMapSection(): JSX.Element {
  const { locale } = useLocalizedRoutes();
  const t = getSectionTranslations(locale, "findUs");

  return (
    <section className="pt-4 pb-16 md:pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-urbanist text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            <HighlightText>{t.title}</HighlightText>
          </h2>

          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <PaperPlaneIcon className="size-5" />
              <span className="font-medium">{siteConfig.company.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <DrawingPinIcon className="size-5" />
              <span>{t.location.metro}</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="size-5" />
              <span>{t.location.walkingTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="size-5" />
              <span>{t.location.hours}</span>
            </div>
            <div className="flex items-center gap-2">
              <MobileIcon className="size-5" />
              <span>{siteConfig.company.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeClosedIcon className="size-5" />
              <span>{siteConfig.company.email}</span>
            </div>
          </div>
        </div>
        <GoogleMap address={siteConfig.company.location} />
      </div>
    </section>
  );
}
