import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Link from "next/link";

export const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  let routes = [];

  if (session) {
    routes = [
      {
        href: `/dashboard`,
        label: "Home",
        active: pathname === `/dashboard`,
      },
      {
        href: `profile`,
        label: "Profile",
        active: pathname === `/profile`,
      },
      {
        href: `/settings`,
        label: "Settings",
        active: pathname === `/settings`,
      },
    ];
  } else {
    routes = [
      {
        href: `/about-us`,
        label: "About us",
        active: pathname === `/about-us`,
      },
      {
        href: `/services`,
        label: "Services",
        active: pathname === `/services`,
      },
      {
        href: `/contact-us`,
        label: "Contact Us",
        active: pathname === `/contact-us`,
      },
      {
        href: `/faq`,
        label: "FAQ",
        active: pathname === `/faq`,
      },
    ];
  }

  if (status === "loading") return null;

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            " font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
          onClick={props.onClick}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};
