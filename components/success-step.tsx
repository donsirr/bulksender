"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, RotateCcw } from "lucide-react"
import type { Channel } from "../invoice-sender"

interface SuccessStepProps {
  count: number
  channel: Channel
  onReset: () => void
}

export default function SuccessStep({ count, channel, onReset }: SuccessStepProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
      <div className="h-24 w-24 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 animate-in zoom-in duration-500">
        <CheckCircle2 className="h-12 w-12" />
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Successfully Sent!</h1>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          {count} invoices have been queued and are being sent via{" "}
          {channel === "messenger" ? "Facebook Messenger" : "Instagram"}.
        </p>
      </div>

      <div className="p-4 rounded-lg bg-muted/50 border max-w-md w-full text-left space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Status</span>
          <span className="font-medium text-emerald-500">Completed</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Total Sent</span>
          <span className="font-medium">{count}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Platform</span>
          <span className="font-medium capitalize">{channel}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Time</span>
          <span className="font-medium">{new Date().toLocaleTimeString()}</span>
        </div>
      </div>

      <div className="pt-8">
        <Button onClick={onReset} size="lg" variant="outline">
          <RotateCcw className="mr-2 h-4 w-4" /> Send More Invoices
        </Button>
      </div>
    </div>
  )
}
