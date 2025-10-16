import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  RiDashboardLine,
  RiFileList2Line,
  RiUserLine,
  RiSettings3Line,
  RiLogoutCircleRLine,
  RiBillLine,
  RiHistoryLine,
  RiRepeatLine,
  RiEdit2Line,
} from "react-icons/ri";
import "./EmployeeDashboard.css";
import img1 from "../../../assets/img/login-img/login-img2.png";

export default function EmployeeDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Check if a sidebar button is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="employee-dashboard">
      {/* 🌟 Sidebar */}
      <aside className="sidebar">
        {/* 🔝 Top Section */}
        <div className="sidebar-top">
          <div className="brand">
            <img src={img1} alt="Logo" className="logo" />
            {/* <h2 className="brand-name">Maharaja POS</h2> */}
          </div>

          {/* 🧭 Navigation Menu */}
          <nav className="menu">
            <button
              onClick={() => navigate("/dashboard/select-table")}
              className={isActive("/dashboard/select-table") ? "active" : ""}
            >
              <RiDashboardLine /> <span>Select Table</span>
            </button>

            <button
              onClick={() => navigate("/dashboard/customer-info")}
              className={isActive("/dashboard/customer-info") ? "active" : ""}
            >
              <RiFileList2Line /> <span>Customer Info</span>
            </button>

            <button
              onClick={() => navigate("/dashboard/take-order")}
              className={isActive("/dashboard/take-order") ? "active" : ""}
            >
              <RiUserLine /> <span>Take Order</span>
            </button>

            <button
              onClick={() => navigate("/dashboard/update-order")}
              className={isActive("/dashboard/update-order") ? "active" : ""}
            >
              <RiRepeatLine /> <span>Update Order</span>
            </button>

            <button
              onClick={() => navigate("/dashboard/modify-order")}
              className={isActive("/dashboard/modify-order") ? "active" : ""}
            >
              <RiEdit2Line /> <span>Modify Order</span>
            </button>

            <button
              onClick={() => navigate("/dashboard/invoice")}
              className={isActive("/dashboard/invoice") ? "active" : ""}
            >
              <RiBillLine /> <span>Invoice</span>
            </button>

            <button
              onClick={() => navigate("/dashboard/history")}
              className={isActive("/dashboard/history") ? "active" : ""}
            >
              <RiHistoryLine /> <span>History</span>
            </button>

            <button
              onClick={() => navigate("/dashboard/settings")}
              className={isActive("/dashboard/settings") ? "active" : ""}
            >
              <RiSettings3Line /> <span>Settings</span>
            </button>
          </nav>
        </div>

        {/* 🔚 Bottom Section: Logout */}
        <div className="logout">
          <button onClick={() => navigate("/login")}>
            <RiLogoutCircleRLine /> <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* 🧾 Main Content */}
      <main className="content-area">
        <Outlet />
      </main>
    </div>
  );
}
