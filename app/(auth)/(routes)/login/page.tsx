import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { GithubButton } from "../components/github-button";
import { ResendButton } from "../components/resend-button";

//TODO: faire le SEO
export const description =
  "Login page for accessing the admin dashboard and managing your bike tours. Sign in with your email or GitHub account.";

/**
 * Login page that allows users to sign in with email or GitHub.
 * Redirects authenticated users to the admin page.
 */
export default async function Login() {
  const session = await auth();

  //TODO : decider de la redirection
  if (session) {
    redirect("/admin");
  }

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <ResendButton />
            <GithubButton />
          </div>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
