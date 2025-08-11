"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { DollarSign, Calendar, Tag, Briefcase } from "lucide-react"

export default function ExploreCampaignsPage() {
  const campaigns = [
    {
      id: 1,
      brandLogo: "/placeholder.svg?height=40&width=40",
      title: "Sustainable Fashion Collection Launch",
      budget: "$1,500 - $3,000",
      dueDate: "2025-09-15",
      platform: "Instagram",
      category: "Fashion",
      type: "Paid",
    },
    {
      id: 2,
      brandLogo: "/placeholder.svg?height=40&width=40",
      title: "New Tech Gadget Review",
      budget: "Barter",
      dueDate: "2025-08-30",
      platform: "YouTube",
      category: "Tech",
      type: "Barter",
    },
    {
      id: 3,
      brandLogo: "/placeholder.svg?height=40&width=40",
      title: "Healthy Meal Prep Series",
      budget: "$800 - $1,500",
      dueDate: "2025-09-20",
      platform: "TikTok",
      category: "Food",
      type: "Paid",
    },
    {
      id: 4,
      brandLogo: "/placeholder.svg?height=40&width=40",
      title: "Travel Vlog for Adventure Tourism",
      budget: "$2,000 - $4,000",
      dueDate: "2025-10-05",
      platform: "YouTube",
      category: "Travel",
      type: "Paid",
    },
  ]

  return (
    <div className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-900"
      >
        Explore Campaigns
      </motion.h1>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200"
      >
        <div>
          <Label htmlFor="search">Search Campaigns</Label>
          <Input id="search" placeholder="Search by title or brand" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="platform">Platform</Label>
          <Select>
            <SelectTrigger className="w-full mt-1">
              <SelectValue placeholder="Select Platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="instagram">Instagram</SelectItem>
              <SelectItem value="youtube">YouTube</SelectItem>
              <SelectItem value="tiktok">TikTok</SelectItem>
              <SelectItem value="twitter">Twitter</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="category">Category</Label>
          <Select>
            <SelectTrigger className="w-full mt-1">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="fashion">Fashion</SelectItem>
              <SelectItem value="tech">Tech</SelectItem>
              <SelectItem value="food">Food</SelectItem>
              <SelectItem value="travel">Travel</SelectItem>
              <SelectItem value="gaming">Gaming</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="budget">Budget Range</Label>
          <Select>
            <SelectTrigger className="w-full mt-1">
              <SelectValue placeholder="Select Budget" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="barter">Barter</SelectItem>
              <SelectItem value="500-1000">$500 - $1,000</SelectItem>
              <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
              <SelectItem value="2000+">$2,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="collaboration-type">Collaboration Type</Label>
          <Select>
            <SelectTrigger className="w-full mt-1">
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="barter">Barter</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="deadline">Deadline</Label>
          <Input id="deadline" type="date" className="mt-1" />
        </div>
        <div className="lg:col-span-2 flex items-end justify-end gap-2">
          <Button variant="outline">Reset Filters</Button>
          <Button className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white">
            Apply Filters
          </Button>
        </div>
      </motion.div>

      {/* Campaign Listings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Available Campaigns ({campaigns.length})</h2>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevant">Most Relevant</SelectItem>
              <SelectItem value="highest-paying">Highest Paying</SelectItem>
              <SelectItem value="deadline-soon">Deadline Soon</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.05 * campaign.id }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="shadow-md border border-gray-200 h-full flex flex-col">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={campaign.brandLogo || "/placeholder.svg"}
                      alt="Brand Logo"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <h3 className="text-lg font-semibold text-gray-900">{campaign.title}</h3>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600 flex-1">
                    <p className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-500" /> Budget: {campaign.budget}
                    </p>
                    <p className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-orange-500" /> Due Date: {campaign.dueDate}
                    </p>
                    <p className="flex items-center gap-2">
                      <Tag className="h-4 w-4 text-purple-500" /> Category: {campaign.category}
                    </p>
                    <p className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-teal-500" /> Type: {campaign.type}
                    </p>
                  </div>
                  <div className="mt-6 flex gap-2">
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Campaign Brief
                    </Button>
                    <Button className="flex-1 bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white">
                      Apply
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
