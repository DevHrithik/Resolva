import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const pricingPlans = [
  {
    title: "Starter",
    price: 12,
    description: "Ideal for growing finance",
    features: [
      "Automated Expense Tracking(Detail Analysis)",
      "Family Expense Tracking(4 Users Only)",
      "Latest Fintechnology News",
      "Investment Opportunities (Can invest)",
      "Advance Tax Calculator",
    ],
    buttonText: "Coming Soon!",
    isComingSoon: true,
  },
  {
    title: "Basic plan",
    price: 0,
    description: "For individuals",
    features: [
      "Automated Expense Tracking",
      "Family Expense Tracking(2 Users Only)",
      "Latest Fintechnology News",
      "Investment Opportunities (Only showcase)",
      "Advance Tax Calculator",
    ],
    buttonText: "Download Now!",
    isComingSoon: false,
  },
  {
    title: "Pro",
    price: 32,
    description: "Built for financially savvy",
    features: [
      "Automated Expense Tracking(Detail Analysis)",
      "Family Expense Tracking(6 Users Only)",
      "Latest Fintechnology News",
      "Personalized Investment Opportunities",
      "Tax calculation and Tax saving schemes",
    ],
    buttonText: "Coming Soon!",
    isComingSoon: true,
  },
];

const Pricing = () => {
  return (
    <div className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-xl md:text-3xl  font-bold text-white mb-12">
          Find a plan to power your finances
        </h2>
        <div className="grid gap-6 md:grid-cols-3 relative -z-10">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.isComingSoon ? "border-slate-800" : "border-blue-500"} bg-slate-950`}
            >
              <CardHeader>
                <h3 className="text-lg font-medium text-blue-400">{plan.title}</h3>
                <div className="flex items-baseline text-white">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-slate-400 ml-1">/mo</span>
                </div>
                <p className="text-sm text-slate-400">{plan.description}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm text-slate-300">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-blue-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${plan.isComingSoon ? "bg-slate-800 hover:bg-slate-700" : "bg-blue-600 hover:bg-blue-500"} text-white`}
                  variant={plan.isComingSoon ? "secondary" : "default"}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
