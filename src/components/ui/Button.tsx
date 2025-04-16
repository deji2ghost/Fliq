// components/ui/Button.tsx
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const baseClasses =
  "px-4 py-2 rounded-lg font-medium transition duration-200 ease-in-out";

const variantClasses: Record<Variant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
  ghost: "bg-transparent text-gray-800 hover:bg-gray-100",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

export const Button = ({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
