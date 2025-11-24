"use client"

import type React from "react"

import { useState } from "react"
import { UploadCloud, FileText, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface UploadStepProps {
  onUpload: (files: File[]) => void
}

export default function UploadStep({ onUpload }: UploadStepProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [files, setFiles] = useState<File[]>([])

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files)
      // Filter for pdfs or images if needed, for now accept all
      setFiles((prev) => [...prev, ...newFiles])
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...newFiles])
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Upload Invoices</h1>
        <p className="text-muted-foreground">
          Drag and drop your PDF or Image invoices here. We'll automatically extract the details.
        </p>
      </div>

      <Card
        className={`border-2 border-dashed transition-colors duration-200 ${
          isDragging ? "border-primary bg-primary/5" : "border-border bg-card"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <CardContent className="flex flex-col items-center justify-center py-16 px-4 text-center">
          <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-6">
            <UploadCloud className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Drag invoices here</h3>
          <p className="text-sm text-muted-foreground max-w-xs mx-auto mb-6">
            Support for PDF, JPG, and PNG files. Maximum file size 10MB per invoice.
          </p>
          <div className="relative">
            <Button size="lg">Select Files</Button>
            <input
              type="file"
              multiple
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileInput}
            />
          </div>
        </CardContent>
      </Card>

      {files.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-muted-foreground">Selected Files ({files.length})</h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setFiles([])}
              className="h-auto p-0 text-muted-foreground hover:text-foreground"
            >
              Clear all
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {files.map((file, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors group relative"
              >
                <div className="h-10 w-10 rounded bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate pr-6">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(1)} KB</p>
                </div>
                <button
                  onClick={() => removeFile(i)}
                  className="absolute right-2 top-2 p-1 rounded-md opacity-0 group-hover:opacity-100 hover:bg-muted text-muted-foreground hover:text-foreground transition-all"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-end pt-4">
            <Button size="lg" onClick={() => onUpload(files)} className="w-full md:w-auto">
              Process {files.length} Invoices
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
