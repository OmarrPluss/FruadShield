import { cn } from "../../lib/utils"

const Dashboard = ({ className, children, ...props }) => (
  <div
    className={cn(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
      className
    )}
    {...props}
  >
    {children}
  </div>
)


export { Dashboard }

