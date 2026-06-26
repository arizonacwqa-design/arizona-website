import { type ReactNode } from "react";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "outline";
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
};

const baseStyle: React.CSSProperties = {
  borderRadius: 50,
  padding: "14px 28px",
  cursor: "pointer",
  position: "relative",
  transition: "all 0.3s ease",
  fontWeight: 700,
  fontSize: 14,
  border: "none",
  animation: "goldenPulse 2.5s ease-in-out infinite",
};

const primaryStyle: React.CSSProperties = {
  ...baseStyle,
  background: "linear-gradient(135deg, #C9A84C, #E8C96A, #C9A84C)",
  backgroundSize: "200% 200%",
  color: "#0D0D0D",
  boxShadow:
    "0 0 20px rgba(201, 168, 76, 0.4), 0 0 40px rgba(201, 168, 76, 0.15)",
};

const outlineStyle: React.CSSProperties = {
  ...baseStyle,
  background: "transparent",
  border: "1.5px solid #C9A84C",
  color: "#C9A84C",
  boxShadow:
    "0 0 20px rgba(201, 168, 76, 0.2), 0 0 40px rgba(201, 168, 76, 0.08)",
};

export function MagneticButton({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled,
  className,
}: Props) {
  const { ref, handlers } = useMagneticEffect<HTMLButtonElement>(0.3);

  const style = variant === "primary" ? primaryStyle : outlineStyle;

  const combinedClass = [
    "magnetic-btn",
    variant === "primary" ? "magnetic-btn--primary" : "magnetic-btn--outline",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <style>{`
        @keyframes goldenPulse {
          0%   { box-shadow: 0 0 15px rgba(201,168,76,0.3), 0 0 30px rgba(201,168,76,0.1); }
          50%  { box-shadow: 0 0 25px rgba(201,168,76,0.6), 0 0 50px rgba(201,168,76,0.2); }
          100% { box-shadow: 0 0 15px rgba(201,168,76,0.3), 0 0 30px rgba(201,168,76,0.1); }
        }
        .magnetic-btn {
          transition: all 0.3s ease !important;
          animation: goldenPulse 2.5s ease-in-out infinite !important;
        }
        .magnetic-btn:hover {
          animation-play-state: paused !important;
          transform: translateY(-2px) scale(1.02) !important;
        }
        .magnetic-btn--primary:hover {
          box-shadow:
            0 0 30px rgba(201, 168, 76, 0.7),
            0 0 60px rgba(201, 168, 76, 0.3),
            0 0 100px rgba(201, 168, 76, 0.1) !important;
          background-position: right center !important;
        }
        .magnetic-btn--outline:hover {
          box-shadow:
            0 0 30px rgba(201, 168, 76, 0.4),
            0 0 60px rgba(201, 168, 76, 0.15) !important;
        }
        .magnetic-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
          animation: none !important;
          box-shadow: none !important;
        }
      `}</style>
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={combinedClass}
        style={style}
        onMouseMove={handlers.onMouseMove}
        onMouseLeave={handlers.onMouseLeave}
      >
        {children}
      </button>
    </>
  );
}
