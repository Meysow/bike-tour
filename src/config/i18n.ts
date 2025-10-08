/**
 * Configuration centralisée pour l'internationalisation (i18n)
 * Toutes les configurations liées aux locales doivent être importées depuis ce fichier
 */

export const locales = ["en", "fr", "de", "nl", "es"] as const;
export type Locale = (typeof locales)[number];

/**
 * Locale par défaut utilisée pour la redirection et le fallback
 */
export const defaultLocale: Locale = "fr";

/**
 * Noms des langues pour l'affichage dans le sélecteur de langue
 */
export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
  nl: "Nederlands",
  es: "Español",
};

/**
 * Noms natifs des langues (optionnel, pour un affichage plus authentique)
 */
export const localeNativeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
  nl: "Nederlands",
  es: "Español",
};

/**
 * Configuration des cookies pour la persistance de la locale
 */
export const LOCALE_COOKIE_NAME = "NEXT_LOCALE";
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 an

/**
 * Helper pour vérifier si une chaîne est une locale valide
 */
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
