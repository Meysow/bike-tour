import { handleApiError } from "@/lib/api/error-handler";
import { BikeService } from "@/lib/api/services/bike-service";
import { bikeSchema } from "@/lib/api/validators";
import { getCurrentUser } from "@/lib/auth/get-current-user";
import { NextRequest } from "next/server";
import { z } from "zod";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const bike = await BikeService.getBikeById(params.id);
    return Response.json(bike);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser();
    if (!user || user.role !== "ADMIN") {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 403,
      });
    }

    const json = await request.json();
    const data = bikeSchema.parse(json);

    const bike = await BikeService.updateBike(params.id, data);
    return Response.json(bike);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json({ error: error.errors }, { status: 400 });
    }
    return handleApiError(error);
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser();
    if (!user || user.role !== "ADMIN") {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 403,
      });
    }

    await BikeService.deleteBike(params.id);
    return new Response(null, { status: 204 });
  } catch (error) {
    return handleApiError(error);
  }
}
