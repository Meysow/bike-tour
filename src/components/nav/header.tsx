"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";

import { LocalizedNavigation } from "@/components/nav/localized-navigation";
import { LocalizedNavigationMobile } from "@/components/nav/localized-navigation-mobile";
import { Icons } from "@/components/shared/icons";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export function Header(): JSX.Element {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 w-full bg-background/80 backdrop-blur-lg border-b border-border/40 shadow-sm">
      <div className="container flex items-center justify-between py-2 px-4">
        {/* Logo - Prend une largeur fixe pour équilibrer */}
        <div className="flex w-1/3 justify-start">
          <Link
            href={`/${locale}`}
            className="flex items-center justify-center gap-2 text-lg font-bold tracking-wide transition-all duration-300 ease-in-out"
          >
            <Icons.bike className="size-12 md:hidden lg:flex" />
            <span className="hidden md:flex">{siteConfig.name}</span>
          </Link>
        </div>

        {/* Navigation - Centrée dans le tiers du milieu */}
        <div className="flex w-1/3 justify-center">
          <LocalizedNavigation navItems={siteConfig.navItems} />
        </div>

        {/* Actions - Prend une largeur fixe pour équilibrer */}
        <div className="flex w-1/3 justify-end">
          <div className="flex items-center justify-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <LocalizedNavigationMobile navItems={siteConfig.navItems} />
          </div>
        </div>
      </div>
    </header>
  );
}
