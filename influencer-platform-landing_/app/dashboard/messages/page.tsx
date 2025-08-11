"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Send, Paperclip, Smile } from "lucide-react"

export default function MessagesPage() {
  const conversations = [
    {
      id: 1,
      name: "BrandX Marketing",
      lastMessage: "Thanks for the draft! Looks great.",
      time: "2m ago",
      avatar: "/placeholder.svg?height=40&width=40",
      unread: true,
      messages: [
        { sender: "BrandX Marketing", text: "Hi! Just checking in on the campaign progress.", time: "10:00 AM" },
        { sender: "You", text: "Hey! Draft content is ready for review. I've sent it via email.", time: "10:05 AM" },
        { sender: "BrandX Marketing", text: "Thanks for the draft! Looks great.", time: "10:07 AM" },
      ],
    },
    {
      id: 2,
      name: "FitLife Agency",
      lastMessage: "We're excited to start!",
      time: "1h ago",
      avatar: "/placeholder.svg?height=40&width=40",
      unread: false,
      messages: [
        { sender: "FitLife Agency", text: "Hello! We'd like to discuss a new fitness campaign.", time: "9:00 AM" },
        { sender: "You", text: "Sounds great! What are you looking for?", time: "9:05 AM" },
        { sender: "FitLife Agency", text: "We're excited to start!", time: "9:10 AM" },
      ],
    },
    {
      id: 3,
      name: "InnovateCo",
      lastMessage: "Payment processed successfully.",
      time: "Yesterday",
      avatar: "/placeholder.svg?height=40&width=40",
      unread: false,
      messages: [
        {
          sender: "InnovateCo",
          text: "Your payment for the gadget review has been processed.",
          time: "Yesterday 3:00 PM",
        },
        { sender: "You", text: "Awesome, thanks!", time: "Yesterday 3:05 PM" },
      ],
    },
  ]

  const activeConversation = conversations[0] // For demonstration, set the first conversation as active

  return (
    <div className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-900"
      >
        Messages
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]"
      >
        {/* Conversations List */}
        <Card className="shadow-sm border border-gray-200 flex flex-col">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl font-semibold">Conversations</CardTitle>
            <div className="relative mt-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input placeholder="Search conversations" className="pl-9" />
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-0">
            <ScrollArea className="h-full">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  className={`flex items-center gap-3 p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                    conv.id === activeConversation.id ? "bg-gray-100" : ""
                  }`}
                >
                  <Avatar>
                    <AvatarImage src={conv.avatar || "/placeholder.svg"} alt={conv.name} />
                    <AvatarFallback>{conv.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <p className="font-medium text-gray-900">{conv.name}</p>
                      <span className="text-xs text-gray-500">{conv.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                  </div>
                  {conv.unread && (
                    <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" aria-label="Unread messages" />
                  )}
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Message Thread */}
        <Card className="shadow-sm border border-gray-200 lg:col-span-2 flex flex-col">
          <CardHeader className="pb-3 border-b border-gray-200">
            <CardTitle className="text-xl font-semibold flex items-center gap-3">
              <Avatar>
                <AvatarImage src={activeConversation.avatar || "/placeholder.svg"} alt={activeConversation.name} />
                <AvatarFallback>{activeConversation.name.charAt(0)}</AvatarFallback>
              </Avatar>
              {activeConversation.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 p-6 flex flex-col justify-end">
            <ScrollArea className="flex-1 pr-4">
              <div className="space-y-4">
                {activeConversation.messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[70%] p-3 rounded-lg ${
                        msg.sender === "You"
                          ? "bg-purple-600 text-white rounded-br-none"
                          : "bg-gray-100 text-gray-800 rounded-bl-none"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <span className="block text-right text-xs mt-1 opacity-80">
                        {msg.sender === "You" ? "You" : msg.sender} - {msg.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="mt-6 flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-purple-600">
                <Paperclip className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-purple-600">
                <Smile className="h-5 w-5" />
              </Button>
              <Textarea
                placeholder="Type your message..."
                className="flex-1 resize-none min-h-[40px] max-h-[120px] border-gray-300 focus:border-purple-500"
              />
              <Button
                size="icon"
                className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
