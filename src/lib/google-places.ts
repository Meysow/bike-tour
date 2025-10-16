import { env } from "@/env.mjs";
import { google } from "googleapis";

export interface GoogleReview {
  author_name: string;
  author_url?: string;
  language: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export interface GooglePlaceDetails {
  place_id: string;
  name: string;
  reviews: GoogleReview[];
}

export class GooglePlacesService {
  private places: any;

  constructor() {
    this.places = google.places({
      version: "v1",
      auth: env.GOOGLE_PLACES_API_KEY,
    });
  }

  /**
   * Fetch place details including reviews for a specific place ID
   */
  async getPlaceDetails(placeId: string): Promise<GooglePlaceDetails | null> {
    try {
      const response = await this.places.placeDetails({
        place_id: placeId,
        fields: "place_id,name,reviews",
        language: "en", // You can make this configurable based on locale
      });

      const result = response.data.result;

      if (!result) {
        return null;
      }

      return {
        place_id: result.place_id,
        name: result.name,
        reviews: result.reviews || [],
      };
    } catch (error) {
      console.error("Error fetching place details:", error);
      throw new Error("Failed to fetch place details from Google Places API");
    }
  }

  /**
   * Get the latest reviews for a place, limited to a specific count
   */
  async getLatestReviews(
    placeId: string,
    limit: number = 9
  ): Promise<GoogleReview[]> {
    try {
      const placeDetails = await this.getPlaceDetails(placeId);

      if (!placeDetails || !placeDetails.reviews) {
        return [];
      }

      // Sort reviews by time (most recent first) and limit the results
      return placeDetails.reviews
        .sort((a, b) => b.time - a.time)
        .slice(0, limit);
    } catch (error) {
      console.error("Error fetching latest reviews:", error);
      throw new Error("Failed to fetch latest reviews from Google Places API");
    }
  }

  /**
   * Convert Google review to our testimonial format
   */
  convertReviewToTestimonial(review: GoogleReview, businessName: string) {
    return {
      title: this.generateTestimonialTitle(review.rating),
      body: review.text || "No review text available",
      name: review.author_name,
      role: `Google Review - ${businessName}`,
      avatar: review.profile_photo_url || "/images/avatars/default-avatar.png",
      rating: review.rating,
      date: new Date(review.time * 1000).toISOString(),
      source: "google" as const,
    };
  }

  /**
   * Generate a testimonial title based on rating
   */
  private generateTestimonialTitle(rating: number): string {
    const titles = {
      5: [
        "Absolutely Amazing Experience!",
        "Perfect in Every Way!",
        "Exceeded All Expectations!",
        "Outstanding Service!",
        "Highly Recommended!",
      ],
      4: [
        "Great Experience!",
        "Really Enjoyed It!",
        "Very Good Service!",
        "Would Recommend!",
        "Solid Choice!",
      ],
      3: [
        "Good Experience",
        "Decent Service",
        "Met Expectations",
        "Fair Quality",
        "Average Experience",
      ],
      2: [
        "Could Be Better",
        "Room for Improvement",
        "Below Expectations",
        "Needs Work",
        "Disappointing",
      ],
      1: [
        "Poor Experience",
        "Very Disappointing",
        "Not Recommended",
        "Terrible Service",
        "Waste of Time",
      ],
    };

    const ratingTitles = titles[rating as keyof typeof titles] || titles[3];
    return ratingTitles[Math.floor(Math.random() * ratingTitles.length)];
  }
}

// Export a singleton instance
export const googlePlacesService = new GooglePlacesService();

