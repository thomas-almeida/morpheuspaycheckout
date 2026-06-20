import { forwardRef } from "react";

const Label = forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={`text-sm font-medium text-text-primary ${className ?? ""}`}
    {...props}
  />
));
Label.displayName = "Label";

export { Label };
