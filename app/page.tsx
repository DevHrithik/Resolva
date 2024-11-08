"use client";

import GlowingGridBackground from "@/components/grid/glowing-grid-background";
import Feature from "@/components/landing-page/feature-section";
import Footer from "@/components/landing-page/footer";
import Herosection from "@/components/landing-page/hero-section";
import Pricing from "@/components/landing-page/pricing";
import Testimonial from "@/components/landing-page/testimonial";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="fixed inset-0 -z-10">
        <GlowingGridBackground />
      </div>

      <div className="px-5 md:px-[5%]">
        <Herosection />
        <Feature />
      </div>
      {/* <Working /> */}
      <Testimonial />
      <div className="">
        <Pricing />
      </div>
      <Footer />
    </>
  );
}
