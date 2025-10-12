"use client";

import { type Locale } from "@/config/i18n";
import { type RouteKey, routes } from "@/config/routes";
import {
  createLocalizedLink,
  getAlternateLanguageUrl,
} from "@/lib/utils/navigation";
import { useParams, usePathname } from "next/navigation";

/**
 * Get the locale from cookies (client-side)
 */
function getLocaleFromCookie(): Locale | null {
  if (typeof document === "undefined") return null;

  const cookies = document.cookie.split("; ");
  const localeCookie = cookies.find((c) => c.startsWith("NEXT_LOCALE="));

  if (localeCookie) {
    const locale = localeCookie.split("=")[1];
    const validLocales: Locale[] = ["en", "fr", "de", "nl", "es"];
    if (validLocales.includes(locale as Locale)) {
      return locale as Locale;
    }
  }

  return null;
}

/**
 * Get the locale from browser language preference
 */
function getLocaleFromBrowser(): Locale | null {
  if (typeof navigator === "undefined") return null;

  const browserLang = navigator.language.split("-")[0].toLowerCase();
  const validLocales: Locale[] = ["en", "fr", "de", "nl", "es"];

  if (validLocales.includes(browserLang as Locale)) {
    return browserLang as Locale;
  }

  return null;
}

/**
 * Hook pour obtenir la locale actuelle à partir des params Next.js ou du pathname
 */
export function useLocale(): Locale {
  const params = useParams();
  const pathname = usePathname();

  const validLocales: Locale[] = ["en", "fr", "de", "nl", "es"];

  const isValidLocale = (locale: string): locale is Locale => {
    return validLocales.includes(locale as Locale);
  };

  // 1. Priorité aux params Next.js (fournis par le middleware via [locale])
  if (
    params?.locale &&
    typeof params.locale === "string" &&
    isValidLocale(params.locale)
  ) {
    return params.locale;
  }

  // 2. Extraire la locale du pathname (format: /[locale]/...)
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0) {
    const possibleLocale = segments[0];
    if (isValidLocale(possibleLocale)) {
      return possibleLocale;
    }
  }

  // 3. Vérifier si le chemin correspond à une route localisée spécifique
  for (const [, config] of Object.entries(routes)) {
    // Vérifier chaque locale
    if (pathname === config.fr || pathname.startsWith(config.fr + "/")) {
      return "fr";
    }
    if (pathname === config.de || pathname.startsWith(config.de + "/")) {
      return "de";
    }
    if (pathname === config.nl || pathname.startsWith(config.nl + "/")) {
      return "nl";
    }
    if (pathname === config.es || pathname.startsWith(config.es + "/")) {
      return "es";
    }
    if (pathname === config.en || pathname.startsWith(config.en + "/")) {
      return "en";
    }
  }

  // 4. Vérifier le cookie de préférence de langue
  const cookieLocale = getLocaleFromCookie();
  if (cookieLocale) {
    return cookieLocale;
  }

  // 5. Vérifier la langue du navigateur
  const browserLocale = getLocaleFromBrowser();
  if (browserLocale) {
    return browserLocale;
  }

  // 6. Par défaut, retourner 'fr' (locale par défaut)
  return "fr";
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
