import { cn } from "../../lib/utils"

const StatsBox = ({ className, title, value, subtitle, icon, trend, trendValue, ...props }) => (
  <div
    className={cn(
      "bg-card rounded-lg p-6 border border-border shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
      className
    )}
    {...props}
  >
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          {icon}
          <span>{title}</span>
        </div>
        <div className="text-3xl font-bold text-foreground mb-1">
          {value}
        </div>
        {subtitle && (
          <p className="text-sm text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
    </div>
    {trend && (
      <div className={cn(
        "mt-4 text-sm flex items-center gap-1",
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

export { StatsBox }

