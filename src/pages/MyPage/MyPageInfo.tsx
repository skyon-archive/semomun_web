import React from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { MyPageInfoEdit } from "./MyPageInfoEdit";
import { MyPageWithdraw } from "./MyPageWithdraw";

export const MyPageInfo = () => {
  const tabs = [
    { text: "개인정보 수정", route: "edit" },
    { text: "회원 탈퇴", route: "withdraw" },
  ];
  const { pathname } = useLocation();

  return (
    <div className="w-full">
      <p className="text-xs md:hidden mt-4 ml-6">
        <span className="text-gray-500">
          마이페이지 {">"} 내정보관리 {">"}{" "}
        </span>
        <span>
          {pathname.startsWith("/mypage/info/edit")
            ? "개인정보수정"
            : "회원탈퇴"}
        </span>
      </p>
      <div className="flex bg-brand-3 py-1 px-6 md:px-8 space-x-2 my-5">
        {tabs.map(({ text, route }) => (
          <Link
            to={route}
            className={`rounded-sm text-sm px-2 py-0.5 ${
              pathname === `/mypage/info/${route}`
                ? "bg-brand-1 text-white"
                : "bg-white"
            }`}
          >
            {text}
          </Link>
        ))}
      </div>
      <Routes>
        <Route path="/edit" element={<MyPageInfoEdit />} />
        <Route path="/withdraw" element={<MyPageWithdraw />} />
        <Route path="/*" element={<Navigate to="edit" />} />
      </Routes>
    </div>
  );
};
