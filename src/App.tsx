import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminRoute } from "./components/AdminRouter";
import { ScrollToTop } from "./components/ScrollToTop";
import { AdminPage } from "./pages/AdminPage";
import { Router } from "./pages/Router";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/admin/*" element={<AdminRoute component={AdminPage} />} />
        <Route path="/*" element={<Router />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
