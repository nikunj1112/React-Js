import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./SelectTable.css";

export default function SelectTable() {
  const tables = [
    { id: 1, name: "Table 1", status: "Available", seats: 2 },
    { id: 2, name: "Table 2", status: "Occupied", seats: 4 },
    { id: 3, name: "Table 3", status: "Available", seats: 2 },
    { id: 4, name: "Table 4", status: "Available", seats: 6 },
    { id: 5, name: "Table 5", status: "Occupied", seats: 4 },
    { id: 6, name: "Table 6", status: "Available", seats: 4 },
    { id: 7, name: "Table 7", status: "Available", seats: 2 },
    { id: 8, name: "Table 8", status: "Occupied", seats: 6 },
    { id: 9, name: "Table 9", status: "Available", seats: 4 },
    { id: 10, name: "Table 10", status: "Available", seats: 2 },
    { id: 11, name: "Table 11", status: "Occupied", seats: 4 },
    { id: 12, name: "Table 12", status: "Available", seats: 6 },
  ];

  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (selected) {
      // ✅ Send table id & name to CustomerInfo page
      navigate("/dashboard/customer-info", { state: { table: selected } });
    } else {
      alert("⚠️ Please select a table first!");
    }
  };

  return (
    <div className="step-container">
      <h2 className="step-title">🥇 Step 1: Select Table</h2>
      <p className="step-subtitle">
        Choose an available table to start taking the customer’s order.
      </p>

      <div className="table-grid">
        {tables.map((t) => (
          <div
            key={t.id}
            className={`table-card 
              ${selected === t.id ? "selected" : ""} 
              ${t.status === "Available" ? "available" : "occupied"}
            `}
            onClick={() => t.status === "Available" && setSelected(t.id)}
          >
            <h4>🪑 {t.name}</h4>
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={`status-badge ${
                  t.status === "Available" ? "green" : "red"
                }`}
              >
                {t.status}
              </span>
            </p>
            <p>💺 Seats: {t.seats}</p>
          </div>
        ))}
      </div>

      {selected && (
        <button className="next-btn" onClick={handleNext}>
          Next ➡️
        </button>
      )}
    </div>
  );
}
