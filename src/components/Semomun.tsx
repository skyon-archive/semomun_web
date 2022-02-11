import React, { HTMLAttributes } from "react";

export interface SemomunProps extends HTMLAttributes<HTMLPreElement> {}

export const Semomun = ({ className = "" }) => (
  <pre className={`text-2xl font-bold text-brand-1 ${className}`}>
    <span className="text-5xl">세</span>상의{" "}
    <span className="text-5xl">모</span>든 <span className="text-5xl">문</span>
    제집
  </pre>
);
