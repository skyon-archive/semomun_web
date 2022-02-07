import React, { useEffect, useMemo, useState } from "react";
//import { useQuery } from "react-query";
import { useId } from "react-id-generator";

export const CartPage = () => {
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

  const [selectAll, setSelectAll] = useState(true);
  const [select, setSelect] = useState<boolean[]>([]);
  const [id] = useId(1, "checkbox");

  useEffect(() => {
    setSelectAll(true);
    setSelect(data.map(() => true));
  }, [data]);

  return (
    <div className="w-full flex justify-center mb-16">
      <div className="max-w-2xl w-full">
        <div className="my-12 px-3 space-y-2">
          <h3 className="font-medium text-xl">장바구니</h3>
          <p className="text-sm">
            상품은 파일로 전송되지 않습니다.
            <br />
            구매 후 즉시 세모문 앱에서 다운로드해 보실 수 있습니다.
          </p>
        </div>
        <div className="w-full border border-black rounded-sm px-12 py-3">
          <div className="flex items-center space-x-3 border-b border-black pb-3">
            <input
              type="checkbox"
              id={id}
              checked={selectAll}
              onChange={(e) => {
                setSelectAll(e.target.checked);
                setSelect(data.map(() => true));
              }}
            />
            <label htmlFor={id} className="text-sm">
              전체 선택
            </label>
          </div>
          {data.map((book, idx) => (
            <div
              className="flex w-full space-x-3 border-b border-gray-400 items-start py-3 h-38 max-w-full"
              key={book.id}
            >
              <input
                type="checkbox"
                checked={select[idx] ?? false}
                onChange={() => {
                  setSelect((vs) => vs.map((v, i) => (i === idx ? !v : v)));
                  setSelectAll(false);
                }}
                className="mr-2"
              />
              <img
                src={`https://saemomoon.com/images/bookcover/256x256/${book.bookcover}`}
                alt="bookcover"
                className="h-32 w-[6.4rem] object-cover"
              />
              <div className="text-sm space-y-1 flex-shrink flex-grow min-w-0 max-h-full">
                <p className="break-words min-h-0">{book.title}</p>
                <p className="text-gray-400 text-xs break-words">
                  {book.publisher}
                </p>
                <p className="text-xs pt-1">
                  구매 후 세모문 앱에서 다운로드 가능
                </p>
              </div>
              <div className="justify-between flex flex-col items-end h-full text-sm">
                <p>{book.price}</p>
                <button className="border-brand-2 rounded border px-2 py-0.5">
                  삭제
                </button>
              </div>
            </div>
          ))}
          <div className="w-full flex justify-center">
            <button className="bg-brand-4 text-white rounded px-6 py-2 mt-6 mb-4">
              선택 주문하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
