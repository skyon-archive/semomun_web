import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { range } from "../utils";

export interface PaginationProps {
  total: number;
  className?: string;
}

export const Pagination: FC<PaginationProps> = ({ total, className = "" }) => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const page = Number(params.get("page") ?? "1");

  let list;
  if (total <= 7) list = range(total, 1);
  else if (total <= 2 || page > total - 2)
    list = [1, 2, 3, 0, total - 2, total - 1, total];
  else if (page === 3) list = [1, 2, 3, 4, 0, total - 1, total];
  else if (page === total - 2)
    list = [1, 2, 0, total - 3, total - 2, total - 1, total];
  else list = [1, 0, page - 1, page, page + 1, 0, total];
  return (
    <div className={`flex space-x-3 ${className}`}>
      {list.map((i, idx) => (
        <Link
          key={idx}
          className={i === page ? "font-bold" : ""}
          to={`?page=${i}`}
        >
          {i}
        </Link>
      ))}
    </div>
  );
};
