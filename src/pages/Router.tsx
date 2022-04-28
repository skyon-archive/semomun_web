import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useThinHeader } from "../hooks";
//import { ChargeDonePage } from "./ChargeDonePage";
//import { ChargePage } from "./ChargePage";
import { ChargeTmp } from "./ChargeTmp";
import { ContactPage } from "./ContactPage";
import { FAQPage } from "./FAQPage";
import { LandingPage } from "./LandingPage";
import { LoginPage } from "./LoginPage";
import { MainPage } from "./MainPage";
import { SearchPage } from "./SearchPage";
import { TermsPage } from "./TermsPage";
//import { MyPage } from "./MyPage";
//import { CartPage } from "./CartPage";
//import { PurchasePage } from "./PurchasePage";
//import { PurchaseDonePage } from "./PurchaseDonePage";

export const Router = () => {
  const thinHeader = useThinHeader();

  return (
    <div className="min-h-screen flex flex-col lg:min-w-0 font-noto-sans">
      <Header />
      <main
        className={`min-h-60 ${
          thinHeader ? "md:min-h-screen-48" : "md:min-h-screen-72 h-fit"
        }`}
      >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/landing" element={<LandingPage />} />
          {/*<Route path="/cart" element={<CartPage />} />*/}
          {/*<Route path="/purchase/done" element={<PurchaseDonePage />} />*/}
          {/*<Route path="/purchase" element={<PurchasePage />} />*/}
          <Route path="/search" element={<SearchPage />} />
          {/*<Route path="/mypage/*" element={<MyPage />} />*/}
          <Route path="/charge/tmp" element={<ChargeTmp />} />
          {/*<Route path="/charge" element={<ChargePage />} />*/}
          {/*<Route path="/charge/done" element={<ChargeDonePage />} />*/}
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
