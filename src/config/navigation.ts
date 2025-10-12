import { type Locale } from "@/config/i18n";
import { routes } from "@/config/routes";
import { type NavItem } from "@/types";

/**
 * Configuration des éléments de navigation avec i18n
 */
export const navigationConfig = {
  en: {
    home: "Home",
    tours: "Guided Tours",
    rent: "Bike Rentals",
    blog: "Blog",
    about: "About Us",
  },
  fr: {
    home: "Accueil",
    tours: "Visites Guidées",
    rent: "Location de Vélos",
    blog: "Blog",
    about: "À Propos",
  },
  de: {
    home: "Startseite",
    tours: "Geführte Touren",
    rent: "Fahrradverleih",
    blog: "Blog",
    about: "Über Uns",
  },
  nl: {
    home: "Home",
    tours: "Rondleidingen",
    rent: "Fietsverhuur",
    blog: "Blog",
    about: "Over Ons",
  },
  es: {
    home: "Inicio",
    tours: "Visitas Guiadas",
    rent: "Alquiler de Bicicletas",
    blog: "Blog",
    about: "Sobre Nosotros",
  },
} as const;

/**
 * Générer les items de navigation pour une locale donnée
 */
export function getNavItems(locale: Locale): NavItem[] {
  // Fallback to 'fr' if locale is invalid
  const safeLocale = (locale in navigationConfig ? locale : "fr") as Locale;
  const labels = navigationConfig[safeLocale];

  return [
    {
      title: labels.home,
      href: routes.home[safeLocale],
    },
    {
      title: labels.tours,
      href: routes.tours[safeLocale],
    },
    {
      title: labels.rent,
      href: routes.rent[safeLocale],
    },
    {
      title: labels.blog,
      href: routes.blog[safeLocale],
    },
    {
      title: labels.about,
      href: routes.about[safeLocale],
    },
  ];
}
