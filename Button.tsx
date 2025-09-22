
import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean; variant?: "default" | "secondary"; size?: "sm" | "md" | "lg"; className?: string; };
export function Button({ asChild, variant="default", size="md", className, ...props }: Props) {
  const base = "inline-flex items-center justify-center font-medium rounded-2xl transition";
  const variants = {
    default: "bg-emerald-600 text-white hover:bg-emerald-500",
    secondary: "bg-white/10 text-white hover:bg-white/20"
  } as const;
  const sizes = { sm: "px-3 py-1.5 text-sm", md: "px-4 py-2", lg: "px-5 py-3 text-base" } as const;
  return <button {...props} className={clsx(base, variants[variant], sizes[size], className)} />;
}
