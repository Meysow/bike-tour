import Link from "next/link";

import { siteConfig } from "@/config/site";

import { Navigation } from "@/components/nav/navigation";
import { NavigationMobile } from "@/components/nav/navigation-mobile";
import { Icons } from "@/components/shared/icons";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export function Header(): JSX.Element {
  return (
    <header className="sticky top-0 z-40 flex h-20 w-full bg-transparent">
      <div className="container flex items-center justify-between p-4">
        {/* Logo - Prend une largeur fixe pour équilibrer */}
        <div className="flex w-1/3 justify-start">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 text-lg font-bold tracking-wide transition-all duration-300 ease-in-out"
          >
            <Icons.bike className="size-12 md:hidden lg:flex" />
            <span className="hidden md:flex">{siteConfig.name}</span>
          </Link>
        </div>

        {/* Navigation - Centrée dans le tiers du milieu */}
        <div className="flex w-1/3 justify-center">
          <Navigation navItems={siteConfig.navItems} />
        </div>

        {/* Actions - Prend une largeur fixe pour équilibrer */}
        <div className="flex w-1/3 justify-end">
          <div className="flex items-center justify-center">
            <ThemeToggle />
            <NavigationMobile navItems={siteConfig.navItems} />
          </div>
        </div>
      </div>
    </header>
  );
}
