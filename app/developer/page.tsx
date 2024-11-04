"use client";
import {
  Bell,
  CircleDollarSign,
  GitMerge,
  Search,
  Settings,
  Star,
  Wallet
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function Component() {
  return (
    <div className="flex-1 h-screen w-full text-white bg-black">
      <div className="flex flex-col bg-black">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-black px-6">
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
                <Input
                  className="w-full bg-zinc-900 pl-8 border-zinc-800 focus-visible:ring-zinc-700 text-white"
                  placeholder="Search projects..."
                  type="search"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-zinc-800 w-8 h-8 bg-black"
                size="icon"
                variant="ghost"
              >
                <Bell className="h-4 w-4 text-white" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>New bounty available</DropdownMenuItem>
              <DropdownMenuItem>Project merged successfully</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-zinc-800 w-8 h-8 bg-black"
                size="icon"
                variant="ghost"
              >
                <Settings className="h-4 w-4 text-white" />
                <span className="sr-only">Toggle settings</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Separator orientation="vertical" className="h-6" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-zinc-800 w-8 h-8 p-0 bg-black"
                size="icon"
                variant="ghost"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage alt="User avatar" src="/placeholder-user.jpg" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-black border-zinc-800">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Earned
                </CardTitle>
                <CircleDollarSign className="h-4 w-4 text-zinc-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$2,650.00</div>
                <p className="text-xs text-zinc-500">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-zinc-800">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Successful Merges
                </CardTitle>
                <GitMerge className="h-4 w-4 text-zinc-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-zinc-500">+12 this month</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-zinc-800">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Credits Left
                </CardTitle>
                <Wallet className="h-4 w-4 text-zinc-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,250</div>
                <p className="text-xs text-zinc-500">Use them before Dec 31</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-zinc-800">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Leaderboard Rank
                </CardTitle>
                <Star className="h-4 w-4 text-zinc-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">#12</div>
                <p className="text-xs text-zinc-500">Top 1% of developers</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 bg-black border-zinc-800">
              <CardHeader>
                <CardTitle>Recent Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px]">
                  {[1, 2, 3, 4, 5].map(project =>
                    <div
                      key={project}
                      className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                    >
                      <span className="flex h-2 w-2 translate-y-1 rounded-full bg-green-500" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none text-white">
                          Project {project} successfully merged
                        </p>
                        <p className="text-sm text-zinc-500">
                          Fixed critical bug in authentication flow
                        </p>
                        <p className="text-xs text-zinc-500">2 hours ago</p>
                      </div>
                    </div>
                  )}
                </ScrollArea>
              </CardContent>
            </Card>
            <Card className="col-span-3 bg-black border-zinc-800">
              <CardHeader>
                <CardTitle>Active Bounties</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px]">
                  {[1, 2, 3, 4, 5].map(bounty =>
                    <div
                      key={bounty}
                      className="mb-4 flex items-center justify-between border-b border-zinc-800 pb-4 last:mb-0 last:border-0 last:pb-0"
                    >
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none text-white">
                          High Priority Bug Fix #{bounty}
                        </p>
                        <p className="text-sm text-zinc-500">
                          Deadline: 2 days
                        </p>
                      </div>
                      <div className="text-sm font-medium text-white">$500</div>
                    </div>
                  )}
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
