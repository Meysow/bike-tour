"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useState } from "react";

/**
 * Component that renders a button to allow users to sign in with GitHub.
 * This triggers the GitHub OAuth sign-in process.
 */
export function GithubButton() {
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      //TODO : modifier la redirection
      await signIn("github", { redirectTo: "/admin" });
    } catch (error) {
      console.error("Error during GitHub sign-in", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleSignIn}
      disabled={loading}
      aria-label="Sign in with GitHub"
    >
      {loading ? "Signing in..." : "Sign in with GitHub"}
    </Button>
  );
}
