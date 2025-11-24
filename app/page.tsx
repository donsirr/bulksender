"use client"

import { useState } from "react"
import { LandingPage } from "@/components/landing-page"
import InvoiceSender from "@/components/invoice-sender"

export default function Page() {
  const [showApp, setShowApp] = useState(false)

  if (showApp) {
    return <InvoiceSender />
  }

  return <LandingPage onEnterApp={() => setShowApp(true)} />
}
