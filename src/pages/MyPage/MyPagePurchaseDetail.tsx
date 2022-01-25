import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "../../components/Icon";

export const MyPagePurchaseDetail = () => {
  const params: any = useParams();
  const navigate = useNavigate();

  const data = {
    names: [
      "가나다라마바사아자차카타파하 한글 깨치기1 (15,000원)",
      "가나다라마바사아자차카타파하 한글 깨치기2 (15,000원)",
    ],
    count: "총 2권",
    orderPrice: "30,000원",
    pay: "10,000원",
    purchasePrice: "20,000원",
    purchaseType: "카카오페이",
    deduction: "소득공제 가능",
  };

  return (
    <div className="w-full flex flex-col items-center space-y-5 my-12">
      <div className="flex max-w-xl w-full space-x-4 items-center">
        <button onClick={() => navigate("/mypage/purchase")}>
          <Icon.ArrowLeft className="stroke-0" />
        </button>
        <p>주문번호 {params.id}</p>
      </div>
      <div className="max-w-lg border border-gray-400 w-full px-5 grid grid-cols-[auto_1fr] pt-3 text-sm">
        <p className="border-b border-gray-300 py-3 px-2">상품명</p>
        <div className="border-b border-gray-300 space-y-2 py-3">
          {data.names.map((name) => (
            <p>{name}</p>
          ))}
        </div>
        <p className="border-b border-gray-300 py-3 px-2">주문수량</p>
        <p className="border-b border-gray-300 py-3">{data.count}</p>
        <p className="border-b border-gray-300 py-3 px-2">주문금액</p>
        <p className="border-b border-gray-300 py-3">{data.orderPrice}</p>
        <p className="border-b border-gray-300 py-3 px-2">세모페이</p>
        <p className="border-b border-gray-300 py-3">{data.pay}</p>
        <p className="border-b border-gray-300 py-3 px-2">결제금액</p>
        <p className="border-b border-gray-300 py-3">{data.purchasePrice}</p>
        <p className="border-b border-gray-300 py-3 px-2">결제수단</p>
        <p className="border-b border-gray-300 py-3">{data.purchaseType}</p>
        <p className="border-b border-gray-300 py-3 pl-2 pr-6">문화소득공제</p>
        <p className="border-b border-gray-300 py-3">{data.deduction}</p>
        <div className="col-span-2 text-white space-x-3 text-xs py-3 px-2">
          <button className="bg-brand-1 rounded-sm px-3 py-1">
            영수증 인쇄
          </button>
          <button className="bg-brand-1 rounded-sm px-3 py-1">
            신용카드 전표 인쇄
          </button>
        </div>
      </div>
    </div>
  );
};
