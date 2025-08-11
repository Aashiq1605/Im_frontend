"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DollarSign, Banknote, CreditCard, Wallet } from "lucide-react"

export default function EarningsPage() {
  const paymentHistory = [
    { id: 1, date: "2025-07-25", description: "Summer Fashion Collab", amount: "$1,500", status: "Cleared" },
    { id: 2, date: "2025-07-10", description: "Tech Gadget Review", amount: "$500", status: "Cleared" },
    { id: 3, date: "2025-06-30", description: "Healthy Meal Prep Series", amount: "$800", status: "Pending" },
    { id: 4, date: "2025-06-15", description: "Travel Vlog", amount: "$2,000", status: "Cleared" },
    { id: 5, date: "2025-05-20", description: "Gaming Headset Unboxing", amount: "$750", status: "Cleared" },
  ]

  return (
    <div className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-900"
      >
        Earnings & Payments
      </motion.h1>

      {/* Earnings Summary */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card className="shadow-sm border border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings (Lifetime)</CardTitle>
            <DollarSign className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">$15,450</div>
          </CardContent>
        </Card>
        <Card className="shadow-sm border border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Cycle Earnings</CardTitle>
            <Banknote className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">$1,200</div>
          </CardContent>
        </Card>
        <Card className="shadow-sm border border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Withdrawable Amount</CardTitle>
            <Wallet className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">$850</div>
            <Button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white">
              Withdraw Funds
            </Button>
          </CardContent>
        </Card>
      </motion.section>

      {/* Payment History */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paymentHistory.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>{payment.description}</TableCell>
                    <TableCell className="font-medium">{payment.amount}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          payment.status === "Cleared" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {payment.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.section>

      {/* Withdraw Method Management */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Withdraw Method Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between border border-gray-100 p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <CreditCard className="h-6 w-6 text-blue-500" />
                <div>
                  <p className="font-medium">UPI ID</p>
                  <p className="text-sm text-gray-600">yourname@bank</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </div>
            <div className="flex items-center justify-between border border-gray-100 p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <Banknote className="h-6 w-6 text-green-500" />
                <div>
                  <p className="font-medium">Bank Account</p>
                  <p className="text-sm text-gray-600">**** **** 1234</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </div>
            <Button variant="outline" className="w-full bg-transparent">
              Add New Method
            </Button>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}
