import React from "react";
import { Accordion } from "../components/Accordion";

const data = [
  {
    question: "세모문은 어떤 서비스 인가요?",
    answer: (
      <>
        필기 기능이 있어 태블릿에서 한문제씩 문제를 풀고 채점할 수 있는 어플을
        제공할 예정입니다.
        <br />
        유형별로 분류된 각종 기출문제와 기성 참고서를 태블릿과 태블릿 펜을
        이용해 앱 내에서 간편하게 풀 수 있습니다.
        <br />
        또한 정답율, 문제풀이 시간 등의 풀이내역을 인공지능이 분석하여 개개인의
        취약 개념 및 유형, 전국 등수,
        <br />
        성적 변화 추이 등을 학습 리포트 형태로 제공하고, 맞춤 문제와 참고서를
        추천하는 서비스입니다.
      </>
    ),
  },
  {
    question: "E-문제집이란 무엇인가요?",
    answer: (
      <>
        E- 문제집이란 전자기기에서 문제를 구매, 학습, 분석할 수 있는
        서비스입니다.
        <br />
        기존의 종이문제집과 달리, 무게, 오염에서 자유롭고 학습효율을
        향상시켜주는 서비스입니다.
      </>
    ),
  },
  {
    question: "어떻게 이용할 수 있나요?",
    answer: (
      <>
        아이패드 내 “앱스토어”에서 “세모문”을 검색하시면 다운받으실 수 있습니다.
        <br />
        기본 기출문제, 기본 문제집은 무료로 제공됩니다. :)
        <br />
        세모문 웹페이지(www.semomun.com)에서 세모페이를 구매하고, 앱에서
        자유롭게 사용하시면 됩니다.
        <br />
      </>
    ),
  },
  {
    question: "책은 어떻게 구매할 수 있나요?",
    answer: (
      <>
        세모문 웹페이지(www.semomun.com)에서 세모페이를 구매하고,
        <br />
        세모페이를 이용해 문제집을 구매하실 수 있습니다.
        <br />
        웹에서 세모페이를 충전하신 후에는 앱에서도 세모페이를 이용해 문제집을
        구매하실 수 있습니다.
      </>
    ),
  },
  {
    question: "“세모페이”는 무엇인가요?",
    answer: (
      <>
        “세모페이”는 세모문 플랫폼내에서 E-문제집을 구매할 수 있는 서비스입니다.
        <br />
        충전 후 세모문 플랫폼 내에서 어떤 문제집이던 자유롭게 구매하실 수
        있으십니다.
      </>
    ),
  },
  {
    question: "도서소득공제는 받을 수 있나요?",
    answer: <>아쉽게도 도서소득공제는 현재 받으실 수 없습니다.</>,
  },
  {
    question: "문제집은 어느 정도 기간 동안 풀 수 있나요?",
    answer: <>문제집은 구매 후 1년간 풀 수 있으며, 중도 환불은 불가능합니다.</>,
  },
];

export const FAQPage = () => {
  return (
    <div className="w-full flex flex-col items-center mb-6">
      <h2 className="font-bold text-3xl py-6 md:py-16">FAQ</h2>
      <div className="flex flex-col w-full max-w-3xl space-y-3 px-4">
        {data.map(({ question, answer }, idx) => (
          <Accordion
            className="w-full text-sm"
            key={idx}
            title={question}
            description={answer}
            idx={idx + 1}
          />
        ))}
      </div>
    </div>
  );
};
