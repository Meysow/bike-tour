"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Balancer from "react-wrap-balancer";

import { Icons } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { siteConfig } from "@/config/site";
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { rentImages } from "@/lib/images/rent-images";
import { cn } from "@/lib/utils";
import { HighlightText } from "@/lib/utils/highlight";
import { getSectionTranslations } from "@/lib/utils/i18n-loader";
import { BikeContent } from "@/types";

export function RentPricingSection(): JSX.Element {
  const { locale } = useLocalizedRoutes();
  const t = getSectionTranslations(locale, "rent");
  const [isMultiDay, setIsMultiDay] = React.useState(false); // toggle for single or multi-day view

  // Simple array of bike IDs
  const bikeIds = ["deluxe7", "ebike", "children"] as const;

  const calculatePrice = (dailyRate: number, isFourDaysOrMore: boolean) => {
    return isFourDaysOrMore ? dailyRate * 0.9 : dailyRate; // Apply a 10% discount for 4-day rentals
  };

  return (
    <section
      id="pricing-section"
      aria-label="pricing section"
      className="w-full"
    >
      <div className="container grid max-w-6xl gap-4 md:gap-8">
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

        <div className="my-4 flex items-center justify-center gap-4 text-lg">
          <span>{t.rentalToggle.shortTerm}</span>
          <Switch
            checked={isMultiDay}
            onCheckedChange={() => setIsMultiDay((prev) => !prev)}
            role="switch"
            aria-label="switch-to-multi-day"
          />
          <span>{t.rentalToggle.longTerm}</span>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
          {bikeIds.map((bikeId) => {
            const bike = t[bikeId] as BikeContent;

            // Fallback dailyRate if not in translations yet
            const dailyRate =
              bike.dailyRate ||
              (bikeId === "deluxe7" ? 15 : bikeId === "ebike" ? 25 : 13);

            return (
              <Card
                key={bikeId}
                className={cn(
                  "flex flex-col transition-all duration-1000 ease-out hover:opacity-80 md:hover:-translate-y-3",
                  bikeId === "ebike" &&
                    "border-fuchsia-300/30 bg-gradient-to-r from-primary/10 to-fuchsia-400/10"
                )}
              >
                <div className="relative h-48 w-full">
                  <Image
                    alt={bike.name}
                    src={rentImages[bike.image as keyof typeof rentImages]}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>

                <CardHeader className="overflow-hidden bg-gradient-to-r from-primary/10 to-fuchsia-400/10">
                  <CardTitle className="font-urbanist text-2xl tracking-wide mt-4">
                    <Balancer>{bike.name}</Balancer>
                  </CardTitle>

                  <CardDescription className="text-sm">
                    <Balancer>{bike.description}</Balancer>
                  </CardDescription>

                  <div className="flex flex-col gap-4 py-2">
                    <div className="flex gap-2 text-3xl font-semibold md:gap-1 md:text-2xl lg:gap-2 lg:text-3xl">
                      <span className="text-primary">
                        €{calculatePrice(dailyRate, isMultiDay).toFixed(2)}
                      </span>
                      <span className="flex items-center text-base font-normal text-muted-foreground">
                        / day
                      </span>
                    </div>

                    {isMultiDay && (
                      <p className="text-xs font-bold text-muted-foreground">
                        <Balancer>
                          10% discount applied for rentals of 4 or more days!
                        </Balancer>
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col justify-between text-sm lg:text-base">
                  <div className="grid gap-3 py-8">
                    <ul className="flex flex-col gap-3">
                      {bike.features.map((bike, index) => (
                        <li className="flex items-center gap-2" key={index}>
                          <Icons.check className="size-4" />
                          <Balancer>{bike}</Balancer>
                        </li>
                      ))}
                    </ul>

                    <ul className="flex flex-col gap-2">
                      {bike.limitations.map((limit, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 text-muted-foreground"
                        >
                          <Icons.close className="size-4" />
                          <Balancer>{limit}</Balancer>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    variant="outline"
                    className="h-10 w-full border bg-gradient-to-br from-primary/20 to-fuchsia-400/20 font-bold tracking-wide"
                    asChild
                  >
                    <Link
                      href={siteConfig.links.rentalBooking}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Rent Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
