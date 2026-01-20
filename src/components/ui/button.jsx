import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 overflow-hidden group outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        // Updated Default for that "Liquid" look: Orange to Black
        default: "bg-orange-600 text-white border-none",
        // The "Mozzo" style: White to Black liquid
        mozzu: "bg-white text-[#1a1a1a] border-2 border-[#1a1a1a] hover:text-white",
        destructive: "bg-destructive text-white border-none",
        outline: "border bg-background shadow-xs hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-12 py-2",
        sm: "h-8 px-3",
        lg: "h-14 px-8 text-lg", // Larger for the Hero section
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  children, // Destructure children to wrap them
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {/* The visible text/content must stay on top */}
      <span className="relative z-10 flex items-center gap-2 transition-colors duration-500">
        {children}
      </span>

      {/* The Liquid Fill Layer */}
      <div className="absolute inset-0 z-0 bg-black translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
    </Comp>
  );
}

export { Button, buttonVariants }