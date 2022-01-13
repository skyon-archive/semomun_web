import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainPage } from "./MainPage";

export const Router = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
