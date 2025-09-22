
import React from "react";
import clsx from "clsx";
export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span {...props} className={clsx("inline-flex items-center rounded-xl px-2.5 py-1 text-xs font-medium bg-white/10 text-white", className)} />;
}
