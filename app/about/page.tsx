"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AuroraBackground } from "@/components/ui/aurora-background"

export default function AboutPage() {
  return (
    <AuroraBackground className="min-h-screen">
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">
              About Ally
            </h1>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Ally is an AI-powered business copilot that helps entrepreneurs and small business owners save time and grow smarter. It automates emails, meetings, tasks, invoices, and reports, while connecting to platforms like Shopify, Instagram, WhatsApp, websites, and CRMs to gather all your business data in one place.
              </p>
              
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mt-6">
                Ally uses AI to analyze sales, customer behavior, and social engagement, gives strategy suggestions, risk alerts, and predictions, and tracks competitors. With a dashboard, AI chat, alerts, and workflow automations via n8n, Ally acts as a trusted partner, guiding your business effortlessly and helping you make smarter decisions every day.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">Automation</h3>
                <p className="text-white/80">
                  Automate emails, meetings, tasks, invoices, and reports to save valuable time.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">Integration</h3>
                <p className="text-white/80">
                  Connect with Shopify, Instagram, WhatsApp, websites, and CRMs seamlessly.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">Intelligence</h3>
                <p className="text-white/80">
                  AI-powered insights, predictions, and strategy suggestions for smarter decisions.
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </AuroraBackground>
  )
}
