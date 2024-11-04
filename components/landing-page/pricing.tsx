import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const Pricing = () => {
  return (
    <div className=" px-4 py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-white mb-12 md:text-4xl">
          Find a plan to power your finances
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="relative border-slate-800 bg-slate-950">
            <CardHeader>
              <h3 className="text-lg font-medium text-purple-400">Starter</h3>
              <div className="flex items-baseline text-white">
                <span className="text-3xl font-bold">$12</span>
                <span className="text-slate-400 ml-1">/mo</span>
              </div>
              <p className="text-sm text-slate-400">
                Ideal for growing finance
              </p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-purple-400" />
                  Automated Expense Tracking(Detail Analysis)
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-purple-400" />
                  Family Expense Tracking(4 Users Only)
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-purple-400" />
                  Latest Fintechnology News
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-purple-400" />
                  Investment Opportunities (Can invest)
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-purple-400" />
                  Advance Tax Calculator
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-slate-800 hover:bg-slate-700 text-white"
                variant="secondary"
              >
                Coming Soon!
              </Button>
            </CardFooter>
          </Card>
          <Card className="relative border-purple-500 bg-slate-950">
            <CardHeader>
              <h3 className="text-lg font-medium text-purple-400">
                Basic plan
              </h3>
              <div className="flex items-baseline text-white">
                <span className="text-3xl font-bold">$0</span>
                <span className="text-slate-400 ml-1">/mo</span>
              </div>
              <p className="text-sm text-slate-400">For individuals</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-purple-400" />
                  Automated Expense Tracking
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-purple-400" />
                  Family Expense Tracking(2 Users Only)
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-purple-400" />
                  Latest Fintechnology News
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-purple-400" />
                  Investment Opportunities (Only showcase)
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-purple-400" />
                  Advance Tax Calculator
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-purple-600 hover:bg-purple-500 text-white">
                Download Now!
              </Button>
            </CardFooter>
          </Card>
          <Card className="relative border-slate-800 bg-slate-950">
            <CardHeader>
              <h3 className="text-lg font-medium text-purple-400">Pro</h3>
              <div className="flex items-baseline text-white">
                <span className="text-3xl font-bold">$32</span>
                <span className="text-slate-400 ml-1">/mo</span>
              </div>
              <p className="text-sm text-slate-400">
                Built for financially savvy
              </p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-purple-400" />
                  Automated Expense Tracking(Detail Analysis)
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-purple-400" />
                  Family Expense Tracking(6 Users Only)
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-purple-400" />
                  Latest Fintechnology News
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-purple-400" />
                  Personalized Investment Opportunities
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-purple-400" />
                  Tax calculation and Tax saving schemes
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-slate-800 hover:bg-slate-700 text-white"
                variant="secondary"
              >
                Coming Soon!
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
