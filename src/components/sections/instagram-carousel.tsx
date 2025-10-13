"use client";

import { Icons } from "@/components/shared/icons";
import { LoadingSpinner } from "@/components/shared/loading-spinner";
import { Button } from "@/components/ui/button";
import { env } from "@/env.mjs";
import { InstagramPost } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Balancer from "react-wrap-balancer";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { siteConfig } from "@/config/site";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface InstagramCarouselProps {
  accessToken?: string;
  limit?: number;
  className?: string;
}

export function InstagramCarousel({
  accessToken = env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN,
  limit = 8,
  className = "",
}: InstagramCarouselProps) {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      if (!accessToken) {
        // Si pas de token, on utilise des images de démonstration
        const demoImages = [
          "/images/bikes/couple-riding.webp",
          "/images/bikes/riding.webp",
          "/images/hero/palais-royal.jpg",
          "/images/hero/louvre.jpg",
          "/images/bikes/ebike.webp",
          "/images/bikes/deluxe7.webp",
          "/images/hero/burren.jpg",
          "/images/bikes/bike-illustration.webp",
        ];

        const demoPosts: InstagramPost[] = demoImages
          .slice(0, limit)
          .map((img, index) => ({
            id: `demo-${index}`,
            media_type: "IMAGE" as const,
            media_url: img,
            caption: `Découvrez Paris à vélo ! #BikeToursParis #ExploreParis`,
            permalink: "#",
            timestamp: new Date().toISOString(),
          }));

        setPosts(demoPosts);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,caption,permalink,timestamp&limit=${limit}&access_token=${accessToken}`
        );

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des posts Instagram");
        }

        const data = await response.json();

        // Filtrer uniquement les images et vidéos
        const filteredPosts = data.data.filter(
          (post: InstagramPost) =>
            post.media_type === "IMAGE" || post.media_type === "VIDEO"
        );

        setPosts(filteredPosts);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Une erreur est survenue"
        );
        console.error("Erreur Instagram API:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, [accessToken, limit]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <p className="text-muted-foreground">
          Impossible de charger les photos Instagram pour le moment.
        </p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-muted-foreground">
          Aucune photo Instagram disponible.
        </p>
      </div>
    );
  }

  return (
    <section
      id="instagram-section"
      aria-label="instagram section"
      className={`w-full ${className}`}
    >
      <div className="container grid max-w-6xl gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <Balancer>
              Follow our{" "}
              <span className="bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text text-transparent">
                Adventures
              </span>
            </Balancer>
          </h2>
          <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
              Discover the most beautiful moments from our bike tours through{" "}
              <span className="font-semibold text-foreground">Paris</span> and
              join our community of riders.
            </Balancer>
          </h3>
        </div>

        <div className="space-y-8 w-full">
          <div className="w-full overflow-hidden">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              pagination={{
                clickable: true,
                dynamicBullets: false,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              observer={true}
              observeParents={true}
              watchSlidesProgress={true}
              className="instagram-carousel w-full"
            >
              {posts.map((post) => (
                <SwiperSlide key={post.id}>
                  <Link
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-fuchsia-400/5 border border-primary/10 transition-all duration-1000 ease-out md:hover:-translate-y-3 hover:shadow-lg">
                      <Image
                        src={post.media_url}
                        alt={post.caption || "Photo Instagram"}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />

                      {/* Overlay avec icône Instagram */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/90 p-3 rounded-full shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          <Icons.instagram className="w-6 h-6 text-primary" />
                        </div>
                      </div>

                      {/* Badge pour les vidéos */}
                      {post.media_type === "VIDEO" && (
                        <div className="absolute top-3 right-3 bg-gradient-to-r from-primary to-fuchsia-400 rounded-full p-2 shadow-md">
                          <Icons.play className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Boutons de navigation personnalisés */}
          <div className="flex justify-center items-center gap-4">
            <button
              className="swiper-button-prev-custom p-3 rounded-full bg-gradient-to-r from-primary/10 to-fuchsia-400/10 hover:from-primary/20 hover:to-fuchsia-400/20 transition-all duration-300 border border-primary/20"
              aria-label="Previous slide"
            >
              <Icons.chevronLeft className="w-5 h-5 text-primary" />
            </button>
            <button
              className="swiper-button-next-custom p-3 rounded-full bg-gradient-to-r from-primary/10 to-fuchsia-400/10 hover:from-primary/20 hover:to-fuchsia-400/20 transition-all duration-300 border border-primary/20"
              aria-label="Next slide"
            >
              <Icons.chevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>

          {/* Call to action vers Instagram */}
          <div className="flex justify-center">
            <Button
              asChild
              className="h-12 px-8 font-bold tracking-wide text-white bg-gradient-to-r from-primary to-fuchsia-400 hover:opacity-90 transition-opacity"
            >
              <Link
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Icons.instagram className="w-5 h-5" />
                Follow us on Instagram
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .instagram-carousel {
          width: 100%;
          max-width: 100%;
        }

        .instagram-carousel .swiper-wrapper {
          display: flex;
          align-items: stretch;
        }

        .instagram-carousel .swiper-slide {
          width: 100% !important;
          height: auto;
          flex-shrink: 0;
        }

        @media (min-width: 640px) {
          .instagram-carousel .swiper-slide {
            width: calc(50% - 8px) !important;
          }
        }

        @media (min-width: 768px) {
          .instagram-carousel .swiper-slide {
            width: calc(33.333% - 13.333px) !important;
          }
        }

        @media (min-width: 1024px) {
          .instagram-carousel .swiper-slide {
            width: calc(25% - 18px) !important;
          }
        }

        .instagram-carousel .swiper-pagination {
          position: static !important;
          margin-top: 1.5rem;
          justify-content: center !important;
          align-items: center !important;
          width: 100% !important;
          left: 50% !important;
          right: auto !important;
          text-align: center;
        }

        .instagram-carousel .swiper-pagination-bullet {
          width: 10px !important;
          height: 10px !important;
          background: linear-gradient(
            to right,
            hsl(var(--primary)),
            hsl(var(--primary)) 50%,
            #a855f7
          ) !important;
          opacity: 0.3 !important;
          transition: all 0.3s ease;
          margin: 0 4px !important;
          position: static !important;
          left: auto !important;
        }

        .instagram-carousel .swiper-pagination-bullet-active {
          opacity: 1 !important;
          width: 24px !important;
          border-radius: 5px !important;
        }
      `}</style>
    </section>
  );
}
