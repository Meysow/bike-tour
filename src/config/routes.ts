/**
 * Configuration des routes localisées
 * Permet d'avoir des URLs différentes selon la langue pour un meilleur SEO
 */

import { defaultLocale, type Locale } from "./i18n";

export interface RouteConfig {
  en: string;
  fr: string;
  de: string;
  nl: string;
  es: string;
  /** Le chemin du fichier dans l'app directory (sans [locale]) */
  filePath: string;
}

/**
 * Mapping des routes pour chaque langue
 * La clé est un identifiant unique de la route
 */
export const routes = {
  home: {
    en: "/",
    fr: "/",
    de: "/",
    nl: "/",
    es: "/",
    filePath: "/",
  },
  tours: {
    en: "/guided-bike-tour-paris",
    fr: "/visite-guidee-de-paris-a-velo",
    de: "/gefuehrte-radtour-paris",
    nl: "/begeleide-fietstour-parijs",
    es: "/tour-guiado-bicicleta-paris",
    filePath: "/tours",
  },
  rent: {
    en: "/bike-rental-paris",
    fr: "/location-velo-paris",
    de: "/fahrradverleih-paris",
    nl: "/fietsverhuur-parijs",
    es: "/alquiler-bicicletas-paris",
    filePath: "/rent",
  },
  blog: {
    en: "/blog",
    fr: "/blog",
    de: "/blog",
    nl: "/blog",
    es: "/blog",
    filePath: "/blog",
  },
  about: {
    en: "/about-us",
    fr: "/a-propos",
    de: "/uber-uns",
    nl: "/over-ons",
    es: "/sobre-nosotros",
    filePath: "/about",
  },
  terms: {
    en: "/terms-and-conditions",
    fr: "/conditions-generales-utilisation",
    de: "/allgemeine-geschaeftsbedingungen",
    nl: "/algemene-voorwaarden",
    es: "/terminos-y-condiciones",
    filePath: "/terms",
  },
} as const;

export type RouteKey = keyof typeof routes;

/**
 * Obtenir l'URL localisée pour une route donnée
 */
export function getLocalizedPath(
  routeKey: RouteKey,
  locale: Locale = defaultLocale
): string {
  return routes[routeKey][locale];
}

/**
 * Obtenir la clé de route à partir d'un pathname
 */
export function getRouteKeyFromPath(pathname: string): RouteKey | null {
  // Retirer le slash initial si présent
  const cleanPath = pathname.startsWith("/") ? pathname.slice(1) : pathname;

  for (const [key, config] of Object.entries(routes)) {
    const enPath = config.en.startsWith("/") ? config.en.slice(1) : config.en;
    const frPath = config.fr.startsWith("/") ? config.fr.slice(1) : config.fr;
    const dePath = config.de.startsWith("/") ? config.de.slice(1) : config.de;
    const nlPath = config.nl.startsWith("/") ? config.nl.slice(1) : config.nl;
    const esPath = config.es.startsWith("/") ? config.es.slice(1) : config.es;

    if (
      cleanPath === enPath ||
      cleanPath === frPath ||
      cleanPath === dePath ||
      cleanPath === nlPath ||
      cleanPath === esPath ||
      pathname === config.en ||
      pathname === config.fr ||
      pathname === config.de ||
      pathname === config.nl ||
      pathname === config.es
    ) {
      return key as RouteKey;
    }
  }

  return null;
}

/**
 * Créer une map inversée pour la résolution rapide des routes
 */
export function createPathToLocaleMap() {
  const map = new Map<string, { key: RouteKey; locale: Locale }>();

  for (const [key, config] of Object.entries(routes)) {
    map.set(config.en, { key: key as RouteKey, locale: "en" });
    map.set(config.fr, { key: key as RouteKey, locale: "fr" });
    map.set(config.de, { key: key as RouteKey, locale: "de" });
    map.set(config.nl, { key: key as RouteKey, locale: "nl" });
    map.set(config.es, { key: key as RouteKey, locale: "es" });
  }

  return map;
}

/**
 * Obtenir la locale et la route à partir d'un pathname
 */
export function getLocaleFromPath(pathname: string): {
  locale: Locale;
  routeKey: RouteKey | null;
  filePath: string | null;
} {
  const pathMap = createPathToLocaleMap();
  const result = pathMap.get(pathname);

  if (result) {
    const filePath = routes[result.key].filePath;
    return { locale: result.locale, routeKey: result.key, filePath };
  }

  // Par défaut, retourner la locale par défaut si la route n'est pas trouvée
  return { locale: defaultLocale, routeKey: null, filePath: null };
}
