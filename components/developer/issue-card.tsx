import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { CircleDot, Clock, Code2, DollarSign } from "lucide-react";

export default function IssueCard({
  issue
}: {
  id: number;
  title: string;
  project: string;
  description: string;
  techStack: string[];
  bounty: number;
  difficulty: string;
  estimatedTime: string;
  status: string;
}) {
  return (
    <Card className="w-full max-w-xl bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 text-zinc-100">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <h3 className="font-semibold text-xl leading-tight text-zinc-50">
              Implement user authentication flow
            </h3>
            <p className="text-sm text-zinc-400">E-commerce Platform</p>
          </div>
          <div className="bg-[#238636] flex items-center gap-1 text-xs font-medium px-[10px] py-[5px] rounded-full">
            <CircleDot className="w-4 h-4" />Open
          </div>
        </div>
        <p className="text-sm text-zinc-400 leading-relaxed">
          Create a secure user authentication system with login, registration,
          and password reset functionality.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="secondary"
            className="bg-amber-500/10 text-amber-500 hover:bg-amber-500/20"
          >
            JavaScript
          </Badge>
          <Badge
            variant="secondary"
            className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
          >
            React
          </Badge>
          <Badge
            variant="secondary"
            className="bg-green-500/10 text-green-500 hover:bg-green-500/20"
          >
            Node.js
          </Badge>
          <Badge
            variant="secondary"
            className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20"
          >
            MongoDB
          </Badge>
        </div>
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
