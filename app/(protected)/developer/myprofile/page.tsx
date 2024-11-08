"use client"

import { useEffect, useState } from "react"
import { format } from "date-fns"
import axios from "axios"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  CalendarDays,
  Mail,
  User,
  Github,
  Calendar,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react"

interface UserData {
  id: string
  name: string
  email: string
  image: string
  githubUsername: string | null
  roles: string[]
  onboarded: boolean
  createdAt: string
  updatedAt: string
}

export default function UserProfilePage() {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get<UserData>("/api/user")
        setUserData(response.data)
      } catch (err) {
        setError("Failed to load user profile")
        console.error("Error fetching user data:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [])

  if (loading) {
    return <LoadingState />
  }

  if (error || !userData) {
    return <ErrorState error={error} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 sm:p-8 animate-fade-in">
      <Card className="max-w-4xl mx-auto border-none shadow-lg">
        <CardHeader className="pb-0">
          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Avatar className="w-24 h-24 border-4 border-white shadow-lg transition-transform hover:scale-105">
                <AvatarImage src={userData.image} alt={userData.name} />
                <AvatarFallback>
                  {userData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left">
                <CardTitle className="text-3xl font-bold text-gray-900">
                  {userData.name}
                </CardTitle>
                <div className="flex items-center gap-2 text-gray-500 mt-1">
                  <Mail className="w-4 h-4" />
                  <span>{userData.email}</span>
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-0">
              {userData.onboarded ? (
                <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                  <CheckCircle2 className="w-4 h-4 mr-1" />
                  Onboarded
                </Badge>
              ) : (
                <Button variant="outline" size="sm" className="animate-pulse">
                  Complete Onboarding
                </Button>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProfileSection
              icon={<User className="w-4 h-4" />}
              title="Roles"
              content={
                <div className="flex flex-wrap gap-2">
                  {userData.roles.map((role) => (
                    <Badge
                      key={role}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                    >
                      {role}
                    </Badge>
                  ))}
                </div>
              }
            />

            <ProfileSection
              icon={<Github className="w-4 h-4" />}
              title="GitHub"
              content={
                userData.githubUsername ? (
                  <a
                    href={`https://github.com/${userData.githubUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {userData.githubUsername}
                  </a>
                ) : (
                  <span className="text-gray-500">Not connected</span>
                )
              }
            />

            <ProfileSection
              icon={<Calendar className="w-4 h-4" />}
              title="Member Since"
              content={format(new Date(userData.createdAt), "MMMM dd, yyyy")}
            />

            <ProfileSection
              icon={<CalendarDays className="w-4 h-4" />}
              title="Last Updated"
              content={format(new Date(userData.updatedAt), "MMMM dd, yyyy")}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ProfileSection({ icon, title, content }: { icon: React.ReactNode; title: string; content: React.ReactNode }) {
  return (
    <div className="space-y-2 transition-all hover:bg-gray-50 p-3 rounded-lg">
      <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
        {icon}
        <span>{title}</span>
      </div>
      <div className="text-gray-800">{content}</div>
    </div>
  )
}

function LoadingState() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        <span className="text-lg font-medium text-gray-600">Loading profile...</span>
      </div>
    </div>
  )
}

function ErrorState({ error }: { error: string | null }) {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
      <Alert variant="destructive" className="max-w-md">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{error || "Unable to load profile data"}</AlertDescription>
      </Alert>
    </div>
  )
}