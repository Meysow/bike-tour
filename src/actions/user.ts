"use server";

import { type User } from "@prisma/client";

import { prisma } from "@/config/db";
import {
  getUserByEmailSchema,
  getUserByIdSchema,
  type GetUserByEmailInput,
  type GetUserByIdInput,
} from "@/validations/user";

/**
 * Get a user by their ID.
 *
 * @param id - The ID of the user to fetch.
 * @returns The user if found, otherwise null.
 */
export async function getUserById({
  id,
}: GetUserByIdInput): Promise<User | null> {
  const { data, error } = await getUserByIdSchema.safeParseAsync({ id });

  if (error) {
    // If the input is invalid, we don't have a user ID to search for, so return null.
    return null;
  }

  // Search for the user in the database.
  return await prisma.user.findUnique({
    where: { id: data.id },
  });
}

/**
 * Get a user by their email.
 *
 * @param {GetUserByEmailInput} getUserByEmailInput - The input containing the email
 * of the user to fetch.
 * @returns {Promise<User | null>} The user if found, otherwise null.
 */
export async function getUserByEmail({
  email,
}: GetUserByEmailInput): Promise<User | null> {
  /**
   * Validate the input
   */
  const validatedInput = getUserByEmailSchema.safeParse({ email });

  if (!validatedInput.success) {
    return null;
  }

  /**
   * Search for the user in the database
   */
  return prisma.user.findUnique({
    where: { email: validatedInput.data.email },
  });
}

// TODO check si on garde ou non :

// export async function getUserByEmailVerificationToken(
//   rawInput: GetUserByEmailVerificationTokenInput
// ): Promise<User | null> {
//   try {
//     const validatedInput =
//       getUserByEmailVerificationTokenSchema.safeParse(rawInput);
//     if (!validatedInput.success) return null;

//     return await prisma.user.findUnique({
//       where: {
//         emailVerificationToken: validatedInput.data.token,
//       },
//     });
//   } catch (error) {
//     console.error(error);
//     throw new Error("Error getting user by email verification token");
//   }
// }
