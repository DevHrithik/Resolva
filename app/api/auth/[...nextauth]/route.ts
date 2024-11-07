import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/db";
import { UserRole } from "@prisma/client";
import { Session } from "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      roles: UserRole[];
      onboarded: boolean;
      githubUsername: string | undefined;
    } & DefaultSession["user"];
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      allowDangerousEmailAccountLinking: true,
      authorization: {
        params: {
          scope: "read:user user:email repo",
        },
      },
    }),
  ],
  adapter: PrismaAdapter(prisma) as any,
  callbacks: {
    async signIn({ user, account }: { user: any; account: any }) {
      if (account?.provider === "github") {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email! },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              email: user.email!,
              image: user.image,
              name: user.name!,
              githubUsername: (user as any).login,
              roles: [UserRole.DEVELOPER],
              onboarded: false,
            },
          });
        }
      }
      return true;
    },
    async session({
      session,
      user,
      token,
    }: {
      session: Session;
      user: any;
      token: any;
    }) {
      if (token?.accessToken) {
        session.accessToken = token.accessToken;
      }

      const dbUser = await prisma.user.findUnique({
        where: { id: user.id },
        select: {
          id: true,
          email: true,
          name: true,
          image: true,
          roles: true,
          onboarded: true,
          githubUsername: true,
        },
      });

      if (dbUser) {
        session.user = {
          ...session.user,
          id: dbUser.id,
          email: dbUser.email,
          name: dbUser.name ?? "Anonymous",
          image: dbUser.image ?? undefined,
          roles: dbUser.roles,
          onboarded: dbUser.onboarded,
          githubUsername: dbUser.githubUsername ?? "",
        };
      }

      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
});
