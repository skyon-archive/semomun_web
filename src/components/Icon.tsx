import { ComponentType, FC, SVGProps } from "react";
import { ReactComponent as Download } from "../assets/icons/icon-download.svg";
import { ReactComponent as ChevronDown } from "../assets/icons/icon-chevron-down.svg";
import { ReactComponent as ChevronUp } from "../assets/icons/icon-chevron-up.svg";
import { ReactComponent as ChevronRight } from "../assets/icons/icon-chevron-right.svg";
import { ReactComponent as CurvyButton } from "../assets/icons/icon-curvy-button.svg";
import { ReactComponent as ArrowRight } from "../assets/icons/icon-arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../assets/icons/icon-arrow-left.svg";
import { ReactComponent as X } from "../assets/icons/icon-x.svg";
import { ReactComponent as BookDownload } from "../assets/icons/icon-book-download.svg";
import { ReactComponent as Books } from "../assets/icons/icon-books.svg";
import { ReactComponent as SemoPay } from "../assets/icons/icon-semo-pay.svg";
import { ReactComponent as Bag } from "../assets/icons/icon-bag.svg";
import { ReactComponent as Apple } from "../assets/icons/icon-apple.svg";
import { ReactComponent as Google } from "../assets/icons/icon-google.svg";
import { ReactComponent as Person } from "../assets/icons/icon-person.svg";

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
  ChevronRight: withStroke(ChevronRight),
  CurvyButton: withStroke(CurvyButton),
  ArrowRight: withStroke(ArrowRight),
  ArrowLeft: withStroke(ArrowLeft),
  X: withStroke(X),
  BookDownload: withStroke(BookDownload),
  Books: withStroke(Books),
  SemoPay: withStroke(SemoPay),
  Bag: withStroke(Bag),
  Apple: withStroke(Apple),
  Google: withStroke(Google),
  Person: withStroke(Person),
};
