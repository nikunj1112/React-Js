// src/Pages/Profile/Profile.js
import React, { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Briefcase, IndianRupee, ChartBar, ShoppingBag } from "lucide-react";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("overview");

  const manager = {
    id: 101,
    name: "Rajesh Sharma",
    role: "Manager",
    email: "manager@urbanspice.com",
    contact: "+91 9876543210",
    salary: 55000,
    totalSales: 350000,
    totalOrders: 450,
  };

  // Data
  const monthlySales = [
    { month: "Jan", value: 25000 },
    { month: "Feb", value: 28000 },
    { month: "Mar", value: 30000 },
    { month: "Apr", value: 27000 },
    { month: "May", value: 35000 },
    { month: "Jun", value: 42000 },
  ];

  const monthlyOrders = [
    { month: "Jan", orders: 40 },
    { month: "Feb", orders: 50 },
    { month: "Mar", orders: 65 },
    { month: "Apr", orders: 58 },
    { month: "May", orders: 70 },
    { month: "Jun", orders: 85 },
  ];

  const tabButton = {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    cursor: "pointer",
    background: "#f9fafb",
    fontWeight: 600,
    color: "#374151",
    transition: "all 0.3s ease",
  };

  const tabButtonActive = {
    ...tabButton,
    background: "linear-gradient(135deg, #3b82f6, #6366f1)",
    color: "#fff",
    border: "none",
  };

  return (
    <div
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "linear-gradient(135deg, #f3f4f6, #e5e7eb)",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: 32,
          fontWeight: 700,
          marginBottom: 40,
          color: "#1f2937",
        }}
      >
        👔 Manager Dashboard
      </h1>

      {/* Profile Card */}
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: 30,
          boxShadow: "0 4px 25px rgba(0,0,0,0.1)",
          marginBottom: 40,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 30,
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, rgba(59,130,246,1), rgba(99,102,241,1))",
            color: "#fff",
            fontSize: 48,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 15px rgba(99,102,241,0.4)",
          }}
        >
          {manager.name.charAt(0)}
        </div>

        <div style={{ flex: 1, minWidth: 250 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 10 }}>
            {manager.name}
          </h2>
          <p style={{ color: "#6b7280", marginBottom: 6 }}>
            <Briefcase size={16} color="#3b82f6" /> {manager.role}
          </p>
          <p style={{ color: "#6b7280", marginBottom: 6 }}>
            <Mail size={16} color="#3b82f6" /> {manager.email}
          </p>
          <p style={{ color: "#6b7280", marginBottom: 6 }}>
            <Phone size={16} color="#3b82f6" /> {manager.contact}
          </p>
          <p style={{ color: "#6b7280", marginBottom: 6 }}>
            <IndianRupee size={16} color="#3b82f6" />{" "}
            {manager.salary.toLocaleString("en-IN")}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          marginBottom: 30,
          flexWrap: "wrap",
        }}
      >
        <button
          style={activeTab === "overview" ? tabButtonActive : tabButton}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          style={activeTab === "sales" ? tabButtonActive : tabButton}
          onClick={() => setActiveTab("sales")}
        >
          Sales
        </button>
        <button
          style={activeTab === "orders" ? tabButtonActive : tabButton}
          onClick={() => setActiveTab("orders")}
        >
          Orders
        </button>
      </div>

      {/* Tab Content */}
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: 30,
          boxShadow: "0 4px 25px rgba(0,0,0,0.1)",
        }}
      >
        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <h2
                style={{
                  fontSize: 22,
                  marginBottom: 20,
                  fontWeight: 600,
                  color: "#1f2937",
                }}
              >
                Performance Overview
              </h2>

              <ResponsiveContainer width="100%" height={280}>
                <BarChart
                  data={[
                    { name: "Total Sales (₹)", value: manager.totalSales },
                    { name: "Total Orders", value: manager.totalOrders },
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="value"
                    fill="#4a90e2"
                    barSize={60}
                    radius={[10, 10, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          )}

          {activeTab === "sales" && (
            <motion.div
              key="sales"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <h2
                style={{
                  fontSize: 22,
                  marginBottom: 20,
                  fontWeight: 600,
                  color: "#1f2937",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <ChartBar color="#3b82f6" /> Monthly Sales
              </h2>

              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={monthlySales}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          )}

          {activeTab === "orders" && (
            <motion.div
              key="orders"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <h2
                style={{
                  fontSize: 22,
                  marginBottom: 20,
                  fontWeight: 600,
                  color: "#1f2937",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <ShoppingBag color="#6366f1" /> Monthly Orders
              </h2>

              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={monthlyOrders}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="orders"
                    fill="#6366f1"
                    barSize={50}
                    radius={[10, 10, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
