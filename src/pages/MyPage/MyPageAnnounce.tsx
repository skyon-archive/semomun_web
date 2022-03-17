import React, { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Pagination } from "../../components/Pagination";

interface RowProps {
  text1: string;
  text2: string;
  onClick?: () => void;
  className?: string;
  heading?: boolean;
}

const Row: FC<RowProps> = ({
  text1,
  text2,
  onClick,
  className = "",
  heading = false,
}) => (
  <div
    className={`flex w-full border-b border-gray-300 cursor-pointer ${
      heading ? "py-2 text-gray-700 text-xs" : "py-5 md:py-6 text-sm"
    } ${className}`}
    onClick={onClick}
  >
    <p
      className={`flex-grow ${
        heading ? "text-center" : "text-left pl-2 md:pl-6"
      }`}
    >
      {text1}
    </p>
    <p className="w-20 md:w-24 text-gray-700 text-center pr-2 md:pr-6">
      {text2}
    </p>
  </div>
);

export const MyPageAnnounce = () => {
  const data = [
    { id: 1, title: "[공지] 앱 업데이트 안내", createdAt: "2022.02.23" },
    { id: 2, title: "[공지] 앱 업데이트 안내", createdAt: "2022.02.23" },
    { id: 3, title: "[공지] 앱 업데이트 안내", createdAt: "2022.02.23" },
    { id: 4, title: "[공지] 앱 업데이트 안내", createdAt: "2022.02.23" },
  ];

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const page = Number(params.get("page") ?? "1");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-full py-4 mb-12 px-6 md:px-0">
      <p className="md:hidden self-start text-xs mb-6 mt-2">
        <span className="text-gray-500">마이페이지 {">"} </span>
        <span>공지사항</span>
      </p>
      <div className="flex flex-col w-full mb-6 border-b border-t border-black md:border-0">
        <Row className="md:hidden" text1="목록" text2="날짜" heading />
        {data.map(({ id, title, createdAt }) => (
          <Row
            text1={title}
            text2={createdAt}
            onClick={() => navigate(`${id}`)}
            key={id}
          />
        ))}
      </div>
      <Pagination total={3} />
    </div>
  );
};
