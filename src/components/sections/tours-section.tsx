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
import { tours } from "@/data/tourData";
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { Button } from "../ui/button";

export function ToursSection(): JSX.Element {
  const { createLink } = useLocalizedRoutes();
  return (
    <section id="tour-section" aria-label="Tour section" className="w-full">
      <div className="container grid max-w-6xl justify-center gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <Balancer>
              Discover our{" "}
              <span className="relative bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text font-extrabold text-transparent">
                Wholesome Tours
              </span>
            </Balancer>
          </h2>
          <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
              Join us on an unforgettable experience exploring{" "}
              <span className="font-semibold text-foreground">Paris</span> by
              bike. Discover hidden gems, iconic landmarks, and gain unique
              perspectives on every tour.
            </Balancer>
          </h3>
        </div>

        <div className="grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {/* Tours publics côte à côte */}
          {tours
            .filter((tour) => !tour.isPrivate)
            .map((tour) => (
              <Card
                key={tour.id}
                className="h-full bg-gradient-to-br from-primary/10 to-fuchsia-400/10 transition-all duration-1000 ease-out md:hover:-translate-y-3 relative flex flex-col"
              >
                <div className="absolute top-6 right-4 rounded-lg bg-gradient-to-r from-primary/95 to-fuchsia-400/70 px-3 md:px-4 py-1 text-sm md:text-lg font-semibold text-white shadow-md">
                  {tour.price}
                </div>
                <CardHeader>
                  <CardDescription className="py-2 text-base font-medium tracking-wide text-muted-foreground">
                    {tour.description}
                  </CardDescription>
                  <CardTitle className="font-urbanist text-3xl font-black tracking-wide">
                    <Balancer>{tour.title}</Balancer>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 p-0 flex flex-col flex-grow">
                  <p className="px-4 text-base leading-8 tracking-wide text-muted-foreground flex-grow">
                    <Balancer>
                      {tour.details}
                      {tour.startingSpot && (
                        <>
                          <br className="hidden md:inline-block" /> 🌍 -
                          Starting spot: {tour.startingSpot}
                        </>
                      )}
                      {tour.duration && (
                        <>
                          <br className="hidden md:inline-block" /> ⏰ -{" "}
                          {tour.duration}
                        </>
                      )}
                      {tour.break && (
                        <>
                          <br className="hidden md:inline-block" />
                          👤 - {tour.break}
                        </>
                      )}
                    </Balancer>
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 px-4">
                    <Button
                      asChild
                      className="h-10 flex-1 font-bold tracking-wide bg-secondary/80 hover:bg-secondary text-secondary-foreground shadow-md hover:shadow-lg transition-all border-2 border-secondary"
                    >
                      <Link href={createLink("tours")}>More Info</Link>
                    </Button>
                    <Button
                      asChild
                      className="h-10 flex-1 font-bold tracking-wide bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-md hover:shadow-lg transition-all"
                    >
                      <Link href="#book-tour">Book Now</Link>
                    </Button>
                  </div>

                  <Image
                    alt={tour.title}
                    src={tour.image}
                    className="overflow-hidden rounded-b-xl"
                  />
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Tour privé en dessous, toute la largeur */}
        <div className="grid max-w-6xl grid-cols-1 gap-4 md:gap-6">
          {tours
            .filter((tour) => tour.isPrivate)
            .map((tour) => (
              <Card
                key={tour.id}
                className="h-fit w-full bg-gradient-to-br from-primary/10 to-fuchsia-400/10 transition-all duration-1000 ease-out md:hover:-translate-y-3 relative"
              >
                <div className="absolute top-6 right-4 rounded-lg bg-gradient-to-r from-primary/95 to-fuchsia-400/70 px-3 md:px-4 py-1 text-sm md:text-lg font-semibold text-white shadow-md z-10">
                  {tour.price}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Contenu texte à gauche */}
                  <div className="p-6 space-y-6">
                    <div>
                      <CardDescription className="py-2 text-base font-medium tracking-wide text-muted-foreground">
                        {tour.description}
                      </CardDescription>
                      <CardTitle className="font-urbanist text-3xl font-black tracking-wide">
                        <Balancer>{tour.title}</Balancer>
                      </CardTitle>
                    </div>

                    <div className="text-base leading-8 tracking-wide text-muted-foreground">
                      <div className="space-y-4">
                        <p>
                          <Balancer>{tour.details}</Balancer>
                        </p>
                        <p className="font-semibold text-foreground">
                          <Balancer>
                            Let&apos;s bring your vision to life
                          </Balancer>
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>
                              <Balancer>
                                We welcome inquiries for customizing tours based
                                on specific interests, durations, and group
                                sizes. Let&apos;s explore Paris your way through
                                a personalized itinerary designed just for you.
                              </Balancer>
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>
                              <Balancer>
                                Additionally, we specialize in curating
                                exceptional experiences for corporate outings
                                and team-building activities. Engage your team
                                in an exciting adventure, combining exploration,
                                team bonding, and unforgettable memories.
                              </Balancer>
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>
                              <Balancer>
                                We are here to assist you every step of the way,
                                from initial planning to seamless execution.
                              </Balancer>
                            </span>
                          </li>
                        </ul>
                        <p className="italic">
                          <Balancer>
                            We value open communication and encourage you to get
                            in touch with us to discuss your ideas, preferences,
                            and any special requirements you may have. We are
                            excited to collaborate and make your vision a
                            reality! 💫🚴🏻‍♂️
                          </Balancer>
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        asChild
                        className="h-10 flex-1 font-bold tracking-wide bg-secondary/80 hover:bg-secondary text-secondary-foreground shadow-md hover:shadow-lg transition-all border-2 border-secondary"
                      >
                        <Link href={createLink("tours")}>More Info</Link>
                      </Button>
                      <Button
                        asChild
                        className="h-10 flex-1 font-bold tracking-wide bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-md hover:shadow-lg transition-all"
                      >
                        <Link href={`${createLink("home")}#contact`}>
                          Contact Us
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Image à droite */}
                  <div className="relative">
                    <Image
                      alt={tour.title}
                      src={tour.image}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
