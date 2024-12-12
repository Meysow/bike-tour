import {
  BarChart3,
  Bike,
  Calendar,
  LucideIcon,
  Settings,
  ShoppingBag,
  Users,
} from "lucide-react";

export interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { name: "Overview", href: "/admin", icon: BarChart3 },
  { name: "Bikes", href: "/admin/bikes", icon: Bike },
  { name: "Accessories", href: "/admin/accessories", icon: ShoppingBag },
  { name: "Tours", href: "/admin/tours", icon: Calendar },
  { name: "Customers", href: "/admin/customers", icon: Users },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];
