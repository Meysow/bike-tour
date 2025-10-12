"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { type Locale } from "@/config/i18n";
import { getNavItems } from "@/config/navigation";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { useLocale } from "@/hooks/use-localized-routes";

import { cn } from "@/lib/utils";

import { Icons } from "@/components/shared/icons";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
          <Icons.menuToggle className="size-5" aria-hidden="true" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex flex-col gap-10 transition-all duration-300 ease-in-out"
      >
        <div className="pl-4">
          <Link
            href={routes.home[locale as Locale]}
            className="flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <Icons.bike className="mr-2 size-12" aria-hidden="true" />
            <span className="text-2xl font-bold leading-none tracking-wide">
              {siteConfig.name}
            </span>
            <span className="sr-only">Home</span>
          </Link>
        </div>
        <div className="flex flex-col gap-4 pl-16 text-xl font-medium leading-none tracking-wide">
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
