import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import Addmenu from "../../Pages/Addmenu/Addmenu";
import Orders from "../../Pages/Orders/Orders";
import Emp from "../../Pages/Emp/Emp";
import Reports from "../../Pages/Reports/Reports";
import Profile from "../../Pages/Profile/Profile";  // <-- Import Profile
import TopDishes from "../../Pages/Topdishes/Topdishes";

export default function Managers() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
        <Routes>
          <Route path="/" element={<Addmenu />} />
          <Route path="orders" element={<Orders />} />
          <Route path="employees" element={<Emp />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<h1>Settings Page</h1>} />
          <Route path="profile" element={<Profile />} />  {/* <-- Add this route */}
          <Route path="Topdishes" element={<TopDishes />} />  {/* <-- Add this route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}
