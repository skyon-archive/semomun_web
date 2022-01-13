import React from "react";
import logo from "../assets/images/logo.png";

export const Header = () => {
  return (
    <div className="max-w-container flex flex-col items-center">
      <div className="w-full h-8 bg-brand-1 flex justify-end items-center space-x-2 pr-4">
        <button className="text-white text-sm text-medium px-2">FAQ</button>
        <button className="text-white text-sm text-medium px-2">
          기업문의
        </button>
        <button className="text-white text-sm text-medium px-2">
          마이페이지
        </button>
        <button className="text-brand-1 text-sm text-medium rounded-full bg-white px-4 py-1">
          로그아웃
        </button>
      </div>
      <div className="max-w-6xl w-full h-24 grid grid-cols-[250px_1fr_250px] justify-items-center items-center">
        <img src={logo} alt="logo" className="w-32" />
        <div className="flex items-center justify-center">
          <div className="w-[450px] h-10 rounded-full border-brand-1 border-4 flex justify-center">
            <input className="flex-grow mx-3 my-1 focus:outline-0" />
            <button className="w-16 text-xs border-l-4 border-brand-1">
              검색
            </button>
          </div>
        </div>
        <div className="flex h-full w-full space-x-3 justify-center items-center">
          <button className="text-brand-2 border-brand-1 border-2 rounded-md px-5 py-2 text-sm font-medium">
            페이 충전
          </button>
          <button className="text-brand-2 border-brand-1 border-2 rounded-md px-5 py-2 text-sm font-medium">
            장바구니
          </button>
        </div>
      </div>
    </div>
  );
};
