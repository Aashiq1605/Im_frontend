"use client"

import { Label } from "@/components/ui/label"

import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import {
  BarChart3,
  Users,
  TrendingUp,
  Zap,
  Target,
  Heart,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
  Play,
  Wifi,
} from "lucide-react"

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-orange-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, duration: 0.2 }}
            >
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                  InfluenceHub
                </h1>
              </div>
            </motion.div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {["Features", "How it Works", "Contact"].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors relative"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                  >
                    {item}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-orange-500"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
                <Link href="/select-role?action=login" passHref>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                  >
                    <Button
                      variant="outline"
                      className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 shadow-lg bg-transparent"
                    >
                      Login
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/select-role?action=signup" passHref>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.3 }}
                  >
                    <Button className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white shadow-lg">
                      Get Started
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Roles Section */}
      <RolesSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8 relative"
          >
            <div className="space-y-4">
              <motion.h1
                className="text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                  Connect.
                </span>
                <br />
                <motion.span
                  className="text-gray-800 inline-block"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Create.
                </motion.span>
                <br />
                <motion.span
                  className="text-gray-800 inline-block"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  Collaborate.
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                The ultimate platform bridging brands, agencies, and influencers. Transform your marketing campaigns
                with powerful analytics, seamless collaboration, and data-driven insights.
              </motion.p>
            </div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              {[
                "Real-time analytics and insights",
                "Seamless brand-influencer matching",
                "Campaign performance tracking",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <div className={`w-2 h-2 ${index % 2 === 0 ? "bg-purple-500" : "bg-orange-500"} rounded-full`} />
                  <span className="text-gray-700">{text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.4 }}
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white px-8 py-3 shadow-lg"
                >
                  <span className="flex items-center gap-2">
                    Start Your Campaign
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 bg-white shadow-lg"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Mobile */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative flex justify-center"
          >
            <MobileIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MobileIllustration() {
  return (
    <div className="relative">
      {/* Mobile Frame */}
      <motion.div
        className="relative w-80 h-[600px] bg-white rounded-[3rem] p-2 shadow-2xl z-10 border-4 border-gray-200"
        initial={{ rotateY: 10, rotateX: 5 }}
        animate={{ rotateY: 0, rotateX: 0 }}
        transition={{ duration: 1, delay: 1 }}
        whileHover={{ rotateY: 5, rotateX: 2, transition: { duration: 0.3 } }}
      >
        {/* Screen */}
        <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-[2.5rem] overflow-hidden relative border-2 border-gray-100">
          {/* Status Bar */}
          <div className="h-8 bg-gray-100 flex items-center justify-between px-6 text-xs text-gray-700 border-b border-gray-200">
            <span>9:41</span>
            <div className="flex space-x-1">
              <Wifi className="w-4 h-4 text-gray-600" />
              <div className="w-4 h-2 bg-gray-600 rounded-sm" />
            </div>
          </div>

          {/* App Content */}
          <div className="p-4 space-y-4">
            {/* Header */}
            <div className="text-center py-4 relative">
              <h3 className="text-lg font-bold text-gray-900">InfluenceHub</h3>
              <p className="text-sm text-gray-500">Dashboard</p>
            </div>

            {/* Influencer Avatar */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2">
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-3">
              <motion.div
                className="bg-white rounded-xl p-3 text-center border border-gray-200 shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <TrendingUp className="w-6 h-6 text-orange-500 mx-auto mb-1" />
                <div className="text-lg font-bold text-gray-900">2.5M</div>
                <div className="text-xs text-gray-500">Reach</div>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-3 text-center border border-gray-200 shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <BarChart3 className="w-6 h-6 text-purple-500 mx-auto mb-1" />
                <div className="text-lg font-bold text-gray-900">8.2%</div>
                <div className="text-xs text-gray-500">Engagement</div>
              </motion.div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 py-4">
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.2 }}>
                <Instagram className="w-6 h-6 text-orange-500" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: -5 }} transition={{ duration: 0.2 }}>
                <Twitter className="w-6 h-6 text-blue-400" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.2 }}>
                <Linkedin className="w-6 h-6 text-blue-600" />
              </motion.div>
            </div>

            {/* Progress Bars */}
            <div className="space-y-2">
              {["Engagement", "Reach", "Conversion"].map((metric, index) => (
                <div key={metric} className="bg-gray-200 rounded-full h-2 overflow-hidden border border-gray-300">
                  <motion.div
                    className={`h-full ${
                      index === 0
                        ? "bg-gradient-to-r from-purple-400 to-purple-600"
                        : index === 1
                          ? "bg-gradient-to-r from-orange-400 to-orange-600"
                          : "bg-gradient-to-r from-teal-400 to-teal-600"
                    }`}
                    initial={{ width: "0%" }}
                    animate={{ width: `${70 + index * 10}%` }}
                    transition={{ duration: 1.5, delay: 2 + index * 0.3 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get deep insights into campaign performance with real-time analytics and comprehensive reporting.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-white",
    },
    {
      icon: Users,
      title: "Smart Matching",
      description: "AI-powered algorithm matches brands with the perfect influencers based on audience and engagement.",
      color: "from-purple-500 to-teal-500", // Changed from pink
      bgColor: "bg-white",
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Monitor ROI, engagement rates, and conversion metrics across all your campaigns.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-white",
    },
    {
      icon: Zap,
      title: "Instant Collaboration",
      description: "Streamlined communication tools for seamless collaboration between brands and creators.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-white",
    },
    {
      icon: Target,
      title: "Audience Insights",
      description: "Understand your target audience better with detailed demographic and behavioral data.",
      color: "from-red-500 to-teal-500", // Changed from pink
      bgColor: "bg-white",
    },
    {
      icon: Heart,
      title: "Engagement Optimization",
      description: "Optimize content strategy based on engagement patterns and audience preferences.",
      color: "from-teal-500 to-emerald-500", // Changed from pink/rose
      bgColor: "bg-white",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              {" "}
              Modern Marketing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to run successful influencer marketing campaigns, from discovery to analytics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50, y: 50 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <Card
                className={`h-full hover:shadow-xl transition-all duration-300 border border-gray-200 ${feature.bgColor} shadow-lg`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mr-4 shadow-md`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RolesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="roles" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Built for Everyone in the
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              {" "}
              Influence Economy
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're a brand, agency, or influencer, our platform adapts to your unique needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Brands/Agencies */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.3 }}>
              <Card className="p-8 bg-white border border-gray-200 shadow-xl">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 shadow-lg"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Target className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">For Brands & Agencies</h3>
                      <p className="text-gray-600">Scale your influence marketing</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Discover Perfect Matches",
                        description: "Find influencers that align with your brand values and target audience",
                        color: "bg-blue-500",
                      },
                      {
                        title: "Campaign Management",
                        description: "Manage multiple campaigns with automated workflows and approvals",
                        color: "bg-purple-500",
                      },
                      {
                        title: "ROI Analytics",
                        description: "Track performance and measure return on investment in real-time",
                        color: "bg-blue-500",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ x: 10, transition: { duration: 0.2 } }}
                      >
                        <div className={`w-2 h-2 ${item.color} rounded-full mt-2`} />
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Influencers */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.3 }}>
              <Card className="p-8 bg-white border border-gray-200 shadow-xl">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-teal-500 to-orange-500 rounded-xl flex items-center justify-center mr-4 shadow-lg"
                      whileHover={{ rotate: -10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Users className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">For Influencers</h3>
                      <p className="text-gray-600">Monetize your influence</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Brand Partnerships",
                        description: "Connect with brands that match your niche and audience",
                        color: "bg-teal-500", // Changed from pink
                      },
                      {
                        title: "Content Analytics",
                        description: "Understand your audience better with detailed performance insights",
                        color: "bg-orange-500",
                      },
                      {
                        title: "Streamlined Payments",
                        description: "Get paid faster with automated invoicing and payment processing",
                        color: "bg-teal-500", // Changed from pink
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        whileHover={{ x: -10, transition: { duration: 0.2 } }}
                      >
                        <div className={`w-2 h-2 ${item.color} rounded-full mt-2`} />
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 to-gray-900"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Transform Your
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              {" "}
              Marketing?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team to learn how InfluenceHub can elevate your campaigns.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {["First Name", "Last Name"].map((label, index) => (
                      <div key={label}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
                        <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                          <Input
                            className="border-2 border-gray-300 focus:border-purple-500 transition-colors"
                            placeholder={index === 0 ? "John" : "Doe"}
                          />
                        </motion.div>
                      </div>
                    ))}
                  </div>

                  {["Email", "Company"].map((label) => (
                    <div key={label}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
                      <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                        <Input
                          type={label === "Email" ? "email" : "text"}
                          className="border-2 border-gray-300 focus:border-purple-500 transition-colors"
                          placeholder={label === "Email" ? "john@example.com" : "Your Company"}
                        />
                      </motion.div>
                    </div>
                  ))}

                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">Message</Label>
                    <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                      <Textarea
                        className="border-2 border-gray-300 min-h-[120px] focus:border-purple-500 transition-colors"
                        placeholder="Tell us about your project..."
                      />
                    </motion.div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white shadow-lg">
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                We're here to help you succeed. Whether you're a brand looking to scale your influence marketing or an
                influencer ready to monetize your audience, let's talk.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", info: "hello@influencehub.com", color: "from-blue-500 to-cyan-500" },
                { icon: Phone, title: "Phone", info: "+1 (555) 123-4567", color: "from-green-500 to-emerald-500" },
                { icon: MapPin, title: "Office", info: "San Francisco, CA", color: "from-purple-500 to-teal-500" }, // Changed from pink
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-br ${contact.color} rounded-lg flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <contact.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold">{contact.title}</h4>
                    <p className="text-gray-300">{contact.info}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-white font-semibold mb-4">Follow us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Twitter, color: "hover:bg-blue-500" },
                  { icon: Linkedin, color: "hover:bg-blue-600" },
                  { icon: Instagram, color: "hover:bg-teal-500" }, // Changed from pink
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className={`w-10 h-10 bg-gray-700 ${social.color} rounded-lg flex items-center justify-center transition-all duration-300 shadow-md`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
