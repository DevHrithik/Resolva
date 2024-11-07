"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GithubLoginButton } from "@/components/login-button";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (session) {
    if (!session.user.onboarded) {
      redirect("/onboarding");
    } else {
      redirect(
        session.user.roles.includes("DEVELOPER") ? "/developer" : "/maintainer"
      );
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Welcome to Resolva</CardTitle>
          <CardDescription>
            Connect with maintainers, solve issues, and earn rewards
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <GithubLoginButton />
        </CardContent>
      </Card>
    </div>
  );
}
