import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <>
      <Header />

      <div>
        <button>
          <Link to="/auth">AUTH</Link>
        </button>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
