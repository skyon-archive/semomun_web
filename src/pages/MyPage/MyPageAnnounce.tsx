import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Pagination } from "../../components/Pagination";

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
    <div className="flex flex-col items-center w-full py-4 mb-12">
      <div className="flex flex-col w-full mb-6">
        {data.map(({ id, title, createdAt }) => (
          <div
            className="flex w-full py-6 border-b border-gray-300 px-6 text-sm cursor-pointer"
            onClick={() => navigate(`${id}`)}
          >
            <p className="flex-grow">{title}</p>
            <p className="w-24 text-gray-500 text-right">{createdAt}</p>
          </div>
        ))}
      </div>
      <Pagination total={3} />
    </div>
  );
};
