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
      <div className="flex bg-brand-3 py-1 px-8 space-x-2 my-5">
        {tabs.map(({ text, route }) => (
          <Link
            to={route}
            className={`rounded text-sm px-2 py-0.5 ${
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
