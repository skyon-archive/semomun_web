import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { MainPage } from "./MainPage";

export const Router = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </main>
    </div>
  );
};
