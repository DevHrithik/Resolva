"use client";

import OnboardingForm from "@/components/onboarding/onboardingform";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function OnboardingPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (session?.user.onboarded) {
    redirect(
      session.user.roles.includes("DEVELOPER") ? "/developer" : "/maintainer"
    );
  }

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Complete Your Profile</h1>
          <p className="mt-2 text-gray-600">
            Help us personalize your experience on Resolva
          </p>
        </div>
        <OnboardingForm />
      </div>
    </div>
  );
}
