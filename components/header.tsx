"use client"

import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  currentView: "main" | "invoices" | "settings"
  onNavigate: (view: "main" | "invoices" | "settings") => void
}

export default function Header({ currentView, onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 max-w-5xl mx-auto w-full">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate("main")}>
          <div className="h-6 w-6 rounded-md bg-primary flex items-center justify-center shadow-sm">
            <div className="h-3 w-3 rounded-full bg-background" />
          </div>
          <span className="font-bold text-lg hidden sm:inline-block tracking-tight">BulkSender</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => onNavigate("main")}
            className={`transition-colors hover:text-foreground ${
              currentView === "main" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => onNavigate("invoices")}
            className={`transition-colors hover:text-foreground ${
              currentView === "invoices" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Invoices
          </button>
          <button
            onClick={() => onNavigate("settings")}
            className={`transition-colors hover:text-foreground ${
              currentView === "settings" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Settings
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative h-8 w-8 text-muted-foreground">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background" />
            <span className="sr-only">Notifications</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
