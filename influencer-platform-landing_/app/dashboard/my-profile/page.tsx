"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Instagram, Youtube, Twitter, Linkedin, Edit, Eye } from "lucide-react"

export default function MyProfilePage() {
  const profile = {
    fullName: "Jane Doe",
    email: "jane.doe@example.com",
    phoneNumber: "+1 (555) 987-6543",
    username: "janedoe_influencer",
    profilePicture: "/placeholder.svg?height=100&width=100",
    city: "Los Angeles",
    state: "CA",
    country: "USA",
    languages: "English, Spanish",
    categories: ["Fashion", "Lifestyle", "Travel"],
    bio: "Passionate content creator focusing on sustainable fashion, mindful living, and exploring hidden gems around the world.",
    followerCount: {
      instagram: "250K",
      youtube: "120K",
      tiktok: "500K",
    },
    platformConnections: {
      instagram: true,
      youtube: true,
      twitter: false,
      linkedin: true,
    },
    profileCompletion: 80,
  }

  return (
    <div className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-900"
      >
        My Profile
      </motion.h1>

      {/* Profile Overview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        <Card className="lg:col-span-1 shadow-sm border border-gray-200">
          <CardContent className="flex flex-col items-center p-6">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src={profile.profilePicture || "/placeholder.svg"} alt={profile.fullName} />
              <AvatarFallback>{profile.fullName.charAt(0)}</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold text-gray-900">{profile.fullName}</h2>
            <p className="text-gray-600">@{profile.username}</p>
            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1 bg-transparent">
                <Edit className="h-4 w-4" /> Edit Profile
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1 bg-transparent">
                <Eye className="h-4 w-4" /> Preview Public Profile
              </Button>
            </div>
            <div className="w-full mt-6">
              <Label className="text-sm font-medium">Profile Completion</Label>
              <Progress value={profile.profileCompletion} className="w-full mt-2" />
              <p className="text-xs text-gray-500 text-right mt-1">{profile.profileCompletion}% Complete</p>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label>Full Name</Label>
              <Input value={profile.fullName} readOnly />
            </div>
            <div className="space-y-1">
              <Label>Email</Label>
              <Input value={profile.email} readOnly />
            </div>
            <div className="space-y-1">
              <Label>Phone Number</Label>
              <Input value={profile.phoneNumber} readOnly />
            </div>
            <div className="space-y-1">
              <Label>Username</Label>
              <Input value={profile.username} readOnly />
            </div>
            <div className="space-y-1">
              <Label>Location</Label>
              <Input value={`${profile.city}, ${profile.state}, ${profile.country}`} readOnly />
            </div>
            <div className="space-y-1">
              <Label>Languages Spoken</Label>
              <Input value={profile.languages} readOnly />
            </div>
            <div className="space-y-1 md:col-span-2">
              <Label>Categories/Niches</Label>
              <div className="flex flex-wrap gap-2">
                {profile.categories.map((cat) => (
                  <span key={cat} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-1 md:col-span-2">
              <Label>Bio</Label>
              <Textarea value={profile.bio} readOnly className="min-h-[80px]" />
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Platform Connections */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Social Platform Connections</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "Instagram",
                icon: Instagram,
                connected: profile.platformConnections.instagram,
                followers: profile.followerCount.instagram,
                color: "text-purple-600",
              },
              {
                name: "YouTube",
                icon: Youtube,
                connected: profile.platformConnections.youtube,
                followers: profile.followerCount.youtube,
                color: "text-red-600",
              },
              {
                name: "Twitter",
                icon: Twitter,
                connected: profile.platformConnections.twitter,
                followers: "N/A",
                color: "text-blue-400",
              },
              {
                name: "LinkedIn",
                icon: Linkedin,
                connected: profile.platformConnections.linkedin,
                followers: "N/A",
                color: "text-blue-600",
              },
            ].map((platform, index) => (
              <div key={index} className="flex items-center justify-between border border-gray-100 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <platform.icon className={`h-6 w-6 ${platform.color}`} />
                  <div>
                    <p className="font-medium">{platform.name}</p>
                    <p className="text-sm text-gray-600">
                      {platform.connected ? (
                        <span className="text-green-600">Connected</span>
                      ) : (
                        <span className="text-orange-600">Not Connected</span>
                      )}
                      {platform.followers && ` • ${platform.followers} Followers`}
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  {platform.connected ? "Reconnect" : "Connect"}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}
