import React from "react";
import { Link } from "react-router-dom";

export const MyPageAnnounceDetail = () => {
  const title = "[공지] 앱 업데이트 안내";
  const createdAt = "2022.02.23";
  const text = `안녕하세요. 세모문입니다.

  세모페이에서 이용 가능한 결제사가 추가될 예정으로 안내드립니다.

  - 추가 일시 : 2022년 2월 1일 오전 10시

  - 추가 내용 : 세모페이에서 카카오뱅크, NH투자증권, SBI저축은행 등록 및 결제 가능

  앞으로도 더 나은 서비스를 위해 노력하는 세모문이 되겠습니다.

  감사합니다.`;

  return (
    <div className="flex flex-col mt-8 mx-6 min-h-screen-18 items-center">
      <div className="w-full border-b border-gray-300 px-16 py-4">
        <p>{title}</p>
        <p className="text-sm text-gray-600">{createdAt}</p>
      </div>
      <p className="px-16 py-4 whitespace-pre-line text-sm w-full">{text}</p>
      <div className="flex-grow" />
      <Link
        to="/mypage/announce"
        className="bg-brand-1 text-white rounded px-16 py-1 mb-12 mt-24"
      >
        목록으로
      </Link>
    </div>
  );
};
