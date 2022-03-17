import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/skyon_logo.png";
import textLogo from "../assets/images/skyon_logo_text.jpg";

export const Footer = () => {
  return (
    <>
      <div className="w-screen md:flex items-center h-40 drop-shadow-[0_-2px_10px_#0001] bg-white hidden">
        <img src={logo} className="h-20 ml-12 mr-8" alt="skyon logo" />
        <div className="text-sm">
          <div>
            <p>(주) 스카이온에듀 | 대표:신승민</p>
            <p>
              사업자등록번호: 165-8102191 | 통신판매업신고: 2021-서울동작-0139
              호
            </p>
            <p>사업장 주소: 서울특별시 동작구 사당로 295, 3층</p>
          </div>
          <div className="flex mt-1 space-x-8">
            <p>이용약관 {"&"} 개인정보처리방침</p>
            <p>© All Rights Reserved by Skyon</p>
          </div>
        </div>
      </div>
      <div className="md:hidden w-full drop-shadow-[0_-2px_10px_#0001] bg-white px-6 py-4 h-46 text-sm">
        <img src={textLogo} className="h-5 mr-8" alt="skyon logo" />
        <div className="flex my-3 space-x-3">
          <a href="/">이용약관</a>
          <a href="/">개인정보처리방침</a>
          <Link to="/contact">기업문의</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        <p className="text-xs">
          (주) 스카이온에듀 | 대표:신승민
          <br />
          사업자등록번호: 165-8102191
          <br />
          통신판매업신고: 2021-서울동작-0139 호<br />
          사업장 주소: 서울특별시 동작구 사당로 295, 3층
        </p>
        <p className="mt-3 mb-2 text-xs">© All Rights Reserved by Skyon</p>
      </div>
    </>
  );
};
