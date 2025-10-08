/**
 * EXEMPLE D'UTILISATION DES MÉTADONNÉES SEO AVEC URLs LOCALISÉES
 *
 * Ce fichier montre comment générer les métadonnées avec les balises hreflang
 * pour une meilleure indexation SEO multilingue.
 *
 * Pour l'utiliser, renommez ce fichier en supprimant '.example' et ajoutez cette fonction
 * à votre fichier page.tsx
 */

import { type Locale } from "@/config/routes";
import { generateLocalizedMetadata } from "@/lib/utils/seo";
import { type Metadata } from "next";

/**
 * Générer les métadonnées pour la page de location de vélos
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generateLocalizedMetadata({
    routeKey: "rent",
    locale,
    title: {
      en: "Bike Rental in Paris | RentaTour - Quality Bikes from €15/day",
      fr: "Location de Vélo à Paris | RentaTour - Vélos de Qualité dès 15€/jour",
    },
    description: {
      en: "Rent quality bikes in Paris from €15/day. Electric bikes, city bikes, and more. Free helmet and lock included. Book your bike rental in Paris today!",
      fr: "Louez des vélos de qualité à Paris dès 15€/jour. Vélos électriques, vélos de ville et plus. Casque et antivol inclus. Réservez votre location de vélo à Paris aujourd'hui !",
    },
    keywords: [
      "bike rental paris",
      "location velo paris",
      "rent bike paris",
      "louer velo paris",
      "electric bike paris",
      "velo electrique paris",
      "paris bike hire",
    ],
    images: ["/images/bikes/deluxe7.webp"],
  });
}

/**
 * RÉSULTAT ATTENDU :
 *
 * Les balises suivantes seront générées dans le <head> :
 *
 * Pour la version française (/location-velo-paris):
 * <title>Location de Vélo à Paris | RentaTour - Vélos de Qualité dès 15€/jour</title>
 * <meta name="description" content="Louez des vélos de qualité à Paris..." />
 * <link rel="canonical" href="https://rentatour.com/location-velo-paris" />
 * <link rel="alternate" hreflang="en" href="https://rentatour.com/bike-rental-paris" />
 * <link rel="alternate" hreflang="fr" href="https://rentatour.com/location-velo-paris" />
 * <link rel="alternate" hreflang="x-default" href="https://rentatour.com/bike-rental-paris" />
 *
 * Pour la version anglaise (/bike-rental-paris):
 * <title>Bike Rental in Paris | RentaTour - Quality Bikes from €15/day</title>
 * <meta name="description" content="Rent quality bikes in Paris..." />
 * <link rel="canonical" href="https://rentatour.com/bike-rental-paris" />
 * <link rel="alternate" hreflang="en" href="https://rentatour.com/bike-rental-paris" />
 * <link rel="alternate" hreflang="fr" href="https://rentatour.com/location-velo-paris" />
 * <link rel="alternate" hreflang="x-default" href="https://rentatour.com/bike-rental-paris" />
 *
 * AVANTAGES SEO :
 * - Google comprend que ces deux pages sont des versions linguistiques de la même page
 * - Pas de contenu dupliqué (duplicate content)
 * - Meilleur ciblage géographique
 * - URLs contenant des mots-clés localisés
 * - Amélioration du CTR dans les résultats de recherche
 */
