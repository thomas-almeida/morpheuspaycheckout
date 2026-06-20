import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "bg-text-primary text-text-inverse",
        bestseller: "bg-bestseller-bg text-bestseller-text",
        "most-popular": "bg-most-popular-bg text-most-popular-text",
        success: "bg-success/10 text-success",
        danger: "bg-danger/10 text-danger",
        outline: "border border-border text-text-secondary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={badgeVariants({ variant, className })} {...props} />
  );
}

export { Badge, badgeVariants };
