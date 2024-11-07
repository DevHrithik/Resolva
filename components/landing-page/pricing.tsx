"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

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
    description:
      "Perfect for growing businesses starting their financial journey",
    features: [
      "Automated Expense Tracking with Detailed Analysis",
      "Family Expense Tracking (4 Users)",
      "Latest Fintech News & Updates",
      "Investment Opportunities Platform",
      "Advanced Tax Calculator",
    ],
    popular: true,
    buttonText: "Get Satated",
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
    buttonText: "Get Satated",
    isComingSoon: false,
  },
];

export default function Component() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.7 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Choose Your Financial
            <span className="bg-gradient-to-r from-white/80 to-white/40 bg-clip-text text-transparent">
              {" "}
              Journey
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Select a plan that best fits your needs. All plans include our core
            features with varying levels of sophistication and support.
          </p>
        </div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 lg:grid-cols-3 lg:gap-12"
        >
          {pricingPlans.map((plan, index) => (
            <AnimatedCard key={index} plan={plan} />
          ))}
        </motion.div>

        <p className="text-center text-sm text-slate-400 mt-12">
          All plans include 24/7 support and a 30-day money-back guarantee
        </p>
      </div>
    </div>
  );
}

function AnimatedCard({ plan }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 0.8,
        opacity: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
      },
    },
  };

  return (
    <motion.div variants={cardVariants}>
      <Card
        className={`relative overflow-hidden transition-transform duration-300 hover:scale-105 ${
          plan.isComingSoon
            ? "bg-black/40 border-slate-800"
            : "bg-black/40 border-[#00E5BF]"
        }`}
      >
        {plan.popular && (
          <div className="absolute top-0 right-0">
            <div className="bg-[#00E599] text-white text-xs font-semibold px-4 py-1 rounded-bl-lg flex items-center gap-1">
              <Star className="w-3 h-3" /> MOST POPULAR
            </div>
          </div>
        )}

        <CardHeader className="pb-8 pt-6">
          <h3 className="text-xl font-bold text-[#00E599] mb-2">
            {plan.title}
          </h3>
          <div className="flex items-baseline text-white mb-2">
            <span className="text-4xl font-bold">
              {plan.price === 0 ? "Free" : `$${plan.price}`}
            </span>
            {plan.price > 0 && (
              <span className="text-slate-400 ml-2 text-sm">/month</span>
            )}
          </div>
          <p className="text-sm text-slate-400">{plan.description}</p>
        </CardHeader>

        <CardContent className="pb-8">
          <ul className="space-y-4">
            {plan.features.map((feature, featureIndex) => (
              <li
                key={featureIndex}
                className="flex items-center text-slate-300 text-sm"
              >
                <Check className="mr-3 h-5 w-5 flex-shrink-0 text-[#00E599] " />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="pt-4 pb-8">
          <Button
            className={`w-full h-12 text-sm font-semibold transition-colors ${
              plan.isComingSoon
                ? "bg-slate-800 hover:bg-slate-700 text-slate-300"
                : "bg-[#00E599] hover:bg-[#00E5BF] text-white"
            }`}
          >
            {plan.buttonText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
