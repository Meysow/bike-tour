"use client";

import Image from "next/image";
import Link from "next/link";

import FullBanner from "../../../public/images/logo/full-banner.png";
import LogoBanner from "../../../public/images/logo/logo-banner.png";

import { InfoBanner } from "@/components/nav/info-banner";
import { LocalizedNavigation } from "@/components/nav/localized-navigation";
import { LocalizedNavigationMobile } from "@/components/nav/localized-navigation-mobile";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export function Header(): JSX.Element {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Info Banner */}
      <InfoBanner />

      {/* Main Header */}
      <header className="flex h-16 w-full bg-background/80 backdrop-blur-lg border-b border-border/40 shadow-sm">
        <div className="container flex items-center justify-between py-2 px-4">
          {/* Logo - Prend une largeur fixe pour équilibrer */}
          <div className="flex w-1/4 justify-start">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 text-lg font-bold tracking-wide transition-all duration-300 ease-in-out"
            >
              {/* Small and Medium screens (up to 1159px) - logo-banner */}
              <Image
                src={LogoBanner}
                alt="RentaBikeParis Logo"
                className="h-12 w-auto max-[1159px]:block min-[1160px]:hidden object-contain"
                priority
              />
              {/* Large screens (1160px and up) - full-banner */}
              <Image
                src={FullBanner}
                alt="RentaBikeParis Logo"
                className="hidden min-[1160px]:block h-12 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Navigation - Centrée dans le tiers du milieu */}
          <div className="flex w-2/4 justify-center">
            <LocalizedNavigation />
          </div>

          {/* Actions - Prend une largeur fixe pour équilibrer */}
          <div className="flex w-1/4 justify-end">
            <div className="flex items-center justify-center gap-2">
              <LanguageSwitcher />
              <ThemeToggle />
              <LocalizedNavigationMobile />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
