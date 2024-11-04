"use client";

import Feature from "@/components/landing-page/feature-section";
import Herosection from "@/components/landing-page/hero-section";
import Working from "@/components/landing-page/how-its-work";
import Pricing from "@/components/landing-page/pricing";
import Testimonial from "@/components/landing-page/testimonial";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-dark-to-light pt-20">
        <Herosection />
        <Feature />
      </div>
      <div className="bg-light-to-dark">
        <Working />
        <Pricing />
        <Testimonial />
      </div>
    </>
  );
}
