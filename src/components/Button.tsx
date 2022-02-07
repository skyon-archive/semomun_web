import React, { ButtonHTMLAttributes, FC } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  disabled = false,
  className = "",
  onClick,
  ...props
}) => (
  <button
    className={`${className} ${disabled ? "bg-gray-400" : ""}`}
    onClick={(e) => {
      if (!disabled) onClick?.(e);
    }}
    {...props}
  />
);
