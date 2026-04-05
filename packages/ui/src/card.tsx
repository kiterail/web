import type { HTMLAttributes } from "react";

export function Card({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-raised)] p-6 ${className}`}
      {...props}
    />
  );
}
