import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

const NAVLIST = [
  { name: "Home", path: "#home" },
  { name: "Features", path: "#features" },
  { name: "Working", path: "#working" },
  { name: "Pricing", path: "#pricing" },
  { name: "Testimonial", path: "#testimonial" }
];
const LOGO = "Resolva";
const REPO = "https://github.com/DevHrithik/Resolva.git";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full backdrop-blur-[5px] backdrop-opacity-100 border-[#ffffff17] border-b text-white flex items-center justify-between px-[3%] py-3 ">
      <div className="text-2xl font-semibold">{LOGO}</div>
      <div className="ml-[5%] text-[.8rem] font-semibold flex items-center gap-8 rounded-sm px-5 py-2 text-[#ffffff]">
        {NAVLIST.map((item, index) => {
          return (
            <Link className="" key={index} href={item.path}>
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-6 text-sm font-semibold">
        <Link href="/sign-in" className="">
          Sign In
        </Link>
        <Link
          href={REPO}
          target="_blank"
          className="flex items-center gap-1 border border-[#ffffff29] rounded-md px-3 py-2"
        >
          <Github className="h-4 w-4 " />
          14.3k
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
