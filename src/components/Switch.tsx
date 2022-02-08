import React, { forwardRef, InputHTMLAttributes } from "react";
import { useId } from "react-id-generator";

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
}

/**
 * @example
 * <Checkbox
 *   label="Checkbox"
 *   onChange={(e) => console.log(e.target.checked)}
 * />
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ labelClassName = "", className = "", label, ...props }, ref) => {
    const [id] = useId(1, "checkbox");
    return (
      <div className="label-row">
        {label && (
          <label htmlFor={id} className={labelClassName}>
            {label}
          </label>
        )}
        <label className={`switch ${className}`}>
          <input
            type="checkbox"
            id={id}
            ref={ref}
            className="hidden"
            {...props}
          />
          <span className="switch-left">동의</span>
          <span className="switch-right">거부</span>
          <span className="switch-slider" />
        </label>
      </div>
    );
  }
);
