import React, { ButtonHTMLAttributes, FC } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  bgColor?: string;
}

export const Button: FC<ButtonProps> = ({
  disabled = false,
  bgColor = "",
  className = "",
  onClick,
  ...props
}) => (
  <button
    className={`${disabled ? "bg-gray-400" : bgColor} ${className} `}
    onClick={(e) => {
      if (!disabled) onClick?.(e);
    }}
    {...props}
  />
);
