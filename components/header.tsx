"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/5 backdrop-blur supports-[backdrop-filter]:bg-black/5">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">Ally</span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            <Link href="/features" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex text-white hover:text-white/80">
            Sign In
          </Button>
          <Button size="sm" className="hidden md:inline-flex bg-white text-black hover:bg-white/90">
            Get Started
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/5 backdrop-blur">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <Link href="/features" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" size="sm" className="text-white hover:text-white/80 w-full">
                Sign In
              </Button>
              <Button size="sm" className="w-full bg-white text-black hover:bg-white/90">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
