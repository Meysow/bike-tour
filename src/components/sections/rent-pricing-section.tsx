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
import { pricingPlans } from "@/data/pricing-plans";
import { cn } from "@/lib/utils";

export function RentPricingSection(): JSX.Element {
  const [isMultiDay, setIsMultiDay] = React.useState(false); // toggle for single or multi-day view

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
          <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <Balancer>
              Rent our{" "}
              <span className="bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text text-transparent">
                Awesome Bikes
              </span>
            </Balancer>
          </h2>
          <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            Choose from our wide range of bikes, perfect for{" "}
            <span className="font-semibold text-foreground">
              exploring Paris
            </span>{" "}
            at your own pace. Select the bike that suits your style and hit the
            road with comfort and ease.
          </h3>
        </div>

        <div className="my-4 flex items-center justify-center gap-4 text-lg">
          <span>1 to 3 Days Rental</span>
          <Switch
            checked={isMultiDay}
            onCheckedChange={() => setIsMultiDay((prev) => !prev)}
            role="switch"
            aria-label="switch-to-multi-day"
          />
          <span>4 Days and more (save 10%)</span>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
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
                      €{calculatePrice(plan.dailyRate, isMultiDay).toFixed(2)}
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
  );
}
