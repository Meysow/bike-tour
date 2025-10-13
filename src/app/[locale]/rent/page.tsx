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

import { pricingPlans } from "@/data/pricing-plans";

import { WhatsAppFloatButtonWrapper } from "@/components/shared/whatsapp-float-button-wrapper";
import { cn } from "@/lib/utils";

export default function RentPage(): JSX.Element {
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
                  Choose from our wide range of bikes, perfect for exploring
                  Paris at your own pace. Select the bike that suits your style
                  and hit the road with comfort and ease.
                </Balancer>
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Toggle */}

        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4 text-lg">
              <span>1 to 3 Days Rental</span>

              <Switch
                checked={isMultiDay}
                onCheckedChange={() => setIsMultiDay((prev) => !prev)}
                role="switch"
                aria-label="switch-to-multi-day"
              />

              <span>4 Days and more (save 10%)</span>
            </div>
          </div>
        </section>

        {/* Bikes Section */}

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid gap-8 md:grid-cols-3 lg:gap-6">
              {pricingPlans.map((plan) => (
                <Card
                  key={plan.name}
                  className={cn(
                    "flex flex-col transition-all duration-1000 ease-out hover:opacity-80 md:hover:-translate-y-3",

                    plan.name === "Electric Bike - Power 1" &&
                      "border-fuchsia-300/30 bg-gradient-to-r from-primary/10 to-fuchsia-400/10"
                  )}
                >
                  <Image
                    src={plan.image}
                    alt={`${plan.name} image`}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />

                  <CardHeader className="overflow-hidden rounded-t-lg bg-gradient-to-r from-primary/10 to-fuchsia-400/10">
                    <CardTitle className="font-urbanist text-2xl tracking-wide mt-4">
                      <Balancer>{plan.name}</Balancer>
                    </CardTitle>

                    <CardDescription className="text-sm">
                      <Balancer>{plan.description}</Balancer>
                    </CardDescription>

                    <div className="flex flex-col gap-4 py-2">
                      <div className="flex gap-2 text-3xl font-semibold md:gap-1 md:text-2xl lg:gap-2 lg:text-3xl">
                        <span className="text-primary">
                          €
                          {calculatePrice(plan.dailyRate, isMultiDay).toFixed(
                            2
                          )}
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
                        {plan.features.map((item) => (
                          <li className="flex items-center gap-2" key={item}>
                            <Icons.check className="size-4" />

                            <Balancer>{item}</Balancer>
                          </li>
                        ))}
                      </ul>

                      <ul className="flex flex-col gap-2">
                        {plan.limitations.map((item) => (
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
                        Rent Now
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Accessories Section */}

        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-fuchsia-400/5">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-urbanist text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                <Balancer>
                  Complete your ride with{" "}
                  <span className="bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text text-transparent">
                    accessories
                  </span>
                </Balancer>
              </h2>

              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                <Balancer>
                  Enhance your cycling experience with our selection of
                  essential accessories. All available for rent with your bike.
                </Balancer>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🪖</span>
                </div>

                <h3 className="font-semibold text-lg">Helmet</h3>

                <p className="text-muted-foreground">
                  Safety first! Comfortable helmets for all sizes.
                </p>

                <div className="text-primary font-semibold">€3/day</div>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔒</span>
                </div>

                <h3 className="font-semibold text-lg">Bike Lock</h3>

                <p className="text-muted-foreground">
                  Secure your bike with our high-quality locks.
                </p>

                <div className="text-primary font-semibold">€2/day</div>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>

                <h3 className="font-semibold text-lg">Phone Mount</h3>

                <p className="text-muted-foreground">
                  Keep your phone secure while navigating Paris.
                </p>

                <div className="text-primary font-semibold">€2/day</div>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🧺</span>
                </div>

                <h3 className="font-semibold text-lg">Basket</h3>

                <p className="text-muted-foreground">
                  Carry your belongings comfortably during your ride.
                </p>

                <div className="text-primary font-semibold">€2/day</div>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👶</span>
                </div>

                <h3 className="font-semibold text-lg">Child Seat</h3>

                <p className="text-muted-foreground">
                  Safe and comfortable seats for little passengers.
                </p>

                <div className="text-primary font-semibold">€5/day</div>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🧥</span>
                </div>

                <h3 className="font-semibold text-lg">Rain Jacket</h3>

                <p className="text-muted-foreground">
                  Stay dry and comfortable in any weather.
                </p>

                <div className="text-primary font-semibold">€3/day</div>
              </div>
            </div>
          </div>
        </section>

        {/* Rental Process Section */}

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-urbanist text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                <Balancer>
                  How it{" "}
                  <span className="bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text text-transparent">
                    works
                  </span>
                </Balancer>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-fuchsia-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>

                <h3 className="font-semibold text-lg">Choose & Book</h3>

                <p className="text-muted-foreground">
                  Select your perfect bike and accessories online. Choose your
                  rental dates and pickup location.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-fuchsia-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>

                <h3 className="font-semibold text-lg">Pickup & Ride</h3>

                <p className="text-muted-foreground">
                  Collect your bike from our shop. We&apos;ll provide a safety
                  briefing and helmet fitting.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-fuchsia-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>

                <h3 className="font-semibold text-lg">Return & Enjoy</h3>

                <p className="text-muted-foreground">
                  Return your bike at the end of your rental. Share your Paris
                  adventure with us!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}

        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-fuchsia-400/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-urbanist text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              <Balancer>Ready to explore Paris on two wheels?</Balancer>
            </h2>

            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
              <Balancer>
                Book your bike rental today and discover Paris at your own pace.
                Quality bikes, great prices, and unforgettable memories await!
              </Balancer>
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
                  Book a Bike Now
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg font-bold tracking-wide"
                asChild
              >
                <Link href="#contact-section">Contact Us</Link>
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
                  Pickup{" "}
                  <span className="bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text text-transparent">
                    Location
                  </span>
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
