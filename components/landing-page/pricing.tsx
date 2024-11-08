"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const pricingPlans = [
  {
    title: "Basic",
    price: 0,
    description: "Essential tools for individual financial management",
    features: [
      "Smart Expense Tracking",
      "Family Expense Tracking (2 Users)",
      "Fintech News Access",
      "Investment Opportunity Showcase",
      "Standard Tax Calculator",
    ],
    buttonText: "Get Started Free",
    isComingSoon: false,
  },
  {
    title: "Starter",
    price: 12,
    description: "Perfect for growing businesses starting their financial journey",
    features: [
      "Automated Expense Tracking with Detailed Analysis",
      "Family Expense Tracking (4 Users)",
      "Latest Fintech News & Updates",
      "Investment Opportunities Platform",
      "Advanced Tax Calculator",
    ],
    popular: true,
    buttonText: "Get Started",
    isComingSoon: false,
  },
  {
    title: "Professional",
    price: 32,
    description: "Advanced features for financial experts and families",
    features: [
      "Enterprise-Grade Expense Analytics",
      "Family Expense Tracking (6 Users)",
      "Priority Access to Fintech News",
      "Personalized Investment Recommendations",
      "Comprehensive Tax Planning Suite",
    ],
    buttonText: "Get Started",
    isComingSoon: false,
  },
];

export default function Component() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Choose Your Financial
            <span className="bg-gradient-to-r from-white/80 to-white/40 bg-clip-text text-transparent">
              {" "}
              Journey
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Select a plan that best fits your needs. All plans include our core features with
            varying levels of sophistication and support.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid gap-8 lg:grid-cols-3 lg:gap-12"
        >
          {pricingPlans.map((plan, index) => (
            <AnimatedCard key={index} plan={plan as Plan} />
          ))}
        </motion.div>

        <p className="mt-12 text-center text-sm text-slate-400">
          All plans include 24/7 support and a 30-day money-back guarantee
        </p>
      </div>
    </div>
  );
}

interface Plan {
  features: string[];
  isComingSoon: boolean;
  popular: boolean;
  title: string;
  price: number;
  description: string;
  buttonText: string;
}

function AnimatedCard({ plan }: { plan: Plan }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 80,
            damping: 15,
          },
        },
      }}
    >
      <Card
        className={`relative overflow-hidden transition-transform duration-300 hover:scale-105 ${
          plan.isComingSoon ? "border-slate-800 bg-black/40" : "border-[#00E5BF] bg-black/40"
        }`}
      >
        {plan.popular && (
          <div className="absolute right-0 top-0">
            <div className="flex items-center gap-1 rounded-bl-lg bg-[#00E599] px-4 py-1 text-xs font-semibold text-white">
              <Star className="size-3" /> MOST POPULAR
            </div>
          </div>
        )}

        <CardHeader className="pb-8 pt-6">
          <h3 className="mb-2 text-xl font-bold text-[#00E599]">{plan.title}</h3>
          <div className="mb-2 flex items-baseline text-white">
            <span className="text-4xl font-bold">
              {plan.price === 0 ? "Free" : `$${plan.price}`}
            </span>
            {plan.price > 0 && <span className="ml-2 text-sm text-slate-400">/month</span>}
          </div>
          <p className="text-sm text-slate-400">{plan.description}</p>
        </CardHeader>

        <CardContent className="pb-8">
          <ul className="space-y-4">
            {plan.features.map((feature: string, featureIndex: number) => (
              <li key={featureIndex} className="flex items-center text-sm text-slate-300">
                <Check className="mr-3 size-5 shrink-0 text-[#00E599] " />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="pb-8 pt-4">
          <Button
            className={`h-12 w-full text-sm font-semibold transition-colors ${
              plan.isComingSoon
                ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                : "bg-[#00E599] text-white hover:bg-[#00E5BF]"
            }`}
          >
            {plan.buttonText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
