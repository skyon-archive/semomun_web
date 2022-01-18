import React from "react";

export const MyPageHome = () => {
  return (
    <div className="flex flex-col space-y-12">
      <div className="flex pt-12 justify-between items-start">
        <div className="flex flex-col space-y-1">
          <p className="font-bold text-xl">홍길동님 오늘 하루도 화이팅!</p>
          <p className="text-gray-400 text-sm">skyonad2020@naver.com</p>
        </div>
        <div className="border-black border w-72 h-44 rounded-sm flex flex-col items-end space-y-2">
          <div className="pt-6 flex items-center w-full">
            <p className="px-8">세모페이</p>
            <div className="bg-black h-2 flex-grow" />
          </div>
          <p className=" pt-3 font-bold text-2xl mr-4">35,000원</p>
          <button className="rounded-full bg-brand-4 text-white px-3 py-1 mr-4 text-sm">
            충전하기
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex items-center space-x-4">
          <p className="font-bold">최근 풀어본 문제집</p>
          <div className="bg-gray-400 flex-grow border" />
        </div>
      </div>
    </div>
  );
};
