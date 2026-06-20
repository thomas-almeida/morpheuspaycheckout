import { ChevronDown } from "lucide-react";
import { forwardRef } from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, placeholder, id, ...props }, ref) => {
    const selectId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={selectId}
            className="text-sm font-medium text-text-primary"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            id={selectId}
            ref={ref}
            className={`h-12 w-full appearance-none rounded-xl border border-border-input bg-surface px-4 pr-10 text-sm text-text-primary outline-none transition-all focus:border-text-primary focus:shadow-focus disabled:cursor-not-allowed disabled:opacity-50 ${
              error ? "border-danger" : ""
            } ${className ?? ""}`}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-auxiliary" />
        </div>
        {error && (
          <span className="text-xs font-medium text-danger">{error}</span>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };
