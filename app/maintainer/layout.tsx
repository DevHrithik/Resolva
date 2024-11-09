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

export default function MaintainerLayout({ children }: { children: React.ReactNode }) {
  const PATH = usePathname();

  const getHeaderTitle = () => {
    const currentPage = NAVLIST.find((item) => item.href === PATH);
    return currentPage ? currentPage.name : "Dashboard";
  };

  return (
    <div className="flex h-screen">
      <div className="hidden w-[15%] border-r border-[#ffffff20] bg-black lg:block">
        <div className="flex h-full flex-col gap-2">
          <div className="flex h-[60px] items-center px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Github className="size-6 text-white" />
              <span className="text-white">Resolva</span>
            </Link>
          </div>

          <div className="flex-1">
            <nav className="grid items-start px-4 text-sm font-medium">
              {NAVLIST.map((item, index) => (
                <Link
                  key={index}
                  className={`${
                    item.href === PATH ? "bg-zinc-800 text-white" : "text-zinc-400"
                  } flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-zinc-800 hover:text-white`}
                  href={item.href}
                >
                  <item.icon className="size-4" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-auto border-t border-[#ffffff20] p-4">
            <Link
              href="/maintainer/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-all hover:bg-zinc-800 hover:text-white"
            >
              <Settings className="size-4" />
              Settings
            </Link>
          </div>
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
              side="left"
              className="max-w-fit border-r border-[#ffffff20] bg-black text-white"
            >
              <div className="flex h-full flex-col gap-2">
                <div className="mr-[10%] flex h-[60px] items-center justify-center">
                  <Link className="flex items-center gap-2 font-semibold" href="/maintainer">
                    <Github className="size-6 text-white" />
                    <span>Resolva</span>
                  </Link>
                </div>
                <div className="flex-1">
                  <nav className="grid items-start text-sm font-medium">
                    {NAVLIST.map((item, index) => (
                      <Link
                        key={index}
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 transition-all hover:bg-zinc-800 hover:text-white"
                        href={item.href}
                      >
                        <item.icon className="size-4" />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="mt-auto border-t border-[#ffffff20] p-4">
                  <Link
                    href="/maintainer/settings"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-all hover:bg-zinc-800 hover:text-white"
                  >
                    <Settings className="size-4" />
                    Settings
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <div className="w-full flex-1">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">{getHeaderTitle()}</h2>
              <div className="hidden items-center gap-3 md:flex">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search issues..."
                    className="w-64 rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute right-3 top-2.5 text-zinc-400" size={18} />
                </div>
              </div>
            </div>
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
          <Separator orientation="vertical" className="h-6 bg-zinc-800" />
        </header>

        <main className="flex-1 overflow-auto bg-zinc-900">{children}</main>
      </div>
    </div>
  );
}
