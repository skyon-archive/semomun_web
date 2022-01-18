import { ComponentType, FC, SVGProps } from "react";
import { ReactComponent as Download } from "../assets/icons/icon-download.svg";

function withStroke<T extends SVGProps<SVGSVGElement>>(
  Icon: ComponentType<T>
): FC<T> {
  return ({ className = "", ...props }) => (
    <Icon className={`stroke-current ${className}`} {...(props as T)} />
  );
}

export const Icon = {
  Download: withStroke(Download),
};
