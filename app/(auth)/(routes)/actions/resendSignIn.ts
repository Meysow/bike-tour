"use server";

import { signIn } from "@/auth";

/**
 * Server-side action to handle sign-in logic with Resend.
 * @param {FormData} formData - The form data containing the email address for sign-in.
 * @throws Will throw an error if the email is invalid.
 */
export async function resendSignIn(formData: FormData) {
  const email = formData.get("email") as string | null;
  if (typeof email !== "string" || !email) {
    throw new Error("Invalid email address");
  }

  await signIn("resend", { email });
}
