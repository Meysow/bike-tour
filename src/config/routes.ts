/**
 * Configuration des routes localisées
 * Permet d'avoir des URLs différentes selon la langue pour un meilleur SEO
 */

export type Locale = "en" | "fr";

export interface RouteConfig {
  en: string;
  fr: string;
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
    filePath: "/",
  },
  tours: {
    en: "/guided-bike-tour-paris",
    fr: "/visite-guidee-de-paris-a-velo",
    filePath: "/tours",
  },
  rent: {
    en: "/bike-rental-paris",
    fr: "/location-velo-paris",
    filePath: "/rent",
  },
  blog: {
    en: "/blog",
    fr: "/blog",
    filePath: "/blog",
  },
  about: {
    en: "/about-us",
    fr: "/a-propos",
    filePath: "/about",
  },
  terms: {
    en: "/terms-and-conditions",
    fr: "/conditions-generales-utilisation",
    filePath: "/terms",
  },
} as const;

export type RouteKey = keyof typeof routes;

/**
 * Obtenir l'URL localisée pour une route donnée
 */
export function getLocalizedPath(
  routeKey: RouteKey,
  locale: Locale = "en"
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

    if (
      cleanPath === enPath ||
      cleanPath === frPath ||
      pathname === config.en ||
      pathname === config.fr
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

  // Par défaut, retourner 'en' si la route n'est pas trouvée
  return { locale: "en", routeKey: null, filePath: null };
}
