import React from "react";
import { Icon } from "../components/Icon";
import whiteLogo from "../assets/images/white_logo.png";

export const ChargeDonePage = () => {
  return (
    <div className="w-full min-h-screen-72 bg-white md:bg-gray-100 flex justify-center pt-12 pb-16 md:py-12">
      <div className="bg-white md:drop-shadow-[2px_0px_8px_#0002] rounded-lg max-w-lg w-full flex flex-col stroke-0 items-center py-8 h-fit">
        <Icon.SemoPay className="h-24 w-24" />
        <p className="font-medium py-3">
          홍길동님의 세모페이 충전이 완료되었습니다.
        </p>
        <p className="text-center text-sm">
          세모페이로 문제집을 구매할 수 있습니다.
          <br />
          구매한 문제집은 세모문 앱에서 사용할 수 있습니다.
        </p>
        <div className="flex mt-6 space-x-2">
          <button className="bg-brand-1 rounded flex items-center py-1.5 justify-between w-36 px-1">
            <Icon.Bag className="fill-white w-4 h-4 mx-1" />
            <p className="text-white text-sm">장바구니로 이동</p>
            <Icon.ChevronRight className="stroke-white w-4 h-4" />
          </button>
          <button className="bg-brand-1 rounded flex items-center py-1.5 justify-between w-36 px-1">
            <img
              src={whiteLogo}
              alt="semomun logo"
              className="w-5 object-contain mx-1"
            />
            <p className="text-white text-sm">앱으로 이동</p>
            <Icon.ChevronRight className="stroke-white w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
