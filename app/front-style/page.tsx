"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Ticket, 
  Sparkles, 
  Zap, 
  BarChart3, 
  Folder,
  ArrowUpDown,
  MoreHorizontal,
  Clock,
  Plus,
  Reply,
  Calendar,
  User,
  DollarSign,
  RotateCcw
} from "lucide-react"

export default function FrontStylePage() {
  const [activeTab, setActiveTab] = useState("shared-inbox")

  const features = [
    { id: "shared-inbox", label: "Shared Inbox", icon: Mail },
    { id: "ticketing", label: "Ticketing", icon: Ticket },
    { id: "ai-agent", label: "AI Agent", icon: Sparkles },
    { id: "automation", label: "Automation", icon: Zap },
    { id: "insights", label: "Insights", icon: BarChart3 },
  ]

  const conversations = [
    {
      id: 1,
      name: "Kim Thompson",
      subject: "Loyalty Discount?",
      preview: "Hi there, I was wondering if...",
      time: "NOW",
      status: "VIP",
      statusColor: "bg-green-500",
      isActive: true,
      hasNewActivity: true
    },
    {
      id: 2,
      name: "Lance Hodge",
      subject: "Change of address for order",
      preview: "Hi, I realized I accidentally...",
      time: "3h",
      status: "Urgent",
      statusColor: "bg-orange-500",
      isActive: false,
      hasNewActivity: false,
      count: 1
    },
    {
      id: 3,
      name: "Clara Baker",
      subject: "Can't pair to app",
      preview: "",
      time: "5h",
      status: "",
      statusColor: "",
      isActive: false,
      hasNewActivity: false
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/95">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="bg-white text-purple-600 px-2 py-1 rounded text-sm font-bold">
                Ally
              </div>
              <span className="text-2xl font-bold text-white">Ally</span>
            </div>
            
            <nav className="hidden md:flex gap-6">
              <a href="#" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                Product
              </a>
              <a href="#" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                Solutions
              </a>
              <a href="#" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                Resources
              </a>
              <a href="#" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                Pricing
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-white/80">
              Sign in
            </Button>
            <Button variant="outline" size="sm" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
              Request a demo
            </Button>
            <Button size="sm" className="bg-white text-purple-600 hover:bg-white/90">
              Try for free
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Your AI copilot to keep business on track.
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Powered by AI, built for people.
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Ally cuts the chaos by automating tasks, unifying data, and delivering instant AI insights — the smartest way to run your business.
          </p>
          
          <div className="flex flex-col items-center gap-4 mb-16">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg blur opacity-75"></div>
              <div className="relative bg-yellow-400 text-black px-6 py-2 rounded-lg font-bold text-sm">
                COMING SOON
              </div>
            </div>
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 text-lg px-8 py-3">
              Join Waitlist
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Tabs */}
      <section className="px-4 mb-12">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="flex gap-8 border-b border-gray-700">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTab(feature.id)}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                      activeTab === feature.id
                        ? "text-white border-b-2 border-purple-500"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {feature.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Application Mockup */}
      <section className="px-4 pb-20">
        <div className="container mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex h-[600px]">
              {/* Left Sidebar - Conversation List */}
              <div className="w-80 border-r border-gray-200 bg-gray-50">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Folder className="h-4 w-4 text-gray-600" />
                      <span className="font-medium text-gray-900">Open</span>
                    </div>
                    <div className="flex gap-2">
                      <ArrowUpDown className="h-4 w-4 text-gray-600" />
                      <MoreHorizontal className="h-4 w-4 text-gray-600" />
                    </div>
                  </div>
                </div>
                
                <div className="p-2">
                  {conversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        conversation.isActive ? "bg-blue-50 border border-blue-200" : "hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="font-medium text-gray-900 text-sm">
                            {conversation.name}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">{conversation.time}</span>
                      </div>
                      
                      <div className="text-sm text-gray-900 font-medium mb-1">
                        {conversation.subject}
                      </div>
                      
                      <div className="text-sm text-gray-600 mb-2">
                        {conversation.preview}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                          {conversation.status && (
                            <Badge 
                              className={`text-xs ${conversation.statusColor} text-white`}
                            >
                              {conversation.status}
                            </Badge>
                          )}
                          {conversation.count && (
                            <Badge variant="outline" className="text-xs">
                              +{conversation.count}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Central Content Area */}
              <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="p-4 border-b border-gray-200 bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Loyalty Discount?
                      </h3>
                      <Badge className="bg-orange-100 text-orange-800 text-xs">
                        Billing
                      </Badge>
                      <span className="text-sm text-gray-500">SU-2132</span>
                      <span className="text-sm text-gray-500">1</span>
                      <Badge className="bg-green-500 text-white text-xs">
                        VIP
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      <Plus className="h-4 w-4 text-gray-600" />
                      <MoreHorizontal className="h-4 w-4 text-gray-600" />
                      <Clock className="h-4 w-4 text-gray-600" />
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      <span className="text-sm text-gray-600">Open</span>
                    </div>
                  </div>
                </div>

                {/* Message Content */}
                <div className="flex-1 p-6 bg-white">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-gray-900">Kim Thompson</span>
                        <span className="text-sm text-gray-500">&lt;kim.thompson@gmail.com&gt;</span>
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        To: PedalPro Customer Support
                      </div>
                      <div className="text-gray-900 mb-4">
                        Hi there, I was wondering if there was any long-time customer discount? I wanted to order another bike and was just curious if there was anything you could do. Huge fan and have told tons of friends about you guys 🙏 Thanks so much!
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>NOW</span>
                        <Reply className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="w-16 border-l border-gray-200 bg-gray-50 p-4">
                <div className="flex flex-col gap-4">
                  <Calendar className="h-6 w-6 text-gray-600" />
                  <User className="h-6 w-6 text-gray-600" />
                  <div className="w-6 h-6 bg-green-500 rounded"></div>
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                  <div className="w-6 h-6 bg-red-500 rounded"></div>
                  <DollarSign className="h-6 w-6 text-green-600" />
                  <RotateCcw className="h-6 w-6 text-blue-600" />
                  <MoreHorizontal className="h-6 w-6 text-gray-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
