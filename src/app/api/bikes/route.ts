import { handleApiError } from "@/lib/api/error-handler";
import { BikeService } from "@/lib/api/services/bike-service";
import { bikeSchema } from "@/lib/api/validators";
import { getCurrentUser } from "@/lib/auth/get-current-user";
import { NextRequest } from "next/server";
import { z } from "zod";

export async function GET() {
  try {
    const bikes = await BikeService.getAllBikes();
    return Response.json(bikes);
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
    const data = bikeSchema.parse(json);

    const bike = await BikeService.createBike(data);
    return Response.json(bike, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json({ error: error.errors }, { status: 400 });
    }
    return handleApiError(error);
  }
}
