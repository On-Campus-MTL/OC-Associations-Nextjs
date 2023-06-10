import Link from "next/link";
import React from "react";
import { MdDashboard } from "react-icons/md";

const SidebarItem = () => {
  return (
    <Link
      href=""
      className={
        "font-dmSans w-full px-6 py-3 bg-primary text-white hover:text-secondary justify-center text-xl flex flex-row gap-3 items-center rounded-none hover:bg-white "
      }
    >
      <MdDashboard size={30} />
      Dashboard
    </Link>
  );
};

export default SidebarItem;
