"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { Check, CircleDot, Clock, Code2, DollarSign } from "lucide-react";

const techStackBadge: string[] = [
  "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20",
  "bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20",
  "bg-fuchsia-500/10 text-fuchsia-500 hover:bg-fuchsia-500/20",
  "bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500/20",
  "bg-lime-500/10 text-lime-500 hover:bg-lime-500/20",
  "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20",
  "bg-pink-500/10 text-pink-500 hover:bg-pink-500/20",
  "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20",
  "bg-rose-500/10 text-rose-500 hover:bg-rose-500/20",
  "bg-teal-500/10 text-teal-500 hover:bg-teal-500/20",
  "bg-violet-500/10 text-violet-500 hover:bg-violet-500/20",
  "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
];

interface Issue {
  id: number;
  title: string;
  project: string;
  description: string;
  techStack: string[];
  bounty: number;
  difficulty: string;
  estimatedTime: string;
  status: string;
}

export default function IssueCard({ issue }: { issue: Issue }) {
  return (
    <Card className="w-full max-w-xl bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 text-zinc-100">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <h3 className="font-semibold text-xl leading-tight text-zinc-50">
              {issue.title}
            </h3>
            <p className="text-sm text-zinc-400">
              {issue.project}
            </p>
          </div>
          <div
            className={`${issue.status === "Closed"
              ? "bg-zinc-800 opacity-80 "
              : "bg-[#238636]"} flex items-center font-semibold gap-1 text-xs font-medium px-[10px] py-[5px] rounded-full`}
          >
            {issue.status === "Closed"
              ? <Check className="w-4 h-4" />
              : <CircleDot className="w-4 h-4" />}
            {issue.status}
          </div>
        </div>
        <p className="text-sm text-zinc-400 leading-relaxed">
          {issue.description}
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {issue.techStack.map((tech, index: number) =>
          <span key={index} >
            <Badge
              variant="secondary"
              className={
                techStackBadge[
                  Math.floor(Math.random() * techStackBadge.length)
                ]
              }
            >
              {tech}
            </Badge>
            &nbsp;&nbsp;
          </span>
        )}

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-zinc-400" />
            <span className="text-sm font-medium text-zinc-300">Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-zinc-400" />
            <span className="text-sm font-medium text-zinc-300">3-5 days</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t border-zinc-800 pt-6">
        <div className="flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-emerald-500" />
          <span className="text-lg font-semibold text-emerald-500">500</span>
        </div>
        <Button className="bg-primary hover:bg-primary/90">Solve Issue</Button>
      </CardFooter>
    </Card>
  );
}
