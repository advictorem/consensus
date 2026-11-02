import Link from "@/components/Link";
import type { ComponentProps, ReactNode } from "react";

type Size = "sm" | "md" | "lg";

type BaseProps = {
  children: ReactNode;
  size?: Size;
  arrow?: boolean;
  className?: string;
};

type LinkProps = BaseProps & {
  href: string;
  external?: boolean;
  "aria-label"?: string;
};
type ButtonProps = BaseProps & { href?: undefined } & Omit<ComponentProps<"button">, "children" | "className">;

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`btn-arrow ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export default function GhostButton(props: LinkProps | ButtonProps) {
  const { children, size = "md", arrow = true, className = "" } = props;
  const cls = `btn ${size === "sm" ? "btn--sm" : size === "lg" ? "btn--lg" : ""} ${className}`.trim();

  if (typeof props.href === "string") {
    const { href, external, "aria-label": ariaLabel } = props as LinkProps;
    if (external) {
      return (
        <a href={href} className={cls} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
          <span>{children}</span>
          {arrow && <Arrow />}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        <span>{children}</span>
        {arrow && <Arrow />}
      </Link>
    );
  }

  const { children: _c, size: _s, arrow: _a, className: _cl, href: _h, ...btnRest } = props as ButtonProps;
  void _c; void _s; void _a; void _cl; void _h;
  return (
    <button className={cls} {...btnRest}>
      <span>{children}</span>
      {arrow && <Arrow />}
    </button>
  );
}
