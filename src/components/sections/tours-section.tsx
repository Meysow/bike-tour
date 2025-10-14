"use client";

import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { TourData, tours } from "@/data/tourData";
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { HighlightText } from "@/lib/utils/highlight";
import { getSectionTranslations } from "@/lib/utils/i18n-loader";
import { TourContent } from "@/types";
import { Button } from "../ui/button";

export function ToursSection(): JSX.Element {
  const { createLink, locale } = useLocalizedRoutes();
  const t = getSectionTranslations(locale, "tours");

  // Helper function to get translated content for a tour
  const getTourContent = (tour: TourData): TourContent => {
    // Try to get translation from i18n, fallback to tourData for missing translations
    const translatedTour = t[tour.id as keyof typeof t];

    if (
      translatedTour &&
      typeof translatedTour === "object" &&
      "title" in translatedTour
    ) {
      return translatedTour as TourContent;
    }

    // Fallback for tours without translations (like private tours)
    return {
      title: tour.description,
      subtitle: tour.title,
      description: tour.details,
      price: tour.price,
      details: {
        location: tour.startingSpot
          ? `🌍 - Starting spot: ${tour.startingSpot}`
          : "",
        duration: tour.duration ? `⏰ - ${tour.duration}` : "",
        schedule: tour.break ? `👤 - ${tour.break}` : "",
      },
      ctaMoreInfo: "More Info",
      ctaBookNow: "Book Now",
      ctaContact: "Contact Us",
    };
  };
  return (
    <section id="tour-section" aria-label="Tour section" className="w-full">
      <div className="container grid max-w-6xl justify-center gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
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

        <div className="grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {/* Tours publics côte à côte */}
          {tours
            .filter((tour) => !tour.isPrivate)
            .map((tour) => {
              const content = getTourContent(tour);

              return (
                <Card
                  key={tour.id}
                  className="h-full bg-gradient-to-br from-primary/10 to-fuchsia-400/10 transition-all duration-1000 ease-out md:hover:-translate-y-3 relative flex flex-col"
                >
                  <div className="absolute top-6 right-4 rounded-lg bg-gradient-to-r from-primary/95 to-fuchsia-400/70 px-3 md:px-4 py-1 text-sm md:text-lg font-semibold text-white shadow-md">
                    {content.price}
                  </div>
                  <CardHeader>
                    <CardDescription className="py-2 text-base font-medium tracking-wide text-muted-foreground">
                      {content.title}
                    </CardDescription>
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

                    <div className="flex flex-col sm:flex-row gap-3 px-4">
                      <Button
                        asChild
                        className="h-10 flex-1 font-bold tracking-wide bg-secondary/80 hover:bg-secondary text-secondary-foreground shadow-md hover:shadow-lg transition-all border-2 border-secondary"
                      >
                        <Link href={createLink("tours")}>
                          {content.ctaMoreInfo}
                        </Link>
                      </Button>
                      <Button
                        asChild
                        className="h-10 flex-1 font-bold tracking-wide bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-md hover:shadow-lg transition-all"
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
                      src={tour.image}
                      className="overflow-hidden rounded-b-xl"
                    />
                  </CardContent>
                </Card>
              );
            })}
        </div>

        {/* Tour privé en dessous, toute la largeur */}
        <div className="grid max-w-6xl grid-cols-1 gap-4 md:gap-6">
          {tours
            .filter((tour) => tour.isPrivate)
            .map((tour) => {
              const content = getTourContent(tour);

              return (
                <Card
                  key={tour.id}
                  className="h-fit w-full bg-gradient-to-br from-primary/10 to-fuchsia-400/10 transition-all duration-1000 ease-out md:hover:-translate-y-3 relative"
                >
                  <div className="absolute top-6 right-4 rounded-lg bg-gradient-to-r from-primary/95 to-fuchsia-400/70 px-3 md:px-4 py-1 text-sm md:text-lg font-semibold text-white shadow-md z-10">
                    {content.price}
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Contenu texte à gauche */}
                    <div className="p-6 space-y-6">
                      <div>
                        <CardDescription className="py-2 text-base font-medium tracking-wide text-muted-foreground">
                          {content.title}
                        </CardDescription>
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

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          asChild
                          className="h-10 flex-1 font-bold tracking-wide bg-secondary/80 hover:bg-secondary text-secondary-foreground shadow-md hover:shadow-lg transition-all border-2 border-secondary"
                        >
                          <Link href={createLink("tours")}>
                            {content.ctaMoreInfo}
                          </Link>
                        </Button>
                        <Button
                          asChild
                          className="h-10 flex-1 font-bold tracking-wide bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-md hover:shadow-lg transition-all"
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
                        src={tour.image}
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
