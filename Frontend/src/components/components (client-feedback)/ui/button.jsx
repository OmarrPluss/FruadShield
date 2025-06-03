import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:from-sky-500 hover:to-blue-600 shadow-sm hover:shadow-md active:scale-[0.98]",
        destructive: "bg-gradient-to-r from-pink-400 to-rose-500 text-white hover:from-pink-500 hover:to-rose-600 shadow-sm hover:shadow-md active:scale-[0.98]",
        outline: "border-2 border-sky-400 bg-transparent text-sky-600 hover:bg-sky-50 hover:border-sky-500 active:scale-[0.98]",
        secondary: "bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 hover:from-gray-100 hover:to-gray-200 shadow-sm hover:shadow-md active:scale-[0.98]",
        ghost: "hover:bg-gray-50 text-gray-600 hover:text-gray-800 active:scale-[0.98]",
        link: "text-sky-500 underline-offset-4 hover:underline hover:text-sky-600",
        success: "bg-gradient-to-r from-emerald-400 to-green-500 text-white hover:from-emerald-500 hover:to-green-600 shadow-sm hover:shadow-md active:scale-[0.98]",
        warning: "bg-gradient-to-r from-amber-400 to-yellow-500 text-white hover:from-amber-500 hover:to-yellow-600 shadow-sm hover:shadow-md active:scale-[0.98]",
      },
      size: {
        default: "h-12 px-8 py-3 text-base",
        sm: "h-10 rounded-md px-6 text-sm",
        lg: "h-14 rounded-md px-12 text-lg",
        icon: "h-12 w-12",
        wide: "h-12 px-12 py-3 text-base",
        xl: "h-16 rounded-lg px-16 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
