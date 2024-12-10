import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { ApiError } from "../error-handler";

export const TourService = {
  async getAllTours() {
    return await prisma.tour.findMany();
  },

  async getTourById(id: string) {
    const tour = await prisma.tour.findUnique({
      where: { id },
    });

    if (!tour) {
      throw new ApiError(404, "Tour not found");
    }

    return tour;
  },

  async createTour(data: Prisma.TourCreateInput) {
    return await prisma.tour.create({
      data: {
        ...data,
        price: new Prisma.Decimal(data.price as number),
      },
    });
  },

  async updateTour(id: string, data: Prisma.TourUpdateInput) {
    return await prisma.tour.update({
      where: { id },
      data: {
        ...data,
        price: new Prisma.Decimal(data.price as number),
      },
    });
  },

  async deleteTour(id: string) {
    await prisma.tour.delete({
      where: { id },
    });
  },
};
