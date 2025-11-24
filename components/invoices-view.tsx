import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, MoreHorizontal, CheckCircle2 } from "lucide-react"

export default function InvoicesView() {
  // Mock history data
  const history = [
    {
      id: "INV-001",
      recipient: "Acme Corp",
      amount: "$1,250.00",
      date: "2023-11-20",
      status: "Sent",
      platform: "Messenger",
    },
    {
      id: "INV-002",
      recipient: "Globex Inc",
      amount: "$3,400.50",
      date: "2023-11-19",
      status: "Sent",
      platform: "Instagram",
    },
    {
      id: "INV-003",
      recipient: "Soylent Corp",
      amount: "$850.00",
      date: "2023-11-18",
      status: "Failed",
      platform: "Messenger",
    },
    {
      id: "INV-004",
      recipient: "Umbrella Corp",
      amount: "$12,000.00",
      date: "2023-11-15",
      status: "Sent",
      platform: "Instagram",
    },
    {
      id: "INV-005",
      recipient: "Stark Ind",
      amount: "$540.25",
      date: "2023-11-12",
      status: "Sent",
      platform: "Messenger",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Invoice History</h2>
        <Button variant="outline">Export CSV</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>A list of all invoices sent through the platform.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Recipient</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Platform</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {history.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    {item.id}
                  </TableCell>
                  <TableCell>{item.recipient}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell className="text-muted-foreground">{item.platform}</TableCell>
                  <TableCell className="text-muted-foreground">{item.date}</TableCell>
                  <TableCell>
                    <Badge variant={item.status === "Sent" ? "default" : "destructive"} className="capitalize">
                      {item.status === "Sent" && <CheckCircle2 className="mr-1 h-3 w-3" />}
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
