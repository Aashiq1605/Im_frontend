"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Home, Compass, Handshake, DollarSign, BarChart3, MessageSquare, LifeBuoy, Settings, Users } from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/dashboard/home", icon: Home },
    { name: "Explore Campaigns", href: "/dashboard/explore-campaigns", icon: Compass },
    { name: "My Collaborations", href: "/dashboard/my-collaborations", icon: Handshake },
    { name: "Earnings", href: "/dashboard/earnings", icon: DollarSign },
    { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
    { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
    { name: "My Profile", href: "/dashboard/my-profile", icon: Users },
    { name: "Support", href: "/dashboard/support", icon: LifeBuoy },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ]

  return (
    <motion.aside
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 shadow-lg flex flex-col pt-4 pb-8 overflow-y-auto lg:flex"
    >
      <div className="px-6 mb-8">
        <Link href="/dashboard/home" className="flex items-center gap-2 font-semibold">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            InfluenceHub
          </h1>
        </Link>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} passHref>
            <motion.div
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-gray-100 hover:text-purple-600 ${
                pathname === item.href ? "bg-purple-50 text-purple-700 font-medium" : ""
              }`}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </motion.div>
          </Link>
        ))}
      </nav>
    </motion.aside>
  )
}
