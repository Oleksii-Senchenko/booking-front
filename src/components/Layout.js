import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <button>
        
        <Link to="/auth" >AUTH</Link>
      </button>
      <Outlet />
    </div>
  );
};

export default Layout;
