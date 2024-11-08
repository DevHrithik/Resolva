'use client'

import React, { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"
import { HoverBorderGradient } from "../ui/hover-border-gradient"
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subheadingRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current && headingRef.current && subheadingRef.current && buttonRef.current) {
      gsap.fromTo(
        [headingRef.current.children, subheadingRef.current, buttonRef.current],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      )
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="flex min-h-[40vh] flex-col items-center justify-center py-16 md:min-h-[60vh] md:py-24 lg:py-40"
    >
      <div className="container max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-8 text-center">
          <h1
            ref={headingRef}
            className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            <span className="inline-block">Solve</span>{' '}
            <span className="inline-block">issues,</span>{' '}
            <span className="inline-block">earn</span>{' '}
            <span className="inline-block">rewards.</span>
          </h1>
          <p
            ref={subheadingRef}
            className="mx-auto max-w-3xl text-xl text-muted-foreground md:text-2xl"
          >
            Tackle real-world problems and get rewarded for your innovative solutions. Join our community of problem solvers today.
          </p>
          <div ref={buttonRef} className="flex justify-center">
          <Button size="lg" className="rounded-full bg-[#00E599] p-6 text-lg hover:bg-[#00E5BF]">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}