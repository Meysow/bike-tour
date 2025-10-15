/**
 * Centralized pricing configuration for bike rentals
 * Update prices here to automatically reflect across all languages and components
 */

export const BIKE_PRICING = {
  deluxe7: {
    dailyRate: 15,
    name: "Deluxe 7 - Normal Bike",
  },
  ebike: {
    dailyRate: 30,
    name: "Electric Bike - Power 1",
  },
  children: {
    dailyRate: 15,
    name: 'Children\'s Bike 20" or 24"',
  },
} as const;

export type BikeType = keyof typeof BIKE_PRICING;

/**
 * Get the daily rate for a specific bike type
 */
export function getDailyRate(bikeType: BikeType): number {
  return BIKE_PRICING[bikeType].dailyRate;
}

/**
 * Get all available bike types
 */
export function getBikeTypes(): BikeType[] {
  return Object.keys(BIKE_PRICING) as BikeType[];
}



