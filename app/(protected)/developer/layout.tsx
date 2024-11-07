"use client";
import React, { useEffect } from "react";
import {
  GitMerge,
  Github,
  Layout,
  List,
  Menu,
  Search,
  Star,
  Wallet,
} from "lucide-react";
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
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const PATH = usePathname();

  const getHeaderTitle = () => {
    const currentPage = NAVLIST.find((item) => item.href === PATH);
    return currentPage ? currentPage.name : "Dashboard";
  };

  useEffect(() => {
    console.log(PATH);
  }, []);

  return (
    <div className="flex h-screen">
      <div className="hidden border-r border-[#ffffff20] bg-black lg:block w-[15%]">
        <div className="flex h-full flex-col gap-2">
          <div className="flex h-[60px] items-center px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Github className="h-6 w-6 text-white" />
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
                  } flex items-center gap-3 rounded-lg px-3 py-2 hover:text-white transition-all`}
                  href={item.href}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-auto p-4">Subscription section</div>
        </div>
      </div>
      <div className="flex-1 h-screen flex flex-col">
        <header className="flex h-14 lg:h-[60px] py-4 items-center gap-4 border-b border-[#ffffff20] bg-black px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="rounded-full hover:bg-zinc-800 border border-zinc-800 w-8 h-8 bg-black md:hidden flex"
                size="icon"
                variant="ghost"
              >
                <Menu className="h-4 w-4 text-white" />
                <span className="sr-only">Mobile Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side={"left"}
              className="bg-black text-white border-r border-[#ffffff20] max-w-fit"
            >
              <div className="flex h-full flex-col gap-2">
                <div className="flex h-[60px] items-center justify-center mr-[10%]">
                  <Link
                    className="flex items-center gap-2 font-semibold"
                    href="/developer"
                  >
                    <Github className="h-6 w-6 text-white" />
                    <span>Resolva</span>
                  </Link>
                </div>
                <div className="flex-1">
                  <nav className="grid items-start text-sm font-medium">
                    {NAVLIST.map((item, index) => (
                      <Link
                        key={index}
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 hover:text-white transition-all"
                        href={item.href}
                      >
                        <item.icon className="h-4 w-4" />
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
                <h2 className="font-bold text-xl">{getHeaderTitle()}</h2>
              </div>
            </form>
          </div>
          <Button
            className="rounded-full hover:bg-zinc-800 border border-zinc-800 w-8 h-8 bg-black"
            size="icon"
            variant="ghost"
          >
            <Bell className="h-4 w-4 text-white" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
          <Button
            className="rounded-full border border-zinc-800 hover:bg-zinc-900 w-8 h-8 bg-black"
            size="icon"
            variant="ghost"
          >
            <Settings className="h-4 w-4 text-white" />
            <span className="sr-only">Toggle settings</span>
          </Button>
          <Button
            className="rounded-full border border-zinc-800 hover:bg-zinc-900 bg-black"
            variant="ghost"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <span className="text-white text-sm px-2">Sign out</span>
          </Button>
          <Separator orientation="vertical" className="h-6" />
        </header>
        {children}
      </div>
    </div>
  );
}
