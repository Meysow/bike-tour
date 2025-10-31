"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import * as React from "react";

import FullBanner from "../../../public/images/logo/full-banner.png";

import { type Locale } from "@/config/i18n";
import { getNavItems } from "@/config/navigation";
import { routes } from "@/config/routes";
import { useLocale } from "@/hooks/use-localized-routes";

import { cn } from "@/lib/utils";

import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MobileLinkProps extends React.PropsWithChildren {
  href: string;
  disabled?: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileLink({
  children,
  href,
  disabled,
  setIsOpen,
}: MobileLinkProps): JSX.Element {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "text-foreground/70 transition-colors hover:text-foreground",
        pathname === href && "text-foreground font-bold",
        disabled && "pointer-events-none opacity-60"
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );
}

export function LocalizedNavigationMobile() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const locale = useLocale();
  const navItems = getNavItems(locale);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="transition-all duration-300 ease-in-out">
        <Button variant="navbarIcon" size="icon" className="md:hidden">
          <HamburgerMenuIcon className="size-5" aria-hidden="true" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex flex-col gap-10 transition-all duration-300 ease-in-out"
      >
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="pt-8">
          <Link
            href={routes.home[locale as Locale]}
            className="flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src={FullBanner}
              alt="RentaBikeParis Logo"
              className="h-12 w-auto object-contain"
              priority
            />
            <span className="sr-only">Home</span>
          </Link>
        </div>
        <div className="flex flex-col gap-4 pl-10 text-xl font-medium leading-none tracking-wide">
          {navItems.map((item) => (
            <MobileLink key={item.title} href={item.href} setIsOpen={setIsOpen}>
              {item.title}
            </MobileLink>
          ))}
        </div>

        {/* Language Switcher for Mobile */}
        <div className="pl-4 pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Langue:</span>
            <LanguageSwitcher />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
