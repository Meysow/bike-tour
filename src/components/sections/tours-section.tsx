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
          <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
            <HighlightText gradient={true}>{t.title}</HighlightText>
          </h2>
          <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <HighlightText gradient={false} className="text-foreground">
              {t.subtitle}
            </HighlightText>
          </h3>
        </div>

        <div className="grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {/* Public tours side by side */}
          {tourIds
            .filter((tourId) => tourId !== "3") // Exclude private tour (ID "3")
            .map((tourId) => {
              const content = t[tourId] as TourContent;

              return (
                <Card
                  key={tourId}
                  className="h-full bg-gradient-to-br from-primary/10 to-fuchsia-400/10 transition-all duration-1000 ease-out md:hover:-translate-y-3 flex flex-col"
                >
                  <CardHeader className="flex flex-col gap-3">
                    <div className="flex flex-wrap justify-between items-start gap-3">
                      <CardDescription className="py-2 text-base font-medium tracking-wide text-muted-foreground">
                        {content.title}
                      </CardDescription>
                      <Badge
                        variant="price"
                        className="px-3 md:px-4 py-1 text-sm md:text-lg font-semibold"
                      >
                        {content.price}
                      </Badge>
                    </div>
                    <CardTitle className="font-urbanist text-3xl font-black tracking-wide">
                      <Balancer>{content.subtitle}</Balancer>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 p-0 flex flex-col flex-grow">
                    <p className="px-4 text-base leading-8 tracking-wide text-muted-foreground flex-grow">
                      <Balancer>
                        {content.description}
                        {content.details.location && (
                          <>
                            <br className="hidden md:inline-block" />
                            {content.details.location}
                          </>
                        )}
                        {content.details.duration && (
                          <>
                            <br className="hidden md:inline-block" />
                            {content.details.duration}
                          </>
                        )}
                        {content.details.schedule && (
                          <>
                            <br className="hidden md:inline-block" />
                            {content.details.schedule}
                          </>
                        )}
                      </Balancer>
                    </p>

                    <div className="flex flex-col gap-3 px-4 sm:flex-row">
                      <Button
                        asChild
                        variant="moreInfo"
                        size="lg"
                        className="w-full sm:flex-1"
                      >
                        <Link href={createLink("tours")}>
                          {content.ctaMoreInfo}
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="bookNow"
                        size="lg"
                        className="w-full sm:flex-1"
                      >
                        <Link
                          href={siteConfig.links.tourBooking}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {content.ctaBookNow}
                        </Link>
                      </Button>
                    </div>

                    <Image
                      alt={content.title}
                      src={tourImages[content.image as keyof typeof tourImages]}
                      className="overflow-hidden rounded-b-xl object-cover"
                    />
                  </CardContent>
                </Card>
              );
            })}
        </div>

        {/* Private tour below, full width */}
        <div className="grid max-w-6xl grid-cols-1 gap-4 md:gap-6">
          {tourIds
            .filter((tourId) => tourId === "3") // Only private tour (ID "3")
            .map((tourId) => {
              const content = t[tourId] as TourContent;

              return (
                <Card
                  key={tourId}
                  className="h-fit w-full bg-gradient-to-br from-primary/10 to-fuchsia-400/10 transition-all duration-1000 ease-out md:hover:-translate-y-3"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Contenu texte à gauche */}
                    <div className="p-6 space-y-6">
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-wrap justify-between items-start gap-3">
                          <CardDescription className="py-2 text-base font-medium tracking-wide text-muted-foreground">
                            {content.title}
                          </CardDescription>
                          <Badge
                            variant="price"
                            className="px-3 md:px-4 py-1 text-sm md:text-lg font-semibold"
                          >
                            {content.price}
                          </Badge>
                        </div>
                        <CardTitle className="font-urbanist text-3xl font-black tracking-wide">
                          <Balancer>{content.subtitle}</Balancer>
                        </CardTitle>
                      </div>

                      <div className="text-base leading-8 tracking-wide text-muted-foreground">
                        <div className="space-y-4">
                          <p>
                            <Balancer>{content.description}</Balancer>
                          </p>
                          {content.additionalContent && (
                            <>
                              <p className="font-semibold text-foreground">
                                <Balancer>
                                  {content.additionalContent.visionTitle}
                                </Balancer>
                              </p>
                              <ul className="space-y-2">
                                {content.additionalContent.bulletPoints.map(
                                  (point, index) => (
                                    <li
                                      key={index}
                                      className="flex items-start gap-2"
                                    >
                                      <span className="text-primary">•</span>
                                      <span>
                                        <Balancer>{point}</Balancer>
                                      </span>
                                    </li>
                                  )
                                )}
                              </ul>
                              <p className="italic">
                                <Balancer>
                                  {content.additionalContent.closingNote}
                                </Balancer>
                              </p>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 sm:flex-row">
                        <Button
                          asChild
                          variant="moreInfo"
                          size="lg"
                          className="w-full sm:flex-1"
                        >
                          <Link href={createLink("tours")}>
                            {content.ctaMoreInfo}
                          </Link>
                        </Button>
                        <Button
                          asChild
                          variant="bookNow"
                          size="lg"
                          className="w-full sm:flex-1"
                        >
                          <Link href={`${createLink("home")}#contact-section`}>
                            {content.ctaContact}
                          </Link>
                        </Button>
                      </div>
                    </div>

                    {/* Image à droite */}
                    <div className="relative">
                      <Image
                        alt={content.title}
                        src={
                          tourImages[content.image as keyof typeof tourImages]
                        }
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </Card>
              );
            })}
        </div>
      </div>
    </section>
  );
}
