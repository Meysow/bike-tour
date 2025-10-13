import Link from "next/link";

import { PartnersStack } from "@/data/partners-stack";

import { Icons } from "@/components/shared/icons";
import Balancer from "react-wrap-balancer";

export function PartnersSection(): JSX.Element {
  return (
    <section id="partners-section" aria-label="partners section">
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <Balancer>
            Riding the city{" "}
            <span className="bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text text-transparent">
              Together
            </span>
          </Balancer>
        </h2>
        <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
          <Balancer>
            Explore the journeys of our{" "}
            <span className="font-semibold text-foreground">trusted</span>{" "}
            partners who help us bring the best cycling experiences to you.
          </Balancer>
        </h3>
      </div>
      <div className="hidden w-full bg-background py-8 sm:grid mt-8">
        <div className="container flex w-full max-w-4xl flex-wrap place-items-center items-center justify-center gap-6 sm:gap-[38px] md:gap-[36px] lg:gap-x-12">
          {PartnersStack.map((partner) => {
            const Icon = Icons[partner.icon as keyof typeof Icons];

            return (
              <Link
                key={partner.title}
                href={partner.href}
                target="_blank"
                rel="noreferrer"
                className="transition-all duration-200 ease-out hover:opacity-70"
              >
                <Icon />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
