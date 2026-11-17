import React from "react";
import { Outlet } from "react-router";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";

const RootLayout = () => {
  return (
    <>
      <div
        className="mx-auto relative min-h-screen max-w-7xl p-6 
      grid grid-cols-4 gap-y-5
      grid-rows-[auto_1fr]

      [grid-template-areas:'header_header_header_header'_'outlet_outlet_outlet_outlet']
      lg:[grid-template-areas:'sidebar_header_header_header'_'sidebar_outlet_outlet_outlet']
      "
      >
        <div className="[grid-area:header]">
          <Header />
        </div>
        <div className="[grid-area:sidebar] hidden lg:flex">
          <Sidebar />
        </div>
        <div className="[grid-area:outlet]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
