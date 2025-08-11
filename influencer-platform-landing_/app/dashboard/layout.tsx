import type React from "react"
import { Sidebar } from "@/components/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8 pt-20 lg:ml-64">
        {" "}
        {/* Adjust pt for fixed header */}
        {children}
      </main>
    </div>
  )
}
