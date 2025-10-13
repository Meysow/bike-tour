"use client";

import { Icons } from "@/components/shared/icons";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function TestimonialsSection() {
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
            <Balancer>
              Join our thriving community of{" "}
              <span className="bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text text-transparent">
                Satisfied Riders
              </span>{" "}
            </Balancer>
          </h2>
          <h3 className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Discover how our customers have made their rides{" "}
            <span className="font-semibold text-foreground">memorable</span>{" "}
            with us.
          </h3>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
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
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
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
              <Card className="bg-gradient-to-r from-primary/10 to-fuchsia-400/10 transition-all duration-1000 ease-out hover:opacity-90 md:hover:-translate-y-2 rounded-xl overflow-hidden h-full flex flex-col">
                <CardHeader className="pb-4">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-primary/20 to-fuchsia-400/20">
                      <Icons.heart className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Testimonial Title */}
                  <h3 className="font-urbanist text-lg font-semibold tracking-wider text-center">
                    <Balancer>{testimonial.title}</Balancer>
                  </h3>
                </CardHeader>

                <CardContent className="pt-0 flex flex-col flex-1">
                  {/* Testimonial Body */}
                  <p className="text-muted-foreground leading-6 text-sm md:text-base mb-6 flex-grow">
                    <Balancer>&quot;{testimonial.body}&quot;</Balancer>
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center justify-center space-x-4 mt-auto bg-primary/5 p-4 rounded-lg">
                    <div className="relative">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-primary to-fuchsia-400 rounded-full border-2 border-background"></div>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
