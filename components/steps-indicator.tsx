import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface StepsProps {
  currentStep: number
}

const steps = [
  { id: 1, name: "Upload" },
  { id: 2, name: "Message" },
  { id: 3, name: "Connect" },
  { id: 4, name: "Review" },
  { id: 5, name: "Send" },
]

export function Steps({ currentStep }: StepsProps) {
  const totalSteps = steps.length
  // Calculate positions for the line
  // The line should start at the center of the first step and end at the center of the last step
  // In a grid of N columns, the center of the first is at 100/(2N) %
  // The width of the line is 100 - 100/N %
  const stepPercentage = 100 / totalSteps
  const lineLeftOffset = stepPercentage / 2
  const lineTotalWidth = 100 - stepPercentage
  const activeLineWidth = ((currentStep - 1) / (totalSteps - 1)) * lineTotalWidth

  return (
    <div className="mx-auto w-full max-w-4xl px-4">
      <div className="relative">
        {/* Background Line */}
        <div
          className="absolute top-4 left-0 h-0.5 -translate-y-1/2 bg-muted hidden sm:block"
          style={{
            left: `${lineLeftOffset}%`,
            width: `${lineTotalWidth}%`,
          }}
        />

        {/* Active Progress Line */}
        <div
          className="absolute top-4 left-0 h-0.5 -translate-y-1/2 bg-primary transition-all duration-500 ease-in-out hidden sm:block"
          style={{
            left: `${lineLeftOffset}%`,
            width: `${Math.min(activeLineWidth, lineTotalWidth)}%`,
          }}
        />

        {/* Steps Grid */}
        <div className="relative z-10 grid grid-cols-5 w-full">
          {steps.map((step) => {
            const isCompleted = currentStep > step.id
            const isCurrent = currentStep === step.id

            return (
              <div key={step.id} className="flex flex-col items-center gap-3">
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-semibold transition-all duration-300 bg-background",
                    isCompleted
                      ? "border-primary bg-primary text-primary-foreground"
                      : isCurrent
                        ? "border-primary text-primary ring-4 ring-primary/20"
                        : "border-muted text-muted-foreground",
                  )}
                >
                  {isCompleted ? <Check className="h-4 w-4" /> : step.id}
                </div>
                <span
                  className={cn(
                    "text-xs font-medium transition-colors duration-300 text-center max-w-[80px]",
                    isCurrent
                      ? "text-primary font-semibold"
                      : isCompleted
                        ? "text-foreground"
                        : "text-muted-foreground",
                  )}
                >
                  {step.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
