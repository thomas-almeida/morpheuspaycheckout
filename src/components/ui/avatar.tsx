/* eslint-disable @next/next/no-img-element */
import { User } from "lucide-react";
import { forwardRef } from "react";

interface AvatarProps {
  src?: string | null;
  alt?: string;
  name?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
};

const iconSizeMap = {
  sm: 14,
  md: 18,
  lg: 22,
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt, name, size = "md", className }, ref) => {
    const showImage = src;
    const initials = name ? getInitials(name) : null;

    return (
      <div
        ref={ref}
        className={`inline-flex items-center justify-center overflow-hidden rounded-full bg-surface-secondary ${sizeMap[size]} ${className ?? ""}`}
      >
        {showImage ? (
          <img
            src={src!}
            alt={alt ?? name ?? "Avatar"}
            className="h-full w-full object-cover"
          />
        ) : initials ? (
          <span className="font-semibold text-text-secondary">{initials}</span>
        ) : (
          <User className="text-text-auxiliary" size={iconSizeMap[size]} />
        )}
      </div>
    );
  }
);
Avatar.displayName = "Avatar";

export { Avatar };
