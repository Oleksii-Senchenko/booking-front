import React from "react";
import AuthPage from "./pages/AuthPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="auth" element={<AuthPage />} />
      </Route>
    </Routes>
  );
}
