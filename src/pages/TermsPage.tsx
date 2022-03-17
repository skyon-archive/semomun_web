import React from "react";

export const TermsPage = () => (
  <div className="w-full flex justify-center space-y-16">
    <div className="max-w-3xl flex flex-col items-center w-full min-h-screen-72">
      <h2 className="text-2xl md:text-3xl mt-6 mb-2">개인정보처리방침</h2>
      <iframe
        className="w-full y-full min-h-screen-72"
        title="개인정보처리방침"
        src="https://docs.google.com/document/d/e/2PACX-1vTCUoo5J37FFdp_pZ89NbvMjQ_ZDvPx3-g94dUwRUcSr5kQUf8kFwQlGAMXDnZedRhmFJ3dq1FRJQuW/pub?embedded=true"
      />
    </div>
  </div>
);
