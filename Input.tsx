
import React from "react";
import clsx from "clsx";
export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={clsx("w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50", className)} />;
}
