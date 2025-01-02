import { BarChart3, Bike, Calendar, LucideIcon, Settings, ShoppingBag, Users } from 'lucide-react';

export interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { name: 'Overview', href: '/dashboard', icon: BarChart3 },
  { name: 'Bikes', href: '/dashboard/bikes', icon: Bike },
  { name: 'Accessories', href: '/dashboard/accessories', icon: ShoppingBag },
  { name: 'Tours', href: '/dashboard/tours', icon: Calendar },
  { name: 'Customers', href: '/dashboard/customers', icon: Users },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];
