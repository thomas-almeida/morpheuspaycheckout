import { forwardRef } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`rounded-xl border border-border bg-surface p-6 ${
          hover ? "transition-all hover:shadow-hover" : ""
        } ${className ?? ""}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={`mb-4 ${className ?? ""}`} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={`text-lg font-semibold ${className ?? ""}`} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={`text-sm text-text-secondary ${className ?? ""}`} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

export { Card, CardHeader, CardTitle, CardDescription };
