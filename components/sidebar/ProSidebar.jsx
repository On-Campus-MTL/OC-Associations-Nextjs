import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

export default function ProSidebar() {
  return (
    <div className="h-full flex flex-col bg-slate-300">
      <Sidebar>
        <Menu>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
