import React, { useState } from "react";
import "./Dashboard.css";
import "remixicon/fonts/remixicon.css";

export default function Dashboard({ role }) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">Urban Spice</h2>
        <ul>
          <li
            className={activeTab === "overview" ? "active" : ""}
            onClick={() => setActiveTab("overview")}
          >
            <i className="ri-dashboard-line"></i> Overview
          </li>
          {role === "manager" && (
            <>
              <li
                className={activeTab === "employees" ? "active" : ""}
                onClick={() => setActiveTab("employees")}
              >
                <i className="ri-team-line"></i> Employees
              </li>
              <li
                className={activeTab === "menu" ? "active" : ""}
                onClick={() => setActiveTab("menu")}
              >
                <i className="ri-book-line"></i> Menu Items
              </li>
              <li
                className={activeTab === "reports" ? "active" : ""}
                onClick={() => setActiveTab("reports")}
              >
                <i className="ri-bar-chart-line"></i> Reports
              </li>
            </>
          )}
          {role === "employee" && (
            <>
              <li
                className={activeTab === "orders" ? "active" : ""}
                onClick={() => setActiveTab("orders")}
              >
                <i className="ri-shopping-cart-line"></i> Orders
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header>
          <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
          <div className="user-info">
            <i className="ri-user-line"></i> {role.toUpperCase()}
          </div>
        </header>

        <div className="content">
          {activeTab === "overview" && (
            <div className="cards">
              {role === "manager" ? (
                <>
                  <div className="card">
                    <h3>Total Employees</h3>
                    <p>10</p>
                  </div>
                  <div className="card">
                    <h3>Total Orders</h3>
                    <p>450</p>
                  </div>
                  <div className="card">
                    <h3>Total Sales</h3>
                    <p>₹3,50,000</p>
                  </div>
                  <div className="card">
                    <h3>Top Dishes</h3>
                    <p>Pasta, Pizza, Burger</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="card">
                    <h3>Total Orders Handled</h3>
                    <p>120</p>
                  </div>
                  <div className="card">
                    <h3>Total Revenue</h3>
                    <p>₹1,20,000</p>
                  </div>
                  <div className="card">
                    <h3>Average Order Value</h3>
                    <p>₹450</p>
                  </div>
                </>
              )}
            </div>
          )}

          {activeTab === "employees" && role === "manager" && (
            <div>
              <h2>Employees List</h2>
              <p>Manage employees here (Add/Edit/Delete)</p>
            </div>
          )}

          {activeTab === "menu" && role === "manager" && (
            <div>
              <h2>Menu Items</h2>
              <p>Manage food items (Add/Edit/Delete)</p>
            </div>
          )}

          {activeTab === "reports" && role === "manager" && (
            <div>
              <h2>Reports & Analytics</h2>
              <p>View daily/monthly sales, top dishes, employee performance.</p>
            </div>
          )}

          {activeTab === "orders" && role === "employee" && (
            <div>
              <h2>Orders</h2>
              <p>View and manage customer orders here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
