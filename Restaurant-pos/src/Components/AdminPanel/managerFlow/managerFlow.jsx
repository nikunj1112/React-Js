import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  RiDashboardLine,
  RiRestaurantLine,
  RiTeamLine,
  RiBarChart2Line,
  RiMedalLine,
  RiUserLine,
  RiSettings3Line,
  RiLogoutCircleRLine,
  RiFileList2Line,
} from "react-icons/ri";
import "./managerFlow.css";
import img1 from "../../../assets/img/login-img/login-img2.png";

export default function ManagerFlow() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="dashboard-layout">
      {/* 🌟 Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="brand">
            <img src={img1} alt="Logo" className="logo" />
           
          </div>

          <nav className="menu">
          <h2 className="brand-name">Manager Panel</h2>

            <button
              onClick={() => navigate("/manager/menu-items")}
              className={isActive("/manager/menu-items") ? "active" : ""}
              
            >
              <RiRestaurantLine /> <span>Menu Items</span>
            </button>

            <button
              onClick={() => navigate("/manager/total-orders")}
              className={isActive("/manager/total-orders") ? "active" : ""}
            >
              <RiFileList2Line /> <span>Total Orders</span>
            </button>

            <button
              onClick={() => navigate("/manager/total-employees")}
              className={isActive("/manager/total-employees") ? "active" : ""}
            >
              <RiTeamLine /> <span>Total Employees</span>
            </button>

            <button
              onClick={() => navigate("/manager/reports")}
              className={isActive("/manager/reports") ? "active" : ""}
            >
              <RiBarChart2Line /> <span>Reports</span>
            </button>

            <button
              onClick={() => navigate("/manager/top-dishes")}
              className={isActive("/manager/top-dishes") ? "active" : ""}
            >
              <RiMedalLine /> <span>Top Dishes</span>
            </button>

            <button
              onClick={() => navigate("/manager/profile")}
              className={isActive("/manager/profile") ? "active" : ""}
            >
              <RiUserLine /> <span>Profile</span>
            </button>

          </nav>
        </div>

        <div className="logout">
          <button onClick={() => navigate("/login")}>
            <RiLogoutCircleRLine /> <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* 🧾 Main Content */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
