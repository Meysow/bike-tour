import { type PricingPlan } from "@/types";
import deluxe7Image from "../../public/images/bikes/deluxe7.webp";
import childrenBikeImage from "../../public/images/bikes/ebike.webp";
import ebikeImage from "../../public/images/bikes/ebike2.webp";

// TODO : refaire ce comp
export const pricingPlans: PricingPlan[] = [
  {
    id: "deluxe7",
    name: "Deluxe 7 - Normal Bike",
    description:
      "A comfortable and reliable city bike, ideal for exploring Paris at your own pace with seven smooth gears.",
    dailyRate: 15,
    features: [
      "7-speed gear system",
      "Comfortable saddle for long rides",
      "Robust city-friendly design",
    ],
    limitations: ["No electric assistance"],
    stripePriceId: "",
    stripeIds: {
      monthly: undefined,
      yearly: undefined,
    },
    image: deluxe7Image,
  },
  {
    id: "ebike",
    name: "Electric Bike - Power 1",
    description:
      "Discover Paris effortlessly with pedal-assist technology. Perfect for longer distances and hilly routes.",
    dailyRate: 25,
    features: [
      "Electric pedal-assist",
      "Battery range of up to 50 miles",
      "Easy-to-use throttle control",
    ],
    limitations: ["Higher weight due to battery"],
    stripePriceId: "",
    stripeIds: {
      monthly: undefined,
      yearly: undefined,
    },
    image: ebikeImage,
  },
  {
    id: "children",
    name: 'Children\'s Bike 20" or 24"',
    description:
      'Safe and sturdy, ideal for young riders aged 6-9. Perfect for family outings and city park rides. Size 20" or 24"',
    dailyRate: 13,
    features: [
      "20-inch wheels for stable riding",
      "Easy-grip handlebars",
      "Lightweight frame",
    ],
    limitations: ["Not suitable for children under 6"],
    stripePriceId: "",
    stripeIds: {
      monthly: undefined,
      yearly: undefined,
    },
    image: childrenBikeImage,
  },
];
