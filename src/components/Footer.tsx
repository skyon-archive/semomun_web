import React from "react";
import logo from "../assets/images/skyon_logo.png";

export const Footer = () => {
  return (
    <div className="max-w-container flex items-center h-40">
      <img src={logo} className="h-20 ml-12 mr-8" alt="skyon logo" />
      <div className="text-sm">
        <div>
          <p>(주) 스카이온에듀 | 대표:신승민</p>
          <p>
            사업자등록번호: 165-8102191 | 통신판매업신고: 2021-서울동작-0139 호
          </p>
          <p>사업장 주소: 서울특별시 동작구 사당로 295, 3층</p>
        </div>
        <div className="flex mt-1 space-x-8">
          <p>이용약관 {"&"} 개인정보처리방침</p>
          <p>© All Rights Reserved by Skyon</p>
        </div>
      </div>
    </div>
  );
};
