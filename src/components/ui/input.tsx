import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-text-primary"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={`h-12 rounded-xl border border-border-input bg-surface px-4 text-sm text-text-primary outline-none transition-all placeholder:text-text-placeholder focus:border-text-primary focus:shadow-focus disabled:cursor-not-allowed disabled:opacity-50 ${
            error ? "border-danger focus:border-danger focus:shadow-[0_0_0_4px_rgba(255,90,61,.08)]" : ""
          } ${className ?? ""}`}
          {...props}
        />
        {error && (
          <span className="text-xs font-medium text-danger">{error}</span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
