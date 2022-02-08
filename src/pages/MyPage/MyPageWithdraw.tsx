import React, { useState } from "react";
import { useId } from "react-id-generator";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";
import { TextField } from "../../components/TextField";

export const MyPageWithdraw = () => {
  const [id] = useId(1, "checkbox");
  const [agree, setAgree] = useState(false);

  return (
    <div className="flex flex-col items-center w-full px-12 mb-8">
      <h3 className="text-red-700 text-lg font-medium my-8">
        다음 사항을 꼭 확인해 주세요
      </h3>
      <div className="w-full flex flex-col text-sm">
        <p>
          회원탈퇴 시 모든 회원정보와 쿠폰, 포인트, 구매내역, 세모페이 잔액 등이
          자동으로 삭제 처리되며, 복구가 불가능합니다.
        </p>

        <h5 className="font-medium mt-4">
          자동삭제항목(<span className="text-red-700">복구불가능</span>)
        </h5>
        <p className="before:content-[':_'] before:-ml-2 pl-2">
          회원정보, 상품구매, E-문제집콘텐츠, 할인쿠폰, 마일리지, 통합포인트,
          세모페이 잔액 등 모든 내역
        </p>

        <h5 className="font-medium mt-4">
          탈퇴한 계정의 아이디나 이메일로 다시 가입 할 수 없습니다.
        </h5>
        <p className="before:content-[':_'] before:-ml-2 pl-2">
          회원 ID에 대해서는 서비스 이용의 혼선 방지, 법령에서 규정하는 회원거래
          정보의 보존기간 동의 보관 의무의 이행, 기타 안정적인 서비스 제공을
          위하여 필요한 정보이므로 탈퇴 후 동일 ID로 재가입은 허용되지 않습니다.
        </p>

        <h5 className="font-medium mt-4">탈퇴 후 정보보관</h5>
        <p>
          전자상거래 등에서 소비자보로에 관한 법률 제6조에 의거 성명, 주소등
          거래의 주체를 식별할 수 있는 정보에 한하여 서비스 이용에 관한 동의를
          철회한 경우에도 이를 보존할 수 있으며, 동법 시행령 제6조에 의거 다음과
          같이 거래 기록을 보관합니다.
        </p>
        <ul className="mt-4 list-disc list-inside">
          <li>표시,광고에 관한 기록: 6개월</li>
          <li>계약 또는 청약철회 등에 관한 기록: 5년</li>
          <li>대금결제 및 재화등의 공급에 관한 기록: 5년</li>
          <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년</li>
        </ul>

        <h5 className="font-medium mt-8">회원님의 정보를 확인해 주세요</h5>
        <ul className="list-disc list-inside flex flex-col space-y-1 mt-1">
          <li>이름: 홍길동</li>
          <div className="flex">
            <li className="w-48">구매한 문제집: 10권</li>
            <button className="flex items-center border-brand-1 rounded-full border pl-4 pr-1">
              <p className="text-xs">내역확인</p>
              <Icon.ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex">
            <li className="w-48">남은 세모페이 잔액: 450원</li>
            <button className="flex items-center border-brand-1 rounded-full border pl-4 pr-1">
              <p className="text-xs">내역확인</p>
              <Icon.ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </ul>

        <h5 className="font-medium mt-8">
          본인 확인을 위해 비밀번호를 입력해 주세요
        </h5>
        <TextField placeholder="비밀번호를 입력해 주세요" className="w-96" />
      </div>

      <div className="flex items-center space-x-2 mt-8">
        <input
          type="checkbox"
          id={id}
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        <label htmlFor={id} className="text-sm ">
          위 내용을 모두 확인하였으며, 모든 정보는 복구가 불가능합니다. 구매하신
          전자책의 구독은 회원탈퇴하시면 더 이상 이용이 불가능합니다. 회원탈퇴에
          동의하시겠습니까?
        </label>
      </div>

      <Button
        bgColor="bg-brand-4"
        className="rounded-lg text-white px-8 py-2 my-16"
        disabled={!agree}
      >
        탈퇴하기
      </Button>
    </div>
  );
};
