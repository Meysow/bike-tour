"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { InstagramPost } from "@/types";
import { LoadingSpinner } from "@/components/shared/loading-spinner";
import { Icons } from "@/components/shared/icons";
import { env } from "@/env.mjs";

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
  className = "" 
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
          "/images/bikes/bike-illustration.webp"
        ];

        const demoPosts: InstagramPost[] = demoImages.slice(0, limit).map((img, index) => ({
          id: `demo-${index}`,
          media_type: 'IMAGE' as const,
          media_url: img,
          caption: `Découvrez Paris à vélo ! #BikeToursParis #ExploreParis`,
          permalink: "#",
          timestamp: new Date().toISOString()
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
          throw new Error('Erreur lors de la récupération des posts Instagram');
        }

        const data = await response.json();
        
        // Filtrer uniquement les images et vidéos
        const filteredPosts = data.data.filter((post: InstagramPost) => 
          post.media_type === 'IMAGE' || post.media_type === 'VIDEO'
        );

        setPosts(filteredPosts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
        console.error('Erreur Instagram API:', err);
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
    <section className={`w-full ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Suivez nos aventures sur{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Instagram
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez les plus beaux moments de nos tours à vélo à travers Paris
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="instagram-carousel"
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <Link
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={post.media_url}
                    alt={post.caption || "Photo Instagram"}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  
                  {/* Overlay avec icône Instagram */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Icons.instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Badge pour les vidéos */}
                  {post.media_type === 'VIDEO' && (
                    <div className="absolute top-2 right-2 bg-black/70 rounded-full p-1">
                      <Icons.play className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                {/* Caption (optionnelle) */}
                {post.caption && (
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {post.caption}
                  </p>
                )}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Boutons de navigation personnalisés */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button className="swiper-button-prev-custom p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
            <Icons.chevronLeft className="w-5 h-5" />
          </button>
          <button className="swiper-button-next-custom p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
            <Icons.chevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Lien vers Instagram */}
        <div className="text-center mt-8">
          <Link
            href="https://instagram.com/votre_compte_instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Icons.instagram className="w-5 h-5" />
            Suivez-nous sur Instagram
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .instagram-carousel .swiper-pagination {
          position: static;
          margin-top: 1rem;
        }
        
        .instagram-carousel .swiper-pagination-bullet {
          background: hsl(var(--primary));
          opacity: 0.3;
        }
        
        .instagram-carousel .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
