import React from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Icon } from "../components/Icon";
import { MyPageAnnounce } from "./MyPage/MyPageAnnounce";
import { MyPageHome } from "./MyPage/MyPageHome";
import { MyPageInfo } from "./MyPage/MyPageInfo";
import { MyPageSemopay } from "./MyPage/MyPageSemopay";
import { MyPagePurchaseDetail } from "./MyPage/MyPagePurchaseDetail";
import { MyPagePurchase } from "./MyPage/MyPagePurchase";

const data = [
  { text: "HOME", route: "home" },
  { text: "구매 내역", route: "purchase" },
  { text: "세모페이", route: "semopay" },
  { text: "내 정보 관리", route: "info" },
  { text: "공지사항", route: "announce" },
];

export const MyPage = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-screen flex justify-center">
      <div className="w-full max-w-3xl flex flex-col">
        <p className="text-xl font-bold py-12">마이페이지</p>
        <div className="border-b border-brand-2 w-full flex pl-4">
          {data.map(({ text, route }) => {
            const selected = pathname.startsWith(`/mypage/${route}`);
            return (
              <Link to={route} key={route}>
                <svg viewBox="0 0 119 48" className="w-30 h-12">
                  <Icon.CurvyButton
                    className={
                      selected
                        ? "fill-brand-1 stroke-brand-1"
                        : "stroke-gray-400"
                    }
                  />
                  <text
                    textAnchor="middle"
                    x="60"
                    y="24"
                    alignmentBaseline="central"
                    className={
                      selected ? "fill-white font-bold" : "fill-gray-400"
                    }
                  >
                    {text}
                  </text>
                </svg>
              </Link>
            );
          })}
        </div>
        <Routes>
          <Route path="/home" element={<MyPageHome />} />
          <Route path="/purchase/:id" element={<MyPagePurchaseDetail />} />
          <Route path="/purchase" element={<MyPagePurchase />} />
          <Route path="/semopay" element={<MyPageSemopay />} />
          <Route path="/info/*" element={<MyPageInfo />} />
          <Route path="/announce" element={<MyPageAnnounce />} />
          <Route path="/*" element={<Navigate to="home" />} />
        </Routes>
      </div>
    </div>
  );
};
