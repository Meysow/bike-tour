import { handleApiError } from '@/lib/api/error-handler';
import { BookingService } from '@/lib/api/services/booking-service';
import { bookingSchema } from '@/lib/api/validators';
import { getCurrentUser } from '@/lib/auth/get-current-user';
import { NextRequest } from 'next/server';
import { z } from 'zod';

export async function GET() {
  try {
    const user = await getCurrentUser();
    if (!user || user.role !== 'ADMIN') {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 403,
      });
    }

    const bookings = await BookingService.getAllBookings();
    return Response.json(bookings);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 403,
      });
    }

    const json = await request.json();
    const data = bookingSchema.omit({ totalPrice: true }).parse(json);

    // Calculez le prix côté serveur (exemple fictif)
    const totalPrice = await BookingService.calculatePrice(data);

    const booking = await BookingService.createBooking({
      ...data,
      totalPrice,
      userId: user.id,
    });
    return Response.json(booking, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json({ error: error.errors }, { status: 400 });
    }
    return handleApiError(error);
  }
}
