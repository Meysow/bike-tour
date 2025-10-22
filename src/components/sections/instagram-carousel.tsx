"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { siteConfig } from "@/config/site";
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { instagramLocalService } from "@/lib/services/instagram-local";
import { HighlightText } from "@/lib/utils/highlight";
import { getSectionTranslations } from "@/lib/utils/i18n-loader";
import { InstagramPost } from "@/types";
import { InstagramLogoIcon, PlayIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface InstagramCarouselProps {
  limit?: number;
  className?: string;
  showAll?: boolean; // Show all 15 images or just limit
}

export function InstagramCarousel({
  limit = 15,
  className = "",
  showAll = false,
}: InstagramCarouselProps) {
  const { locale } = useLocalizedRoutes();
  const t = getSectionTranslations(locale, "instagram");
  const [posts, setPosts] = useState<InstagramPost[]>([]);

  useEffect(() => {
    // Load Instagram posts from local images
    const instagramPosts = showAll
      ? instagramLocalService.getAllPosts()
      : instagramLocalService.getPosts(limit);

    setPosts(instagramPosts);
  }, [limit, showAll]);

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
            <HighlightText gradient={true}>{t.title}</HighlightText>
          </h2>
          <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <HighlightText gradient={false} className="text-foreground">
              {t.subtitle}
            </HighlightText>
          </h3>

          {/* Call to action vers Instagram */}
          <div className="flex justify-center mt-6">
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
                <InstagramLogoIcon className="w-5 h-5" />
                Follow us on Instagram
              </Link>
            </Button>
          </div>
        </div>

        <div className="space-y-8 w-full">
          <div className="w-full relative">
            <Carousel
              opts={{
                align: "start",
                loop: false,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {posts.map((post) => (
                  <CarouselItem
                    key={post.id}
                    className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <Link
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group transform transition-transform duration-300 ease-out"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-fuchsia-400/5 border border-primary/10 transition-all duration-300 ease-out hover:shadow-xl group">
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
                            <InstagramLogoIcon className="w-6 h-6 text-primary" />
                          </div>
                        </div>

                        {/* Badge pour les vidéos */}
                        {post.media_type === "VIDEO" && (
                          <div className="absolute top-3 right-3 bg-gradient-to-r from-primary to-fuchsia-400 rounded-full p-2 shadow-md">
                            <PlayIcon className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation buttons */}
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
