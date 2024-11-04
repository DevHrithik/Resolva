import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import gsap from "gsap";

const Herosection = () => {
  const leftComponent = useRef(null);
  const rightComponent = useRef(null);

  useEffect(() => {
    gsap.from(leftComponent.current, {
      x: -200,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      stagger:0
    });
    gsap.from(rightComponent.current, {
      x: 200,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      stagger:0
    });
  }, []);

  return (
    <div className="h-[55vh] md:h-screen flex flex-col md:flex-row justify-between items-center py-[30%] md:py-0">
      <div
        ref={leftComponent}
        className="flex flex-col gap-4 text-center md:text-left"
      >
        <div className="text-[40px] md:text-[80px] font-bold md:leading-tight">
          <h1>Solve issues</h1>
          <h1 className="-mt-5">earn rewards.</h1>
        </div>

        <div className="w-full md:w-[400px]">
          <span className="font-medium text-[20px] md:text-[20px] opacity-60">
            Solve real-world problems and get rewarded for your contributions.
          </span>
        </div>

        <div>
          <Button className="bg-[#2f93e0] hover:bg-[#006AB9] text-[16px] font-medium">
            Sign up for free
          </Button>
        </div>
      </div>
      <div
        ref={rightComponent}
        className="hidden md:block w-[50%] h-[400px] bg-gray-500 rounded-lg"
      ></div>
    </div>
  );
};

export default Herosection;
