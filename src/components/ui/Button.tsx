// components/ui/Button.tsx
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const baseClasses =
  "px-8 py-4 rounded-[100px] font-medium transition duration-200 ease-in-out cursor-pointer";

const variantClasses: Record<Variant, string> = {
  primary: "bg-customPurple text-foreground hover:bg-customPurple/30 w-[155px] font-[600]",
  secondary: "bg-foreground/15 text-whiteGrey border-[0.2px] font-[400] border-rareGrey hover:bg-foreground/30 w-[195px] md:w-[320px] py-[6px] px-3",
  outline: "bg-customPurple text-foreground hover:bg-customPurple/30 font-[600] w-[146px] py-[8px] px-[12px]",
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
