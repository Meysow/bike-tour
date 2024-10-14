"use client"; // This is a client-side component

import { resendSignIn } from "@/app/(auth)/(routes)/actions/resendSignIn"; // Import the server action
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { z } from "zod";

const emailSchema = z.object({
  email: z
    .string()
    .min(1, { message: "You must enter an email" })
    .email("Invalid email address"),
});

export function ResendButton() {
  const [error, setError] = useState<string | null>(null);

  return (
    <form
      className="grid gap-2"
      action={async (formData) => {
        setError(null);

        const email = formData.get("email");

        const result = emailSchema.safeParse({ email });

        if (!result.success) {
          // Set the error message from Zod validation
          setError(result.error.errors[0].message);
          return;
        }

        try {
          await resendSignIn(formData);
        } catch (err) {
          setError("An error occurred during sign-in.");
          // TODO : gerer l'erreur
          console.log(err);
        }
      }}
    >
      <Input type="text" name="email" placeholder="Email" />
      {error && <p className="text-red-500 text-sm">{error}</p>}{" "}
      <Button type="submit">Sign in with Resend</Button>
    </form>
  );
}
