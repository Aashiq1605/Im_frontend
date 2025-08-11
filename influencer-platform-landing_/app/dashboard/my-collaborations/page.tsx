"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LinkIcon, MessageSquare, CheckCircle, Clock, FileText } from "lucide-react"

export default function MyCollaborationsPage() {
  const collaborations = {
    ongoing: [
      {
        id: 1,
        title: "Summer Fashion Collab with BrandX",
        brand: "BrandX",
        status: "Content Creation",
        submissionLink: "https://example.com/my-draft",
        timeline: [
          { step: "Brief Received", date: "2025-07-01", completed: true },
          { step: "Content Draft Submitted", date: "2025-07-10", completed: true },
          { step: "Brand Review", date: "2025-07-12", completed: false },
          { step: "Content Approved", date: null, completed: false },
          { step: "Go Live", date: null, completed: false },
        ],
      },
      {
        id: 2,
        title: "Fitness Challenge with FitLife",
        brand: "FitLife",
        status: "Awaiting Brief",
        submissionLink: null,
        timeline: [{ step: "Brief Received", date: "2025-07-20", completed: false }],
      },
    ],
    submitted: [
      {
        id: 3,
        title: "Eco-Friendly Product Review",
        brand: "GreenGoods",
        status: "In Review",
        submissionLink: "https://example.com/eco-review",
        timeline: [
          { step: "Brief Received", date: "2025-06-01", completed: true },
          { step: "Content Draft Submitted", date: "2025-06-10", completed: true },
          { step: "Brand Review", date: "2025-06-12", completed: false },
        ],
      },
    ],
    approved: [
      {
        id: 4,
        title: "Travel Guide for Wanderlust Tours",
        brand: "Wanderlust Tours",
        status: "Approved - Ready to Go Live",
        submissionLink: "https://example.com/travel-guide",
        timeline: [
          { step: "Brief Received", date: "2025-05-01", completed: true },
          { step: "Content Draft Submitted", date: "2025-05-10", completed: true },
          { step: "Brand Review", date: "2025-05-12", completed: true },
          { step: "Content Approved", date: "2025-05-15", completed: true },
        ],
      },
    ],
    completed: [
      {
        id: 5,
        title: "Gaming Headset Unboxing",
        brand: "GameTech",
        status: "Payment Pending",
        submissionLink: "https://youtube.com/gametech-unboxing",
        timeline: [
          { step: "Brief Received", date: "2025-04-01", completed: true },
          { step: "Content Draft Submitted", date: "2025-04-05", completed: true },
          { step: "Brand Review", date: "2025-04-07", completed: true },
          { step: "Content Approved", date: "2025-04-10", completed: true },
          { step: "Go Live", date: "2025-04-12", completed: true },
          { step: "Payment Processed", date: null, completed: false },
        ],
      },
    ],
    rejected: [
      {
        id: 6,
        title: "Skincare Routine Video",
        brand: "GlowUp Cosmetics",
        status: "Rejected - Needs Revision",
        submissionLink: "https://example.com/skincare-draft",
        timeline: [
          { step: "Brief Received", date: "2025-03-01", completed: true },
          { step: "Content Draft Submitted", date: "2025-03-05", completed: true },
          { step: "Brand Review", date: "2025-03-07", completed: true },
          { step: "Content Rejected", date: "2025-03-08", completed: true },
        ],
      },
    ],
  }

  return (
    <div className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-900"
      >
        My Collaborations
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Tabs defaultValue="ongoing" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
            <TabsTrigger value="submitted">Submitted</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
          </TabsList>

          {Object.entries(collaborations).map(([key, campaignList]) => (
            <TabsContent key={key} value={key} className="mt-6">
              {campaignList.length === 0 ? (
                <p className="text-center text-gray-600 py-8">No {key} collaborations found.</p>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {campaignList.map((campaign) => (
                    <motion.div
                      key={campaign.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.05 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <Card className="shadow-md border border-gray-200 h-full flex flex-col">
                        <CardHeader>
                          <CardTitle className="text-xl font-semibold">
                            {campaign.title} <span className="text-gray-500 text-base">by {campaign.brand}</span>
                          </CardTitle>
                          <p className="text-sm text-gray-600">Status: {campaign.status}</p>
                        </CardHeader>
                        <CardContent className="flex-1 space-y-4">
                          {campaign.submissionLink && (
                            <p className="flex items-center gap-2 text-sm text-gray-700">
                              <LinkIcon className="h-4 w-4 text-blue-500" />
                              Submission:{" "}
                              <a
                                href={campaign.submissionLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                              >
                                View Link
                              </a>
                            </p>
                          )}
                          <h4 className="font-semibold text-gray-800">Timeline:</h4>
                          <ul className="space-y-2 text-sm">
                            {campaign.timeline.map((step, index) => (
                              <li key={index} className="flex items-center gap-2">
                                {step.completed ? (
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                ) : (
                                  <Clock className="h-4 w-4 text-gray-400" />
                                )}
                                <span>
                                  {step.step} {step.date && `(${step.date})`}
                                </span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex gap-2 mt-4">
                            <Button variant="outline" className="flex-1 bg-transparent">
                              <MessageSquare className="h-4 w-4 mr-2" /> Message Brand
                            </Button>
                            {key === "ongoing" && (
                              <Button className="flex-1 bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white">
                                <FileText className="h-4 w-4 mr-2" /> Submit Content
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </div>
  )
}
