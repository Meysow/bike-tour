import Link from "next/link";

import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

import PalaisRoyal from "../../../public/images/hero/palais-royal(1).jpg";

export async function HeroSection() {
  return (
    <section
      id="hero-section"
      aria-label="hero section"
      className="mt-8 w-full md:mt-12"
    >
      <div className="absolute inset-0 z-[-1] bg-gradient-to-t from-primary/25 to-transparent opacity-30 rounded-full blur-lg h-[85%] w-[75%] mx-auto" />
      <div className="container flex flex-col items-center gap-6 text-center ">
        <h1
          className="animate-fade-up font-urbanist text-4xl font-extrabold tracking-tight leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
          aria-label="Explore Paris like never before with our guided bike tours"
        >
          <Balancer>
            Explore{" "}
            <span className="bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text text-transparent font-extrabold  ">
              Paris{" "}
            </span>
            like never before
          </Balancer>
        </h1>

        <p className="col-start-1 row-start-3 max-w-xl text-muted-foreground md:mt-2 md:text-lg leading-relaxed">
          Discover the beauty and history of Paris on our{" "}
          <span className="font-semibold text-foreground">guided</span> bike
          tours. Experience the city, pedal through iconic landmarks, and enjoy
          unique perspectives on every ride.
        </p>

        <div className="z-10 flex animate-fade-up justify-center gap-4 flex-wrap md:mt-2">
          <Link
            href="/tours"
            className={cn(
              buttonVariants(),
              "transition-all duration-1000 ease-out md:hover:-translate-y-2 w-32"
            )}
            aria-label="Explore our tours"
          >
            Explore Tours
          </Link>
          <Link
            href="/rent"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "transition-all duration-1000 ease-out md:hover:-translate-y-2 w-32"
            )}
            aria-label="Rent our Bikes"
          >
            Bike Rental
          </Link>
        </div>

        {/* <div className="w-full overflow-hidden flex justify-center -mt-10 -mb-16 sm:-mb-24"> pour la tour effeil */}
        <div className="max-w-5xl overflow-hidden flex justify-center mt-4 md:-mb-12 rounded-2xl shadow-lg shadow-muted-foreground">
          <Image alt="Paris landmark" src={PalaisRoyal} priority={true} />
        </div>
      </div>
    </section>
  );
}
