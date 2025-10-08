import { getLocaleFromPath, routes, type Locale } from "@/config/routes";
import { NextRequest, NextResponse } from "next/server";

const locales: Locale[] = ["en", "fr", "de", "nl", "es"];
const defaultLocale: Locale = "fr";

/**
 * Détecter la locale préférée de l'utilisateur
 */
function getPreferredLocale(request: NextRequest): Locale {
  // 1. Vérifier le cookie de préférence de langue
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && locales.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale;
  }

  // 2. Vérifier le header Accept-Language
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    // Extraire la langue principale (ex: "fr-FR,fr;q=0.9,en;q=0.8" → "fr")
    const lang = acceptLanguage.split(",")[0].split("-")[0].toLowerCase();
    if (locales.includes(lang as Locale)) {
      return lang as Locale;
    }
  }

  // 3. Par défaut, utiliser la locale par défaut
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Si on accède à la racine, faire un rewrite vers la locale préférée
  if (pathname === "/") {
    const preferredLocale = getPreferredLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${preferredLocale}`;

    const response = NextResponse.rewrite(url);

    // Stocker la locale dans un cookie pour la prochaine visite
    response.cookies.set("NEXT_LOCALE", preferredLocale, {
      maxAge: 60 * 60 * 24 * 365, // 1 an
      path: "/",
    });

    return response;
  }

  // Vérifier si le pathname commence par une locale ([locale]/...)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Si le pathname contient déjà une locale, on fait un rewrite vers la route localisée
  if (pathnameHasLocale) {
    const locale = pathname.split("/")[1] as Locale;
    const routePath = pathname.slice(locale.length + 1); // Retirer /[locale]

    // Chercher la correspondance dans les routes
    for (const config of Object.values(routes)) {
      const localizedPath = config[locale];

      if (routePath === localizedPath || routePath === "") {
        // La route correspond déjà, on laisse passer
        return NextResponse.next();
      }
    }

    return NextResponse.next();
  }

  // Vérifier si le pathname correspond à une route localisée
  const { locale, routeKey, filePath } = getLocaleFromPath(pathname);

  if (routeKey && filePath) {
    // Rewrite vers la route avec [locale] et le chemin de fichier réel
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${filePath}`;

    // Utiliser un rewrite pour que l'URL reste celle demandée par l'utilisateur
    return NextResponse.rewrite(url);
  }

  // Pour toutes les autres routes, on laisse passer
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, fonts, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|images|fonts).*)",
  ],
};
