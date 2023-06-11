import React from "react";
import Sidebar from "./sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <main className="flex flex-row w-full h-full">
      <Sidebar />
      <div className="w-full max-h-full">{children}</div>
    </main>
  );
};

export default Layout;
