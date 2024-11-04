import React from "react";
import { Button } from "../ui/button";
const Herosection = () => {
  return (
    <div className="h-[55vh] md:h-screen flex flex-col md:flex-row py-[10%] justify-between px-5 md:px-[5%]">
      <div className="flex flex-col gap-5 text-center md:text-left">
        <div className="text-[40px] md:text-[75px] font-bold  md:leading-tight">
          <h1>The web builder</h1>
          <h1 className="-mt-4">for stunning sites.</h1>
        </div>

        <div className="w-full md:w-[400px]">
          <span className="font-medium text-[18px] md:text-[20px] opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis, aliquam?
          </span>
        </div>

        <div className="">
          <Button className="bg-[#2f93e0] hover:bg-[#006AB9] text-[15px] font-medium">
            Sign up for free
          </Button>
        </div>
      </div>
      <div className="hidden md:block w-[400px] h-[400px] bg-gray-200 rounded-lg"></div>
    </div>
  );
};

export default Herosection;
