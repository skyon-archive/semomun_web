import React from "react";
import img1 from "../assets/images/landing1.png";
import img2 from "../assets/images/landing2.png";
import img3 from "../assets/images/landing3.png";
import img4 from "../assets/images/landing4.png";
import img5 from "../assets/images/landing5.png";

export const LandingPage = () => {
  return (
    <div className="flex flex-col items-center w-screen py-8">
      <div className="flex items-center justify-center w-full max-w-4xl">
        <pre className="text-black font-bold text-3xl">
          <span className="text-5xl text-brand-1">세</span>상의{" \n"}
          <span className="text-5xl text-brand-1">모</span>든{" \n"}
          <span className="text-5xl text-brand-1">문</span>
          제집
        </pre>
        <img src={img1} alt="아이패드 이미지" className="w-4/6" />
      </div>
      <img src={img2} alt="홍보 이미지 1" className="w-full" />
      <img src={img3} alt="홍보 이미지 2" className="w-full" />
      <img src={img4} alt="홍보 이미지 3" className="w-full" />
      <img src={img5} alt="홍보 이미지 4" className="w-full" />
    </div>
  );
};
