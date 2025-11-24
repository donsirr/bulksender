"use client"

import type { Channel, IntegrationStatus } from "../invoice-sender"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, CheckCircle2, ArrowLeft, ArrowRight, Lock } from "lucide-react"
import { cn } from "@/lib/utils"

interface ChannelStepProps {
  selectedChannel: Channel
  onSelectChannel: (channel: Channel) => void
  onBack: () => void
  onNext: () => void
  itemCount: number
  integrationStatus: IntegrationStatus
}

export default function ChannelStep({
  selectedChannel,
  onSelectChannel,
  onBack,
  onNext,
  itemCount,
  integrationStatus,
}: ChannelStepProps) {
  const isChannelConnected = (channel: Channel) => {
    if (channel === "messenger") return integrationStatus.messenger
    if (channel === "instagram") return integrationStatus.instagram
    return false
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Select Channel</h1>
        <p className="text-muted-foreground">Choose where you want to send these {itemCount} invoices.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Facebook Messenger Card */}
        <div
          onClick={() => isChannelConnected("messenger") && onSelectChannel("messenger")}
          className={cn(isChannelConnected("messenger") ? "cursor-pointer" : "cursor-not-allowed")}
        >
          <Card
            className={cn(
              "transition-all duration-200 border-2 relative overflow-hidden",
              !isChannelConnected("messenger") && "opacity-50 bg-muted/30",
              isChannelConnected("messenger") && "hover:border-primary/50",
              selectedChannel === "messenger" ? "border-primary bg-primary/5" : "border-border",
            )}
          >
            <CardContent className="p-6 flex flex-col items-center justify-center gap-4">
              <div
                className={cn(
                  "h-12 w-12 rounded-full flex items-center justify-center transition-colors relative",
                  selectedChannel === "messenger" ? "bg-blue-600 text-white" : "bg-muted text-muted-foreground",
                )}
              >
                <Facebook className="h-6 w-6" />
                {!isChannelConnected("messenger") && (
                  <Lock className="h-3 w-3 absolute bottom-0 right-0 bg-destructive text-white rounded-full p-0.5" />
                )}
              </div>
              <div className="text-center">
                <h3 className="font-semibold">Facebook Messenger</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {isChannelConnected("messenger") ? "Send directly to recipient's inbox" : "Not connected"}
                </p>
              </div>
              {selectedChannel === "messenger" && (
                <div className="absolute top-4 right-4 text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Instagram DM Card */}
        <div
          onClick={() => isChannelConnected("instagram") && onSelectChannel("instagram")}
          className={cn(isChannelConnected("instagram") ? "cursor-pointer" : "cursor-not-allowed")}
        >
          <Card
            className={cn(
              "transition-all duration-200 border-2 relative overflow-hidden",
              !isChannelConnected("instagram") && "opacity-50 bg-muted/30",
              isChannelConnected("instagram") && "hover:border-primary/50",
              selectedChannel === "instagram" ? "border-primary bg-primary/5" : "border-border",
            )}
          >
            <CardContent className="p-6 flex flex-col items-center justify-center gap-4">
              <div
                className={cn(
                  "h-12 w-12 rounded-full flex items-center justify-center transition-colors relative",
                  selectedChannel === "instagram" ? "bg-pink-600 text-white" : "bg-muted text-muted-foreground",
                )}
              >
                <Instagram className="h-6 w-6" />
                {!isChannelConnected("instagram") && (
                  <Lock className="h-3 w-3 absolute bottom-0 right-0 bg-destructive text-white rounded-full p-0.5" />
                )}
              </div>
              <div className="text-center">
                <h3 className="font-semibold">Instagram DM</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {isChannelConnected("instagram") ? "Send as a direct message" : "Not connected"}
                </p>
              </div>
              {selectedChannel === "instagram" && (
                <div className="absolute top-4 right-4 text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex items-center justify-between pt-8">
        <Button variant="ghost" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <Button onClick={onNext} disabled={!selectedChannel} size="lg" className="min-w-[150px]">
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
