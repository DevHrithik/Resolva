"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import axios from "axios";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CalendarDays,
  Mail,
  User,
  Calendar,
  CheckCircle2,
  Loader2,
  AlertCircle,
  Briefcase,
  Link as LinkIcon,
  Twitter,
  Globe,
  FileEdit,
  Code,
  X,
} from "lucide-react";
import { log } from "console";

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
      const formattedData = {
        ...editedData,
        techStacks: editedData.techStacks?.map((tech) => tech.name),
      };

      const res = await axios.post("/api/user", formattedData);
      setUserData(res.data.user);
      setIsEditing(false);
      await fetchUserData();
    } catch (err) {
      console.error("Error updating user data:", err);
      setError("Failed to update profile");
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
      // Make sure editedData.techStacks is an array
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
    <div className="h-full bg-black text-gray-100 p-8 overflow-y-hidden">
      <div className="max-w-5xl mx-auto overflow-hidden">
        <main className="space-y-8">
          <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 text-zinc-100">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold text-gray-100">
                Personal Information
              </CardTitle>
              {!isEditing && (
                <Button
                  onClick={handleEdit}
                  variant="outline"
                  size="sm"
                  className="bg-gray-700 text-gray-100 border-gray-600 hover:bg-gray-600"
                >
                  <FileEdit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              )}
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-8">
                <Avatar className="w-32 h-32 border-2 border-gray-700">
                  <AvatarImage src={userData.image} alt={userData.name} />
                  <AvatarFallback className="bg-gray-700 text-gray-100">
                    {userData.name
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-100">
                      {userData.fullName || userData.name}
                    </h2>
                    <p className="text-gray-400">{userData.email}</p>
                  </div>
                  <Badge
                    variant="secondary"
                    className={`${
                      userData.onboarded
                        ? "bg-green-900 text-green-100"
                        : "bg-yellow-900 text-yellow-100"
                    } px-3 py-1 text-sm font-medium`}
                  >
                    <CheckCircle2 className="w-4 h-4 mr-1 inline-block" />
                    {userData.onboarded ? "Onboarded" : "Pending Onboarding"}
                  </Badge>
                  {userData.bio && !isEditing && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-100 mb-2">
                        Bio
                      </h3>
                      <p className="text-gray-400">{userData.bio}</p>
                    </div>
                  )}
                </div>
              </div>
              {isEditing && (
                <div className="mt-8 space-y-4">
                  {/* <div>
                    <Label htmlFor="bio" className="text-gray-300">
                      Bio
                    </Label>
                    <Input
                      id="bio"
                      name="bio"
                      value={editedData.bio || ""}
                      onChange={handleInputChange}
                      className="mt-1 bg-gray-700 text-gray-100 border-gray-600"
                    />
                  </div> */}
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
                  {/* <div>
                    <Label htmlFor="personalWebsite" className="text-gray-300">
                      Personal Website
                    </Label>
                    <Input
                      id="personalWebsite"
                      name="personalWebsite"
                      value={editedData.personalWebsite || ""}
                      onChange={handleInputChange}
                      className="mt-1 bg-gray-700 text-gray-100 border-gray-600"
                    />
                  </div> */}
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
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {editedData.techStacks?.map((tech, index) => (
                      <Badge
                        variant="secondary"
                        className={
                          techStackBadge[
                            Math.floor(Math.random() * techStackBadge.length)
                          ]
                        }
                      >
                        {tech.name}
                        <X
                          className="w-3 h-3 cursor-pointer"
                          onClick={() => handleTechStackRemove(tech.id)}
                        />
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button
                      onClick={handleSave}
                      className="bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Save Changes
                    </Button>
                    <Button
                      onClick={handleCancel}
                      variant="outline"
                      className="bg-gray-700 text-gray-100 border-gray-600 hover:bg-gray-600"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {!isEditing && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProfileSection
                icon={<User className="w-5 h-5" />}
                title="Roles"
                content={
                  <div className="flex flex-wrap gap-2">
                    {userData.roles?.map((role) => (
                      <Badge
                        key={role}
                        variant="secondary"
                        className="bg-gray-700 text-gray-100 px-2 py-1 text-sm"
                      >
                        {role}
                      </Badge>
                    ))}
                  </div>
                }
              />

              <ProfileSection
                icon={<Code className="w-5 h-5" />}
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
                icon={<Briefcase className="w-5 h-5" />}
                title="Social Links"
                content={
                  <div className="space-y-2">
                    {userData.linkedinUrl && (
                      <a
                        href={userData.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      >
                        <LinkIcon className="w-4 h-4" />
                        LinkedIn Profile
                      </a>
                    )}
                    {userData.twitterHandle && (
                      <a
                        href={`https://twitter.com/${userData.twitterHandle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      >
                        <Twitter className="w-4 h-4" />@{userData.twitterHandle}
                      </a>
                    )}
                    {userData.personalWebsite && (
                      <a
                        href={userData.personalWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      >
                        <Globe className="w-4 h-4" />
                        Personal Website
                      </a>
                    )}
                  </div>
                }
              />

              <ProfileSection
                icon={<Calendar className="w-5 h-5" />}
                title="Activity Stats"
                content={
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Issues Created:</span>
                      <Badge
                        variant="outline"
                        className="bg-gray-700 text-gray-100 px-2 py-1"
                      >
                        {userData.issuesCreated?.length}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Issues Solved:</span>
                      <Badge
                        variant="outline"
                        className="bg-gray-700 text-gray-100 px-2 py-1"
                      >
                        {userData.issuesSolved?.length}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Repos Maintained:</span>
                      <Badge
                        variant="outline"
                        className="bg-gray-700 text-gray-100 px-2 py-1"
                      >
                        {userData.maintainedRepos?.length}
                      </Badge>
                    </div>
                  </div>
                }
              />

              {/* <ProfileSection
                icon={<CalendarDays className="w-5 h-5" />}
                title="Dates"
                content={
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Member Since:</span>
                      <span className="text-gray-100 font-medium">
                        {format(new Date(userData.createdAt), "MMMM dd, yyyy")}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Last Updated:</span>
                      <span className="text-gray-100 font-medium">
                        {format(new Date(userData.updatedAt), "MMMM dd, yyyy")}
                      </span>
                    </div>
                  </div>
                }
              /> */}
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
    <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 text-zinc-100">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2 text-gray-100">
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
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-blue-400" />
        <span className="text-lg font-medium text-gray-400">
          Loading profile...
        </span>
      </div>
    </div>
  );
}

function ErrorState({ error }: { error: string | null }) {
  return (
    <div className="min-h-screen bg-gray-900 p-8 flex items-center justify-center">
      <Alert
        variant="destructive"
        className="max-w-md bg-red-900 border-red-800"
      >
        <AlertCircle className="h-5 w-5" />
        <AlertDescription className="text-base text-red-100">
          {error || "Unable to load profile data"}
        </AlertDescription>
      </Alert>
    </div>
  );
}
