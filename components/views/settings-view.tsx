"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Facebook, Instagram, Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "next-themes"

export default function SettingsView() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Settings</h2>

      <Tabs defaultValue="integrations" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        <TabsContent value="integrations" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Connected Accounts</CardTitle>
              <CardDescription>Manage your connections to messaging platforms.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                    <Facebook className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium leading-none">Facebook Messenger</p>
                    <p className="text-sm text-muted-foreground">Connected as John Doe</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-destructive hover:text-destructive hover:bg-destructive/10 bg-transparent"
                >
                  Disconnect
                </Button>
              </div>

              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900/30">
                    <Instagram className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium leading-none">Instagram Direct</p>
                    <p className="text-sm text-muted-foreground">Not connected</p>
                  </div>
                </div>
                <Button size="sm">Connect</Button>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/20 px-6 py-4">
              <p className="text-xs text-muted-foreground">
                Connecting an account allows you to send invoices directly to your contacts.
              </p>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize how the application looks.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Theme</p>
                  <p className="text-sm text-muted-foreground">Select your preferred theme.</p>
                </div>
                <div className="flex items-center gap-2 rounded-lg border p-1 bg-background">
                  <Button
                    variant={theme === "light" ? "secondary" : "ghost"}
                    size="sm"
                    className="h-8 w-8 px-0"
                    onClick={() => setTheme("light")}
                  >
                    <Sun className="h-4 w-4" />
                    <span className="sr-only">Light</span>
                  </Button>
                  <Button
                    variant={theme === "dark" ? "secondary" : "ghost"}
                    size="sm"
                    className="h-8 w-8 px-0"
                    onClick={() => setTheme("dark")}
                  >
                    <Moon className="h-4 w-4" />
                    <span className="sr-only">Dark</span>
                  </Button>
                  <Button
                    variant={theme === "system" ? "secondary" : "ghost"}
                    size="sm"
                    className="h-8 w-8 px-0"
                    onClick={() => setTheme("system")}
                  >
                    <Laptop className="h-4 w-4" />
                    <span className="sr-only">System</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
