"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, LineChart, PieChart, Users, Heart, Download, Share, Eye, Zap } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-900"
      >
        Detailed Analytics
      </motion.h1>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200"
      >
        <div>
          <label htmlFor="platform">Platform</label>
          <Select>
            <SelectTrigger className="w-full mt-1">
              <SelectValue placeholder="Select Platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Platforms</SelectItem>
              <SelectItem value="instagram">Instagram</SelectItem>
              <SelectItem value="youtube">YouTube</SelectItem>
              <SelectItem value="tiktok">TikTok</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="time-range">Time Range</label>
          <Select>
            <SelectTrigger className="w-full mt-1">
              <SelectValue placeholder="Select Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 Days</SelectItem>
              <SelectItem value="30d">Last 30 Days</SelectItem>
              <SelectItem value="90d">Last 90 Days</SelectItem>
              <SelectItem value="ytd">Year to Date</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-end justify-end gap-2">
          <Button variant="outline">Reset</Button>
          <Button className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white">
            Apply
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <Card className="shadow-sm border border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Followers</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">520K</div>
            <p className="text-xs text-gray-500">+1.2% vs last period</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm border border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Engagement Rate</CardTitle>
            <Heart className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.7%</div>
            <p className="text-xs text-gray-500">+0.5% vs last period</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm border border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Impressions</CardTitle>
            <Eye className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2M</div>
            <p className="text-xs text-gray-500">+15% vs last period</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm border border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
            <Zap className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25K</div>
            <p className="text-xs text-gray-500">+10% vs last period</p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Charts & Stats */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Follower Growth Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-gray-500 border border-dashed rounded-md">
              <LineChart className="h-12 w-12 text-gray-300" />
              <p>Placeholder for Line Chart (Follower Growth)</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Engagement Rate Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-gray-500 border border-dashed rounded-md">
              <BarChart3 className="h-12 w-12 text-gray-300" />
              <p>Placeholder for Bar Chart (Engagement Rate)</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Platform-wise Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-gray-500 border border-dashed rounded-md">
              <PieChart className="h-12 w-12 text-gray-300" />
              <p>Placeholder for Pie Chart (Platform Distribution)</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Top-Performing Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-gray-500 border border-dashed rounded-md">
              <p>Placeholder for List of Top Posts</p>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex justify-end gap-4 mt-8"
      >
        <Button variant="outline" className="flex items-center gap-2 bg-transparent">
          <Download className="h-4 w-4" /> Download Report
        </Button>
        <Button className="bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white flex items-center gap-2">
          <Share className="h-4 w-4" /> Share with Brand
        </Button>
      </motion.div>
    </div>
  )
}
