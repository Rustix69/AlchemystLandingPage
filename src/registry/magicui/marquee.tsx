"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  children,
  reverse,
  pauseOnHover = false,
  className,
  ...props
}: {
  children: React.ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "group flex w-full overflow-hidden [--duration:40s] [--gap:1rem]",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[--gap] py-4",
          "animate-[marquee_var(--duration)_linear_infinite]",
          reverse && "animate-[marqueeReverse_var(--duration)_linear_infinite]",
          pauseOnHover && "group-hover:pause"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[--gap] py-4",
          "animate-[marquee_var(--duration)_linear_infinite]",
          reverse && "animate-[marqueeReverse_var(--duration)_linear_infinite]",
          pauseOnHover && "group-hover:pause"
        )}
      >
        {children}
      </div>
    </div>
  );
} 