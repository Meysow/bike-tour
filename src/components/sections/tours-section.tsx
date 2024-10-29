import Image from "next/image";
import Balancer from "react-wrap-balancer";
import Burren from "../../../public/images/hero/burren.jpg";
import Leophil from "../../../public/images/hero/leophil.jpg";
import Louvre from "../../../public/images/hero/louvre.jpg";
import Palais from "../../../public/images/hero/palais-royal.jpg";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ToursSection(): JSX.Element {
  return (
    <section id="tour-section" aria-label="Tour section" className="w-full">
      <div className="container grid max-w-6xl justify-center gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <Balancer>
              Discover our{" "}
              <span className="relative bg-gradient-to-r from-orange-600 to-pink-400 bg-clip-text font-extrabold text-transparent">
                Tours
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
          <div className="space-y-4 md:mt-20 md:space-y-6">
            <Card
              id="1"
              className="h-fit bg-gradient-to-br from-orange-600/10 to-pink-400/10 transition-all duration-1000 ease-out md:hover:-translate-y-3"
            >
              <CardHeader>
                <CardDescription className="py-2 text-base font-medium tracking-wide text-muted-foreground">
                  Full tour
                </CardDescription>
                <CardTitle className="font-urbanist text-3xl font-black tracking-wide">
                  <Balancer>All around Paris by Bike</Balancer>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-0">
                <p className="px-4 text-base leading-8 tracking-wide text-muted-foreground">
                  <Balancer>
                    Starting in the heart of Paris 💫 we will take you to our
                    most beautiful spots around the city 🚴🏻‍♂️ The tour is a good
                    mix in between our touch, typical Parisian streets, and
                    emblematic monuments of the city.
                    <br className="hidden md:inline-block" /> - Starting spot:
                    20 rue Greneta, 75002 Paris
                    <br className="hidden md:inline-block" /> - 3-hours ride
                    around Paris
                    <br className="hidden md:inline-block" /> - A nice break in
                    between to get to know each other
                  </Balancer>
                </p>

                <Image
                  alt="illustration"
                  src={Louvre}
                  className="overflow-hidden rounded-b-xl"
                />
              </CardContent>
            </Card>
            <Card
              id="2"
              className="h-fit bg-gradient-to-br from-orange-600/10 to-pink-400/10 transition-all duration-1000 ease-out md:hover:-translate-y-3"
            >
              <CardHeader>
                <CardDescription className="py-2 text-base font-medium tracking-wide text-muted-foreground">
                  Evening Lights Tour
                </CardDescription>
                <CardTitle className="font-urbanist text-3xl font-black tracking-wide">
                  <Balancer>
                    Experience the Magic of Paris{" "}
                    <br className="hidden md:inline-block" /> Under the Lights
                  </Balancer>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-0">
                <p className="px-4 text-base leading-8 tracking-wide text-muted-foreground">
                  <Balancer>
                    Join us for a nighttime adventure as Paris lights up. See
                    the Eiffel Tower, Champs-Elysées, and the Seine in all their
                    illuminated glory.
                    <br /> - Starting spot: 15 avenue Montaigne, 75008 Paris
                    <br /> - 2-hour ride through iconic night views
                    <br /> - A stop for hot drinks and conversation under the
                    stars
                  </Balancer>
                </p>
                <Image
                  alt="Paris Evening Lights"
                  src={Palais}
                  className="overflow-hidden rounded-b-xl"
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4 md:space-y-6">
            <Card
              id="3"
              className="h-fit bg-gradient-to-br from-orange-600/10 to-pink-400/10 transition-all duration-1000 ease-out md:hover:-translate-y-3"
            >
              <CardHeader>
                <CardDescription className="py-2 text-base font-medium tracking-wide text-muted-foreground">
                  Hidden Gems of Paris
                </CardDescription>
                <CardTitle className="font-urbanist text-3xl font-black tracking-wide">
                  <Balancer>
                    Discover Parisian Secrets Off the Beaten Path
                  </Balancer>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-0">
                <p className="px-4 text-base leading-8 tracking-wide text-muted-foreground">
                  <Balancer>
                    Venture beyond the tourist trails to discover lesser-known
                    Parisian neighborhoods, hidden alleys, and secret courtyards
                    with local charm.
                    <br /> - Starting spot: 10 rue Oberkampf, 75011 Paris
                    <br /> - 3.5-hour exploration of Paris&apos;s hidden gems
                    <br /> - Includes a stop at a local café for refreshments
                  </Balancer>
                </p>
                <Image
                  alt="Paris Hidden Gems"
                  src={Burren}
                  className="overflow-hidden rounded-b-xl"
                />
              </CardContent>
            </Card>

            <Card
              id="4"
              className="h-fit w-full bg-gradient-to-br from-orange-600/10 to-pink-400/10 transition-all duration-1000 ease-out md:hover:-translate-y-3"
            >
              <CardHeader>
                <CardDescription className="py-2 text-base font-medium tracking-wide text-muted-foreground">
                  Art and Architecture
                </CardDescription>
                <CardTitle className="font-urbanist text-3xl font-black tracking-wide">
                  <Balancer>Explore the Artistic Soul of Paris</Balancer>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-0">
                <p className="px-4 text-base leading-8 tracking-wide text-muted-foreground">
                  <Balancer>
                    Perfect for art lovers, this tour covers famous art spots,
                    from the Louvre to local galleries, and architectural
                    highlights around Paris.
                    <br /> - Starting spot: 40 rue de Richelieu, 75001 Paris
                    <br /> - 4-hour in-depth art and architecture tour
                    <br /> - Pause at the Jardin des Tuileries for photos and
                    relaxation
                  </Balancer>
                </p>
                <Image
                  alt="Art and Architecture Tour"
                  src={Leophil}
                  className="overflow-hidden rounded-b-xl"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
