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
  highlighted?: boolean;
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

export interface Bike {
  id: string;
  name: string;
  type: BikeType;
  size: BikeSize;
  price: number;
  quantity: number;
  description: string;
  imageUrl: string;
}

export interface Accessory {
  id: string;
  name: string;
  type: AccessoryType;
  price: number;
  quantity: number;
  description: string;
  imageUrl: string;
}
export interface Tour {
  id: string;
  name: string;
  description: string;
  duration: number;
  distance: number;
  difficulty: Difficulty;
  price: number;
  imageUrl: string;
  maxPeople: number;
}

export interface TourContent {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  image: string; // Image key (e.g., "couple-riding", "riding", "ebike")
  details: {
    location: string;
    duration: string;
    schedule: string;
  };
  additionalContent?: {
    visionTitle: string;
    bulletPoints: string[];
    closingNote: string;
  };
  ctaMoreInfo: string;
  ctaBookNow: string;
  ctaContact: string;
}

export interface BikeContent {
  name: string;
  description: string;
  dailyRate: number;
  image: string; // Image key (e.g., "deluxe7", "ebike", "children")
  features: string[];
  limitations: string[];
}

export interface TourData {
  id: string;
  title: string;
  description: string;
  details: string;
  startingSpot?: string;
  duration?: string;
  break?: string;
  price: string;
  image: StaticImageData;
  isPrivate?: boolean;
}

export enum BikeType {
  KIDS_20 = "KIDS_20",
  KIDS_24 = "KIDS_24",
  DELUXE_7 = "DELUXE_7",
  ELECTRIC_POWER_1 = "ELECTRIC_POWER_1",
}

export enum BikeSize {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}

export enum AccessoryType {
  HELMET = "HELMET",
  BASKET = "BASKET",
  PHONE_HOLDER = "PHONE_HOLDER",
  BABY_SEAT = "BABY_SEAT",
  CHILD_SEAT = "CHILD_SEAT",
  PANNIER = "PANNIER",
}

export enum Difficulty {
  EASY = "EASY",
  MODERATE = "MODERATE",
  DIFFICULT = "DIFFICULT",
}

export interface InstagramPost {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  caption?: string;
  permalink: string;
  timestamp: string;
}

export interface InstagramResponse {
  data: InstagramPost[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}
