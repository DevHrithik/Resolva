"use client";
import React, { useEffect } from "react";
import { GitMerge, Github, Layout, List, Menu, Search, Star, User2, Wallet } from "lucide-react";
import Link from "next/link";
import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const NAVLIST = [
  {
    name: "Dashboard",
    href: "/developer",
    icon: Layout,
  },
  {
    name: "Explore",
    href: "/developer/explore",
    icon: Search,
  },
  {
    name: "Billing",
    href: "/developer/billing",
    icon: Wallet,
  },
  {
    name: "Watchlist",
    href: "/developer/watchlist",
    icon: Star,
  },
  {
    name: "Works",
    href: "/developer/works",
    icon: GitMerge,
  },
  {
    name: "Leaderboard",
    href: "/developer/leaderboard",
    icon: List,
  },
  {
    name: "My Profile",
    href: "/developer/myprofile",
    icon: User2,
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const PATH = usePathname();

  const getHeaderTitle = () => {
    const currentPage = NAVLIST.find((item) => item.href === PATH);
    return currentPage ? currentPage.name : "Dashboard";
  };

  useEffect(() => {
    console.log(PATH);
  }, [PATH]);

  return (
    <div className="flex h-screen">
      <div className="hidden w-[15%] border-r border-[#ffffff20] bg-black lg:block">
        <div className="flex h-full flex-col gap-2">
          <div className="flex h-[60px] items-center px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Github className="size-6 text-white" />
              <span>Resolva</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-4 text-sm font-medium">
              {NAVLIST.map((item, index) => (
                <Link
                  key={index}
                  className={`${
                    item.href === PATH ? "text-white" : "text-zinc-400"
                  } flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-white`}
                  href={item.href}
                >
                  <item.icon className="size-4" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-auto p-4">Subscription section</div>
        </div>
      </div>
      <div className="flex h-screen flex-1 flex-col">
        <header className="flex h-14 items-center gap-4 border-b border-[#ffffff20] bg-black px-6 py-4 lg:h-[60px]">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="flex size-8 rounded-full border border-zinc-800 bg-black hover:bg-zinc-800 md:hidden"
                size="icon"
                variant="ghost"
              >
                <Menu className="size-4 text-white" />
                <span className="sr-only">Mobile Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side={"left"}
              className="max-w-fit border-r border-[#ffffff20] bg-black text-white"
            >
              <div className="flex h-full flex-col gap-2">
                <div className="mr-[10%] flex h-[60px] items-center justify-center">
                  <Link className="flex items-center gap-2 font-semibold" href="/developer">
                    <Github className="size-6 text-white" />
                    <span>Resolva</span>
                  </Link>
                </div>
                <div className="flex-1">
                  <nav className="grid items-start text-sm font-medium">
                    {NAVLIST.map((item, index) => (
                      <Link
                        key={index}
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 transition-all hover:text-white"
                        href={item.href}
                      >
                        <item.icon className="size-4" />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="mt-auto p-4">Subscription</div>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <h2 className="text-xl font-bold">{getHeaderTitle()}</h2>
              </div>
            </form>
          </div>
          <Button
            className="size-8 rounded-full border border-zinc-800 bg-black hover:bg-zinc-800"
            size="icon"
            variant="ghost"
          >
            <Bell className="size-4 text-white" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
          <Button
            className="size-8 rounded-full border border-zinc-800 bg-black hover:bg-zinc-900"
            size="icon"
            variant="ghost"
          >
            <Settings className="size-4 text-white" />
            <span className="sr-only">Toggle settings</span>
          </Button>
          <Button
            className="rounded-full border border-zinc-800 bg-black hover:bg-zinc-900"
            variant="ghost"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <span className="px-2 text-sm text-white">Sign out</span>
          </Button>
          <Separator orientation="vertical" className="h-6" />
        </header>
        {children}
      </div>
    </div>
  );
}
