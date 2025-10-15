"use client";

import { Icons } from "@/components/shared/icons";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { HighlightText } from "@/lib/utils/highlight";
import { getSectionTranslations } from "@/lib/utils/i18n-loader";
import { Testimonial } from "@/types";
import Image from "next/image";
import { useState } from "react";
import Balancer from "react-wrap-balancer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-testimonials",
            prevEl: ".swiper-button-prev-testimonials",
          }}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          style={{ "--swiper-theme-color": "#e2651d" } as React.CSSProperties}
          className="swiper-carousel testimonials-carousel w-full"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name} className="py-8 rounded-xl">
              <TestimonialCard
                testimonial={testimonial}
                readMoreText={t.readMore}
                readLessText={t.readLess}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            className="swiper-button-prev-testimonials p-3 rounded-full bg-gradient-to-r from-primary/10 to-fuchsia-400/10 hover:from-primary/20 hover:to-fuchsia-400/20 transition-all duration-300 border border-primary/20"
            aria-label="Previous testimonial"
          >
            <Icons.chevronLeft className="w-5 h-5 text-primary" />
          </button>
          <button
            className="swiper-button-next-testimonials p-3 rounded-full bg-gradient-to-r from-primary/10 to-fuchsia-400/10 hover:from-primary/20 hover:to-fuchsia-400/20 transition-all duration-300 border border-primary/20"
            aria-label="Next testimonial"
          >
            <Icons.chevronRight className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}
