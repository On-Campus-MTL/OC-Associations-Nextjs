import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import ProSidebar from "@/components/sidebar/ProSidebar";
import EventCard from "@/components/EventCard";

const Layout = ({ children }) => {
  return (
    <main className="flex flex-row w-full hit">
      <Sidebar />
      <div className="px-16 py-8 w-full max-h-full">{children}</div>
      {/* <EventCard /> */}
    </main>
  );
};

export default Layout;
