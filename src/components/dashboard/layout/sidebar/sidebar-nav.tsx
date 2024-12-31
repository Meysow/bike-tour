"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./sidebar-nav-items";

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 space-y-1 px-2 py-4">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "group flex items-center rounded-md px-3 py-2 text-sm font-medium",
              isActive
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            )}
          >
            <item.icon
              className={cn(
                "mr-3 h-5 w-5 flex-shrink-0",
                isActive
                  ? "text-gray-500"
                  : "text-gray-400 group-hover:text-gray-500"
              )}
            />
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
