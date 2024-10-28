import Link from "next/link";

import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

export async function HeroSection() {
  return (
    <section
      id="hero-section"
      aria-label="hero section"
      className="mt-8 w-full md:mt-12"
    >
      <div className="container flex flex-col items-center gap-6 text-center ">
        <h1 className="animate-fade-up font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <Balancer>
            Explore{" "}
            <span className="bg-gradient-to-r from-orange-600 to-pink-400 bg-clip-text text-transparent font-extrabold  ">
              Paris{" "}
            </span>
            like never before
          </Balancer>
        </h1>

        <p className="col-start-1 row-start-3 max-w-xl text-muted-foreground md:mt-2 md:text-lg">
          Discover the beauty and history of Paris on our guided bike tours.{" "}
          {/* <span className="bg-gradient-to-r from-orange-600 to-red-400 bg-clip-text text-transparent font-bold"> */}
          Experience {/* </span>{" "} */}
          the city, pedal through iconic landmarks, and{" "}
          {/* <span className="bg-gradient-to-r from-orange-600 to-red-400 bg-clip-text text-transparent font-bold"> */}
          enjoy {/* </span>{" "} */}
          unique perspectives on every ride.
        </p>

        <div className="z-10 flex animate-fade-up justify-center gap-4 flex-wrap md:mt-2">
          <Link
            href="/signup"
            className={cn(
              buttonVariants({ size: "lg" }),
              "transition-all duration-1000 ease-out md:hover:-translate-y-2"
            )}
          >
            Explore Tours
          </Link>
          <Link
            href="/tours"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "transition-all duration-1000 ease-out md:hover:-translate-y-2"
            )}
          >
            Bike Rental
          </Link>
        </div>
        {/* <div className="w-full overflow-hidden flex justify-center -mt-10 -mb-16 sm:-mb-24"> pour la tour effeil */}
        <div className="w-full overflow-hidden flex justify-center mt-4 -mb-16 sm:-mb-24">
          <Image
            width={1080}
            height={720}
            alt="illustration"
            src="/images/hero/palais-royal(1).jpg"
            className="overflow-hidden rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
