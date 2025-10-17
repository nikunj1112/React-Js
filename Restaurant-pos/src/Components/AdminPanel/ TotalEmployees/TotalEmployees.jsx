import React, { useEffect, useState } from "react";
import localData from "../../../../Api/db.json";
import "./TotalEmployees.css";

export default function TotalEmployees() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmp, setSelectedEmp] = useState(null);
  const [showDetails, setShowDetails] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [newEmp, setNewEmp] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    salary: "",
  });

  // ✅ Load from localStorage or JSON
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("employees"));
    if (saved && saved.length > 0) {
      setEmployees(saved.filter((e) => e.role === "Waiter"));
    } else {
      const allWaiters = localData.users.waiters || [];
      setEmployees(allWaiters);
      localStorage.setItem("employees", JSON.stringify(allWaiters));
    }
  }, []);

  // ✅ Save to localStorage on change
  useEffect(() => {
    if (employees.length > 0)
      localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  // 🟢 Toggle details
  const toggleDetails = (id) => {
    setShowDetails((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // 🟢 Handle Edit field change
  const handleEditChange = (e) => {
    setSelectedEmp({
      ...selectedEmp,
      [e.target.name]: e.target.value,
    });
  };

  // 🟢 Save edited data
  const saveEdit = () => {
    const updated = employees.map((emp) =>
      emp.id === selectedEmp.id ? selectedEmp : emp
    );
    setEmployees(updated);
    setSelectedEmp(null);
  };

  // 🟢 Add new employee
  const addEmployee = () => {
    if (!newEmp.name || !newEmp.email || !newEmp.password) {
      alert("Please fill all required fields!");
      return;
    }
    const newEntry = {
      id: Date.now(),
      role: "Waiter",
      status: "Active",
      joining_date: new Date().toLocaleDateString(),
      ...newEmp,
      salary: Number(newEmp.salary) || 0,
    };
    const updatedList = [...employees, newEntry];
    setEmployees(updatedList);
    setShowForm(false);
    setNewEmp({
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      salary: "",
    });
  };

  return (
    <div className="total-employees-wrapper">
      <h1 className="page-title">Waiters</h1>

      <button className="add-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Close Form" : "Add Employee"}
      </button>

      {/* 🧾 Add Employee Form */}
      {showForm && (
        <div className="form-container">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={newEmp.name}
            onChange={(e) => setNewEmp({ ...newEmp, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={newEmp.email}
            onChange={(e) => setNewEmp({ ...newEmp, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={newEmp.password}
            onChange={(e) => setNewEmp({ ...newEmp, password: e.target.value })}
          />
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={newEmp.phone}
            onChange={(e) => setNewEmp({ ...newEmp, phone: e.target.value })}
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={newEmp.address}
            onChange={(e) => setNewEmp({ ...newEmp, address: e.target.value })}
          />
          <input
            type="number"
            placeholder="Salary"
            name="salary"
            value={newEmp.salary}
            onChange={(e) => setNewEmp({ ...newEmp, salary: e.target.value })}
          />
          <button className="save-btn" onClick={addEmployee}>
            Add Employee
          </button>
        </div>
      )}

      <div className="employee-table-container">
        <table className="employee-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <React.Fragment key={emp.id}>
                <tr>
                  <td>{emp.name}</td>
                  <td>{emp.role}</td>
                  <td>
                    <button onClick={() => toggleDetails(emp.id)}>
                      {showDetails[emp.id] ? "Hide" : "View More"}
                    </button>
                    <button onClick={() => setSelectedEmp(emp)}>Edit</button>
                  </td>
                </tr>

                {showDetails[emp.id] && (
                  <tr className="details-row">
                    <td colSpan="3">
                      <p>Email: {emp.email}</p>
                      <p>Phone: {emp.phone}</p>
                      <p>Address: {emp.address}</p>
                      <p>Salary: ₹{emp.salary}</p>
                      <p>Status: {emp.status}</p>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🧾 Edit Form */}
      {selectedEmp && (
        <div className="edit-modal">
          <div className="edit-box">
            <h3>Edit Employee</h3>
            <input
              type="text"
              name="name"
              value={selectedEmp.name}
              onChange={handleEditChange}
            />
            <input
              type="email"
              name="email"
              value={selectedEmp.email}
              onChange={handleEditChange}
            />
            <input
              type="text"
              name="phone"
              value={selectedEmp.phone}
              onChange={handleEditChange}
            />
            <input
              type="text"
              name="address"
              value={selectedEmp.address}
              onChange={handleEditChange}
            />
            <input
              type="number"
              name="salary"
              value={selectedEmp.salary}
              onChange={handleEditChange}
            />
            <button onClick={saveEdit}>Save</button>
            <button onClick={() => setSelectedEmp(null)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
