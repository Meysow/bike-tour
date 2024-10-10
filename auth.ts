import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  // @ts-expect-error: https://github.com/nextauthjs/next-auth/issues/9493
  adapter: PrismaAdapter(prisma),
  providers: [GitHub],
  callbacks: {
    async session({ session, user }) {
      // Include the user's role in the session object
      if (session.user) {
        session.user.id = user.id;
        session.user.role = user.role; // Include role from user object
      }
      return session;
    },
    async jwt({ token, user }) {
      // If it's the first time the token is being created (user has logged in)
      if (user) {
        token.id = user.id;
        token.role = user.role; // Add role to the JWT token
      }
      return token;
    },
  },
});
