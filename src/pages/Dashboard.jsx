import React from "react";
import Header from "../components/admin/Header";
import Sidebar from "../components/admin/Sidebar";
import { Outlet } from "react-router-dom";



function Dashboard() {
  return (
    <div className="dashboard h-svh">
      <Header classes="row-start-1 col-start-1 col-span-2" />
      <Sidebar classes="row-start-2 col-start-1 col-span-2 md:col-span-1" />
      <div className="bottom bg-gray-300 h-full row-start-3 col-start-1 md:row-start-2 md:col-start-2 col-end-3">
        <Outlet />
      </div>
      {/* <Bottom classes="bg-gray-300 h-full row-start-3 col-start-1 col-end-4" /> */}
    </div>
  );
}

export default Dashboard;
