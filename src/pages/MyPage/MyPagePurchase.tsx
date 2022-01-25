import React from "react";
import { range } from "../../utils";

export const MyPagePurchase = () => {
  const months = ["3개월", "6개월", "9개월", "12개월"];
  return (
    <div className="w-full pt-5 space-y-12">
      <div className="flex bg-brand-3 py-1 px-4 space-x-2">
        <div className="flex space-x-1.5">
          {months.map((month) => (
            <button
              key={month}
              className="rounded bg-white text-sm px-2 py-0.5"
            >
              {month}
            </button>
          ))}
        </div>
        <div className="flex-grow" />
        <div className="rounded-full bg-white flex px-3 text-sm space-x-2">
          <input className="w-36" type="date" />
          <p>~</p>
          <input className="w-36" type="date" />
        </div>
        <button className="rounded-full bg-white px-4 py-0.5 text-sm">
          검색
        </button>
      </div>

      <div className="flex w-full justify-center">
        <div className="bg-brand-1 rounded-full text-white text-sm px-4 py-1">
          2022.01
        </div>
      </div>

      <div className="flex flex-col mx-6">
        {range(3).map((i) => (
          <div
            className={`flex py-3 px-6 ${
              i === 0 ? "" : "border-t border-gray-300"
            }`}
          >
            <div className="flex w-26 items-center justify-center">
              <img
                src="https://saemomoon.com/images/bookcover/256x256/50670920-68d0-47cd-be2e-cfe4e44be17c.png"
                alt="bookcover"
                className="w-26 h-32 object-cover"
              />
            </div>
            <div className="pl-6 text-sm space-y-1 flex-grow">
              <p>가나다라마바사아자차카타파하 한글 깨치기</p>
              <p className="font-bold">1,000,000 원</p>
              <p className="pt-1">2222년 22년 22일 15:40</p>
            </div>
            <div className="text-sm text-center flex flex-col mt-1">
              <p>세모페이</p>
              <div className="flex-grow flex flex-col justify-center">
                <p>520225164325</p>
                <p>주문 상세 내역 →</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
