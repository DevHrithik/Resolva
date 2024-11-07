"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

export default function RoleSwitch() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session?.user?.roles.length || session.user.roles.length === 1) {
    return null;
  }

  const currentPath = window.location.pathname;
  const isDeveloperPath = currentPath.startsWith("/developer");

  const handleSwitch = () => {
    if (isDeveloperPath) {
      router.push("/maintainer");
    } else {
      router.push("/developer");
    }
  };

  return (
    <Button
      onClick={handleSwitch}
      variant="outline"
      className="fixed bottom-4 right-4"
    >
      Switch to {isDeveloperPath ? "Maintainer" : "Developer"} View
    </Button>
  );
}
