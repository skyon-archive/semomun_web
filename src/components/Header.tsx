import React, { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export const Header = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="max-w-container flex flex-col items-center border-b border-gray-300">
      <div className="w-full h-8 bg-brand-1 flex justify-end items-center space-x-2 pr-4">
        <Link to="/faq" className="text-white text-sm text-medium px-2">
          FAQ
        </Link>
        <Link to="/contact" className="text-white text-sm text-medium px-2">
          기업문의
        </Link>
        {/*<Link to="mypage" className="text-white text-sm text-medium px-2">
          마이페이지
        </Link>
        <button className="text-brand-1 text-sm text-medium rounded-full bg-white px-4 py-1">
          로그아웃
  </button>*/}
      </div>

      <div className="max-w-6xl w-full h-24 grid grid-cols-[250px_1fr_250px] justify-items-center items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-32" />
        </Link>
        <div className="flex items-center justify-center">
          <form
            className="w-[450px] h-10 rounded-full border-brand-1 border-4 flex justify-center"
            onSubmit={(e) => {
              e.preventDefault();
              navigate(`/search?keyword=${ref.current?.value}`);
            }}
          >
            <input className="flex-grow mx-3 my-1 focus:outline-0" ref={ref} />
            <button
              type="submit"
              className="w-16 text-xs border-l-4 border-brand-1"
            >
              검색
            </button>
          </form>
        </div>
        <div className="flex h-full w-full space-x-3 justify-center items-center">
          <button
            className="text-brand-2 border-brand-1 border-2 rounded-md px-5 py-2 text-sm font-medium"
            onClick={() => alert("결제 기능은 준비 중입니다 :)")}
          >
            페이 충전
          </button>
          <button
            className="text-brand-2 border-brand-1 border-2 rounded-md px-5 py-2 text-sm font-medium"
            onClick={() => alert("결제 기능은 준비 중입니다 :)")}
          >
            장바구니
          </button>
        </div>
      </div>
    </div>
  );
};
