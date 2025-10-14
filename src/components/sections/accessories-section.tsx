"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { accessoriesImages } from "@/lib/images/accessories-images";
import { HighlightText } from "@/lib/utils/highlight";
import { getSectionTranslations } from "@/lib/utils/i18n-loader";
import { AccessoriesContent } from "@/types";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function AccessoriesSection() {
  const { locale } = useLocalizedRoutes();
  const t = getSectionTranslations(locale, "accessories");

  // Simple array of accessory IDs
  const accessoryIds = [
    "helmet",
    "basket",
    "phone-mount",
    "child-seat",
    "lock",
  ] as const;

  return (
    <section
      id="accessories-carousel"
      aria-label="accessories carousel"
      className="w-full"
    >
      <div className="container mx-auto text-center">
        {/* Title and Subtitle */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <Balancer>
              <HighlightText gradient={true}>{t.title}</HighlightText>
            </Balancer>
          </h2>
          <h3 className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
              <HighlightText gradient={false} className="text-foreground">
                {t.subtitle}
              </HighlightText>
            </Balancer>
          </h3>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
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
          className="swiper-carousel accessories-carousel w-full"
        >
          {accessoryIds.map((accessoryId) => {
            const accessory = t[accessoryId] as AccessoriesContent;

            return (
              <SwiperSlide key={accessoryId} className="py-8 rounded-xl">
                <Card className="bg-gradient-to-r from-primary/10 to-fuchsia-400/10 transition-all duration-1000 ease-out hover:opacity-90 md:hover:-translate-y-2 rounded-xl overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={
                        accessoriesImages[
                          accessory.image as keyof typeof accessoriesImages
                        ]
                      }
                      alt={accessory.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-urbanist text-lg font-semibold tracking-wider">
                      <Balancer>{accessory.title}</Balancer>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="leading-6 text-muted-foreground md:text-sm lg:text-base h-24 md:h-20 lg:h-36 xl:h-28">
                    <Balancer>{accessory.description}</Balancer>
                  </CardContent>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
