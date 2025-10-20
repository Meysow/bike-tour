"use client";

import { Icons } from "@/components/shared/icons";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/testimonials";
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { HighlightText } from "@/lib/utils/highlight";
import { getSectionTranslations } from "@/lib/utils/i18n-loader";
import { Testimonial } from "@/types";
import Image from "next/image";
import { useState } from "react";
import Balancer from "react-wrap-balancer";

// TestimonialCard component with read more functionality
function TestimonialCard({
  testimonial,
  readMoreText,
  readLessText,
}: {
  testimonial: Testimonial;
  readMoreText: string;
  readLessText: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 210; // Character limit
  const shouldTruncate = testimonial.body.length > maxLength;
  const displayText =
    isExpanded || !shouldTruncate
      ? testimonial.body
      : testimonial.body.substring(0, maxLength) + "...";

  return (
    <Card className="bg-gradient-to-r from-primary/10 to-fuchsia-400/10 transition-all duration-1000 ease-out hover:opacity-90 md:hover:-translate-y-2 rounded-xl overflow-hidden h-full flex flex-col">
      <CardContent className="p-6 flex flex-col h-full">
        {/* Customer Info - Top */}
        <div className="flex items-start mb-4">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
          />
          <div className="ml-8 flex-1">
            <p className="font-semibold text-foreground text-sm text-left">
              {testimonial.name}
            </p>
            <p className="text-muted-foreground text-xs text-left">
              {testimonial.role}
            </p>
          </div>
        </div>

        {/* Star Rating */}
        <div className="flex items-center justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Icons.star
              key={i}
              className="w-4 h-4 text-yellow-400 fill-current"
            />
          ))}
        </div>

        {/* Testimonial Body with Read More */}
        <div className="flex-grow">
          <p className="text-muted-foreground leading-6 text-sm">
            <Balancer>&quot;{displayText}&quot;</Balancer>
          </p>
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary hover:text-primary/80 text-xs font-medium mt-2 transition-colors"
            >
              {isExpanded ? readLessText : readMoreText}
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function TestimonialsSection() {
  const { locale } = useLocalizedRoutes();
  const t = getSectionTranslations(locale, "testimonials");

  return (
    <section
      id="testimonials-carousel"
      aria-label="testimonials carousel"
      className="w-full"
    >
      <div className="container mx-auto text-center">
        {/* Title and Subtitle */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <HighlightText gradient={true}>{t.title}</HighlightText>
          </h2>
          <h3 className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            <HighlightText gradient={false} className="text-foreground">
              {t.subtitle}
            </HighlightText>
          </h3>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.name} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="py-8 rounded-xl">
                  <TestimonialCard
                    testimonial={testimonial}
                    readMoreText={t.readMore}
                    readLessText={t.readLess}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation buttons */}
          <CarouselPrevious className="left-4 bg-gradient-to-r from-primary/10 to-fuchsia-400/10 hover:from-primary/20 hover:to-fuchsia-400/20 border-primary/20" />
          <CarouselNext className="right-4 bg-gradient-to-r from-primary/10 to-fuchsia-400/10 hover:from-primary/20 hover:to-fuchsia-400/20 border-primary/20" />
        </Carousel>
      </div>
    </section>
  );
}
