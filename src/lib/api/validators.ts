import { AccessoryType, BikeSize, BikeType, Difficulty } from "@prisma/client";
import { z } from "zod";

//TODO: resoudre cette erreur.
export const bikeSchema = z.object({
  name: z.string().min(1),
  type: z.nativeEnum(BikeType),
  size: z.nativeEnum(BikeSize),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
  description: z.string().min(1),
  imageUrl: z.string().url(),
});

export const accessorySchema = z.object({
  name: z.string().min(1),
  type: z.nativeEnum(AccessoryType),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
  description: z.string().min(1),
  imageUrl: z.string().url(),
});

export const tourSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  duration: z.number().int().positive(),
  distance: z.number().int().positive(),
  difficulty: z.nativeEnum(Difficulty),
  price: z.number().positive(),
  imageUrl: z.string().url(),
  maxPeople: z.number().int().positive(),
});
