import type { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article";
}

export function Section({
  as: Tag = "section",
  className = "",
  ...props
}: SectionProps) {
  return <Tag className={`py-16 sm:py-24 ${className}`} {...props} />;
}
