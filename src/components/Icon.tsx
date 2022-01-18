import { ComponentType, FC, SVGProps } from "react";
import { ReactComponent as Download } from "../assets/icons/icon-download.svg";
import { ReactComponent as ChevronDown } from "../assets/icons/icon-chevron-down.svg";
import { ReactComponent as ChevronUp } from "../assets/icons/icon-chevron-up.svg";

function withStroke<T extends SVGProps<SVGSVGElement>>(
  Icon: ComponentType<T>
): FC<T> {
  return ({ className = "", ...props }) => (
    <Icon className={`stroke-current ${className}`} {...(props as T)} />
  );
}

export const Icon = {
  Download: withStroke(Download),
  ChevronDown: withStroke(ChevronDown),
  ChevronUp: withStroke(ChevronUp),
};
