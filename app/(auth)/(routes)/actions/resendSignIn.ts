// app/(auth)/(routes)/actions/resendSignIn.ts

"use server"; // This file is server-side only

import { signIn } from "@/auth";

// Create a server action for the sign-in logic
export async function resendSignIn(formData: FormData) {
  const email = formData.get("email");
  if (typeof email !== "string" || !email) {
    throw new Error("Invalid email address");
  }

  await signIn("resend", { email });
}
