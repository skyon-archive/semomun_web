import React, { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useThinHeader } from "../hooks";

export const Header = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [keyword, setKeyword] = useState("");
  const thin = useThinHeader();

  useEffect(() => {
    const params = new URLSearchParams(search);
    setKeyword(params.get("keyword") ?? "");
  }, [search]);

  return (
    <div className="max-w-container flex flex-col items-center border-b border-gray-300">
      <div className="w-full h-8 bg-brand-1 flex items-center space-x-2 px-4">
        {thin && (
          <Link to="/" className="text-white px-2">
            세모문
          </Link>
        )}
        <div className="flex-grow" />
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

      {!thin && (
        <div className="max-w-6xl w-full h-24 flex items-center">
          <div className="w-64 flex items-center justify-center flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="logo" className="w-32" />
            </Link>
          </div>
          <div className="flex items-center justify-center flex-grow flex-shrink min-w-[150px]">
            <form
              className="w-full max-w-[450px] h-10 rounded-full border-brand-1 border-4 flex justify-center"
              onSubmit={(e) => {
                e.preventDefault();
                navigate(`/search?keyword=${keyword}`);
              }}
            >
              <input
                className="flex-grow mx-3 my-1 focus:outline-0 flex-shrink w-full"
                onChange={(e) => setKeyword(e.target.value)}
                value={keyword}
              />
              <button
                type="submit"
                className="w-16 text-xs border-l-4 border-brand-1"
              >
                검색
              </button>
            </form>
          </div>
          <div className="flex h-full space-x-3 justify-center items-center w-64 flex-shrink-0">
            <button
              className="text-brand-2 border-brand-1 border-2 rounded-md px-5 py-2 text-sm font-medium h-fit"
              onClick={() => alert("결제 기능은 준비 중입니다 :)")}
            >
              페이 충전
            </button>
            <button
              className="text-brand-2 border-brand-1 border-2 rounded-md px-5 py-2 text-sm font-medium h-fit"
              onClick={() => alert("결제 기능은 준비 중입니다 :)")}
            >
              장바구니
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
