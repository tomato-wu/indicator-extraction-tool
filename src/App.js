import React from "react";
import "antd/dist/reset.css";

import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import NotFoundPage from "./pages/404";
import Personal from "./pages/personal";
import PersonalMessage from "./pages/personalMessage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/myPersonalMessage" element={<PersonalMessage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
