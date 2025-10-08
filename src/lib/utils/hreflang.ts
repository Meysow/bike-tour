/**
 * Utilitaires pour la génération des balises hreflang (SEO multilingue)
 */

import { locales, type Locale } from "@/config/i18n";
import { routes, type RouteKey } from "@/config/routes";
import { siteConfig } from "@/config/site";

/**
 * Génère les URLs alternatives pour toutes les locales disponibles
 * @param routeKey - La clé de la route (home, tours, rent, etc.)
 * @returns Un objet avec les URLs alternatives pour chaque locale
 */
export function generateAlternateLanguages(routeKey: RouteKey = "home") {
  const alternates: Record<string, string> = {};

  // Ajouter une URL pour chaque locale
  locales.forEach((locale) => {
    const localizedPath = routes[routeKey][locale];
    alternates[locale] = `${siteConfig.url}/${locale}${localizedPath}`;
  });

  // Ajouter la balise x-default qui pointe vers la page racine
  // Google utilisera cette URL pour les utilisateurs dont la langue n'est pas disponible
  alternates["x-default"] = siteConfig.url;

  return alternates;
}

/**
 * Génère les URLs alternatives pour une route personnalisée (ex: articles de blog)
 * @param locale - La locale courante
 * @param path - Le chemin de la page (sans la locale)
 * @returns Un objet avec les URLs alternatives pour chaque locale
 */
export function generateCustomAlternateLanguages(locale: Locale, path: string) {
  const alternates: Record<string, string> = {};

  // Pour les pages personnalisées, on assume que le path est le même pour toutes les locales
  locales.forEach((loc) => {
    alternates[loc] = `${siteConfig.url}/${loc}${path}`;
  });

  // x-default pointe vers la locale par défaut
  alternates["x-default"] = `${siteConfig.url}${path}`;

  return alternates;
}
