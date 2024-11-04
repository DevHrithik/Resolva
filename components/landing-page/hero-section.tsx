import React from "react";
import { Button } from "../ui/button";
const Herosection = () => {
  return (
    <div className="h-[55vh] md:h-[90vh] flex flex-col md:flex-row py-[30%] justify-between items-center ">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <div className="text-[40px] md:text-[80px] font-bold  md:leading-tight">
          <h1>Solve issues</h1>
          <h1 className="-mt-5">earn rewards.</h1>
        </div>

        <div className="w-full md:w-[400px]">
          <span className="font-medium text-[20px] md:text-[20px] opacity-60">
            Solve real-world problems and get rewarded for your contributions.
          </span>
        </div>

        <div className="">
          <Button className="bg-[#2f93e0] hover:bg-[#006AB9] text-[16px] font-medium">
            Sign up for free
          </Button>
        </div>
      </div>
      <div className="hidden md:block w-[400px] h-[400px] bg-gray-200 rounded-lg"></div>
    </div>
  );
};

export default Herosection;