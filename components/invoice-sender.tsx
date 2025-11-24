"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/header"
import UploadStep from "@/components/steps/upload-step"
import ReviewStep from "@/components/steps/review-step"
import MessageStep from "@/components/steps/message-step"
import ChannelStep from "@/components/steps/channel-step"
import SuccessStep from "@/components/steps/success-step"
import { Steps } from "@/components/steps-indicator"
import InvoicesView from "@/components/views/invoices-view"
import SettingsView from "@/components/views/settings-view"

export interface Invoice {
  id: string
  file: File
  name: string
  amount: string
  date: string
  status: "pending" | "success" | "error"
}

export type Channel = "messenger" | "instagram" | null
export type View = "overview" | "invoices" | "settings"

export interface IntegrationStatus {
  messenger: boolean
  instagram: boolean
}

export default function InvoiceSender() {
  const [currentView, setCurrentView] = useState<View>("overview")

  // Wizard State
  const [currentStep, setCurrentStep] = useState(1)
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [selectedChannel, setSelectedChannel] = useState<Channel>(null)
  const [customMessage, setCustomMessage] = useState<string | undefined>(undefined)

  const [integrationStatus] = useState<IntegrationStatus>({
    messenger: true, // Example: Facebook Messenger is connected
    instagram: false, // Example: Instagram DM is not connected
  })

  // Navigation Logic
  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 5))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1))

  const handleInvoicesUploaded = (newFiles: File[]) => {
    const newInvoices: Invoice[] = newFiles.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      name: "Acme Corp " + Math.floor(Math.random() * 100),
      amount: (Math.random() * 1000).toFixed(2),
      date: new Date().toISOString().split("T")[0],
      status: "pending",
    }))
    setInvoices((prev) => [...prev, ...newInvoices])
    nextStep()
  }

  const handleUpdateInvoice = (id: string, field: keyof Invoice, value: string) => {
    setInvoices((prev) => prev.map((inv) => (inv.id === id ? { ...inv, [field]: value } : inv)))
  }

  const handleRemoveInvoice = (id: string) => {
    setInvoices((prev) => prev.filter((inv) => inv.id !== id))
  }

  const handleMessageSubmit = (message?: string) => {
    setCustomMessage(message)
    nextStep()
  }

  const handleSend = async () => {
    // Simulate API call with custom message
    console.log("[v0] Sending invoices with message:", customMessage)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    nextStep()
  }

  // Calculate total amount for the Message Step
  const totalAmount = invoices.reduce((sum, inv) => {
    const val = Number.parseFloat(inv.amount.toString().replace(/[^0-9.-]+/g, ""))
    return sum + (isNaN(val) ? 0 : val)
  }, 0)

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header currentView={currentView} onNavigate={setCurrentView} />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 flex flex-col">
        {currentView === "overview" && (
          <div className="flex-1 flex flex-col">
            <div className="mb-10 max-w-3xl mx-auto w-full">
              <Steps currentStep={currentStep} />
            </div>

            <div className="flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full">
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="upload"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="w-full"
                  >
                    <UploadStep onUpload={handleInvoicesUploaded} />
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="message"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="w-full"
                  >
                    <MessageStep onBack={prevStep} onNext={handleMessageSubmit} totalAmount={totalAmount} />
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    key="channel"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="w-full"
                  >
                    <ChannelStep
                      selectedChannel={selectedChannel}
                      onSelectChannel={setSelectedChannel}
                      onBack={prevStep}
                      onNext={nextStep}
                      itemCount={invoices.length}
                      integrationStatus={integrationStatus}
                    />
                  </motion.div>
                )}

                {currentStep === 4 && (
                  <motion.div
                    key="review"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="w-full"
                  >
                    <ReviewStep
                      invoices={invoices}
                      onUpdate={handleUpdateInvoice}
                      onRemove={handleRemoveInvoice}
                      onBack={prevStep}
                      onSend={handleSend}
                    />
                  </motion.div>
                )}

                {currentStep === 5 && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full"
                  >
                    <SuccessStep
                      count={invoices.length}
                      channel={selectedChannel}
                      onReset={() => {
                        setInvoices([])
                        setSelectedChannel(null)
                        setCustomMessage(undefined)
                        setCurrentStep(1)
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}

        {currentView === "invoices" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
            <InvoicesView />
          </motion.div>
        )}

        {currentView === "settings" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
            <SettingsView />
          </motion.div>
        )}
      </main>
    </div>
  )
}
