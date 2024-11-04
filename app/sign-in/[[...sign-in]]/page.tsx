"use client";
import { SignIn } from "@clerk/nextjs";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center h-screen relative">
      <ChevronLeft
        className="absolute top-5 left-10 text-white cursor-pointer"
        onClick={() => router.push("/")}
      />
      <SignIn redirectUrl="/home"/>
    </div>
  );
}
