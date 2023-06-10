import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import EventCard from "@/components/EventCard";
import EventCalendar from "@/components/Calendar";

const Layout = ({ children }) => {
  return (
    <main className="flex flex-row w-full h-full">
      <Sidebar />
      <div className="px-16 py-8 w-full max-h-full">{children}</div>
    </main>
  );
};

export default Layout;
