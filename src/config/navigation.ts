import { type Locale, routes } from "@/config/routes";
import { type NavItem } from "@/types";

/**
 * Configuration des éléments de navigation avec i18n
 */
export const navigationConfig = {
  en: {
    tours: "Guided Tours",
    rent: "Bike Rentals",
    blog: "Blog",
    about: "About Us",
  },
  fr: {
    tours: "Visites Guidées",
    rent: "Location de Vélos",
    blog: "Blog",
    about: "À Propos",
  },
} as const;

/**
 * Générer les items de navigation pour une locale donnée
 */
export function getNavItems(locale: Locale): NavItem[] {
  const labels = navigationConfig[locale];

  return [
    {
      title: labels.tours,
      href: routes.tours[locale],
    },
    {
      title: labels.rent,
      href: routes.rent[locale],
    },
    {
      title: labels.blog,
      href: routes.blog[locale],
    },
    {
      title: labels.about,
      href: routes.about[locale],
    },
  ];
}
