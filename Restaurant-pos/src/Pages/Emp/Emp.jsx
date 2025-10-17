import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../slices/resslice";
import axios from "axios";
import "./Emp.css";
export default function Emp() {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.restaurant);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    salary: "",
    totalSales: "",
    totalOrders: "",
    code: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const employeeList = users.filter((user) => user.role === "employee");

  // 🔄 Form Change Handler
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ➕ Add or ✏️ Update Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await axios.put(`http://localhost:3000/users/${editingId}`, {
          ...form,
          role: "employee",
        });
        setStatusMessage("✅ Employee updated successfully!");
      } else {
        await axios.post("http://localhost:3000/users", {
          ...form,
          role: "employee",
        });
        setStatusMessage("✅ Employee added successfully!");
      }

      setForm({
        name: "",
        email: "",
        password: "",
        contact: "",
        salary: "",
        totalSales: "",
        totalOrders: "",
        code: "",
      });
      setEditingId(null);
      dispatch(fetchUsers()); // refresh list
    } catch (err) {
      setStatusMessage("❌ Operation failed.");
    }
  };

  // ✏️ Load Employee into Form
  const handleEdit = (emp) => {
    setForm({ ...emp });
    setEditingId(emp.id);
    setStatusMessage("");
  };

  // ❌ Delete Employee
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        await axios.delete(`http://localhost:3000/users/${id}`);
        setStatusMessage("🗑️ Employee deleted.");
        dispatch(fetchUsers());
      } catch (err) {
        setStatusMessage("❌ Failed to delete.");
      }
    }
  };

  if (isLoading) return <h3>Loading employees...</h3>;
  if (error) return <h3 style={{ color: "red" }}>Error: {error}</h3>;

return (
  <div style={{ padding: "20px" }}>
    <h2>👷 Employee List</h2>

    {/* 📋 Employee Table FIRST */}
    <table border="1" cellPadding="10" style={{ width: "100%", marginBottom: "20px" }}>
      <thead>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Salary</th>
          <th>Total Sales</th>
          <th>Total Orders</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employeeList.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.code}</td>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.contact}</td>
            <td>₹{emp.salary}</td>
            <td>{emp.totalSales}</td>
            <td>{emp.totalOrders}</td>
            <td>
              <button onClick={() => handleEdit(emp)}>✏️ Edit</button>{" "}
              <button onClick={() => handleDelete(emp.id)} style={{ color: "red" }}>🗑️ Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* ✅ Status message */}
    {statusMessage && (
      <p style={{ color: statusMessage.includes("❌") ? "red" : "green" }}>{statusMessage}</p>
    )}

    {/* ✅ Add/Edit Employee Form BELOW */}
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: "30px",
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "6px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3>{editingId ? "✏️ Edit Employee" : "➕ Add Employee"}</h3>
      <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required /> <br /><br />
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required /> <br /><br />
      <input type="text" name="code" placeholder="Code" value={form.code} onChange={handleChange} required /> <br /><br />
      <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required /> <br /><br />
      <input type="text" name="contact" placeholder="Contact" value={form.contact} onChange={handleChange} required /> <br /><br />
      <input type="number" name="salary" placeholder="Salary" value={form.salary} onChange={handleChange} required /> <br /><br />
      <input type="number" name="totalSales" placeholder="Total Sales" value={form.totalSales} onChange={handleChange} required /> <br /><br />
      <input type="number" name="totalOrders" placeholder="Total Orders" value={form.totalOrders} onChange={handleChange} required /> <br /><br />
      <button type="submit">{editingId ? "Update" : "Add"}</button>
    </form>
  </div>
);

}
