"use client";

import type { NavItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface LocalizedNavigationProps {
  navItems: NavItem[];
}

export function LocalizedNavigation({
  navItems,
}: LocalizedNavigationProps): JSX.Element {
  const pathname = usePathname();

  // Extraire la locale du pathname
  const locale = pathname.split("/")[1] || "en";

  // Fonction pour créer des liens localisés
  const getLocalizedHref = (href: string) => {
    if (href.startsWith("/en/") || href.startsWith("/fr/")) {
      return href;
    }
    return `/${locale}${href}`;
  };

  return (
    <NavigationMenu className="hidden transition-all duration-300 ease-in-out md:flex">
      <NavigationMenuList className="gap-2">
        {navItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink asChild>
              <Link
                href={getLocalizedHref(item.href)}
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
              >
                {item.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
