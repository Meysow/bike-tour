import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Resend from "next-auth/providers/resend";

export const { handlers, auth, signIn, signOut } = NextAuth({
  // @ts-expect-error: https://github.com/nextauthjs/next-auth/issues/9493
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub,
    Resend({
      from: "onboarding@resend.dev",
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      // Include the user's role in the session object
      if (session.user) {
        session.user.id = user.id;
        session.user.role = user.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
});
