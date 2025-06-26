import { cn } from "../../lib/utils"

const MetricItem = ({ className, label, value, icon, trend, trendValue, ...props }) => (
  <div
    className={cn(
      "bg-card/50 rounded-lg p-4 transition-all duration-300 cursor-pointer hover:bg-primary/5 hover:-translate-y-1",
      className
    )}
    {...props}
  >
    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1.5">
      {icon}
      <span>{label}</span>
    </div>
    <div className="text-2xl font-bold text-foreground mb-1">
      {value}
    </div>
    {trend && (
      <div className={cn(
        "text-xs flex items-center gap-1",
        trend === "up" && "text-green-400",
        trend === "down" && "text-red-400",
        trend === "neutral" && "text-yellow-400"
      )}>
        {trend === "up" && "↗"}
        {trend === "down" && "↘"}
        {trend === "neutral" && "→"}
        <span>{trendValue}</span>
      </div>
    )}
  </div>
)

const MetricGrid = ({ className, children, ...props }) => (
  <div
    className={cn(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4",
      className
    )}
    {...props}
  >
    {children}
  </div>
)

export { MetricItem, MetricGrid }

