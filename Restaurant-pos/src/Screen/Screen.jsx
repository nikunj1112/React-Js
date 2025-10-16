// src/Screens/Screen.js
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import Dashboard from "../Pages/Dashboard/Dashboard";
import "./Screen.css";
import AddMenu from "../Pages/Addmenu/Addmenu";

function Screen() {
  return (
    <div className="screen-container">
      <Sidebar />
      <main className="main-content">
        <Routes>
          
          <Route index element={<Dashboard />} />
          
          
          <Route path="/orders" element={<h1>Food Orders</h1>} />
          <Route path="/feedback" element={<h1>Feedback</h1>} />
          <Route path="/payments" element={<h1>Payment Details</h1>} />
          <Route path="/customize" element={<h1>Customization</h1>} />
          <Route path="/help" element={<h1>Help Page</h1>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default Screen;
