import React from "react";
import AuthPage from "./pages/AuthPage/AuthPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

export default function App() {
  
  return (
    <div className="container">
      <div className="subContainer">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="auth" element={<AuthPage />} />
        </Route>
      </Routes>
      </div>
    </div>
  );
}
