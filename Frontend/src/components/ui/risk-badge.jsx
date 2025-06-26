import { cn } from "../../lib/utils"

const riskVariants = {
  critical: "bg-red-500/20 text-red-400 border-red-500/30",
  high: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  low: "bg-green-500/20 text-green-400 border-green-500/30",
}

const RiskBadge = ({ className, risk = "low", children, active = false, ...props }) => (
  <span
    className={cn(
      "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border transition-all duration-300 cursor-pointer hover:scale-105",
      riskVariants[risk],
      active && "ring-2 ring-current",
      className
    )}
    {...props}
  >
    {children}
  </span>
)

export { RiskBadge }

