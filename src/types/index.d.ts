import type { Account, Profile, Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";

//TODO : faire le tri de ceux qu'on utilise pas.
export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export interface NavItemFooter {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export interface SessionCallbackParams {
  session: Session;
  token: JWT;
  user: User;
}

export interface JWTCallbackParams {
  token: JWT;
  user?: User | undefined;
  account?: Account | null | undefined;
  profile?: Profile | undefined;
  isNewUser?: boolean | undefined;
}

export interface BlogPostParamsProps {
  params: {
    slug: string[];
  };
}

export interface PricingPlan {
  id: "deluxe7" | "ebike" | "children";
  name: string;
  description: string;
  features: string[];
  limitations: string[];
  stripePriceId: string;
  dailyRate: number;
  stripeIds: {
    monthly?: string;
    yearly?: string;
  };
  image: StaticImageData;
}

export interface UserSubscriptionPlan extends SubscriptionPlan {
  stripeSubscriptionId?: string | null;
  stripeCurrentPeriodEnd?: string | null;
  stripeCustomerId?: string | null;
  isSubscribed: boolean;
  isCanceled: boolean;
  isActive: boolean;
}

export interface FrequentlyAskedQuestion {
  question: string;
  answer: string;
}

export interface Accessories {
  title: string;
  description: string;
  image: StaticImageData;
}

export interface Testimonial {
  title: string;
  body: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Tour {
  id: string;
  title: string;
  description: string;
  details: string;
  startingSpot: string;
  duration: string;
  break: string;
  price: string;
  image: StaticImageData;
}
