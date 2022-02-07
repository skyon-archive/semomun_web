import React from "react";
import { Icon } from "../components/Icon";
import whiteLogo from "../assets/images/white_logo.png";

export const PurchaseDonePage = () => {
  return (
    <div className="w-full min-h-full bg-gray-100 flex justify-center py-12">
      <div className="bg-white drop-shadow-[2px_0px_8px_#0002] rounded-lg max-w-2xl w-full flex flex-col stroke-0 items-center py-8">
        <Icon.BookDownload className="w-14 h-14" />
        <p className="font-medium py-4">구매가 완료되었습니다.</p>

        <div className="w-fit rounded-lg border border-black px-4 py-3">
          <div className="border-b border-gray-400 flex items-center text-sm space-x-4 pb-2 px-3">
            <div>
              <p>해커스 토익 실전 1000제 1 READING 문제집</p>
              <p className="text-gray-500">해커스 어학원</p>
            </div>
            <p className="text-gray-500">12,530원</p>
          </div>
          <div className="flex justify-between text-sm px-4 pt-3 pb-1 font-medium">
            <p>총 1권</p>
            <p>12,530원</p>
          </div>
        </div>

        <p className="font-medium mt-10">
          세모문 앱에서 문제를 풀어볼수 있습니다.
        </p>
        <p className="text-sm mt-1">구매 후 남은 페이는 환불 신청가능합니다.</p>

        <div className="flex space-x-2 mt-6">
          <button className="bg-brand-1 rounded text-white flex items-center justify-between py-1 w-30 px-1">
            <Icon.Books className="stroke-white stroke-1 w-6 h-6" />
            <p className="text-sm">구매내역</p>
            <Icon.ChevronRight className="w-4 h-4" />
          </button>
          <button className="bg-brand-1 rounded text-white flex items-center justify-between py-1 w-30 px-1">
            <img
              src={whiteLogo}
              alt="semomun logo"
              className="w-5 object-contain mr-1"
            />
            <p className="text-sm">앱으로 이동</p>
            <Icon.ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
