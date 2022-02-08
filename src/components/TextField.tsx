import React, { forwardRef, InputHTMLAttributes } from "react";
import { useId } from "react-id-generator";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
  helper?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className = "", label, labelClassName = "", helper, ...props }, ref) => {
    const [id] = useId(1, "textfield");

    return (
      <div className="label-col">
        {label && (
          <label htmlFor={id} className={labelClassName}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={`textfield ${helper ? "border-error" : ""} ${className}`}
          {...props}
        />
        {helper && <p className="text-sm text-error">{helper}</p>}
      </div>
    );
  }
);
