import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Pagination } from "../../components/Pagination";

export const MyPageSemopay = () => {
  const data = [
    {
      id: 1,
      createdAt: "2022.01.07 12:03",
      text: "세모페이 충전",
      charge: "+5,000원",
      use: "-25,000원",
      balance: "0원",
    },
    {
      id: 2,
      createdAt: "2022.01.07 12:03",
      text: "세모페이 충전",
      charge: "+10,000원",
      balance: "20,000원",
    },
    {
      id: 3,
      createdAt: "2022.01.07 12:03",
      text: "세모페이 충전",
      use: "-10,000원",
      balance: "10,000원",
    },
    {
      id: 4,
      createdAt: "2022.01.07 12:03",
      text: "세모페이 충전",
      charge: "+10,000원",
      balance: "20,000원",
    },
    {
      id: 5,
      createdAt: "2022.01.07 12:03",
      text: "세모페이 충전",
      use: "-10,000원",
      balance: "10,000원",
    },
  ];

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const page = Number(params.get("page") ?? "1");

  return (
    <div className="w-full pt-5 space-y-8">
      <div className="rounded bg-brand-1 flex mx-8 my-3 px-20 py-4 drop-shadow items-center justify-between">
        <div className="flex text-white space-x-4 items-center text-lg">
          <p className="font-medium">세모페이</p>
          <p className="font-bold">0원</p>
        </div>
        <div className="text-xs flex space-x-4 items-center">
          <Link className="bg-white rounded text-brand-1 px-2 py-1" to="charge">
            충전하기
          </Link>
          <Link className="underline text-white" to="/">
            환불하기
          </Link>
        </div>
      </div>
      <div className="px-3 pt-3 pb-12 text-sm w-full flex flex-col items-center">
        <div className="grid grid-cols-5 auto-rows-auto text-center gap-y-6 place-items-center w-full my-4">
          <p className="border-b border-gray-400 py-1 font-medium w-full">
            구매일자
          </p>
          <p className="border-b border-gray-400 py-1 font-medium w-full">
            목록
          </p>
          <p className="border-b border-gray-400 py-1 font-medium w-full">
            충전금액
          </p>
          <p className="border-b border-gray-400 py-1 font-medium w-full">
            사용금액
          </p>
          <p className="border-b border-gray-400 py-1 font-medium w-full">
            남은잔액
          </p>
          {data.map(({ id, createdAt, text, charge, use, balance }) => [
            <p key={`${id} createdAt`}>{createdAt}</p>,
            <p key={`${id} text`}>{text}</p>,
            <p key={`${id} charge`} className="text-blue-800 font-medium">
              {charge ?? ""}
            </p>,
            <p key={`${id} use`} className="text-red-700">
              {use ?? ""}
            </p>,
            <p key={`${id} balance`} className="">
              {balance ?? ""}
            </p>,
          ])}
        </div>
        <Pagination total={3} />
      </div>
    </div>
  );
};
