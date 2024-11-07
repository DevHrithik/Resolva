// types/index.d.ts

import { User as PrismaUser, UserRole } from "@prisma/client";
import type { Icon } from "lucide-react";

// Auth & User Types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      image?: string;
      roles: UserRole[];
      onboarded: boolean;
      githubUsername?: string;
    };
  }

  interface User extends PrismaUser {}
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

// Github Related Types
export interface GithubRepository {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  languages_url: string;
  topics: string[];
}

export interface GithubProfile {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

// Form Types
export interface OnboardingFormData {
  fullName: string;
  email: string;
  roles: UserRole[];
  techStacks: string[];
  twitterHandle?: string;
  linkedinUrl?: string;
  personalWebsite?: string;
}

// Component Props Types
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number;
}

// Navigation Types
export interface NavItem {
  title: string;
  href: string;
  icon?: Icon;
  disabled?: boolean;
  external?: boolean;
}

// Issue & Repository Types
export interface Issue {
  id: string;
  title: string;
  description: string;
  bountyAmount: number;
  status: "OPEN" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED";
  repository: Repository;
  creator: User;
  solver?: User;
  techStacks: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Repository {
  id: string;
  name: string;
  description?: string;
  url: string;
  maintainer: User;
  issues: Issue[];
  createdAt: Date;
  updatedAt: Date;
}

// Tech Stack Types
export interface TechStack {
  id: string;
  name: string;
}

// User Profile Types
export interface UserProfile {
  id: string;
  fullName?: string;
  email: string;
  githubUsername?: string;
  twitterHandle?: string;
  linkedinUrl?: string;
  personalWebsite?: string;
  roles: UserRole[];
  techStacks: TechStack[];
  maintainedRepos?: Repository[];
  solvedIssues?: Issue[];
  createdIssues?: Issue[];
}

// Dashboard Types
export interface DashboardStats {
  totalBounties: number;
  earnedAmount: number;
  solvedIssues: number;
  activeIssues: number;
}

// Search and Filter Types
export interface SearchParams {
  query?: string;
  techStacks?: string[];
  minBounty?: number;
  maxBounty?: number;
  status?: string[];
  page?: number;
  limit?: number;
}

// Pagination Types
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Component State Types
export interface LoadingState {
  isLoading: boolean;
  error?: string;
}

// Theme Types
export type Theme = "light" | "dark" | "system";

// Route Protection Types
export interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRoles?: UserRole[];
}

// Form Field Types
export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "number" | "select" | "multiselect" | "textarea";
  placeholder?: string;
  options?: { label: string; value: string | number }[];
  required?: boolean;
  validation?: {
    required?: string;
    min?: number;
    max?: number;
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
}

// Error Types
export interface AppError extends Error {
  code?: string;
  statusCode?: number;
  data?: any;
}

// Notification Types
export interface Notification {
  id: string;
  type: "success" | "error" | "info" | "warning";
  message: string;
  title?: string;
  duration?: number;
}
