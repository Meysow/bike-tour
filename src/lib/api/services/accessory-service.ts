import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { ApiError } from "../error-handler";

export const AccessoryService = {
  async getAllAccessories() {
    return await prisma.accessory.findMany();
  },

  async getAccessoryById(id: string) {
    const accessory = await prisma.accessory.findUnique({
      where: { id },
    });

    if (!accessory) {
      throw new ApiError(404, "Accessory not found");
    }

    return accessory;
  },

  async createAccessory(data: Prisma.AccessoryCreateInput) {
    return await prisma.accessory.create({
      data: {
        ...data,
        price: new Prisma.Decimal(data.price as number),
      },
    });
  },

  async updateAccessory(id: string, data: Prisma.AccessoryUpdateInput) {
    return await prisma.accessory.update({
      where: { id },
      data: {
        ...data,
        price: new Prisma.Decimal(data.price as number),
      },
    });
  },

  async deleteAccessory(id: string) {
    await prisma.accessory.delete({
      where: { id },
    });
  },
};
