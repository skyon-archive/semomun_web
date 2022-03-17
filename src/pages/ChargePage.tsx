import React, { useState } from "react";
import { numberWithCommas } from "../utils";
import kakaoPay from "../assets/images/kakao_pay.png";
import { Button } from "../components/Button";

export const ChargePage = () => {
  const prices = [
    [1000, 3000, 5000],
    [10000, 30000, 50000],
    [100000, 300000, 500000],
  ];
  const [radio, setRadio] = useState(0);
  const [payment, setPayment] = useState("");
  const [agree, setAgree] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-xl w-full flex flex-col items-center bg-gray-200 space-y-1 md:space-y-0">
        <div className="pt-4 md:pt-8 w-full bg-white">
          <div className="w-full px-6">
            <h3 className="text-xl font-medium py-2">세모페이 충전</h3>
            <p className="text-sm text-gray-500 md:text-black">
              세모페이는 간편한 결제가 가능한 세모문 만의 결제 수단입니다.
              <br />
              충전하신 세모페이는 문제집을 구매하는 서비스에 모두 사용
              가능합니다.
              <br />
              <span className="hidden md:block">
                세모페이 사용후 남은 금액은 마이페이지{">"}충전내역에서 확인하실
                수 있습니다.
              </span>
            </p>
          </div>

          <div className="hidden md:grid grid-cols-3 grid-flow-col grid-rows-3 border-b border-gray-300 py-4 pl-12 bg-white">
            {prices
              .map((subPrices) =>
                subPrices.map((price) => (
                  <div key={price} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      checked={radio === price}
                      onChange={() => setRadio(price)}
                    />
                    <label className="text-sm">
                      {numberWithCommas(price)}원
                    </label>
                  </div>
                ))
              )
              .reduce((list, x) => [...list, ...x], [])}
          </div>
          <div className="flex flex-col md:hidden px-6">
            {prices.map((subPrices, idx) => (
              <div
                className={`flex flex-col py-3 ${
                  idx === 0 ? "" : "border-gray-200 border-t"
                }`}
              >
                {subPrices.map((price) => (
                  <div
                    className={`flex items-center justify-between py-2 px-6 rounded-sm ${
                      radio === price ? " bg-brand-5/20" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      checked={radio === price}
                      onChange={() => setRadio(price)}
                    />
                    <label className="font-bold">
                      {numberWithCommas(price)}원
                    </label>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="pt-3 border-b md:border-gray-300 pb-6 w-full bg-white px-6 border-0">
          <h4 className="font-medium py-2">결제 수단</h4>
          <div className="flex space-x-4 pl-12">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                checked={payment === "credit"}
                onChange={() => setPayment("credit")}
              />
              <label className="text-sm">신용카드</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                checked={payment === "kakao"}
                onChange={() => setPayment("kakao")}
              />
              <img src={kakaoPay} alt="카카오페이" className="h-4.5" />
            </div>
          </div>
        </div>

        <div className="w-full bg-white flex flex-col items-center">
          <div className="bg-brand-1 grid grid-cols-2 auto-cols-auto rounded text-sm w-fit text-white px-10 my-6 py-4 gap-y-2">
            <p>현재 세모페이</p>
            <p className="text-right">4,500원</p>
            <p className="text-red-800">충전 결제 금액</p>
            <p className="text-red-800 text-right">10,000원</p>
            <div className="col-span-2 h-[0.5px] bg-white -mx-2" />
            <p>충전 후 페이 금액</p>
            <p className="text-right">14,500원</p>
          </div>
          <div className="flex items-center space-x-2 my-2 px-4">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <label className="text-sm">
              주문 상품명, 가격, 정보, 유의 사항 등을 확인하였으며 구매에
              동의합니다.
            </label>
          </div>
          <Button
            bgColor="bg-brand-4"
            className="rounded-lg px-8 py-2 text-white mt-6 mb-12"
            disabled={!agree || radio === 0 || payment === ""}
          >
            충전하기
          </Button>
        </div>
      </div>
    </div>
  );
};
