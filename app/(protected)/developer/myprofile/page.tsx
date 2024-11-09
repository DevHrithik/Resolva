"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import {
  Calendar,
  CheckCircle2,
  Loader2,
  AlertCircle,
  Briefcase,
  Twitter,
  Globe,
  FileEdit,
  Code,
  X,
  Linkedin,
  Github,
} from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

interface TechStack {
  id: string;
  name: string;
}

interface UserData {
  id: string;
  name: string;
  email: string;
  emailVerified: string | null;
  image: string;
  githubUsername: string | null;
  fullName: string | null;
  bio: string | null;
  twitterHandle: string | null;
  linkedinUrl: string | null;
  personalWebsite: string | null;
  roles: string[];
  techStacks: TechStack[];
  onboarded: boolean;
  issuesCreated: any[];
  issuesSolved: any[];
  maintainedRepos: any[];
  createdAt: string;
  updatedAt: string;
}

const techStackBadge: string[] = [
  "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20",
  "bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20",
  "bg-fuchsia-500/10 text-fuchsia-500 hover:bg-fuchsia-500/20",
  "bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500/20",
  "bg-lime-500/10 text-lime-500 hover:bg-lime-500/20",
  "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20",
  "bg-pink-500/10 text-pink-500 hover:bg-pink-500/20",
  "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20",
  "bg-rose-500/10 text-rose-500 hover:bg-rose-500/20",
  "bg-teal-500/10 text-teal-500 hover:bg-teal-500/20",
  "bg-violet-500/10 text-violet-500 hover:bg-violet-500/20",
  "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20",
];

