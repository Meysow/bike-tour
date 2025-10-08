import {
  getLocalizedPath,
  routes,
  type Locale,
  type RouteKey,
} from "@/config/routes";

/**
 * Générer un lien localisé pour une route donnée
 * @param routeKey - La clé de la route (ex: 'rent', 'tours')
 * @param locale - La langue ('en' ou 'fr')
 * @returns L'URL localisée
 */
export function createLocalizedLink(
  routeKey: RouteKey,
  locale: Locale = "en"
): string {
  return getLocalizedPath(routeKey, locale);
}

/**
 * Obtenir toutes les routes pour une locale donnée
 */
export function getAllLocalizedRoutes(locale: Locale) {
  return Object.entries(routes).reduce((acc, [key, config]) => {
    acc[key as RouteKey] = config[locale];
    return acc;
  }, {} as Record<RouteKey, string>);
}

/**
 * Obtenir l'URL alternative pour changer de langue
 * @param currentPath - Le chemin actuel
 * @param targetLocale - La langue cible
 */
export function getAlternateLanguageUrl(
  currentPath: string,
  currentLocale: Locale,
  targetLocale: Locale
): string {
  // Trouver la clé de route correspondant au chemin actuel
  for (const config of Object.values(routes)) {
    if (config[currentLocale] === currentPath) {
      return config[targetLocale];
    }
  }

  // Si aucune correspondance, retourner la page d'accueil
  return routes.home[targetLocale];
}
