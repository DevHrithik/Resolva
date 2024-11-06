"use client";

import React, { useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    content:
      "This product has revolutionized our workflow. The efficiency gains are remarkable.",
    author: "Jane Doe",
    role: "CEO, TechCorp",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    content:
      "The attention to detail in the design is unparalleled. It's a joy to use daily.",
    author: "John Smith",
    role: "Lead Designer, CreativeCo",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    content:
      "Customer support is exceptional. They've set a new standard in the industry.",
    author: "Emily Brown",
    role: "Operations Manager",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    content:
      "This tool has become indispensable for our development team. Highly recommended.",
    author: "Michael Johnson",
    role: "CTO, InnovateNow",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export default function ProfessionalMovingTestimonial() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full h-[60vh] md:min-h-screen overflow-hidden py-16 md:flex md:items-center">
      {/* <h2 className="text-xl md:text-3xl font-bold text-center mb-12 text-white tracking-tight">
        What Our Clients Say
      </h2> */}
      <div
        ref={containerRef}
        className="flex"
        style={{
          animation: `moveLeft 25s linear infinite`,
        }}
      >
        {[...testimonials].map((testimonial, index) => (
          <Card
            key={`${testimonial.id}-${index}`}
            className="mx-4 w-96 flex-shrink-0 transition-all duration-500 hover:transform hover:scale-105 bg-[#020617] border-slate-800 hover:border-blue-500 group"
          >
            <CardContent className="p-8 relative">
              <p className="text-slate-300 mb-6 leading-relaxed">
                {testimonial.content}
              </p>
              <div className="flex items-center mt-6 pt-6 border-t border-slate-700">
                <Avatar className="h-12 w-12 mr-4 ring-2 ring-slate-700 group-hover:ring-blue-400 transition-all duration-300">
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.author}
                  />
                  <AvatarFallback className="bg-slate-700 text-slate-200">
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-slate-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div
        ref={containerRef}
        className="flex"
        style={{
          animation: `moveLeft 25s linear infinite`,
        }}
      >
        {[...testimonials].map((testimonial, index) => (
          <Card
            key={`${testimonial.id}-${index}`}
            className="mx-4 w-96 flex-shrink-0 transition-all duration-500 hover:transform hover:scale-105 bg-[#020617] border-slate-800 hover:border-blue-500 group"
          >
            <CardContent className="p-8 relative">
              <p className="text-slate-300 mb-6 leading-relaxed">
                {testimonial.content}
              </p>
              <div className="flex items-center mt-6 pt-6 border-t border-slate-700">
                <Avatar className="h-12 w-12 mr-4 ring-2 ring-slate-700 group-hover:ring-blue-400 transition-all duration-300">
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.author}
                  />
                  <AvatarFallback className="bg-slate-700 text-slate-200">
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-slate-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <style jsx>{`
        @keyframes moveLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
