import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import { Semomun } from "../components/Semomun";

export const ContactPage = () => {
  return (
    <div className="w-full flex justify-center space-y-16">
      <div className="max-w-5xl bg-brand-3 flex flex-col items-center w-full min-h-screen-12 space-y-10 py-10">
        <h2 className="font-bold text-3xl">기업문의</h2>
        <Semomun />
        <div className="flex flex-col space-y-4 text-sm">
          <p>안녕하세요.</p>
          <p className="font-semibold">
            저희는 “새로운 온라인 교육 패러다임”을 만드는 기업 스카이온 입니다.
          </p>
          <p>
            2020년 코로나 시기, 온라인 교육의 한계를 느끼고 온라인 교육의 혁신을
            이끌고자 2021년 1 월 창업되었습니다.
            <br />
            이후 온라인 교육 플랫폼의 혁신을 위한 에듀테크 기업으로 성장하고
            있습니다.
          </p>
          <p>
            스카이온에듀는 출판사들의 문제집을 “E-문제집”으로 전환 시켜드리는
            사업을 진행하고 있습니다.
            <br />
            자세한 내용은 사업제안서를 참고해주세요.
          </p>
          <p className="pt-10">
            E-문제집 입점, 투자문의, 기타제휴문의는 아래연락처로
            연락부탁드립니다.
          </p>
        </div>
        <p className="font-semibold text-sm text-center">
          E-mail:{" "}
          <a href="mailto:skyonad@gmail.com" className="underline">
            skyonad@gmail.com
          </a>
          <br />
          mobile: 010-7592-2316
        </p>
        <Link
          className="flex px-3 py-2 text-white space-x-2 rounded-md bg-brand-1"
          to="/skyon_proposal.pdf"
          download="스카이온에듀 서비스제휴제안서.pdf"
          target="_blank"
        >
          <Icon.Download />
          <p className="font-sm">사업제안서</p>
        </Link>
      </div>
    </div>
  );
};
