"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target } from "lucide-react"

export default function SelectRolePage() {
  const searchParams = useSearchParams()
  const action = searchParams.get("action") || "signup" // Default to signup if no action is specified

  const title = action === "signup" ? "Join as a..." : "Login as a..."
  const description =
    action === "signup"
      ? "Choose your role to create your InfluenceHub account."
      : "Select your role to access your InfluenceHub account."

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-lg text-gray-600">{description}</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.03, y: -5 }}
        >
          <Card className="h-full p-6 border border-gray-200 shadow-lg flex flex-col items-center text-center">
            <CardContent className="p-0 flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 shadow-md">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Brand / Agency</h2>
              <p className="text-gray-600 mb-6">Manage campaigns, discover influencers, and track ROI.</p>
              <Link href={`/${action}/brand`} passHref className="w-full">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                  {action === "signup" ? "Join as Brand" : "Login as Brand"}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.03, y: -5 }}
        >
          <Card className="h-full p-6 border border-gray-200 shadow-lg flex flex-col items-center text-center">
            <CardContent className="p-0 flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-orange-500 rounded-full flex items-center justify-center mb-4 shadow-md">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Influencer</h2>
              <p className="text-gray-600 mb-6">Connect with brands, monetize your content, and grow your audience.</p>
              <Link href={`/${action}/influencer`} passHref className="w-full">
                <Button className="w-full bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white">
                  {action === "signup" ? "Join as Influencer" : "Login as Influencer"}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
