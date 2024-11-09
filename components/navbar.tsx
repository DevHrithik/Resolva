import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

const NAVLIST = [
  { name: "Home", path: "#home" },
  { name: "Features", path: "#features" },
  { name: "Working", path: "#working" },
  { name: "Pricing", path: "#pricing" },
  { name: "Testimonial", path: "#testimonial" },
];
const LOGO = "Resolva";
const REPO = "https://github.com/DevHrithik/Resolva.git";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-[#ffffff17] px-[3%] py-3 text-white backdrop-blur-[5px] backdrop-opacity-100">
      <div className="text-2xl font-semibold">{LOGO}</div>
      <div className="ml-[5%] hidden items-center gap-8 rounded-sm px-5 py-2 text-[.8rem] font-semibold text-[#ffffff] md:flex">
        {NAVLIST.map((item, index) => {
          return (
            <Link className="" key={index} href={item.path}>
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-6 text-sm font-semibold">
        <Link
          href="/login"
          className="rounded-md bg-[#00E599] px-3 py-2  text-white shadow-lg hover:bg-[#00E5BF]"
        >
          Sign In
        </Link>
        <Link
          href={REPO}
          target="_blank"
          className="flex items-center gap-1 rounded-md border border-[#ffffff29] px-3 py-2"
        >
          <Github className="size-4 " />
          69.3k
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
