import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
    RiDashboardLine,
    RiFileList2Line,
    RiUserLine,
    RiSettings3Line,
    RiLogoutCircleRLine,
} from "react-icons/ri";
import "./EmployeeDashboard.css";
import img1 from '../../../assets/img/login-img/login-img2.png'

export default function EmployeeDashboard() {
    const navigate = useNavigate();

    return (
        <div className="employee-dashboard">
            {/* 🌟 Sidebar */}
            <aside className="sidebar">
      {/* 🔝 Top Section: Logo + Menu */}
      <div className="sidebar-top">
        <div className="brand">
          <img src={img1} alt="Logo" className="logo" />
        </div>

        <nav className="menu">
          <button onClick={() => navigate("/dashboard/select-table")}>
            <RiDashboardLine /> Select Table
          </button>

          <button onClick={() => navigate("/dashboard/customer-info")}>
            <RiFileList2Line /> Customer Info
          </button>

          <button onClick={() => navigate("/dashboard/take-order")}>
            <RiUserLine /> Take Order
          </button>

          <button>
            <RiSettings3Line /> Settings
          </button>
        </nav>
      </div>

      {/* 🔚 Bottom Section: Logout */}
      <div className="logout">
        <button>
          <RiLogoutCircleRLine /> Logout
        </button>
      </div>
    </aside>


            



            {/* 🧾 Main Content */}
            <main className="content-area">
                <Outlet />
            </main>
        </div >
    );
}



