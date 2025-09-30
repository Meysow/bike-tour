import { usePathname } from "next/navigation";

/**
 * Hook pour obtenir le préfixe de langue actuel
 */
export function useLocale() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  return locale || "en";
}

/**
 * Fonction utilitaire pour créer des liens localisés
 */
export function getLocalizedPath(path: string, locale: string = "en"): string {
  // Si le chemin commence déjà par une langue, on le retourne tel quel
  if (path.startsWith("/en/") || path.startsWith("/fr/")) {
    return path;
  }

  // Si c'est la racine, on redirige vers la langue
  if (path === "/") {
    return `/${locale}`;
  }

  // Sinon, on ajoute le préfixe de langue
  return `/${locale}${path}`;
}

/**
 * Fonction pour extraire la locale d'un pathname
 */
export function extractLocaleFromPath(pathname: string): string {
  const segments = pathname.split("/");
  const locale = segments[1];
  return ["en", "fr"].includes(locale) ? locale : "en";
}
