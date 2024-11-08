"use client";

import { Button } from "@/components/ui/button";
import { Github, Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";

interface GithubLoginButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  showGithubText?: boolean;
}

export function GithubLoginButton({
  showGithubText = true,
  className,
  ...props
}: GithubLoginButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      await signIn("github", {
        callbackUrl: "/onboarding",
      });
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handleLogin}
      disabled={isLoading}
      className={`flex w-full items-center justify-center gap-2 ${className}`}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        <Github className="size-4" />
      )}
      {showGithubText && <span>Sign in with GitHub</span>}
    </Button>
  );
}
