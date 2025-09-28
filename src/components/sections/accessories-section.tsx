"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { accessoriesFeatures } from "@/data/features";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function AccessoriesSection() {
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
              Enhance your ride with{" "}
              <span className="bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text text-transparent">
                Accessories
              </span>
            </Balancer>
          </h2>
          <h3 className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Discover our selection of accessories designed to make your journey
            more comfortable,{" "}
            <span className="font-semibold text-foreground">safe</span> and
            enjoyable. Whether you need helmets, baskets, child seats, or phone
            mounts, we have the extras you need to complete your perfect ride
            through Paris.
          </h3>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
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
          className="w-full"
        >
          {accessoriesFeatures.map((feature) => (
            <SwiperSlide key={feature.title} className="py-8 rounded-xl">
              <Card className="bg-gradient-to-r from-primary/10 to-fuchsia-400/10 transition-all duration-1000 ease-out hover:opacity-90 md:hover:-translate-y-2 rounded-xl overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="font-urbanist text-lg font-semibold tracking-wider">
                    <Balancer>{feature.title}</Balancer>
                  </CardTitle>
                </CardHeader>
                <CardContent className="leading-6 text-muted-foreground md:text-sm lg:text-base h-24 md:h-20 lg:h-36 xl:h-28">
                  <Balancer>{feature.description}</Balancer>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
