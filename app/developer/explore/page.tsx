"use client";

import { useState } from "react";
import {
  AlertCircle,
  ArrowUpDown,
  Check,
  ChevronDown,
  Code2,
  DollarSign,
  Filter,
  GitPullRequest,
  Search,
  Star
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
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
import { Separator } from "@/components/ui/separator";

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

const difficultyColors = {
  Easy: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Hard: "bg-red-100 text-red-800"
};

const statusColors = {
  Open: "bg-blue-100 text-blue-800",
  "In Progress": "bg-purple-100 text-purple-800",
  Completed: "bg-gray-100 text-gray-800"
};

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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Explore Issues
        </h1>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                className="pl-8"
                placeholder="Search issues..."
                type="search"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full md:w-auto">
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
              <Button variant="outline" className="w-full md:w-auto">
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
          {filteredIssues.map(issue =>
            <Card key={issue.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-start justify-between">
                  <span className="text-lg font-semibold">
                    {issue.title}
                  </span>
                  <Badge
                    variant="outline"
                    className={statusColors[issue.status]}
                  >
                    {issue.status}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-gray-500 mb-2">
                  {issue.project}
                </p>
                <p className="text-sm text-gray-700 mb-4">
                  {issue.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {issue.techStack.map(tech =>
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center">
                    <AlertCircle className="mr-1 h-4 w-4" />
                    <Badge
                      variant="outline"
                      className={difficultyColors[issue.difficulty]}
                    >
                      {issue.difficulty}
                    </Badge>
                  </span>
                  <span className="flex items-center">
                    <Code2 className="mr-1 h-4 w-4" />
                    {issue.estimatedTime}
                  </span>
                </div>
              </CardContent>
              <Separator />
              <CardFooter className="flex justify-between items-center pt-4">
                <div className="flex items-center">
                  <DollarSign className="mr-1 h-4 w-4 text-green-600" />
                  <span className="font-semibold text-green-600">
                    ${issue.bounty}
                  </span>
                </div>
                <Button>
                  <GitPullRequest className="mr-2 h-4 w-4" />
                  Solve Issue
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
        {filteredIssues.length === 0 &&
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">
              No issues found
            </h3>
            <p className="mt-1 text-gray-500">
              Try adjusting your search or filters to find what you're looking
              for.
            </p>
          </div>}
      </div>
    </div>
  );
}
