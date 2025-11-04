"use client";

import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { tourImages } from "@/lib/images/tour-images";
import { cn } from "@/lib/utils";
import { HighlightText } from "@/lib/utils/highlight";
import { getSectionTranslations } from "@/lib/utils/i18n-loader";
import { TourContent } from "@/types";
import Balancer from "react-wrap-balancer";
import { Button } from "../ui/button";

export function ToursSection(): JSX.Element {
  const { createLink, locale } = useLocalizedRoutes();
  const t = getSectionTranslations(locale, "tours");

  // Simple array of tour IDs
  const tourIds = ["1", "2", "3"] as const;
  return (
    <section id="tour-section" aria-label="Tour section" className="w-full">
      <div className="container grid max-w-6xl justify-center gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2
            className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl"
            style={{
              lineHeight: "1",
              textRendering: "optimizeLegibility",
              fontFeatureSettings: '"kern" 1, "liga" 1',
              paddingBottom: "0.1em",
              overflow: "visible",
            }}
          >
            <HighlightText gradient={true}>{t.title}</HighlightText>
          </h2>
          <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <HighlightText gradient={false} className="text-foreground">
              {t.subtitle}
            </HighlightText>
          </h3>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
          {tourIds.map((tourId) => {
            const content = t[tourId] as TourContent;

            return (
              <Card
                key={tourId}
                className={cn(
                  "flex flex-col transition-all duration-1000 ease-out hover:opacity-80 md:hover:-translate-y-3",
                  "bg-gradient-to-br from-primary/10 to-fuchsia-400/10"
                )}
              >
                <div className="relative h-48 w-full">
                  <Image
                    alt={content.title}
                    src={tourImages[content.image as keyof typeof tourImages]}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <Badge
                    variant="price"
                    className="absolute top-2 right-2 px-2 py-0.5 text-xs font-semibold rounded-full"
                  >
                    {content.price}
                  </Badge>
                </div>

                <CardHeader className="overflow-hidden bg-gradient-to-r from-primary/10 to-fuchsia-400/10">
                  <CardDescription className="text-base font-medium tracking-wide text-muted-foreground">
                    {content.title}
                  </CardDescription>

                  <CardTitle className="font-urbanist text-2xl tracking-wide mt-2">
                    <Balancer>{content.subtitle}</Balancer>
                  </CardTitle>
                  <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                    <span className="text-base">🇫🇷</span>
                    <span className="text-base">🇬🇧</span>
                    <span className="text-base">🇩🇪</span>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col justify-between text-sm lg:text-base">
                  <div className="py-4">
                    <p className="text-muted-foreground">
                      <Balancer>{content.description}</Balancer>
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 pt-4">
                    <Button
                      asChild
                      variant="moreInfo"
                      size="lg"
                      className="w-full"
                    >
                      <Link href={createLink("tours")}>
                        {content.ctaMoreInfo}
                      </Link>
                    </Button>
                    {tourId === "3" ? (
                      <Button
                        asChild
                        variant="bookNow"
                        size="lg"
                        className="w-full"
                      >
                        <Link href={`${createLink("home")}#contact-section`}>
                          {content.ctaContact}
                        </Link>
                      </Button>
                    ) : (
                      <Button
                        asChild
                        variant="bookNow"
                        size="lg"
                        className="w-full"
                      >
                        <Link
                          href={siteConfig.links.tourBooking}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {content.ctaBookNow}
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