export default function UserProfilePage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState<Partial<UserData>>({});
  const [isLoading, setisLoading] = useState<Boolean>(false)
  const fetchUserData = async () => {
    try {
      const response = await axios.get<UserData>("/api/user");
      setUserData(response.data);
      setEditedData(response.data);
    } catch (err) {
      setError("Failed to load user profile");
      console.error("Error fetching user data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      setisLoading(true);
      const formattedData = {
        ...editedData,
        techStacks: editedData.techStacks?.map((tech) => tech.name),
      };

      const res = await axios.post("/api/user", formattedData);
      setUserData(res.data.user);
      await fetchUserData();
      setIsEditing(false);
    } catch (err) {
      console.error("Error updating user data:", err);
      setError("Failed to update profile");
    }finally{
      setisLoading(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTechStackAdd = (techName: string) => {
    if (techName && Array.isArray(editedData.techStacks)) {
      const existingTech = editedData.techStacks.find(
        (tech) => tech.name === techName
      );
      if (!existingTech) {
        setEditedData((prev) => ({
          ...prev,
          techStacks: [
            ...(prev.techStacks || []),
            { id: Date.now().toString(), name: techName },
          ],
        }));
      }
    }
  };

  const handleTechStackRemove = (techId: string) => {
    setEditedData((prev) => ({
      ...prev,
      techStacks: prev.techStacks?.filter((tech) => tech.id !== techId),
    }));
  };

  if (loading) {
    return <LoadingState />;
  }

  if (error || !userData) {
    return <ErrorState error={error} />;
  }

  return (
    <div className="flex-1 bg-black p-4 sm:p-6 md:p-8 ">
      <div className="max-w-7xl mx-auto">
        <main className="space-y-8">
          <Card className="bg-black/50 border-zinc-800">
            <CardHeader className="relative pb-0">
              <div className="absolute  opacity-20"></div>
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0 pb-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-24 h-24 sm:w-32 sm:h-32 border-4 border-gray-700 shadow-lg">
                    <AvatarImage src={userData.image} alt={userData.name} />
                    <AvatarFallback className="bg-gray-700 text-gray-100 text-2xl font-bold">
                      {userData.name
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl sm:text-4xl font-bold text-gray-100 mb-2">
                      {userData.fullName || userData.name}
                    </CardTitle>
                    <p className="text-gray-300 text-lg">{userData.email}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge
                        variant="secondary"
                        className={`${
                          userData.onboarded
                            ? "bg-green-600 text-green-100"
                            : "bg-yellow-600 text-yellow-100"
                        } px-3 py-1 text-sm font-medium`}
                      >
                        <CheckCircle2 className="w-4 h-4 mr-1 inline-block" />
                        {userData.onboarded
                          ? "Onboarded"
                          : "Pending Onboarding"}
                      </Badge>
                      {userData.roles?.map((role) => (
                        <Badge
                          key={role}
                          variant="secondary"
                          className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
                        >
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                {!isEditing && (
                  <Button
                    size="sm"
                    className="text-[15px] font-medium px-4 py-5 rounded-md bg-[#00E599] hover:bg-[#00E5BF]"
                    onClick={handleEdit}
                  >
                    Edit Porfile
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {userData.bio && !isEditing && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">
                    Bio
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {userData.bio}
                  </p>
                </div>
              )}
              {isEditing && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="twitterHandle" className="text-gray-300">
                      Twitter Handle
                    </Label>
                    <Input
                      id="twitterHandle"
                      name="twitterHandle"
                      value={editedData.twitterHandle || ""}
                      onChange={handleInputChange}
                      className="mt-1 bg-gray-700 text-gray-100 border-gray-600"
                    />
                  </div>
                  <div>
                    <Label htmlFor="linkedinUrl" className="text-gray-300">
                      LinkedIn URL
                    </Label>
                    <Input
                      id="linkedinUrl"
                      name="linkedinUrl"
                      value={editedData.linkedinUrl || ""}
                      onChange={handleInputChange}
                      className="mt-1 bg-gray-700 text-gray-100 border-gray-600"
                    />
                  </div>
                  <div>
                    <Label htmlFor="newTechStack" className="text-gray-300">
                      Add Tech Stack
                    </Label>
                    <div className="flex gap-2 mt-1">
                      <Input
                        id="newTechStack"
                        placeholder="Enter tech stack"
                        className="bg-gray-700 text-gray-100 border-gray-600"
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            handleTechStackAdd(
                              (e.target as HTMLInputElement).value
                            );
                            (e.target as HTMLInputElement).value = "";
                          }
                        }}
                      />
                      <Button
                        onClick={() => {
                          const input = document.getElementById(
                            "newTechStack"
                          ) as HTMLInputElement;
                          handleTechStackAdd(input.value);
                          input.value = "";
                        }}
                        className="bg-green-600 text-white hover:bg-green-700 transition-colors duration-200"
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {editedData.techStacks?.map((tech, index) => (
                      <Badge
                        key={tech.id}
                        variant="secondary"
                        className={`${
                          techStackBadge[index % techStackBadge.length]
                        } px-2 py-1 text-sm`}
                      >
                        {tech.name}
                        <X
                          className="w-3 h-3 ml-1 cursor-pointer"
                          onClick={() => handleTechStackRemove(tech.id)}
                        />
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button
                      onClick={handleSave}
                      className="bg-green-600 text-white hover:bg-green-700 transition-colors duration-200"
                      disabled={Boolean(isLoading)}
                    >
                     {isLoading && <Loader2 className="animate-spin" />} 
                      Save Changes
                    </Button>
                    <Button
                      onClick={handleCancel}
                      variant="outline"
                      className="bg-gray-700 text-gray-100 border-gray-600 hover:bg-gray-600 transition-colors duration-200"
                      disabled={Boolean(isLoading)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {!isEditing && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProfileSection
                icon={<Code className="w-6 h-6 text-green-400" />}
                title="Tech Stack"
                content={
                  <div className="flex flex-wrap gap-2">
                    {userData.techStacks?.map((tech, index) => (
                      <Badge
                        key={tech.id}
                        variant="secondary"
                        className={`${
                          techStackBadge[index % techStackBadge.length]
                        } px-2 py-1 text-sm`}
                      >
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                }
              />

              <ProfileSection
                icon={<Briefcase className="w-6 h-6 text-purple-400" />}
                title="Social Links"
                content={
                  <div className="space-y-3">
                    {userData.linkedinUrl && (
                      <a
                        href={userData.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-200"
                      >
                        <Linkedin className="w-5 h-5" />
                        LinkedIn
                      </a>
                    )}
                    {userData.twitterHandle && (
                      <a
                        href={`https://twitter.com/${userData.twitterHandle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-200"
                      >
                        <Twitter className="w-5 h-5" />@{userData.twitterHandle}
                      </a>
                    )}
                    {userData.personalWebsite && (
                      <a
                        href={userData.personalWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-200"
                      >
                        <Globe className="w-5 h-5" />
                        Personal Website
                      </a>
                    )}
                    {userData.githubUsername && (
                      <a
                        href={`https://github.com/${userData.githubUsername}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-200"
                      >
                        <Github className="w-5 h-5" />
                        GitHub
                      </a>
                    )}
                  </div>
                }
              />

              <ProfileSection
                icon={<Calendar className="w-6 h-6 text-green-400" />}
                title="Activity Stats"
                content={
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Issues Created:</span>
                      <HoverBorderGradient className="w-[30px] h-[30px] flex items-center justify-center">
                        {userData.issuesCreated?.length ?? 0}
                      </HoverBorderGradient>
                    </div>
                    <Separator className="bg-gray-700" />
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Issues Solved:</span>
                      <HoverBorderGradient className="w-[30px] h-[30px] flex items-center justify-center">
                        {userData.issuesSolved?.length ?? 0}
                      </HoverBorderGradient>
                    </div>
                    <Separator className="bg-gray-700" />
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Repos Maintained:</span>
                      <HoverBorderGradient className="w-[30px] h-[30px] flex items-center justify-center">
                        {userData.maintainedRepos?.length ?? 0}
                      </HoverBorderGradient>
                    </div>
                  </div>
                }
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function ProfileSection({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <Card className="bg-black/10 border-zinc-800 overflow-hidden shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2 text-gray-100">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
}

function LoadingState() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-green-400" />
        <span className="text-xl font-medium text-gray-300">
          Loading profile...
        </span>
      </div>
    </div>
  );
}

function ErrorState({ error }: { error: string | null }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 p-8 flex items-center justify-center">
      <Alert
        variant="destructive"
        className="max-w-md bg-red-900 border-red-800"
      >
        <AlertCircle className="h-6 w-6" />
        <AlertDescription className="text-lg text-red-100">
          {error || "Unable to load profile data"}
        </AlertDescription>
      </Alert>
    </div>
  );
}
