import React, { forwardRef, SelectHTMLAttributes } from "react";
import { useId } from "react-id-generator";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helper?: string;
}

/**
 * @example
 * <Select label="Select" onChange={(e) => console.log(e.target.value)}>
 *   <option disabled selected hidden>placeholder</option>
 *   <option value="1">option 1</option>
 *   <option value="2">option 2</option>
 *   <option value="3">option 3</option>
 * </Select>
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, className = "", label, helper, ...props }, ref) => {
    const [id] = useId(1, "select");

    return (
      <div className="label-col">
        {label && <label htmlFor={id}>{label}</label>}
        <select
          ref={ref}
          id={id}
          className={`select ${helper ? "border-error" : ""} ${className}`}
          {...props}
        >
          {children}
        </select>
        {helper && <p className="text-sm text-error">{helper}</p>}
      </div>
    );
  }
);
