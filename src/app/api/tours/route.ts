import { handleApiError } from "@/lib/api/error-handler";
import { TourService } from "@/lib/api/services/tour-service";
import { tourSchema } from "@/lib/api/validators";
import { getCurrentUser } from "@/lib/auth/get-current-user";
import { NextRequest } from "next/server";
import { z } from "zod";

export async function GET() {
  try {
    const tours = await TourService.getAllTours();
    return Response.json(tours);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user || user.role !== "ADMIN") {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 403,
      });
    }

    const json = await request.json();
    const data = tourSchema.parse(json);

    const tour = await TourService.createTour(data);
    return Response.json(tour, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json({ error: error.errors }, { status: 400 });
    }
    return handleApiError(error);
  }
}
