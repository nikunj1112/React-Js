// import './App.css'
// // import Home from './Components/Home/Home'
// // import LoginPage from './Components/Login/Login'
// import Login from './Components/Login/Login'
// // import Dashboard from './Components/Dashboard/Dashboard'
// import { Routes, Route, useNavigate, Link } from 'react-router-dom';
// import HeroSection from './Components/heroSection/HeroSection'
// import SelectTable from './Components/Admin Panel/ EmployeeFlow/SelectTable/SelectTable';
// import CustomerInfo from './Components/Admin Panel/ EmployeeFlow/CustomerInfo/CustomerInfo';
// import EmployeeDashboard from './Components/Admin Panel/ EmployeeFlow/EmployeeDashboard';


// function App() {


//   return (
// <>

// <SelectTable />
//     <Routes>
//       {/* <Route path="/" element={<HeroSection />} />
//       <Route path="/login" element={<Login />} /> */}

//     <Route path="/customer/:tableId" element={<CustomerInfo />} />

//     </Routes>



// </>

//   )
// }

// export default App;


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

        {/* 🧑‍🍳 Waiter Dashboard Layout */}
        <Route path="/dashboard" element={<EmployeeDashboard />}>
          <Route index element={<SelectTable />} />
          <Route path="select-table" element={<SelectTable />} />
          <Route path="customer-info" element={<CustomerInfo />} />
          <Route path="take-order" element={<TakeOrder />} />
          {/* <Route path="order-summary" element={<OrderSummary />} /> */}
          <Route path="update-order" element={<UpdateStatus />} />
          <Route path="modify-order" element={<ModifyOrder />} />
          <Route path="invoice" element={<GenerateInvoice />} />
          <Route path="history" element={<History />} />
        </Route>

        {/* 🚫 Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
