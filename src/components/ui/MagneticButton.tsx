import { type ReactNode } from "react";
import { Magnetic } from "@/lib/magnetic";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "outline";
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
};

export function MagneticButton({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled,
  className,
}: Props) {
  const cls = variant === "primary" ? "btn-luxury" : "btn-ghost-luxury";

  return (
    <Magnetic strength={0.15}>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={[cls, className].filter(Boolean).join(" ")}
      >
        {children}
      </button>
    </Magnetic>
  );
}
