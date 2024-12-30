"use client";

import { resendSignIn } from "@/actions/resendSignIn";
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

/**
 * Client-side component that renders a form to allow users to sign in with their email via Resend.
 * Includes form validation using Zod for the email field.
 */
export function ResendButton() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  return (
    <form
      className="grid gap-2"
      action={async (formData) => {
        setError(null);
        setSuccess(null);
        setLoading(true);

        const email = formData.get("email") as string | null;

        const result = emailSchema.safeParse({ email });

        if (!result.success) {
          setError(result.error.errors[0].message);
          setLoading(false);
          return;
        }

        try {
          await resendSignIn(formData);
          setSuccess("Check your email for a sign-in link.");
        } catch (err) {
          setError("An error occurred during sign-in.");
          console.log(err);
        } finally {
          setLoading(false);
        }
      }}
    >
      <Input
        type="text"
        name="email"
        placeholder="Email"
        aria-label="Enter your email address"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">{success}</p>}
      <Button type="submit" disabled={loading} aria-label="Sign in with Resend">
        {loading ? "Sending..." : "Sign in with Resend"}
      </Button>
    </form>
  );
}
