"use client";

import { type Locale, type RouteKey, routes } from "@/config/routes";
import {
  createLocalizedLink,
  getAlternateLanguageUrl,
} from "@/lib/utils/navigation";
import { useParams, usePathname } from "next/navigation";

/**
 * Hook pour obtenir la locale actuelle à partir des params Next.js ou du pathname
 */
export function useLocale(): Locale {
  const params = useParams();
  const pathname = usePathname();

  // 1. Priorité aux params Next.js (fournis par le middleware via [locale])
  if (params?.locale && typeof params.locale === "string") {
    return params.locale as Locale;
  }

  // 2. Sinon, vérifier si le chemin correspond à une route française
  for (const config of Object.values(routes)) {
    // Ignorer la route home car "/" est commun aux deux langues
    if (config.en === "/" && config.fr === "/") {
      continue;
    }

    if (pathname === config.fr || pathname.startsWith(config.fr + "/")) {
      return "fr";
    }
  }

  // 3. Par défaut, retourner 'en'
  return "en";
}

/**
 * Hook pour générer des liens localisés
 */
export function useLocalizedRoutes() {
  const pathname = usePathname();
  const locale = useLocale();

  /**
   * Créer un lien localisé pour la langue actuelle
   */
  const createLink = (routeKey: RouteKey): string => {
    return createLocalizedLink(routeKey, locale);
  };

  /**
   * Obtenir l'URL pour changer de langue
   */
  const getLanguageSwitchUrl = (targetLocale: Locale): string => {
    return getAlternateLanguageUrl(pathname, locale, targetLocale);
  };

  return {
    locale,
    createLink,
    getLanguageSwitchUrl,
    routes: routes,
  };
}
