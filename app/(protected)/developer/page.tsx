"use client";
import { CircleDollarSign, GitMerge, Star, Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Component() {
  return (
    <div className="w-full flex-1 bg-black text-white">
      <div className="flex flex-col bg-black">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-zinc-800 bg-black text-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Earned
                </CardTitle>
                <CircleDollarSign className="size-4 text-zinc-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$2,650.00</div>
                <p className="text-xs text-zinc-500">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card className="border-zinc-800 bg-black text-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Successful Merges
                </CardTitle>
                <GitMerge className="size-4 text-zinc-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-zinc-500">+12 this month</p>
              </CardContent>
            </Card>
            <Card className="border-zinc-800 bg-black text-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Credits Left
                </CardTitle>
                <Wallet className="size-4 text-zinc-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,250</div>
                <p className="text-xs text-zinc-500">Use them before Dec 31</p>
              </CardContent>
            </Card>
            <Card className="border-zinc-800 bg-black text-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Leaderboard Rank
                </CardTitle>
                <Star className="size-4 text-zinc-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">#12</div>
                <p className="text-xs text-zinc-500">Top 1% of developers</p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-7 ">
            <Card className="col-span-4 border-zinc-800 bg-black text-white ">
              <CardHeader>
                <CardTitle>Recent Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] ">
                  {[1, 2, 3, 4, 5].map(project =>
                    <div
                      key={project}
                      className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                    >
                      <span className="flex size-2 translate-y-1 rounded-full bg-green-500" />
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
            <Card className="border-zinc-800 bg-black text-white md:col-span-3 ">
              <CardHeader>
                <CardTitle>Active Bounties</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] pr-6">
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
