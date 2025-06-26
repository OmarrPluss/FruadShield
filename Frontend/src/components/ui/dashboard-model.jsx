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

const DashboardCard = ({ className, span = 1, children, ...props }) => (
  <div
    className={cn(
      span === 1 && "col-span-1",
      span === 2 && "col-span-1 md:col-span-2",
      span === 3 && "col-span-1 md:col-span-2 lg:col-span-3",
      span === 4 && "col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4",
      className
    )}
    {...props}
  >
    {children}
  </div>
)

export { Dashboard, DashboardCard }

