'use client'

import React, { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"

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
      className="min-h-[40vh] md:min-h-[60vh] flex flex-col justify-center items-center py-16 md:py-24 lg:py-40"
    >
      <div className="container px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col gap-8 text-center">
          <h1
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
          >
            <span className="inline-block">Solve</span>{' '}
            <span className="inline-block">issues,</span>{' '}
            <span className="inline-block">earn</span>{' '}
            <span className="inline-block">rewards.</span>
          </h1>
          <p
            ref={subheadingRef}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            Tackle real-world problems and get rewarded for your innovative solutions. Join our community of problem solvers today.
          </p>
          <div ref={buttonRef} className="flex justify-center">
          <Button size="lg" className="text-lg px-6 py-6 rounded-full bg-[#00E599] hover:bg-[#00E5BF]">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}