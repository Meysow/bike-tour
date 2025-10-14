"use client";

import { Footer } from "@/components/nav/footer";
import { Header } from "@/components/nav/header";
import { GoogleMap } from "@/components/shared/google-map";
import { Icons } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Balancer from "react-wrap-balancer";

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
import { HighlightText } from "@/lib/utils/highlight";
import { getSectionTranslations } from "@/lib/utils/i18n-loader";
import { BikeContent } from "@/types";

import { WhatsAppFloatButtonWrapper } from "@/components/shared/whatsapp-float-button-wrapper";
import { cn } from "@/lib/utils";

export default function RentPage(): JSX.Element {
  const { locale } = useLocalizedRoutes();
  const t = getSectionTranslations(locale, "rent");
  const [isMultiDay, setIsMultiDay] = React.useState(false);

  const calculatePrice = (dailyRate: number, isFourDaysOrMore: boolean) => {
    return isFourDaysOrMore ? dailyRate * 0.9 : dailyRate;
  };

  const bikeIds = ["deluxe7", "ebike", "children"] as const;

  return (
    <>
      <Header />

      <div className="min-h-screen bg-background mt-20 lg:mt-28">
        {/* Hero Section */}

        <section className="relative py-20 md:py-32">
          <div className="absolute inset-0 z-[-1] bg-gradient-to-t from-primary/25 to-transparent opacity-30 rounded-full blur-lg h-[85%] w-[75%] mx-auto" />

          <div className="container mx-auto px-4">
            <div className="text-center space-y-6">
              <h1 className="font-urbanist text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                <Balancer>
                  <HighlightText>{t.page.heroTitle}</HighlightText>
                </Balancer>
              </h1>

              <p className="max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl sm:leading-8">
                <Balancer>{t.page.heroSubtitle}</Balancer>
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Toggle */}

        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4 text-lg">
              <span>{t.rentalToggle.shortTerm}</span>

              <Switch
                checked={isMultiDay}
                onCheckedChange={() => setIsMultiDay((prev) => !prev)}
                role="switch"
                aria-label="switch-to-multi-day"
              />

              <span>{t.rentalToggle.longTerm}</span>
            </div>
          </div>
        </section>

        {/* Bikes Section */}

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid gap-8 md:grid-cols-3 lg:gap-6">
              {bikeIds.map((bikeId) => {
                const bike = t[bikeId] as BikeContent;
                const dailyRate =
                  bike.dailyRate ||
                  (bikeId === "deluxe7" ? 15 : bikeId === "ebike" ? 30 : 15);

                return (
                  <Card
                    key={bikeId}
                    className={cn(
                      "flex flex-col transition-all duration-1000 ease-out hover:opacity-80 md:hover:-translate-y-3",
                      bikeId === "ebike" &&
                        "border-fuchsia-300/30 bg-gradient-to-r from-primary/10 to-fuchsia-400/10"
                    )}
                  >
                    <Image
                      src={rentImages[bike.image as keyof typeof rentImages]}
                      alt={`${bike.name} image`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />

                    <CardHeader className="overflow-hidden rounded-t-lg bg-gradient-to-r from-primary/10 to-fuchsia-400/10">
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
                            {t.page.perDay}
                          </span>
                        </div>

                        {isMultiDay && (
                          <p className="text-xs font-bold text-muted-foreground">
                            <Balancer>{t.page.discountNote}</Balancer>
                          </p>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="flex flex-1 flex-col justify-between text-sm lg:text-base">
                      <div className="grid gap-3 py-8">
                        <ul className="flex flex-col gap-3">
                          {bike.features.map((item) => (
                            <li className="flex items-center gap-2" key={item}>
                              <Icons.check className="size-4" />
                              <Balancer>{item}</Balancer>
                            </li>
                          ))}
                        </ul>

                        <ul className="flex flex-col gap-2">
                          {bike.limitations.map((item) => (
                            <li
                              key={item}
                              className="flex items-center gap-3 text-muted-foreground"
                            >
                              <Icons.close className="size-4" />
                              <Balancer>{item}</Balancer>
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
                          {t.ctaRentNow}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Accessories Section */}

        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-fuchsia-400/5">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-urbanist text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                <Balancer>
                  <HighlightText>{t.page.accessoriesTitle}</HighlightText>
                </Balancer>
              </h2>

              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                <Balancer>{t.page.accessoriesSubtitle}</Balancer>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "helmet",
                "lock",
                "phone-mount",
                "basket",
                "child-seat",
                "rain-jacket",
              ].map((accessoryId) => {
                const accessoriesData = getSectionTranslations(
                  locale,
                  "accessories"
                );
                const accessory = accessoriesData[
                  accessoryId as keyof typeof accessoriesData
                ] as {
                  title: string;
                  description: string;
                  image: string;
                };
                const icons = {
                  helmet: "🪖",
                  lock: "🔒",
                  "phone-mount": "📱",
                  basket: "🧺",
                  "child-seat": "👶",
                  "rain-jacket": "🧥",
                };
                const prices = {
                  helmet: "€3/day",
                  lock: "€2/day",
                  "phone-mount": "€2/day",
                  basket: "€2/day",
                  "child-seat": "€5/day",
                  "rain-jacket": "€3/day",
                };

                return (
                  <div key={accessoryId} className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">
                        {icons[accessoryId as keyof typeof icons]}
                      </span>
                    </div>

                    <h3 className="font-semibold text-lg">{accessory.title}</h3>

                    <p className="text-muted-foreground">
                      {accessory.description}
                    </p>

                    <div className="text-primary font-semibold">
                      {prices[accessoryId as keyof typeof prices]}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Rental Process Section */}

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-urbanist text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                <Balancer>
                  <HighlightText>{t.page.howItWorksTitle}</HighlightText>
                </Balancer>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-fuchsia-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>

                <h3 className="font-semibold text-lg">{t.page.step1Title}</h3>

                <p className="text-muted-foreground">
                  {t.page.step1Description}
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-fuchsia-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>

                <h3 className="font-semibold text-lg">{t.page.step2Title}</h3>

                <p className="text-muted-foreground">
                  {t.page.step2Description}
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-fuchsia-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>

                <h3 className="font-semibold text-lg">{t.page.step3Title}</h3>

                <p className="text-muted-foreground">
                  {t.page.step3Description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}

        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-fuchsia-400/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-urbanist text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              <Balancer>{t.page.readyExplore}</Balancer>
            </h2>

            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
              <Balancer>{t.page.readyDescription}</Balancer>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-14 px-8 text-lg font-bold tracking-wide bg-gradient-to-r from-primary to-fuchsia-400 hover:from-primary/90 hover:to-fuchsia-400/90"
                asChild
              >
                <Link
                  href={siteConfig.links.rentalBooking}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.page.bookBikeNow}
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg font-bold tracking-wide"
                asChild
              >
                <Link href="#contact-section">{t.page.contactUs}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pickup Location Map */}

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-urbanist text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                <Balancer>
                  <HighlightText>{t.page.pickupLocationTitle}</HighlightText>
                </Balancer>
              </h2>

              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icons.paperPlane className="size-5" />

                  <span className="font-medium">
                    {siteConfig.company.location}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Icons.user className="size-5" />

                  <span>{siteConfig.company.phone}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Icons.email className="size-5" />

                  <span>{siteConfig.company.email}</span>
                </div>
              </div>
            </div>

            <GoogleMap address={siteConfig.company.location} />
          </div>
        </section>
      </div>

      <Footer />

      <WhatsAppFloatButtonWrapper />
    </>
  );
}
