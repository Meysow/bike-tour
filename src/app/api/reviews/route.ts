import { env } from "@/env.mjs";
import { googlePlacesService } from "@/lib/google-places";
import { Testimonial } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "9");
    const placeId = searchParams.get("placeId") || env.GOOGLE_BUSINESS_ID;

    if (!placeId) {
      return NextResponse.json(
        { error: "Place ID is required" },
        { status: 400 }
      );
    }

    // Fetch reviews from Google Places API
    const reviews = await googlePlacesService.getLatestReviews(placeId, limit);

    // Convert Google reviews to testimonial format
    const testimonials: Testimonial[] = reviews.map((review) =>
      googlePlacesService.convertReviewToTestimonial(review, "RentaBikeParis")
    );

    return NextResponse.json({
      testimonials,
      count: testimonials.length,
      source: "google",
    });
  } catch (error) {
    console.error("Error fetching Google reviews:", error);

    // Return error response
    return NextResponse.json(
      {
        error: "Failed to fetch reviews",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

