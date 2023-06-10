import React from "react";
import Sidebar from "./sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <main className="flex flex-row w-full h-full">
      <Sidebar />
      <div className="px-16 py-8 w-full max-h-full">{children}</div>
    </main>
  );
};

export default Layout;
