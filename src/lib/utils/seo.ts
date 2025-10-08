import { type Locale, type RouteKey, routes } from "@/config/routes";
import { type Metadata } from "next";

interface LocalizedMetadataProps {
  routeKey: RouteKey;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  locale?: Locale;
  keywords?: string[];
  images?: string[];
}

/**
 * Générer les métadonnées avec balises hreflang pour le SEO
 */
export function generateLocalizedMetadata({
  routeKey,
  title,
  description,
  locale = "en",
  keywords = [],
  images = [],
}: LocalizedMetadataProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rentatour.com";
  const currentPath = routes[routeKey][locale];
  const alternates = {
    canonical: `${baseUrl}${currentPath}`,
    languages: {
      en: `${baseUrl}${routes[routeKey].en}`,
      fr: `${baseUrl}${routes[routeKey].fr}`,
      "x-default": `${baseUrl}${routes[routeKey].en}`, // Fallback pour les autres langues
    },
  };

  return {
    title: title[locale],
    description: description[locale],
    keywords,
    alternates,
    openGraph: {
      title: title[locale],
      description: description[locale],
      url: `${baseUrl}${currentPath}`,
      siteName: "RentaTour",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
      images: images.length > 0 ? images : [`${baseUrl}/images/og-image.jpg`],
    },
    twitter: {
      card: "summary_large_image",
      title: title[locale],
      description: description[locale],
      images: images.length > 0 ? images : [`${baseUrl}/images/og-image.jpg`],
    },
  };
}

/**
 * Générer le sitemap avec toutes les URLs localisées
 */
export function generateLocalizedSitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rentatour.com";
  const entries: Array<{
    url: string;
    locale: Locale;
    alternates: Array<{ locale: Locale; url: string }>;
  }> = [];

  for (const config of Object.values(routes)) {
    // Ajouter l'entrée anglaise
    entries.push({
      url: `${baseUrl}${config.en}`,
      locale: "en",
      alternates: [
        { locale: "en", url: `${baseUrl}${config.en}` },
        { locale: "fr", url: `${baseUrl}${config.fr}` },
      ],
    });

    // Ajouter l'entrée française
    entries.push({
      url: `${baseUrl}${config.fr}`,
      locale: "fr",
      alternates: [
        { locale: "en", url: `${baseUrl}${config.en}` },
        { locale: "fr", url: `${baseUrl}${config.fr}` },
      ],
    });
  }

  return entries;
}
