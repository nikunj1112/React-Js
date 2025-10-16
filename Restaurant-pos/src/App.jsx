

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// 🌟 Main Pages
import HeroSection from "./Components/heroSection/HeroSection";
import Login from "./Components/Login/Login";

// 🧑‍🍳 Waiter Panel Components
import EmployeeDashboard from "./Components/WaiterPanel/ EmployeeFlow/EmployeeDashboard";
import SelectTable from "./Components/WaiterPanel/SelectTable/SelectTable";
import CustomerInfo from "./Components/WaiterPanel/CustomerInfo/CustomerInfo";
import TakeOrder from "./Components/WaiterPanel/TakeOrder/TakeOrder";
// import OrderSummary from "./Components/WaiterPanel/TakeOrder/OrderSummary/OrderSummary"; // ✅ Correct path
import UpdateStatus from "./Components/WaiterPanel/UpdateStatus/UpdateStatus";
import GenerateInvoice from "./Components/WaiterPanel/GenerateInvoice/GenerateInvoice";
import History from "./Components/WaiterPanel/History/History";
import ModifyOrder from "./Components/WaiterPanel/ModifyOrder/ModifyOrder";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* 🏠 Home Page */}
        <Route path="/" element={<HeroSection />} />

        {/* 🔐 Login Page */}
        <Route path="/login" element={<Login />} />

        {/* 🧑‍🍳 Waiter Dashboard Routes */}
        <Route path="/dashboard" element={<EmployeeDashboard />}>
          {/* 🪑 Step 1: Table Selection */}
          <Route index element={<SelectTable />} />
          <Route path="select-table" element={<SelectTable />} />

          {/* 👤 Step 2: Customer Info */}
          <Route path="customer-info" element={<CustomerInfo />} />

          {/* 🍽️ Step 3: Take Order */}
          <Route path="take-order" element={<TakeOrder />} />

          {/* 🔄 Step 4: Update Status */}
          <Route path="update-order" element={<UpdateStatus />} />


          {/* ✏️ Modify Order */}
          <Route path="modify-order" element={<ModifyOrder />} />

          {/* 🧾 Invoice */}
          <Route path="invoice" element={<GenerateInvoice />} />

          {/* 📜 History */}
          <Route path="history" element={<History />} />
        </Route>

        {/* 🚫 Fallback — redirect to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
