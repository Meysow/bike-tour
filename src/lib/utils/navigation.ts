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
 * @param currentPath - Le chemin actuel (peut inclure /[locale]/)
 * @param currentLocale - La langue actuelle
 * @param targetLocale - La langue cible
 */
export function getAlternateLanguageUrl(
  currentPath: string,
  currentLocale: Locale,
  targetLocale: Locale
): string {
  // Retirer le préfixe /[locale]/ si présent
  let pathWithoutLocale = currentPath;
  if (currentPath.startsWith(`/${currentLocale}/`)) {
    pathWithoutLocale = currentPath.slice(currentLocale.length + 1);
  } else if (currentPath === `/${currentLocale}`) {
    pathWithoutLocale = "/";
  }

  // Trouver la clé de route correspondant au chemin actuel
  for (const [key, config] of Object.entries(routes)) {
    const routeKey = key as RouteKey;

    // Vérifier si le chemin correspond à cette route dans la langue actuelle
    if (
      config[currentLocale] === currentPath ||
      config[currentLocale] === pathWithoutLocale ||
      config.filePath === pathWithoutLocale
    ) {
      return config[targetLocale];
    }
  }

  // Si aucune correspondance, retourner la page d'accueil
  return routes.home[targetLocale];
}
