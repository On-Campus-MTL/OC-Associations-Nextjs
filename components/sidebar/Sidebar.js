import React from "react";
import Link from "next/link";
import { Button, ThemeProvider } from "@mui/material";
import { themeOptions } from "@/utils/theme";
import SidebarItem from "./SidebarItem";
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="flex">
      {/* Sidemenu div */}
      <div
        className={"flex flex-col w-72 h-screen gap-4 items-center bg-primary"}
      >
        {/* Logo */}
        <h1 className={"font-lobster text-4xl text-center text-white py-6"}>
          On-Campus
        </h1>
        {/* Create Event Btn */}
        <Link href="">
          <div className="w-fit px-6 py-4 bg-secondary hover:bg-orange-500 duration-200 text-white font-dmSans font-bold rounded-full">
            Create an Event
          </div>
        </Link>
        {/* Menu List */}
        <div className="w-full">
          <SidebarItem />
          <SidebarItem />
          <SidebarItem />
        </div>
      </div>
      <div className="p-7">Home page</div>
    </div>
  );
};

export default Sidebar;
