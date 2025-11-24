"use client"

import type React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Zap, MessageSquare, Upload, Layout } from "lucide-react"
import { motion } from "framer-motion"
import { Modal } from "@/components/ui/modal"

interface LandingPageProps {
  onEnterApp: () => void
}

export function LandingPage({ onEnterApp }: LandingPageProps) {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)
  const [showTermsModal, setShowTermsModal] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-5xl">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-md bg-primary flex items-center justify-center shadow-sm">
              <div className="h-3 w-3 rounded-full bg-background" />
            </div>
            <span className="font-bold text-lg tracking-tight">BulkSender</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button onClick={onEnterApp}>
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
              Now supporting Instagram DM
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent"
            >
              Bulk Send Invoices <br /> to Messenger & Instagram
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Stop sending invoices manually. Drag, drop, and automatically dispatch hundreds of invoices to your
              customers on their preferred social platforms in seconds.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button size="lg" className="w-full sm:w-auto text-base px-8 h-12" onClick={onEnterApp}>
                Start Sending Free
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-8 h-12 bg-transparent">
                View Demo
              </Button>
            </motion.div>
          </div>

          {/* Abstract Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-muted/30 border-y border-border/40">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Everything you need to scale</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Streamline your billing process with our powerful automation tools designed for modern sellers.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Upload className="h-6 w-6 text-primary" />}
                title="Drag & Drop Upload"
                description="Simply drag your invoice files or folder. We automatically process and prepare them for sending."
              />
              <FeatureCard
                icon={<MessageSquare className="h-6 w-6 text-primary" />}
                title="Smart Messaging"
                description="Customize your message templates with dynamic fields like amount, name, and date."
              />
              <FeatureCard
                icon={<Layout className="h-6 w-6 text-primary" />}
                title="Multi-Channel Support"
                description="Connect your Facebook Page and Instagram Business accounts to reach customers where they are."
              />
            </div>
          </div>
        </section>

        {/* Stats/Social Proof */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Trusted by online sellers</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Save 10+ hours per week</h4>
                      <p className="text-sm text-muted-foreground">
                        Manual sending takes forever. Automate it instantly.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Reduce payment delays</h4>
                      <p className="text-sm text-muted-foreground">
                        Customers pay faster when they receive invoices instantly on social.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Zero errors</h4>
                      <p className="text-sm text-muted-foreground">
                        Eliminate copy-paste mistakes with our smart parsing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-2xl transform rotate-3" />
                <div className="relative bg-card border border-border rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <div className="text-2xl font-bold">1,240+</div>
                      <div className="text-sm text-muted-foreground">Invoices Sent Today</div>
                    </div>
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="h-8 w-8 rounded-full bg-primary/20" />
                          <div>
                            <div className="h-2 w-24 bg-foreground/20 rounded mb-1.5" />
                            <div className="h-2 w-16 bg-foreground/10 rounded" />
                          </div>
                        </div>
                        <div className="h-6 w-16 bg-green-500/20 rounded-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 border-t border-border/40">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to automate your invoices?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of sellers saving time and getting paid faster. No credit card required.
            </p>
            <Button size="lg" className="text-base px-8 h-12" onClick={onEnterApp}>
              Launch Dashboard
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border/40 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="h-5 w-5 rounded-md bg-primary flex items-center justify-center">
              <div className="h-2.5 w-2.5 rounded-full bg-background" />
            </div>
            <span className="font-bold text-sm">BulkSender</span>
          </div>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setShowTermsModal(true)}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-foreground">
              GitHub
            </a>
          </div>
        </div>
      </footer>

      <Modal isOpen={showPrivacyModal} onClose={() => setShowPrivacyModal(false)} title="Privacy Policy">
        <div className="space-y-4 max-h-96 overflow-y-auto">
          <p>
            <strong>Last Updated: November 2024</strong>
          </p>

          <div>
            <h3 className="font-semibold mb-2">1. Introduction</h3>
            <p className="text-sm text-muted-foreground">
              BulkSender ("we", "our", or "us") operates this platform. This page informs you of our policies regarding
              the collection, use, and disclosure of personal data when you use our service.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">2. Information Collection</h3>
            <p className="text-sm text-muted-foreground">
              We collect information about how you interact with our platform, including the invoices you upload, the
              messages you create, and the delivery channels you use. We also collect your account information and
              connection details for Facebook Messenger and Instagram.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">3. Use of Information</h3>
            <p className="text-sm text-muted-foreground">
              Your data is used to provide and improve our services, send your invoices through the selected channels,
              and communicate with you about your account. We do not sell your personal information to third parties.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">4. Data Security</h3>
            <p className="text-sm text-muted-foreground">
              We implement industry-standard security measures to protect your information. However, no method of
              transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">5. Contact Us</h3>
            <p className="text-sm text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at privacy@bulksender.com
            </p>
          </div>
        </div>
      </Modal>

      <Modal isOpen={showTermsModal} onClose={() => setShowTermsModal(false)} title="Terms of Service">
        <div className="space-y-4 max-h-96 overflow-y-auto">
          <p>
            <strong>Last Updated: November 2024</strong>
          </p>

          <div>
            <h3 className="font-semibold mb-2">1. Agreement to Terms</h3>
            <p className="text-sm text-muted-foreground">
              By using BulkSender, you agree to comply with and be bound by these Terms of Service. If you do not agree
              to abide by the above, please do not use this service.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">2. License to Use</h3>
            <p className="text-sm text-muted-foreground">
              We grant you a limited, non-exclusive license to use BulkSender for your business purposes. You may not
              reproduce, duplicate, copy, sell, resell, or exploit any portion of the service without our express
              written permission.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">3. User Responsibilities</h3>
            <p className="text-sm text-muted-foreground">
              You are responsible for the content of your invoices and messages. You agree not to use BulkSender for any
              illegal or unauthorized purpose. You must not violate any laws or the rights of others.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">4. Limitation of Liability</h3>
            <p className="text-sm text-muted-foreground">
              BulkSender is provided on an "as-is" basis. We are not liable for any indirect, incidental, special,
              consequential, or punitive damages resulting from your use of or inability to use the service.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">5. Termination</h3>
            <p className="text-sm text-muted-foreground">
              We may terminate or suspend your account at any time, without notice or liability, for conduct that we
              believe violates these Terms of Service or is otherwise harmful to other users.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">6. Changes to Terms</h3>
            <p className="text-sm text-muted-foreground">
              We reserve the right to modify these terms at any time. We will notify you of any changes by updating the
              "Last Updated" date of these Terms of Service.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
