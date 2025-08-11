"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { User, Lock, Bell, Shield, LogOut } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-900"
      >
        Settings
      </motion.h1>

      {/* Account Info */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <User className="h-5 w-5 text-purple-600" /> Account Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue="jane.doe@example.com" readOnly className="mt-1" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" defaultValue="+1 (555) 987-6543" readOnly className="mt-1" />
            </div>
            <Button variant="outline">Edit Account Info</Button>
          </CardContent>
        </Card>
      </motion.section>

      {/* Password Management */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <Lock className="h-5 w-5 text-orange-600" /> Password Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" placeholder="••••••••" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" placeholder="••••••••" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" placeholder="••••••••" className="mt-1" />
            </div>
            <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white">
              Change Password
            </Button>
          </CardContent>
        </Card>
      </motion.section>

      {/* Notifications Preferences */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <Bell className="h-5 w-5 text-teal-600" /> Notifications Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <Switch id="email-notifications" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="app-notifications">In-App Notifications</Label>
              <Switch id="app-notifications" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="campaign-updates">Campaign Updates</Label>
              <Switch id="campaign-updates" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="payment-alerts">Payment Alerts</Label>
              <Switch id="payment-alerts" defaultChecked />
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Privacy Settings */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" /> Privacy Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="profile-visibility">Public Profile Visibility</Label>
              <Switch id="profile-visibility" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="data-sharing">Allow Data Sharing for Insights</Label>
              <Switch id="data-sharing" />
            </div>
            <Separator />
            <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent">
              Delete Account
            </Button>
          </CardContent>
        </Card>
      </motion.section>

      {/* Logout */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card className="shadow-sm border border-gray-200">
          <CardContent className="p-6 flex justify-center">
            <Button className="w-full max-w-xs bg-gray-800 hover:bg-gray-900 text-white flex items-center gap-2">
              <LogOut className="h-4 w-4" /> Logout
            </Button>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}
