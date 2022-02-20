import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../../components/Icon";

export const MyPageMain = () => {
  const data = [
    { text: "home", route: "home" },
    { text: "구매내역", route: "purchase" },
    { text: "세모페이", route: "semopay" },
    { text: "내정보관리", route: "info" },
    { text: "공지사항", route: "announce" },
  ];

  return (
    <div className="min-h-screen-14 relative">
      <div className="bg-gray-300 w-full pt-4 px-6 space-y-3 pb-6">
        <p className="font-medium">세모페이</p>
        <p className="font-bold text-2xl pb-1">150,000원</p>
        <button className="bg-white rounded-full flex text-brand-2 items-center py-1 px-2">
          <Icon.AddCircle className="w-5 h-5 stroke-brand-2 stroke-1" />
          <p className="font-bold text-sm">충전하기</p>
        </button>
      </div>
      <div className="flex flex-col px-6">
        {data.map(({ text, route }, idx) => (
          <Link
            className={`border-gray-200 font-medium text-gray-500 py-4 ${
              idx !== data.length - 1 ? "border-b" : ""
            }`}
            to={route}
          >
            {text}
          </Link>
        ))}
      </div>
      <Link
        to="/login"
        className="absolute right-6 bottom-8 bg-brand-1 text-white font-medium rounded-full px-4 py-1 text-sm"
      >
        로그아웃
      </Link>
    </div>
  );
};
