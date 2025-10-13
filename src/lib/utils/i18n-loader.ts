import { type Locale } from "@/config/i18n";

// Import all translation files
import deTranslations from "@/i18n/de.json";
import enTranslations from "@/i18n/en.json";
import esTranslations from "@/i18n/es.json";
import frTranslations from "@/i18n/fr.json";
import nlTranslations from "@/i18n/nl.json";

const translations = {
  en: enTranslations,
  fr: frTranslations,
  de: deTranslations,
  es: esTranslations,
  nl: nlTranslations,
} as const;

/**
 * Get translations for a specific locale
 */
export function getTranslations(locale: Locale) {
  return translations[locale] || translations.fr;
}

/**
 * Get a specific section of translations (e.g., "hero", "tours")
 */
export function getSectionTranslations<T extends keyof typeof enTranslations>(
  locale: Locale,
  section: T
): (typeof enTranslations)[T] {
  const localeTranslations = getTranslations(locale);
  return (
    (localeTranslations[section] as (typeof enTranslations)[T]) ||
    ({} as (typeof enTranslations)[T])
  );
}
