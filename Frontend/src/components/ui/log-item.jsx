import { cn } from "../../lib/utils"
import { Button } from "./button"

const LogItem = ({ className, timestamp, level, message, details, onDetailsClick, ...props }) => {
  const levelColors = {
    info: "text-blue-400",
    warn: "text-yellow-400", 
    error: "text-red-400",
    critical: "text-red-500"
  }

  return (
    <div
      className={cn(
        "p-3 border-b border-border last:border-b-0 hover:bg-primary/5 transition-colors duration-200",
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xs text-muted-foreground font-mono">
              {timestamp}
            </span>
            <span className={cn("text-xs font-semibold uppercase", levelColors[level])}>
              {level}
            </span>
          </div>
          <p className="text-sm text-foreground break-words">
            {message}
          </p>
        </div>
        {details && (
          <Button
            variant="outline"
            size="sm"
            onClick={onDetailsClick}
            className="flex-shrink-0"
          >
            Details
          </Button>
        )}
      </div>
    </div>
  )
}

const LogList = ({ className, children, maxHeight = "max-h-96", ...props }) => (
  <div
    className={cn(
      "border border-border rounded-lg overflow-hidden",
      className
    )}
    {...props}
  >
    <div className={cn("overflow-y-auto", maxHeight)}>
      {children}
    </div>
  </div>
)

export { LogItem, LogList }

