"use client";

import Image from "next/image";
import * as React from "react";
import Balancer from "react-wrap-balancer";

import { Footer } from "@/components/nav/footer";
import { Header } from "@/components/nav/header";
import { GoogleMap } from "@/components/shared/google-map";
import { Icons } from "@/components/shared/icons";
import { WhatsAppFloatButtonWrapper } from "@/components/shared/whatsapp-float-button-wrapper";
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
import { pricingPlans } from "@/data/pricing-plans";
import { cn } from "@/lib/utils";

export function RentPageContent(): JSX.Element {
  const [isMultiDay, setIsMultiDay] = React.useState(false);

  const calculatePrice = (dailyRate: number, isFourDaysOrMore: boolean) => {
    return isFourDaysOrMore ? dailyRate * 0.9 : dailyRate;
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background mt-20 banner:mt-28">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32">
          <div className="absolute inset-0 z-[-1] bg-gradient-to-t from-primary/25 to-transparent opacity-30 rounded-full blur-lg h-[85%] w-[75%] mx-auto" />
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6">
              <h1 className="font-urbanist text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                <Balancer>
                  Rent our{" "}
                  <span className="relative bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text font-extrabold text-transparent">
                    Awesome Bikes
                  </span>
                </Balancer>
              </h1>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl sm:leading-8">
                <Balancer>
                  Flexible rental options, high-quality bikes, and all the
                  accessories you need for a perfect Paris adventure.
                </Balancer>
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Toggle Switch pour 4 jours ou plus */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span
                className={cn(
                  "text-lg font-medium transition-colors",
                  !isMultiDay ? "text-foreground" : "text-muted-foreground"
                )}
              >
                Daily Rate
              </span>
              <Switch
                checked={isMultiDay}
                onCheckedChange={setIsMultiDay}
                aria-label="Toggle pricing for 4+ days rental"
              />
              <span
                className={cn(
                  "text-lg font-medium transition-colors",
                  isMultiDay ? "text-foreground" : "text-muted-foreground"
                )}
              >
                4+ Days (10% off)
              </span>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {pricingPlans.map((plan, idx) => {
                const dailyPrice = parseFloat(
                  plan.prices.daily.replace(/[^0-9.]/g, "")
                );
                const finalPrice = calculatePrice(dailyPrice, isMultiDay);

                return (
                  <Card
                    key={idx}
                    className={cn(
                      "relative flex flex-col border-2 transition-all hover:shadow-lg",
                      plan.highlighted
                        ? "border-primary shadow-md"
                        : "border-border"
                    )}
                  >
                    {plan.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <CardHeader className="pb-6">
                      <div className="mb-4 flex items-center justify-center">
                        <div className="relative h-32 w-full">
                          <Image
                            src={plan.image}
                            alt={plan.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription className="text-base">
                        {plan.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col">
                      <div className="mb-6">
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold">
                            €{finalPrice.toFixed(2)}
                          </span>
                          <span className="text-muted-foreground">/ day</span>
                        </div>
                        {isMultiDay && dailyPrice !== finalPrice && (
                          <p className="text-sm text-muted-foreground mt-1">
                            <s>€{dailyPrice.toFixed(2)}</s> per day
                          </p>
                        )}
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Icons.check className="h-4 w-4 text-primary" />
                          Included Features
                        </h4>
                        <ul className="space-y-2">
                          {plan.features.map((feature, featureIdx) => (
                            <li
                              key={featureIdx}
                              className="flex items-start gap-2 text-sm"
                            >
                              <Icons.check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto">
                        <Button
                          className="w-full"
                          variant={plan.highlighted ? "default" : "outline"}
                        >
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Additional Information */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-6">Need Something Else?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Looking for child seats, baskets, or other accessories? Check
                out our full range of add-ons to customize your perfect ride.
              </p>
              <Button size="lg" variant="outline">
                View All Accessories
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Rent From Us?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We make bike rental simple, convenient, and enjoyable
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Icons.check className="h-8 w-8" />,
                  title: "Quality Bikes",
                  description:
                    "Well-maintained Swapfiets bikes with signature blue tires",
                },
                {
                  icon: <Icons.lock className="h-8 w-8" />,
                  title: "Secure & Safe",
                  description: "All bikes come with locks and lights included",
                },
                {
                  icon: <Icons.zap className="h-8 w-8" />,
                  title: "Flexible Options",
                  description: "Hourly, daily, or weekly rental periods",
                },
                {
                  icon: <Icons.heart className="h-8 w-8" />,
                  title: "Local Support",
                  description:
                    "We're here to help and share our Paris insider tips",
                },
              ].map((item, idx) => (
                <div key={idx} className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Explore Paris?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Book your bike rental now and get ready to experience Paris like
              never before. Whether you're here for a day or a week, we've got
              the perfect bike for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Book Your Bike</Button>
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Find Us in Paris
              </h2>
              <p className="text-muted-foreground">
                Conveniently located in the heart of Paris
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 items-start">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icons.mapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      {siteConfig.company.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icons.phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Contact</h3>
                    <p className="text-muted-foreground">
                      {siteConfig.company.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icons.mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      {siteConfig.company.email}
                    </p>
                  </div>
                </div>
              </div>
              <GoogleMap address={siteConfig.company.location} />
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppFloatButtonWrapper />
    </>
  );
}
