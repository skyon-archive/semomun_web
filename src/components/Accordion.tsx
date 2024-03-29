import React, { FC, useState } from "react";
import { Icon } from "./Icon";

export interface AccordionProps {
  idx: number;
  title: string;
  description: JSX.Element;
  className?: string;
}

export const Accordion: FC<AccordionProps> = ({
  idx,
  title,
  description,
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`flex flex-col space-y-1 ${className}`}>
      <div
        className={`flex pr-6 items-center w-full transition-all duration-200 border-brand-1 border ${
          open ? "bg-brand-1 rounded-t-xl py-3 text-white" : "rounded-xl py-4"
        }`}
        onClick={() => setOpen((open) => !open)}
      >
        <p className="w-20 text-center">{idx}.</p>
        <p className="flex-grow pr-2">{title}</p>
        <button>{open ? <Icon.ChevronUp /> : <Icon.ChevronDown />}</button>
      </div>
      <div
        className={`border rounded-b-xl pl-4 pr-4 md:pl-20 w-full transition-all duration-200 break-keep ${
          open ? "py-4 md:py-6 border-brand-1" : "h-0 border-white"
        }`}
      >
        {open && <p>{description}</p>}
      </div>
    </div>
  );
};
