"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { Icons } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { type Locale } from "@/config/routes";
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
] as const;

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { locale: currentLocale, getLanguageSwitchUrl } = useLocalizedRoutes();

  const currentLanguage =
    languages.find((lang) => lang.code === currentLocale) || languages[0];

  // Fonction pour changer de langue
  const switchLanguage = (newLocale: Locale) => {
    // Mettre à jour le cookie de préférence de langue
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${
      60 * 60 * 24 * 365
    }`;

    // Si on est sur la page d'accueil, recharger la page pour que le middleware détecte le nouveau cookie
    if (pathname === "/") {
      router.refresh();
      setIsOpen(false);
      return;
    }

    // Obtenir l'URL traduite pour la nouvelle langue
    const newPath = getLanguageSwitchUrl(newLocale);
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 h-9 px-3"
          aria-label="Changer de langue"
        >
          <span className="text-lg">{currentLanguage.flag}</span>
          <span className="hidden sm:inline text-sm font-medium">
            {currentLanguage.name}
          </span>
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => switchLanguage(language.code as Locale)}
            className={`flex items-center gap-3 cursor-pointer ${
              currentLocale === language.code
                ? "bg-primary/10 text-primary font-medium"
                : ""
            }`}
          >
            <span className="text-lg">{language.flag}</span>
            <span className="flex-1">{language.name}</span>
            {currentLocale === language.code && (
              <Icons.check className="h-4 w-4 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
