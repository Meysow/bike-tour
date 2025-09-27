"use client";

import type { NavItem } from "@/types";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface NavigationProps {
  navItems: NavItem[];
}

export function Navigation({ navItems }: NavigationProps): JSX.Element {
  return (
    <NavigationMenu className="hidden transition-all duration-300 ease-in-out md:flex">
      <NavigationMenuList className="gap-2">
        {navItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
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
