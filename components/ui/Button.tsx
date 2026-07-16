import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center gap-2 font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-200 ease-out focus-visible:outline-offset-4 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:-translate-y-0.5 hover:bg-blue active:translate-y-0 shadow-soft",
  secondary:
    "bg-surface text-ink border-2 border-line hover:-translate-y-0.5 hover:border-blue hover:text-blue active:translate-y-0 shadow-soft",
  ghost: "text-ink underline decoration-2 underline-offset-4 decoration-amber hover:decoration-coral",
};

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  external?: boolean;
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  icon,
  external,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const isHash = href.startsWith("#");

  if (external || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
        {icon}
      </a>
    );
  }

  if (isHash) {
    return (
      <a href={href} className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}
