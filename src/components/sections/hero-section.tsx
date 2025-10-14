"use client";

import Link from "next/link";

import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { cn } from "@/lib/utils";
import { HighlightText } from "@/lib/utils/highlight";
import { getSectionTranslations } from "@/lib/utils/i18n-loader";

import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

import PalaisRoyal from "../../../public/images/hero/palais-royal(1).jpg";

export function HeroSection() {
  const { createLink, locale } = useLocalizedRoutes();
  const t = getSectionTranslations(locale, "hero");
  return (
    <section
      id="hero-section"
      aria-label="hero section"
      className="mt-8 w-full md:mt-12"
    >
      <div className="absolute inset-0 z-[-1] bg-gradient-to-t from-primary/25 to-transparent opacity-30 rounded-full blur-lg h-[85%] w-[75%] mx-auto" />
      <div className="container flex flex-col items-center gap-6 text-center ">
        <h1
          className="animate-fade-up font-urbanist text-4xl font-extrabold tracking-tight leading-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl"
          aria-label={t.title.replace(/<highlight>.*?<\/highlight>/g, "")}
        >
          <HighlightText gradient={true}>{t.title}</HighlightText>
        </h1>

        <p className="col-start-1 row-start-3 max-w-xl text-muted-foreground md:mt-2 md:text-lg leading-relaxed">
          <HighlightText gradient={false} className="text-foreground">
            {t.subtitle}
          </HighlightText>
        </p>

        <div className="z-10 flex animate-fade-up justify-center gap-4 flex-wrap md:mt-2">
          <Link
            href={createLink("tours")}
            className={cn(
              buttonVariants(),
              "transition-all duration-1000 ease-out md:hover:-translate-y-2 min-w-40 px-6"
            )}
            aria-label={t.ctaTours}
          >
            {t.ctaTours}
          </Link>
          <Link
            href={createLink("rent")}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "transition-all duration-1000 ease-out md:hover:-translate-y-2 min-w-40 px-6"
            )}
            aria-label={t.ctaRent}
          >
            {t.ctaRent}
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
