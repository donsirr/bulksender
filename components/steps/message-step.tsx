"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, MessageSquare, Info } from "lucide-react"

interface MessageStepProps {
  onBack: () => void
  onNext: (message?: string) => void
  totalAmount: number
}

export default function MessageStep({ onBack, onNext, totalAmount }: MessageStepProps) {
  const [isEnabled, setIsEnabled] = useState(false)
  const [message, setMessage] = useState(`Here is your invoice! The total amount is $${totalAmount.toFixed(2)}.`)

  return (
    <Card className="w-full max-w-2xl mx-auto border-border shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle>Attach a Message</CardTitle>
            <CardDescription>Optionally send a personalized message along with the invoice.</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="message-mode" className="text-sm font-medium text-muted-foreground cursor-pointer">
              {isEnabled ? "Enabled" : "Disabled"}
            </Label>
            <Switch id="message-mode" checked={isEnabled} onCheckedChange={setIsEnabled} />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div
          className={`transition-opacity duration-300 ${isEnabled ? "opacity-100" : "opacity-50 pointer-events-none"}`}
        >
          <Label htmlFor="message" className="mb-2 block">
            Message Content
          </Label>
          <div className="relative">
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[120px] resize-none pr-4"
              placeholder="Enter your message here..."
            />
            <MessageSquare className="absolute top-3 right-3 h-4 w-4 text-muted-foreground/50" />
          </div>
          <div className="mt-3 flex gap-2 rounded-md bg-muted/50 p-3 text-xs text-muted-foreground">
            <Info className="h-4 w-4 shrink-0 text-primary" />
            <p>
              Use <code className="bg-background px-1 py-0.5 rounded border">{"<AMOUNT>"}</code> in your message to
              verify the placeholder functionality (preview only).
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t bg-muted/20 p-6">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={() => onNext(isEnabled ? message : undefined)}>
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
