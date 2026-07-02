"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/useMagnetic";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  magnetic?: boolean;
  loading?: boolean;
  as?: "button" | "a";
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      magnetic = false,
      loading = false,
      className,
      children,
      disabled,
      ...props
    },
    forwardedRef
  ) => {
    const magneticRef = useMagnetic<HTMLButtonElement>({ strength: 0.3 });
    const ref = forwardedRef || (magnetic ? magneticRef : null);

    const baseStyles =
      "relative inline-flex items-center justify-center gap-2 font-display font-semibold rounded-lg transition-all select-none overflow-hidden active:scale-[0.97]";

    const variantStyles = {
      primary:
        "bg-primary text-white hover:bg-primary-bright hover:shadow-glow-red-sm focus-visible:ring-2 focus-visible:ring-primary/50",
      secondary:
        "bg-surface text-white border border-glass-border hover:border-primary/30 hover:bg-surface-2",
      ghost:
        "text-text-muted hover:text-white hover:bg-white/5",
      outline:
        "border border-primary text-primary hover:bg-primary hover:text-white",
    };

    const sizeStyles = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-sm md:text-base",
      lg: "px-8 py-4 text-base md:text-lg",
    };

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled || loading}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        {...props}
      >
        {/* Hover glow overlay for primary */}
        {variant === "primary" && (
          <span
            className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,45,45,0.2) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
        )}

        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Processing...</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
