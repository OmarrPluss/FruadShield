import { cn } from "../../lib/utils"

const ChartBox = ({ className, title, icon, children, height = "h-80", ...props }) => (
  <div
    className={cn(
      "bg-card rounded-xl border border-border p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
      className
    )}
    {...props}
  >
    {title && (
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
        {icon && <span className="text-primary">{icon}</span>}
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
    )}
    <div className={cn("relative w-full", height)}>
      {children}
    </div>
  </div>
)

export { ChartBox }

