import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddMenu from "../Pages/Addmenu/Addmenu";
import ManagerPanel from "../Pages/Managers/Manager";

function Screen() {
  return (
    <div className="screen-container">
      <ManagerPanel/>
      <main className="main-content">
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<h1>Orders</h1>} />
          <Route path="reports" element={<h1>Reports</h1>} />
          <Route path="add-menu" element={<AddMenu />} />
          <Route path="*" element={<Navigate to="" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default Screen;
