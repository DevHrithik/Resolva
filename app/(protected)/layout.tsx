"use client";

import RoleSwitch from "@/components/role-switcher";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session?.user.onboarded) {
    redirect("/onboarding");
  }

  return (
    <div className="min-h-screen">
      {children}
      <RoleSwitch />
    </div>
  );
}
