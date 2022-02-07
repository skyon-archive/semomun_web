import React, { FC, HTMLAttributes } from "react";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = ({
  open,
  onClose,
  children,
  className,
  onClick,
  ...props
}) =>
  open ? (
    <div
      className="z-30 fixed inset-0 bg-littleblack flex items-center justify-center px-4"
      onClick={() => onClose?.()}
    >
      <div
        className={`bg-white ${className}`}
        {...props}
        onClick={(e) => {
          onClick?.(e);
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  ) : null;
