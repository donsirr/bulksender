"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, Send, Trash2, FileText } from "lucide-react"
import type { Invoice } from "../invoice-sender"

interface ReviewStepProps {
  invoices: Invoice[]
  onUpdate: (id: string, field: keyof Invoice, value: string) => void
  onRemove: (id: string) => void
  onBack: () => void
  onSend: () => void
}

export default function ReviewStep({ invoices, onUpdate, onRemove, onBack, onSend }: ReviewStepProps) {
  const [isSending, setIsSending] = useState(false)

  const handleSend = () => {
    setIsSending(true)
    onSend()
  }

  const totalAmount = invoices.reduce((sum, inv) => {
    const val = Number.parseFloat(inv.amount.toString().replace(/[^0-9.-]+/g, ""))
    return sum + (isNaN(val) ? 0 : val)
  }, 0)

  return (
    <Card className="w-full shadow-sm border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Review Invoices</CardTitle>
            <CardDescription>Verify the details extracted from your documents before sending.</CardDescription>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Total Value</div>
            <div className="text-2xl font-bold">${totalAmount.toFixed(2)}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-[50px]"></TableHead>
                <TableHead>File Name</TableHead>
                <TableHead>Recipient Name</TableHead>
                <TableHead>Amount ($)</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    No invoices found.
                  </TableCell>
                </TableRow>
              ) : (
                invoices.map((invoice) => (
                  <TableRow key={invoice.id} className="group">
                    <TableCell>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </TableCell>
                    <TableCell
                      className="font-medium text-sm text-muted-foreground max-w-[150px] truncate"
                      title={invoice.file.name}
                    >
                      {invoice.file.name}
                    </TableCell>
                    <TableCell>
                      <Input
                        value={invoice.name}
                        onChange={(e) => onUpdate(invoice.id, "name", e.target.value)}
                        className="h-8 w-full bg-transparent border-transparent hover:border-input focus:border-input px-2"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={invoice.amount}
                        onChange={(e) => onUpdate(invoice.id, "amount", e.target.value)}
                        className="h-8 w-[100px] bg-transparent border-transparent hover:border-input focus:border-input px-2 font-mono"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="date"
                        value={invoice.date}
                        onChange={(e) => onUpdate(invoice.id, "date", e.target.value)}
                        className="h-8 w-auto bg-transparent border-transparent hover:border-input focus:border-input px-2"
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:text-destructive hover:bg-destructive/10"
                        onClick={() => onRemove(invoice.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t bg-muted/20 p-6">
        <Button variant="outline" onClick={onBack} disabled={isSending}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={handleSend} disabled={invoices.length === 0 || isSending}>
          {isSending ? (
            "Sending..."
          ) : (
            <>
              Send Invoices <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
