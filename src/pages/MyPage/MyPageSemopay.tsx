import React from "react";
import { MonthSelector } from "../../components/MonthSelector";

export const MyPageSemopay = () => {
  const data = [
    {
      createdAt: "2022.01.07 12:03",
      text: "세모페이 충전",
      price: "10,000원",
      type: "신용카드",
      balance: "4,000원",
      refund: false,
    },
    {
      createdAt: "2022.01.07 12:03",
      text: "세모페이 충전",
      price: "10,000원",
      type: "신용카드",
      balance: "4,000원",
      refund: false,
    },
    {
      createdAt: "2022.01.07 12:03",
      text: "세모페이 충전",
      price: "10,000원",
      type: "신용카드",
      balance: "4,000원",
      refund: true,
    },
    {
      createdAt: "2022.01.07 12:03",
      text: "세모페이 충전",
      price: "10,000원",
      type: "신용카드",
      balance: "4,000원",
      refund: false,
    },
    {
      createdAt: "2022.01.07 12:03",
      text: "세모페이 충전",
      price: "10,000원",
      type: "신용카드",
      balance: "4,000원",
      refund: false,
    },
  ];
  return (
    <div className="w-full pt-5 space-y-8">
      <MonthSelector />
      <div className="bg-gray-50 px-3 pb-12 pt-3 text-sm">
        <div className="grid grid-cols-auto-6 text-center gap-y-3 place-items-center">
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
            결제수단
          </p>
          <p className="border-b border-gray-400 py-1 font-medium w-full">
            남은잔액
          </p>
          <p className="border-b border-gray-400 py-1 font-medium w-full">
            환불신청
          </p>
          {data.map(({ createdAt, text, price, type, balance, refund }) => [
            <p>{createdAt}</p>,
            <p>{text}</p>,
            <p className="text-blue-800 font-medium">{price}</p>,
            <p>{type}</p>,
            <p className={refund ? "text-gray-400 line-through" : ""}>
              {balance}
            </p>,
            refund ? (
              <button className="border-brand-1 border rounded text-brand-1 py-1 w-fit px-3">
                환불완료
              </button>
            ) : (
              <button className="bg-brand-1 rounded text-white py-1 w-fit px-3">
                환불신청
              </button>
            ),
          ])}
        </div>
      </div>
    </div>
  );
};
