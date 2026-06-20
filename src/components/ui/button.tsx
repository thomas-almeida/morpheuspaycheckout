import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl text-base font-semibold transition-all hover:-translate-y-0.5 hover:shadow-cta-hover focus-visible:outline-none focus-visible:shadow-focus disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-premium-black text-white",
        conversion: "bg-primary text-primary-foreground",
        "cta-green": "bg-cta-green text-cta-green-foreground",
        outline: "border border-border bg-surface text-text-primary",
        ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-hover",
        danger: "bg-danger text-white",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-base",
        lg: "h-13 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
