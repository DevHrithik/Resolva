"use client";
import React from "react";
import {
  GitMerge,
  Github,
  Layout,
  List,
  Search,
  Star,
  Wallet
} from "lucide-react";
import Link from "next/link";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <div className="hidden border-r bg-black lg:block">
        <div className="flex h-full flex-col gap-2">
          <div className="flex h-[60px] items-center px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Github className="h-6 w-6 text-white" />
              <span>DevBounty</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg bg-zinc-900 px-3 py-2 text-white transition-all"
                href="#"
              >
                <Layout className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 hover:text-white transition-all"
                href="#"
              >
                <Search className="h-4 w-4" />
                Explore
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 hover:text-white transition-all"
                href="#"
              >
                <Wallet className="h-4 w-4" />
                Billing
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 hover:text-white transition-all"
                href="#"
              >
                <Star className="h-4 w-4" />
                Watchlist
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 hover:text-white transition-all"
                href="#"
              >
                <GitMerge className="h-4 w-4" />
                Works
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 hover:text-white transition-all"
                href="#"
              >
                <List className="h-4 w-4" />
                Leaderboard
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">Subscription section</div>
        </div>
      </div>
      {children}
    </div>
  );
}
