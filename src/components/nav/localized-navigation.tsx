"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getNavItems } from "@/config/navigation";
import { useLocale } from "@/hooks/use-localized-routes";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function LocalizedNavigation(): JSX.Element {
  const pathname = usePathname();
  const locale = useLocale();
  const navItems = getNavItems(locale);

  // Vérifier si le lien est actif
  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <NavigationMenu className="hidden transition-all duration-300 ease-in-out md:flex">
      <NavigationMenuList className="md:gap-0 lg:gap-2">
        {navItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent",
                  isActive(item.href) && "text-primary"
                )}
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
