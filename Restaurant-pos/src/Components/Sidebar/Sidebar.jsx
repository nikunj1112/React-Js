// Sidebar.js
import { useState } from "react";
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  Utensils,
  BarChart2,
  Star,
  UserCheck,
  Settings,
  LogOut,
  MessageCircle,
  Moon,
  Sun,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const menuItems = [
   { label: "Menu Items", icon: <Utensils size={20} />, path: "/" },
  
  { label: "Orders", icon: <ClipboardList size={20} />, path: "/orders" },
  { label: "Employees", icon: <Users size={20} />, path: "/employees" },
 
  { label: "Reports", icon: <BarChart2 size={20} />, path: "/reports" },
  { label: "Top Dishes", icon: <Star size={20} />, path: "/top-dishes" },
  { label: "Customers", icon: <UserCheck size={20} />, path: "/customers" },
  { label: "Settings", icon: <Settings size={20} />, path: "/settings" },
];

export default function Sidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""} ${darkMode ? "dark" : ""}`}>
      {/* Top Logo and Toggle */}
      <div className="sidebar-top">
        <div className="logo">{!collapsed && "LogoName"}</div>
        <button onClick={() => setCollapsed(!collapsed)} className="toggle-btn">
          ☰
        </button>
      </div>

      {/* Menu Items */}
      <div className="menu">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`menu-item ${isActive ? "active" : ""}`}
            >
              {item.icon}
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </div>

      {/* Bottom actions */}
      <div className="bottom">
        <button className="menu-item" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          {!collapsed && <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>}
        </button>
        <button className="menu-item logout">
          <LogOut size={20} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}
