import { cn } from "../../lib/utils"

const PageHeader = ({ 
  className, 
  title, 
  subtitle, 
  children, 
  actions,
  ...props 
}) => (
  <div
    className={cn(
      "flex justify-between items-start mb-6",
      className
    )}
    {...props}
  >
    <div className="flex-1">
      <h1 className="text-3xl font-bold text-foreground mb-1">
        {title}
      </h1>
      {subtitle && (
        <p className="text-muted-foreground">
          {subtitle}
        </p>
      )}
      {children}
    </div>
    {actions && (
      <div className="flex items-center gap-3">
        {actions}
      </div>
    )}
  </div>
)

export default PageHeader;

