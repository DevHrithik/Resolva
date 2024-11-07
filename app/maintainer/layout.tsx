"use client";
import React from "react";
import {
  Archive,
  Bell,
  DollarSign,
  Github,
  GitPullRequest,
  Grid,
  Menu,
  Plus,
  Search,
  Settings,
  Tag,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

const NAVLIST = [
  {
    name: "Dashboard",
    href: "/maintainer",
    icon: Grid,
  },
  {
    name: "Create Issue",
    href: "/maintainer/create",
    icon: Plus,
  },
  {
    name: "Manage Issues",
    href: "/maintainer/issues",
    icon: GitPullRequest,
  },
  {
    name: "Bounties",
    href: "/maintainer/bounties",
    icon: DollarSign,
  },
  {
    name: "Developers",
    href: "/maintainer/developers",
    icon: Users,
  },
  {
    name: "Tags",
    href: "/maintainer/tags",
    icon: Tag,
  },
  {
    name: "Archive",
    href: "/maintainer/archive",
    icon: Archive,
  },
];

export default function MaintainerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const PATH = usePathname();

  const getHeaderTitle = () => {
    const currentPage = NAVLIST.find((item) => item.href === PATH);
    return currentPage ? currentPage.name : "Dashboard";
  };

  return (
    <div className="flex h-screen">
      <div className="hidden border-r border-[#ffffff20] bg-black lg:block w-[15%]">
        <div className="flex h-full flex-col gap-2">
          <div className="flex h-[60px] items-center px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Github className="h-6 w-6 text-white" />
              <span className="text-white">Resolva</span>
            </Link>
          </div>

          <div className="flex-1">
            <nav className="grid items-start px-4 text-sm font-medium">
              {NAVLIST.map((item, index) => (
                <Link
                  key={index}
                  className={`${
                    item.href === PATH
                      ? "text-white bg-zinc-800"
                      : "text-zinc-400"
                  } flex items-center gap-3 rounded-lg px-3 py-2 hover:text-white hover:bg-zinc-800 transition-all`}
                  href={item.href}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-auto p-4 border-t border-[#ffffff20]">
            <Link
              href="/maintainer/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all text-sm font-medium"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </div>
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
              side="left"
              className="bg-black text-white border-r border-[#ffffff20] max-w-fit"
            >
              <div className="flex h-full flex-col gap-2">
                <div className="flex h-[60px] items-center justify-center mr-[10%]">
                  <Link
                    className="flex items-center gap-2 font-semibold"
                    href="/maintainer"
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
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
                        href={item.href}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="mt-auto p-4 border-t border-[#ffffff20]">
                  <Link
                    href="/maintainer/settings"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all text-sm font-medium"
                  >
                    <Settings className="h-4 w-4" />
                    Settings
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>

   
          <div className="w-full flex-1">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-xl text-white">
                {getHeaderTitle()}
              </h2>
              <div className="hidden md:flex items-center gap-3">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search issues..."
                    className="w-64 px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search
                    className="absolute right-3 top-2.5 text-zinc-400"
                    size={18}
                  />
                </div>
              </div>
            </div>
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
          <Separator orientation="vertical" className="h-6 bg-zinc-800" />
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>

        <main className="flex-1 overflow-auto bg-zinc-900">{children}</main>
      </div>
    </div>
  );
}
