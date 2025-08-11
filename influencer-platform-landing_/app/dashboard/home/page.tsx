"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign, TrendingUp, Users, Zap, Bell, Eye, MessageSquare, Compass } from "lucide-react"

export default function HomePage() {
  return (
    <div className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-900"
      >
        Welcome to Your Dashboard
      </motion.h1>

      {/* Main Analytics Overview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <Card className="shadow-sm border border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Impressions This Month</CardTitle>
            <Eye className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2M</div>
            <p className="text-xs text-gray-500">+15% from last month</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm border border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.7%</div>
            <p className="text-xs text-gray-500">+0.5% from last month</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm border border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Follower Growth</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+5,200</div>
            <p className="text-xs text-gray-500">Across all platforms</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm border border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Click-Through Rate</CardTitle>
            <Zap className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.1%</div>
            <p className="text-xs text-gray-500">Avg. on tracked links</p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Earnings Overview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Earnings Overview</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-500">Total Earned</p>
              <p className="text-2xl font-bold text-green-600">$15,450</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending Payments</p>
              <p className="text-2xl font-bold text-orange-600">$1,200</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Withdrawable Amount</p>
              <p className="text-2xl font-bold text-purple-600">$850</p>
            </div>
            <div className="md:col-span-3">
              <Button className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white">
                Withdraw Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Campaign Performance Summary */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Campaign Performance Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Example Campaign Card */}
            <div className="border border-gray-100 rounded-lg p-4 flex items-center justify-between shadow-sm">
              <div>
                <h4 className="font-semibold text-gray-900">Summer Fashion Collab with BrandX</h4>
                <p className="text-sm text-gray-600">Status: Active</p>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
            <div className="border border-gray-100 rounded-lg p-4 flex items-center justify-between shadow-sm">
              <div>
                <h4 className="font-semibold text-gray-900">Tech Gadget Review for InnovateCo</h4>
                <p className="text-sm text-gray-600">Status: Completed</p>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Notifications/Alerts & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="shadow-sm border border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Notifications & Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <Bell className="h-5 w-5 text-orange-500" />
                <span>New campaign invite from **EcoLiving Brand**!</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <DollarSign className="h-5 w-5 text-green-500" />
                <span>Payment for **Fitness Challenge** campaign cleared.</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Zap className="h-5 w-5 text-purple-500" />
                <span>Tip: Complete your profile for more matches!</span>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="shadow-sm border border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <Compass className="h-4 w-4" /> View Campaigns
              </Button>
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <Users className="h-4 w-4" /> Update Profile
              </Button>
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <Zap className="h-4 w-4" /> Connect Account
              </Button>
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <MessageSquare className="h-4 w-4" /> Message Brand
              </Button>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}
