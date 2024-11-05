"use client";

import * as React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  handle: string;
  image: string;
  content: string;
  role?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Axel Sooriah",
    handle: "@axel_sooriah",
    image: "/placeholder.svg?height=40&width=40",
    content:
      "Been early users of Butter and loved it since. It's a core part of our learning space for product managers to upskill on various craft skills. Excited to see what else the Butter has in store for us.",
  },
  {
    name: "Jay Melone",
    handle: "@jaymelone",
    image: "/placeholder.svg?height=40&width=40",
    content:
      "Butter has gotten so good that it's completely integrated into how we operate. We rely on Butter for all of our internal conversations and strategy sessions. More so, Butter powers all of our client work and our training workshops.",
  },
  {
    name: "Rich Webster",
    handle: "@richwebz",
    image: "/placeholder.svg?height=40&width=40",
    content:
      "I've been using Butter 2.0 for the last 3 cohorts of my course, How To Work Less, and I can't say enough about it - It blows Zoom out of the water for live sessions! My students constantly say how much more fun and engaging it makes the sessions!",
  },
  {
    name: "Rich Webster",
    handle: "@richwebz",
    image: "/placeholder.svg?height=40&width=40",
    content:
      "I've been using Butter 2.0 for the last 3 cohorts of my course, How To Work Less, and I can't say enough about it - It blows Zoom out of the water for live sessions! My students constantly say how much more fun and engaging it makes the sessions!",
  },
];

export default function Component() {
  return (
    <div className="dark min-h-screen  text-foreground p-8">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Loved by facilitators everywhere
          </h2>
          <p className="text-xl text-muted-foreground">
            Trust their words, not just ours
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full "
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
                <motion.div
                  whileHover={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <Card className="h-full bg-[#020617]">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Avatar>
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        {testimonial.handle && (
                          <p className="text-sm text-muted-foreground">
                            {testimonial.handle}
                          </p>
                        )}
                        {testimonial.role && (
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.content}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
