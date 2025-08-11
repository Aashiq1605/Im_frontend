"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, HelpCircle, BookOpen, Mail, Send, ArrowRight } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-900"
      >
        Help & Support
      </motion.h1>

      {/* Submit a Ticket */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <Mail className="h-5 w-5 text-purple-600" /> Submit a Support Ticket
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="e.g., Payment Issue, Campaign Query" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger className="w-full mt-1">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="payment">Payment</SelectItem>
                    <SelectItem value="campaign">Campaigns</SelectItem>
                    <SelectItem value="profile">Profile & Account</SelectItem>
                    <SelectItem value="technical">Technical Issue</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your issue in detail..."
                  className="mt-1 min-h-[120px]"
                />
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white flex items-center gap-2">
                <Send className="h-4 w-4" /> Send Ticket
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.section>

      {/* Quick Resources */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-teal-600" /> Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-gray-700">
            <p className="hover:text-teal-700 cursor-pointer transition-colors">How do I withdraw my earnings?</p>
            <p className="hover:text-teal-700 cursor-pointer transition-colors">
              What are the campaign application requirements?
            </p>
            <p className="hover:text-teal-700 cursor-pointer transition-colors">
              How can I update my social media links?
            </p>
            <Button variant="link" className="p-0 h-auto text-teal-600 hover:text-teal-700">
              View All FAQs <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-orange-600" /> Guides & Tutorials
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-gray-700">
            <p className="hover:text-orange-700 cursor-pointer transition-colors">Getting Started with InfluenceHub</p>
            <p className="hover:text-orange-700 cursor-pointer transition-colors">Optimizing Your Profile for Brands</p>
            <p className="hover:text-orange-700 cursor-pointer transition-colors">Understanding Campaign Analytics</p>
            <Button variant="link" className="p-0 h-auto text-orange-600 hover:text-orange-700">
              Browse All Guides <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </CardContent>
        </Card>
      </motion.section>

      {/* Chatbot/Live Chat (Optional) */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-blue-600" /> Chat with Us
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700">
            <p className="mb-4">
              Need immediate assistance? Our chatbot can help with common queries, or connect you to a live agent during
              business hours.
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white flex items-center gap-2">
              <MessageSquare className="h-4 w-4" /> Start Chat
            </Button>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}
