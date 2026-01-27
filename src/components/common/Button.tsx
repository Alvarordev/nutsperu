import { type ReactNode } from "react";

interface ButtonProps {
  id?: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export default function Button({
  id = "",
  href,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  className = "",
  children,
  onClick,
  ...rest
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary:
      "bg-secondary text-foreground border-2 border-transparent hover:bg-white hover:border-dark hover:text-foreground group-hover:bg-white group-hover:border-dark group-hover:text-foreground focus:ring-primary shadow-[-4px_4px_0px_0px_var(--color-dark)]",
    secondary:
      "bg-accent text-primary border-2 border-transparent hover:bg-white hover:border-dark hover:text-primary group-hover:bg-white group-hover:border-dark group-hover:text-primary focus:ring-accent shadow-[-4px_4px_0px_0px_var(--color-dark)]",
    outline:
      "border-2 border-foreground text-foreground hover:bg-primary hover:text-background group-hover:bg-primary/10 focus:ring-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-full font-medium",
    md: "px-6 py-2 text-base rounded-full font-medium",
    lg: "px-8 py-4 text-lg rounded-full font-bold",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button
      id={id}
      type={type}
      disabled={disabled}
      className={combinedClassName}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
