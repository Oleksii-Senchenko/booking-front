import React from "react";
import AuthPage from "./pages/AuthPage/AuthPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainSection from "./components/MainSection/MainSection";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <div className="container">
      
      <div className="subContainer">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainSection />} />
            <Route path="auth" element={<AuthPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
