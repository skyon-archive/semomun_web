import React, { useMemo, useState } from "react";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";
import { Modal } from "../components/Modal";
import cardImage from "../assets/images/semo_pay_card.png";
//import { useQuery } from "react-query";

export const PurchasePage = () => {
  //const {data} = useQuery<>();
  const data = useMemo(
    () => [
      {
        id: 1,
        title: "해커스 토익 실전 1000제 1 READING 문제집",
        publisher: "해커스 어학연구소 저",
        type: "workbook",
        price: "999,999,999 원",
        bookcover: "50670920-68d0-47cd-be2e-cfe4e44be17c.png",
      },
      {
        id: 2,
        title: "해커스 토익 실전 1000제 1 READING 문제집",
        publisher: "해커스 어학연구소 저",
        type: "workbook",
        price: "999,999,999 원",
        bookcover: "50670920-68d0-47cd-be2e-cfe4e44be17c.png",
      },
      {
        id: 3,
        title: "해커스 토익 실전 1000제 1 READING 문제집",
        publisher: "해커스 어학연구소 저",
        type: "workbook",
        price: "999,999,999 원",
        bookcover: "50670920-68d0-47cd-be2e-cfe4e44be17c.png",
      },
    ],
    []
  );

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [popup, setPopup] = useState(false);

  return (
    <>
      <Modal
        open={popup}
        onClose={() => setPopup(false)}
        className="flex flex-col items-center rounded"
      >
        <button
          className="self-end m-2 h-5 w-5"
          onClick={() => setPopup(false)}
        >
          <Icon.X className="h-full w-full" />
        </button>
        <p className="mt-4 mb-10">
          <span className="font-bold">세모페이</span>로만 결제가 가능합니다.
        </p>
        <div className="flex items-center mx-12 space-x-2">
          <img src={cardImage} alt="세모페이 카드" className="h-32" />
          <div className="grid grid-cols-2 h-fit gap-x-4 text-sm">
            <p className="text-right">주문금액</p>
            <p className="h-fit">999,999,999원</p>
            <p className="text-right">세모페이 잔액</p>
            <p>0원</p>
            <p className="text-right">세모페이 충전액</p>
            <p>999,999,999원</p>
          </div>
        </div>
        <button className="bg-brand-4 text-white rounded mt-10 mb-14 px-4 py-1.5">
          세모페이 충전하고 바로 구매하기
        </button>
      </Modal>
      <div className="w-full flex justify-center mb-16">
        <div className="max-w-2xl w-full">
          <div className="my-12 px-3 space-y-2">
            <h3 className="font-medium text-xl">주문하기</h3>
            <p className="text-sm">
              상품은 파일로 전송되지 않습니다.
              <br />
              구매 후 즉시 세모문 앱에서 다운로드해 보실 수 있습니다.
            </p>
          </div>

          <div className="w-full grid grid-cols-[auto_1fr_auto] gap-y-6 drop-shadow-[2px_0px_8px_#0002] bg-white">
            <div className="bg-brand-1 text-white rounded-tl-lg py-1" />
            <div className="bg-brand-1 text-white text-center py-1">제품</div>
            <div className="bg-brand-1 text-white text-center rounded-tr-lg pr-12 py-1">
              금액
            </div>
            {data.map((book, idx) => [
              <img
                src={`https://saemomoon.com/images/bookcover/256x256/${book.bookcover}`}
                alt="bookcover"
                className="h-32 w-[6.4rem] object-cover ml-14"
              />,
              <div className="text-sm space-y-1 flex-shrink flex-grow min-w-0 max-h-full px-3">
                <p className="break-words min-h-0">{book.title}</p>
                <p className="text-gray-400 text-xs break-words">
                  {book.publisher}
                </p>
                <p className="text-xs pt-1">
                  구매 후 세모문 앱에서 다운로드 가능
                </p>
              </div>,
              <div className="justify-between flex flex-col items-end h-full text-sm mr-12">
                <p>{book.price}</p>
              </div>,
              <div className="col-span-3 bg-gray-400 h-[1px] mx-12" />,
            ])}
            <div className="col-span-3 bg-brand-1 rounded-b-lg flex text-white font-bold justify-end pr-16 space-x-8 h-14 items-center">
              <p>총 주문 금액</p>
              <p>999,999,999 원</p>
            </div>
          </div>

          <div className="px-12 mt-12">
            <div className="flex space-x-4">
              <p className="font-medium">총 결제 금액</p>
              <p className="font-bold">
                <span className="text-red-700">999,999,999</span> 원
              </p>
            </div>

            <p className="mt-8">안내사항</p>
            <div className="mt-1.5 text-sm pl-4">
              <p>
                본 제품은 최초 구매 이후 기간의 제안 없이 사용하실 수 있습니다.
              </p>
              <p>
                구매하신 제품은{" "}
                <span className="text-red-700 underline">환불이 불가능</span>
                합니다.
              </p>
              <div className="flex items-center mt-2 space-x-2">
                <input
                  type="checkbox"
                  checked={check1}
                  onChange={(e) => setCheck1(e.target.checked)}
                />
                <label>안내사항을 확인 하였습니다.</label>
              </div>
            </div>

            <p className="mt-8">구매 동의</p>
            <div className="flex items-center mt-2 space-x-2 text-sm pl-4">
              <input
                type="checkbox"
                checked={check2}
                onChange={(e) => setCheck2(e.target.checked)}
              />
              <label>
                주문 상품명, 가격, 정보, 안내사항 등을 확인하였으며 구매에
                동의합니다.
              </label>
            </div>
          </div>
          <div className="w-full flex justify-center mt-8">
            <Button
              className="bg-brand-4 text-white px-8 py-2 rounded-lg font-bold"
              disabled={!check1 || !check2}
              onClick={() => setPopup(true)}
            >
              결제하기
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
