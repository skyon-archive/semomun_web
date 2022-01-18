import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useThinHeader } from "../hooks";
import { ContactPage } from "./ContactPage";
import { FAQPage } from "./FAQPage";
import { LandingPage } from "./LandingPage";
import { LoginPage } from "./LoginPage";
import { MainPage } from "./MainPage";
import { SearchPage } from "./SearchPage";

export const Router = () => {
  const thinHeader = useThinHeader();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={thinHeader ? "min-h-screen-12" : "min-h-screen-18"}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
