import React, { FC, HTMLAttributes } from "react";
import { Checkbox } from "../../components/Checkbox";
import { Select } from "../../components/Select";
import { Switch } from "../../components/Switch";
import { TextField } from "../../components/TextField";
import { range } from "../../utils";

interface RowProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
}

const Row: FC<RowProps> = ({ label, className, children, ...props }) => {
  return (
    <div
      className={`flex border-b border-gray-300 items-center py-3 pr-6 w-full ${className}`}
      {...props}
    >
      <p className="w-18 md:w-36 text-left md:text-center pl-2 shrink-0 break-keep">
        {label}
      </p>
      {children}
    </div>
  );
};

export const MyPageInfoEdit = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col px-4 md:px-12 text-sm mb-12 items-center">
      <Row label="이메일">
        <TextField placeholder="이메일을 입력해 주세요." />
      </Row>
      <Row label="이름">
        <TextField placeholder="홍길동" />
      </Row>
      <Row label="닉네임">
        <TextField placeholder="홍길동" />
      </Row>
      <Row label="생년월일">
        <div className="flex space-x-2">
          <Select>
            {range(currentYear - 1900, 1901).map((year) => (
              <option value={year} key={year}>
                {year}년
              </option>
            ))}
          </Select>
          <Select>
            {range(12, 1).map((month) => (
              <option value={month} key={month}>
                {month}월
              </option>
            ))}
          </Select>
          <Select>
            {range(31, 1).map((day) => (
              <option value={day} key={day}>
                {day}일
              </option>
            ))}
          </Select>
        </div>
      </Row>
      <Row label="휴대전화" className="w-full">
        <div className="flex flex-col space-y-1 w-full">
          <div className="flex items-center space-x-3 w-full">
            <TextField
              placeholder="010-0000-0000"
              containerClassName="grow w-0 md:grow-0 md:w-64"
            />
            <button className="h-7 border rounded border-gray-600 px-2 shrink-0">
              인증번호 받기
            </button>
          </div>
          <div className="flex items-center space-x-3">
            <TextField
              placeholder="인증번호 입력"
              containerClassName="grow w-0 md:grow-0 md:w-36"
            />
            <button className="h-7 border rounded border-gray-600 px-2 flex-shrink-0">
              인증번호 확인
            </button>
          </div>
        </div>
      </Row>
      <Row label="주소" className="w-full">
        <div className="flex flex-col flex-grow space-y-1">
          <TextField placeholder="도로명주소" className="w-full" />
          <TextField placeholder="상세주소" className="w-full" />
        </div>
      </Row>
      <Row label="마케팅 수신 정보">
        <div className="flex flex-col">
          <Checkbox label="마케팅(광고) 수신동의 여부(선택)" />
          <p className="text-gray-500">
            각종 할인혜택, 제휴이벤트/기획전 등의 내용을 받으시겠습니까?
          </p>
          <div className="flex flex-col space-y-3 py-6">
            <Switch label="SMS" labelClassName="w-12" className="w-20" />
            <Switch label="E-mail" labelClassName="w-12" className="w-20" />
          </div>
          <p className="text-gray-500">
            회원가입, 주문배송, 약관안내, 회사 주요정책 변경 관련 내용은
            <br />
            수신동의 여부와 관계없이 발송됩니다.
          </p>
          <p className="text-gray-500 py-2">
            SMS, E-mail 수신 미동의 시 이벤트 및 혜택 안내 등<br />
            다양한 쇼핑정보를 받을 수 없습니다.
          </p>
        </div>
      </Row>
      <button className="bg-brand-4 text-white px-8 py-2 rounded-lg w-fit my-6">
        개인정보 수정
      </button>
    </div>
  );
};
