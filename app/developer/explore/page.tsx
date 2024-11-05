"use client";

import { useState } from "react";
import {
  ChevronDown,
  Filter,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
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
    status: "Open"
  },
  {
    id: 2,
    title: "Optimize database queries for better performance",
    project: "Data Analytics Dashboard",
    description:
      "Improve the speed of data retrieval by optimizing SQL queries and implementing proper indexing.",
    techStack: ["Python", "PostgreSQL", "SQLAlchemy"],
    bounty: 750,
    difficulty: "Hard",
    estimatedTime: "1 week",
    status: "Open"
  },
  {
    id: 3,
    title: "Develop RESTful API endpoints",
    project: "Mobile App Backend",
    description:
      "Create a set of RESTful API endpoints for user management, content creation, and data retrieval.",
    techStack: ["Java", "Spring Boot", "MySQL"],
    bounty: 600,
    difficulty: "Medium",
    estimatedTime: "4-6 days",
    status: "Open"
  },
  {
    id: 4,
    title: "Implement real-time chat functionality",
    project: "Collaboration Tool",
    description:
      "Add real-time chat features using WebSockets, including private messaging and group chats.",
    techStack: ["JavaScript", "React", "Node.js", "Socket.io"],
    bounty: 800,
    difficulty: "Hard",
    estimatedTime: "1-2 weeks",
    status: "Open"
  },
  {
    id: 5,
    title: "Create data visualization components",
    project: "Business Intelligence Tool",
    description:
      "Develop reusable chart and graph components for visualizing complex datasets.",
    techStack: ["JavaScript", "React", "D3.js"],
    bounty: 550,
    difficulty: "Medium",
    estimatedTime: "3-5 days",
    status: "Open"
  }
];

export default function Component() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTechStack, setSelectedTechStack] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([]);

  const filteredIssues = issues.filter(issue => {
    const matchesSearch =
      issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.project.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTechStack =
      selectedTechStack.length === 0 ||
      issue.techStack.some(tech => selectedTechStack.includes(tech));
    const matchesDifficulty =
      selectedDifficulty.length === 0 ||
      selectedDifficulty.includes(issue.difficulty);
    return matchesSearch && matchesTechStack && matchesDifficulty;
  });

  const allTechStacks = Array.from(
    new Set(issues.flatMap(issue => issue.techStack))
  );

  return (
    <div className="flex-1 overflow-y-auto bg-black py-8 scroll-none">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 " />
              <Input
                className="pl-8 border border-[#ffffff28]"
                placeholder="Search issues..."
                type="search"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full md:w-auto bg-black border border-[#ffffff28] hover:bg-zinc-900 hover:border-transparent transition-all ease-linear duration-200 hover:text-white"
              >
                <Filter className="mr-2 h-4 w-4" />
                Tech Stack
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {allTechStacks.map(tech =>
                <DropdownMenuCheckboxItem
                  key={tech}
                  checked={selectedTechStack.includes(tech)}
                  onCheckedChange={checked =>
                    setSelectedTechStack(
                      checked
                        ? [...selectedTechStack, tech]
                        : selectedTechStack.filter(t => t !== tech)
                    )}
                >
                  {tech}
                </DropdownMenuCheckboxItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full md:w-auto bg-black border border-[#ffffff28] hover:bg-zinc-900 hover:border-transparent transition-all ease-linear duration-200 hover:text-white"
              >
                <Filter className="mr-2 h-4 w-4" />
                Difficulty
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {["Easy", "Medium", "Hard"].map(difficulty =>
                <DropdownMenuCheckboxItem
                  key={difficulty}
                  checked={selectedDifficulty.includes(difficulty)}
                  onCheckedChange={checked =>
                    setSelectedDifficulty(
                      checked
                        ? [...selectedDifficulty, difficulty]
                        : selectedDifficulty.filter(d => d !== difficulty)
                    )}
                >
                  {difficulty}
                </DropdownMenuCheckboxItem>
              )}
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
          {Array.from({length:50}).fill("").map((issue, index) =>
            <IssueCard key={index} issue={issue} />
          )}
        </div>
        {filteredIssues.length === 0 &&
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">
              No issues found
            </h3>
            <p className="mt-1 text-gray-500">
              Try adjusting your search or filters to find what you&apos;re
              looking for.
            </p>
          </div>}
      </div>
    </div>
  );
}
