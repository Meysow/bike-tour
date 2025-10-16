import { testimonials as staticTestimonials } from "@/data/testimonials";
import { Testimonial } from "@/types";

export interface TestimonialsResponse {
  testimonials: Testimonial[];
  count: number;
  source: "google" | "static";
  error?: string;
}

/**
 * Fetch testimonials from Google Places API with fallback to static data
 */
export async function getTestimonials(
  limit: number = 9
): Promise<TestimonialsResponse> {
  try {
    // Try to fetch from Google Places API
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/reviews?limit=${limit}`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(data.message || "API returned an error");
    }

    return {
      testimonials: data.testimonials,
      count: data.count,
      source: "google",
    };
  } catch (error) {
    console.warn(
      "Failed to fetch Google reviews, falling back to static testimonials:",
      error
    );

    // Fallback to static testimonials
    const staticData = staticTestimonials
      .slice(0, limit)
      .map((testimonial) => ({
        ...testimonial,
        source: "static" as const,
      }));

    return {
      testimonials: staticData,
      count: staticData.length,
      source: "static",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Get testimonials for server-side rendering
 */
export async function getServerTestimonials(
  limit: number = 9
): Promise<TestimonialsResponse> {
  // For server-side, we can directly call the API route logic
  try {
    const { googlePlacesService } = await import("@/lib/google-places");
    const { env } = await import("@/env.mjs");

    const reviews = await googlePlacesService.getLatestReviews(
      env.GOOGLE_BUSINESS_ID,
      limit
    );

    const testimonials: Testimonial[] = reviews.map((review) =>
      googlePlacesService.convertReviewToTestimonial(review, "RentaBikeParis")
    );

    return {
      testimonials,
      count: testimonials.length,
      source: "google",
    };
  } catch (error) {
    console.warn(
      "Failed to fetch Google reviews on server, falling back to static testimonials:",
      error
    );

    const staticData = staticTestimonials
      .slice(0, limit)
      .map((testimonial) => ({
        ...testimonial,
        source: "static" as const,
      }));

    return {
      testimonials: staticData,
      count: staticData.length,
      source: "static",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

