"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Search, Users } from "lucide-react";

const Feature = () => {
  const features = [
    {
      icon: Search,
      title: "Find Exciting Projects",
      content:
        "Discover a wide range of projects and issues that match your skills and interests.",
    },
    {
      icon: DollarSign,
      title: "Earn Rewards",
      content:
        "Get compensated for your contributions with bounties set by project maintainers.",
    },
    {
      icon: Users,
      title: "Build Your Network",
      content:
        "Connect with project maintainers and other developers in the community.",
    },
  ];
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-white">
          Why Choose Resolva?
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-transparent"
            >
              <CardHeader>
                <feature.icon className="h-12 w-12 mb-4 text-blue-400" />
                <CardTitle className="text-xl font-semibold text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{feature.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
