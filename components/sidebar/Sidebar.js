import React from "react";
import Link from "next/link";
import {
  MdDashboard,
  MdCalendarMonth,
  MdOutlineBarChart,
  MdSettings,
} from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="flex">
      {/* Sidemenu div */}
      <div
        className={
          "sticky top-0 flex flex-col w-64 h-screen gap-8 items-center bg-primary"
        }
      >
        {/* Logo */}
        <h1 className={"font-lobster text-4xl text-center text-white py-6"}>
          On-Campus
        </h1>
        {/* Create Event Btn */}
        <Link href="">
          <div className="w-fit px-12 py-4 bg-secondary hover:bg-orange-500 duration-200 text-white font-dmSans font-bold rounded-full">
            Create an Event
          </div>
        </Link>
        {/* Menu List */}
        <div className="w-full h-full flex flex-col justify-between">
          <div className="h-fit flex flex-col">
            <Link
              href="/"
              className={
                "font-dmSans w-full px-10 py-3 bg-primary text-white hover:text-secondary text-xl flex flex-row gap-3 items-center rounded-none hover:bg-white "
              }
            >
              <MdDashboard size={30} />
              Dashboard
            </Link>
            <Link
              href="/events"
              className={
                "font-dmSans w-full px-10 py-3 bg-primary text-white hover:text-secondary text-xl flex flex-row gap-3 items-center rounded-none hover:bg-gray-100 "
              }
            >
              <MdCalendarMonth size={30} />
              Events
            </Link>
            <Link
              href="/analytics"
              className={
                "font-dmSans w-full px-10 py-3 bg-primary text-white hover:text-secondary text-xl flex flex-row gap-3 items-center rounded-none hover:bg-gray-100 "
              }
            >
              <MdOutlineBarChart size={30} />
              Stats
            </Link>
          </div>

          <div>
            <Link
              href="/settings"
              className={
                "font-dmSans w-full px-10 py-3 bg-primary text-gray-600 text-lg flex flex-row gap-3 items-center rounded-none hover:bg-gray-100 "
              }
            >
              <MdSettings size={24} />
              Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
