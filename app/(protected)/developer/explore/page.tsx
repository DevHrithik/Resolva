"use client";

import { useState } from "react";
import { ChevronDown, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import IssueCard from "@/components/developer/issue-card";

const issues = [
  {
    id: 1,
    title: "Implement user authentication flow",
    project: "E-commerce Platform",
    description:
      "Create a secure user authentication system with login, registration, and password reset functionality.",
    techStack: ["JavaScript", "React", "Node.js", "MongoDB"],
    bounty: 500,
    difficulty: "Medium",
    estimatedTime: "3-5 days",
    status: "Open",
  },
  {
    id: 2,
    title: "Design product page UI",
    project: "E-commerce Platform",
    description:
      "Design a responsive and visually appealing product page UI with product details, images, and add to cart functionality.",
    techStack: ["React", "CSS", "Figma"],
    bounty: 300,
    difficulty: "Easy",
    estimatedTime: "2-3 days",
    status: "Closed",
  },
  {
    id: 3,
    title: "Integrate Stripe payment gateway",
    project: "E-commerce Platform",
    description:
      "Integrate the Stripe API to handle secure payment transactions for product purchases.",
    techStack: ["Node.js", "Express", "Stripe API"],
    bounty: 600,
    difficulty: "Medium",
    estimatedTime: "4-6 days",
    status: "Open",
  },
  {
    id: 4,
    title: "Create an order management system",
    project: "E-commerce Platform",
    description:
      "Develop a backend system for managing customer orders, tracking status, and updating inventory.",
    techStack: ["Node.js", "MongoDB", "Express"],
    bounty: 700,
    difficulty: "Hard",
    estimatedTime: "5-7 days",
    status: "Open",
  },
  {
    id: 5,
    title: "Implement user profile page",
    project: "E-commerce Platform",
    description:
      "Create a user profile page where customers can view and edit their account information.",
    techStack: ["React", "Node.js", "MongoDB"],
    bounty: 350,
    difficulty: "Medium",
    estimatedTime: "2-3 days",
    status: "Closed",
  },
  {
    id: 6,
    title: "Optimize homepage load speed",
    project: "E-commerce Platform",
    description:
      "Improve the loading time of the homepage by optimizing images, minifying CSS/JS files, and implementing lazy loading.",
    techStack: ["React", "Webpack", "CSS"],
    bounty: 400,
    difficulty: "Medium",
    estimatedTime: "2-3 days",
    status: "Open",
  },
  {
    id: 7,
    title: "Create product review system",
    project: "E-commerce Platform",
    description:
      "Build a system that allows users to leave reviews and ratings for products.",
    techStack: ["React", "Node.js", "MongoDB"],
    bounty: 500,
    difficulty: "Medium",
    estimatedTime: "4-5 days",
    status: "Open",
  },
  {
    id: 8,
    title: "Implement multi-language support",
    project: "E-commerce Platform",
    description:
      "Add multi-language support to the platform, allowing users to switch between different languages.",
    techStack: ["React", "i18next", "Node.js"],
    bounty: 600,
    difficulty: "Hard",
    estimatedTime: "5-7 days",
    status: "Closed",
  },
  {
    id: 9,
    title: "Create admin dashboard",
    project: "E-commerce Platform",
    description:
      "Develop a comprehensive admin dashboard for managing products, orders, and user accounts.",
    techStack: ["React", "Node.js", "MongoDB"],
    bounty: 700,
    difficulty: "Hard",
    estimatedTime: "6-8 days",
    status: "Open",
  },
  {
    id: 10,
    title: "Fix responsive layout issues",
    project: "E-commerce Platform",
    description:
      "Fix layout issues on mobile and tablet views, ensuring a smooth and responsive design.",
    techStack: ["CSS", "HTML", "React"],
    bounty: 200,
    difficulty: "Easy",
    estimatedTime: "1-2 days",
    status: "Closed",
  },
  {
    id: 11,
    title: "Set up caching for product data",
    project: "E-commerce Platform",
    description:
      "Implement caching for product data to reduce database load and improve response time.",
    techStack: ["Node.js", "Redis"],
    bounty: 450,
    difficulty: "Medium",
    estimatedTime: "3-4 days",
    status: "Open",
  },
  {
    id: 12,
    title: "Build product category filtering",
    project: "E-commerce Platform",
    description:
      "Create a filtering system to allow users to filter products by categories, price range, and rating.",
    techStack: ["React", "Node.js", "MongoDB"],
    bounty: 550,
    difficulty: "Medium",
    estimatedTime: "3-4 days",
    status: "Closed",
  },
  {
    id: 13,
    title: "Implement real-time order tracking",
    project: "E-commerce Platform",
    description:
      "Develop a real-time order tracking feature where users can see the status of their orders in real-time.",
    techStack: ["Node.js", "WebSocket", "MongoDB"],
    bounty: 800,
    difficulty: "Hard",
    estimatedTime: "6-8 days",
    status: "Open",
  },
  {
    id: 14,
    title: "Create email notification system",
    project: "E-commerce Platform",
    description:
      "Build an email notification system for sending order confirmations, shipping updates, and promotional offers.",
    techStack: ["Node.js", "Nodemailer"],
    bounty: 400,
    difficulty: "Medium",
    estimatedTime: "3-4 days",
    status: "Closed",
  },
  {
    id: 15,
    title: "Implement product search functionality",
    project: "E-commerce Platform",
    description:
      "Build a search bar with auto-suggestions and filtering to help users find products quickly.",
    techStack: ["React", "Node.js", "MongoDB"],
    bounty: 500,
    difficulty: "Medium",
    estimatedTime: "3-4 days",
    status: "Open",
  },
  {
    id: 16,
    title: "Integrate Google Analytics",
    project: "E-commerce Platform",
    description:
      "Set up Google Analytics to track user behavior, conversion rates, and other key metrics on the website.",
    techStack: ["JavaScript", "Google Analytics"],
    bounty: 250,
    difficulty: "Easy",
    estimatedTime: "2-3 days",
    status: "Closed",
  },
  {
    id: 17,
    title: "Optimize product images",
    project: "E-commerce Platform",
    description:
      "Optimize product images for faster loading times and better performance on the website.",
    techStack: ["ImageMagick", "Node.js"],
    bounty: 300,
    difficulty: "Easy",
    estimatedTime: "1-2 days",
    status: "Open",
  },
  {
    id: 18,
    title: "Implement two-factor authentication",
    project: "E-commerce Platform",
    description:
      "Add two-factor authentication for users to enhance account security.",
    techStack: ["Node.js", "JWT", "SMS API"],
    bounty: 600,
    difficulty: "Medium",
    estimatedTime: "4-5 days",
    status: "Closed",
  },
  {
    id: 19,
    title: "Set up automated testing for the frontend",
    project: "E-commerce Platform",
    description:
      "Implement automated tests for frontend components using Jest and React Testing Library.",
    techStack: ["Jest", "React Testing Library"],
    bounty: 450,
    difficulty: "Easy",
    estimatedTime: "3-4 days",
    status: "Open",
  },
  {
    id: 20,
    title: "Develop shipping calculator",
    project: "E-commerce Platform",
    description:
      "Create a shipping calculator that calculates shipping costs based on the user's location and selected shipping method.",
    techStack: ["Node.js", "API Integration"],
    bounty: 500,
    difficulty: "Medium",
    estimatedTime: "4-5 days",
    status: "Closed",
  },
];

export default function Component() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTechStack, setSelectedTechStack] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([]);

  const filteredIssues = issues.filter((issue) => {
    const matchesSearch =
      issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.project.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTechStack =
      selectedTechStack.length === 0 ||
      issue.techStack.some((tech) => selectedTechStack.includes(tech));
    const matchesDifficulty =
      selectedDifficulty.length === 0 ||
      selectedDifficulty.includes(issue.difficulty);
    return matchesSearch && matchesTechStack && matchesDifficulty;
  });

  const allTechStacks = Array.from(
    new Set(issues.flatMap((issue) => issue.techStack))
  );

  return (
    <div className="scroll-none flex-1 overflow-y-auto bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col gap-4 md:flex-row">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 size-4 text-gray-500 " />
              <Input
                className="border border-[#ffffff28] pl-8"
                placeholder="Search issues..."
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full border border-[#ffffff28] bg-black transition-all duration-200 ease-linear hover:border-transparent hover:bg-zinc-900 hover:text-white md:w-auto"
              >
                <Filter className="mr-2 size-4" />
                Tech Stack
                <ChevronDown className="ml-2 size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {allTechStacks.map((tech) => (
                <DropdownMenuCheckboxItem
                  key={tech}
                  checked={selectedTechStack.includes(tech)}
                  onCheckedChange={(checked) =>
                    setSelectedTechStack(
                      checked
                        ? [...selectedTechStack, tech]
                        : selectedTechStack.filter((t) => t !== tech)
                    )
                  }
                >
                  {tech}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full border border-[#ffffff28] bg-black transition-all duration-200 ease-linear hover:border-transparent hover:bg-zinc-900 hover:text-white md:w-auto"
              >
                <Filter className="mr-2 size-4" />
                Difficulty
                <ChevronDown className="ml-2 size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {["Easy", "Medium", "Hard"].map((difficulty) => (
                <DropdownMenuCheckboxItem
                  key={difficulty}
                  checked={selectedDifficulty.includes(difficulty)}
                  onCheckedChange={(checked) =>
                    setSelectedDifficulty(
                      checked
                        ? [...selectedDifficulty, difficulty]
                        : selectedDifficulty.filter((d) => d !== difficulty)
                    )
                  }
                >
                  {difficulty}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Select>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bounty-high">Highest Bounty</SelectItem>
              <SelectItem value="bounty-low">Lowest Bounty</SelectItem>
              <SelectItem value="difficulty-high">
                Highest Difficulty
              </SelectItem>
              <SelectItem value="difficulty-low">Lowest Difficulty</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredIssues.map((issue, index) => (
            <IssueCard key={index} issue={issue} />
          ))}
        </div>
        {filteredIssues.length === 0 && (
          <div className="py-12 text-center">
            <h3 className="text-lg font-medium text-gray-900">
              No issues found
            </h3>
            <p className="mt-1 text-gray-500">
              Try adjusting your search or filters to find what you&apos;re
              looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
