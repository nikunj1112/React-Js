// import './App.css'
// // import Home from './Components/Home/Home'
// // import LoginPage from './Components/Login/Login'
// // import Login from './Components/Login/Login'
// // import Dashboard from './Components/Dashboard/Dashboard'
// import { Routes, Route, useNavigate, Link } from 'react-router-dom';
// // import HeroSection from './Components/heroSection/HeroSection'
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
import EmployeeDashboard from "./Components/Admin Panel/ EmployeeFlow/EmployeeDashboard";
import SelectTable from "./Components/Admin Panel/SelectTable/SelectTable";
import CustomerInfo from "./Components/Admin Panel/CustomerInfo/CustomerInfo";

// import TakeOrder from "./Components/EmployeePanel/TakeOrder";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard/select-table" />} />
      <Route path="/dashboard" element={<EmployeeDashboard />}>
        <Route path="select-table" element={<SelectTable />} />
        <Route path="customer-info" element={<CustomerInfo />} />
      </Route>
    </Routes>
  );
}
