import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import { ApiError } from '../error-handler';

export const BookingService = {
  async getAllBookings() {
    return await prisma.booking.findMany();
  },

  async getBookingById(id: string) {
    const booking = await prisma.booking.findUnique({
      where: { id },
    });

    if (!booking) {
      throw new ApiError(404, 'Booking not found');
    }

    return booking;
  },

  async createBooking(data: Prisma.BookingCreateInput) {
    return await prisma.booking.create({
      data: {
        ...data,
        totalPrice: new Prisma.Decimal(data.totalPrice as number),
      },
    });
  },

  async updateBooking(id: string, data: Prisma.BookingUpdateInput) {
    return await prisma.booking.update({
      where: { id },
      data: {
        ...data,
        totalPrice: new Prisma.Decimal(data.totalPrice as number),
      },
    });
  },

  async deleteBooking(id: string) {
    await prisma.booking.delete({
      where: { id },
    });
  },
};
