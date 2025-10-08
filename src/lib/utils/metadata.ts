/**
 * Utilitaires pour la génération des metadata (DRY - Don't Repeat Yourself)
 * Centralise la logique de génération des metadata pour éviter la duplication
 */

import { isValidLocale } from "@/config/i18n";
import { type RouteKey } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { notFound } from "next/navigation";
import { generateAlternateLanguages } from "./hreflang";

/**
 * Type pour les paramètres de page Next.js
 */
type PageParams = Promise<{ locale: string }>;

/**
 * Génère les metadata avec hreflang pour une page donnée
 * Évite la duplication de code dans chaque page
 *
 * @param params - Les paramètres de la page (contient la locale)
 * @param routeKey - La clé de la route (home, tours, about, etc.)
 * @param path - Le chemin optionnel (par défaut, utilise la route)
 * @returns Les metadata avec balises hreflang
 *
 * @example
 * ```typescript
 * export async function generateMetadata({ params }) {
 *   return generatePageMetadata(params, "tours");
 * }
 * ```
 */
export async function generatePageMetadata(
  params: PageParams,
  routeKey: RouteKey,
  path?: string
) {
  const { locale } = await params;

  // Valider la locale
  if (!isValidLocale(locale)) {
    notFound();
  }

  // Déterminer le path final
  const finalPath = path || (routeKey === "home" ? "" : `/${routeKey}`);

  return {
    alternates: {
      canonical: `${siteConfig.url}/${locale}${finalPath}`,
      languages: generateAlternateLanguages(routeKey),
    },
  };
}

/**
 * Valide la locale des paramètres de page
 * Lance notFound() si la locale est invalide
 *
 * @param params - Les paramètres de la page
 * @returns La locale validée
 *
 * @example
 * ```typescript
 * export default async function Page({ params }) {
 *   const locale = await validateLocaleParams(params);
 *   // ...
 * }
 * ```
 */
export async function validateLocaleParams(
  params: PageParams
): Promise<string> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return locale;
}
