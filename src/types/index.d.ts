//TODO : faire le tri de ceux qu'on utilise pas.
export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export interface Testimonial {
  title: string;
  body: string;
  name: string;
  role: string;
  avatar: string; // Image key (e.g., "derrick-bowman", "troy-castillo", etc.)
  rating?: number;
  date?: string;
  source?: "google" | "static";
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

export interface AccessoriesContent {
  title: string;
  description: string;
  image: string; // Image key (e.g., "helmet", "basket", "phone-mount", "child-seat", "lock")
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

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  content: string;
  readingTime: number;
  image?: string;
}
