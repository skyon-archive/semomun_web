import React from "react";
import { useNavigate } from "react-router-dom";
import { range } from "../../utils";

export const MyPagePurchase = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full pt-5 min-h-screen-60 md:min-h-0 bg-gray-50 md:bg-white flex flex-col">
      <p className="md:hidden text-xs px-6">
        <span className="text-gray-500">마이페이지 {">"} </span>
        <span>구매내역</span>
      </p>
      <div className="bg-brand-1 rounded-full text-white text-sm px-4 py-1 self-center my-6">
        2022.01
      </div>

      <div className="flex flex-col mx-6 space-y-2">
        {range(1).map((i) => (
          <div className="flex px-3 md:px-0 py-3 items-center rounded drop-shadow bg-white flex-col md:flex-row">
            <p className="font-bold md:px-8 text-sm self-start md:self-center mb-2">
              결제완료
            </p>
            <div className="flex flex-grow">
              <img
                src="https://saemomoon.com/images/bookcover/256x256/50670920-68d0-47cd-be2e-cfe4e44be17c.png"
                alt="bookcover"
                className="h-25 w-20 md:w-26 md:h-32 object-cover flex-shrink-0 self-center"
              />
              <div className="flex flex-col md:flex-row flex-grow">
                <div className="pl-2 md:pl-6 text-sm space-y-1 flex-grow">
                  <p className="text-gray-600">2022.01.01</p>
                  <p className="font-medium text-sm md:text-normal leading-tight">
                    가나다라마바사아자차카타파하 한글 깨치기
                  </p>
                </div>
                <div
                  className="md:text-right flex flex-col pr-8 pl-2 md:pl-4 items-start md:items-end h-full justify-center mt-2 md:mt-0"
                  onClick={() => navigate(`${520225164325}`)}
                >
                  <p className="font-bold">10,000 원</p>
                  <p className="text-gray-500 text-xs">상세내역 확인하기</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
