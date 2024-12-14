import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { ApiError } from "../error-handler";

export const BikeService = {
  async getAllBikes() {
    return await prisma.bike.findMany();
  },

  async getBikeById(id: string) {
    const bike = await prisma.bike.findUnique({
      where: { id },
    });

    if (!bike) {
      throw new ApiError(404, "Bike not found");
    }

    return bike;
  },

  async createBike(data: Prisma.BikeCreateInput) {
    return await prisma.bike.create({
      data: {
        ...data,
        price: new Prisma.Decimal(data.price as number),
      },
    });
  },

  async updateBike(id: string, data: Prisma.BikeUpdateInput) {
    return await prisma.bike.update({
      where: { id },
      data: {
        ...data,
        price: new Prisma.Decimal(data.price as number),
      },
    });
  },

  async deleteBike(id: string) {
    await prisma.bike.delete({
      where: { id },
    });
  },
};

