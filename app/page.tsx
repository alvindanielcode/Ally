"use client"

import { Hero } from "@/components/ui/animated-hero"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AuroraBackground } from "@/components/ui/aurora-background"

export default function Home() {
  return (
    <AuroraBackground className="min-h-screen">
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
        </main>
        <Footer />
      </div>
    </AuroraBackground>
  )
}
