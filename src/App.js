import React from "react";
import "antd/dist/reset.css";

import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import NotFoundPage from "./pages/404";
import Personal from "./pages/personal";
import IndicatorDetails from "./pages/IndicatorDetails";
import IntroductionPage from "./pages/IntroductionPage.jsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<IntroductionPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/IndicatorDetails" element={<IndicatorDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
