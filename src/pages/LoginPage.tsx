import React, { useEffect } from "react";
import { GoogleLogin, GoogleLoginResponse } from "react-google-login";
import { Icon } from "../components/Icon";
import { Semomun } from "../components/Semomun";
import { api } from "../plugins/axios";
import { refreshTokenState, tokenState } from "../plugins/ridge";

export const LoginPage = () => {
  const googleHandler = (token: string) => {
    api
      .post("/auth/login", { token, type: "google" })
      .then(({ data }) => {
        tokenState.set(data.accessToken);
        refreshTokenState.set(data.refreshToken);
      })
      .catch((err) => {
        if (err.response.data === "USER_NOT_EXIST")
          alert("회원가입되지 않은 유저입니다");
        else alert("로그인 실패");
      });
  };

  useEffect(() => {
    document.addEventListener("AppleIDSignInOnSuccess", (data) => {
      console.log(data);
    });
    document.addEventListener("AppleIDSignInOnFailure", (error) => {
      alert("애플 로그인 실패");
    });
  });

  return (
    <div className="w-full flex flex-col items-center">
      <Semomun className="mt-32 mb-12" />
      <h2 className="font-bold text-2xl mb-12 text-center">
        로그인을 비롯한 새로운 기능들은 준비 중입니다.
        <br />
        조금만 기다려주세요 :)
      </h2>
      <div className="w-64 flex flex-col space-y-3">
        <button
          className="flex bg-black rounded-lg w-full h-10 text-white justify-center items-center space-x-2 drop-shadow"
          onClick={() => {
            const config = {
              client_id: process.env.REACT_APP_APPLE_CLIENT_ID, // This is the service ID we created.
              redirect_uri: "https://semomun.com/login", // As registered along with our service ID
              response_type: "code",
              scope: "name", // To tell apple we want the user name and emails fields in the response it sends us.
              response_mode: "form_post",
            };
            const queryString = Object.entries(config)
              .map(([key, value]) => `${key}=${value}`)
              .join("&");
            window
              .open(
                `https://appleid.apple.com/auth/authorize?${queryString}`,
                "_blank"
              )
              ?.focus();
          }}
        >
          <Icon.Apple className="w-5 h-5 fill-white" />
          <p>Log In with Apple</p>
        </button>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
          buttonText="Log In with Google"
          onSuccess={(response) =>
            googleHandler((response as GoogleLoginResponse).tokenId)
          }
          onFailure={(err) => {
            console.log(err);
            /*alert("구글 로그인 실패")*/
          }}
          render={(renderProps) => (
            <button
              className="flex bg-white rounded-lg w-full h-10 text-gray-600 justify-center items-center space-x-2 drop-shadow"
              onClick={renderProps.onClick}
            >
              <Icon.Google className="w-5 h-5 stroke-0" />
              <p>Log In with Google</p>
            </button>
          )}
        />
      </div>
      <div className="flex flex-col items-center space-y-1 my-12">
        <p className="text-gray-700 text-xs">아직 회원이 아니신가요?</p>
        <button className="flex bg-black rounded-lg text-white px-4 py-1 items-center space-x-2">
          <Icon.Apple className="w-7 h-7 fill-white" />
          <div className="flex flex-col items-center -space-y-1.5">
            <p className="text-[0.6rem]">Download on the</p>
            <p className="font-medium">App Store</p>
          </div>
        </button>
        <p className="text-gray-700 text-xs">
          앱을 통해 회원가입을 하실 수 있습니다.
        </p>
      </div>
    </div>
  );
};
