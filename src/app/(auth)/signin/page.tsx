import type { Metadata } from "next";
import Link from "next/link";

import { env } from "@/env.mjs";

import { OAuthButtons } from "@/components/auth/oauth-buttons";
import { SignInWithEmailForm } from "@/components/forms/signin-with-email-form";
import { Icons } from "@/components/shared/icons";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DEFAULT_SIGNIN_REDIRECT } from "@/config/defaults";
import auth from "@/lib/auth";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Sign In",
  description: "Sign in to your account",
};

export default async function SignInPage(): Promise<JSX.Element> {
  const session = await auth();
  if (session) {
    redirect(DEFAULT_SIGNIN_REDIRECT);
  }

  return (
    <div className="flex h-auto min-h-screen w-full items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <Icons.arrowLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <Card className="max-sm:flex  max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:rounded-none max-sm:border-none sm:min-w-[370px] sm:max-w-[368px]">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">Sign in</CardTitle>
            <Link href="/">
              <Icons.close className="size-4" />
            </Link>
          </div>
          <CardDescription>
            Choose your preferred sign in method
          </CardDescription>
        </CardHeader>
        <CardContent className="max-sm:w-full max-sm:max-w-[340px] max-sm:px-10">
          <OAuthButtons />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative mb-3 mt-6 flex justify-center text-xs uppercase">
              <span className="bg-background px-2">
                Or continue with magic link
              </span>
            </div>
          </div>
          <SignInWithEmailForm />
        </CardContent>

        <CardFooter className="grid w-full text-sm text-muted-foreground max-sm:max-w-[340px] max-sm:px-10">
          <div>
            <span>Don&apos;t have an account? </span>
            <Link
              aria-label="Sign up"
              href="/signup"
              className="font-bold tracking-wide text-primary underline-offset-4 transition-colors hover:underline"
            >
              Sign up
              <span className="sr-only">Sign up</span>
            </Link>
            .
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
