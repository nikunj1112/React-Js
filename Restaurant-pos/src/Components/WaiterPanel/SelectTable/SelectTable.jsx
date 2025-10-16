import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SelectTable.css";

export default function SelectTable() {
  const navigate = useNavigate();

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

  // ✅ Load saved selection
  useEffect(() => {
    const savedTable = localStorage.getItem("selectedTable");
    if (savedTable) setSelected(JSON.parse(savedTable));
  }, []);

  // ✅ Save selection
  useEffect(() => {
    if (selected) localStorage.setItem("selectedTable", JSON.stringify(selected));
  }, [selected]);

  const handleNext = () => {
    if (selected) {
      navigate("/dashboard/customer-info", { state: { table: selected } });
    } else {
      alert("⚠️ Please select a table first!");
    }
  };

  return (
    <div className="select-table-page">
      <h2 className="page-title">Maharaja Palace - Table Selection</h2>
      <p className="subtitle">
        🍽️ Choose an available table to continue taking orders.
      </p>

      <div className="table-grid">
        {tables.map((t) => (
          <div
            key={t.id}
            className={`table-card 
              ${selected?.id === t.id ? "selected" : ""} 
              ${t.status === "Available" ? "available" : "occupied"}
            `}
            onClick={() =>
              t.status === "Available" && setSelected({ id: t.id, name: t.name })
            }
          >
            <div className="table-header">
              <h4>{t.name}</h4>
              <span
                className={`status-badge ${
                  t.status === "Available" ? "green" : "red"
                }`}
              >
                {t.status}
              </span>
            </div>
            <p className="seats-info">💺 Seats: {t.seats}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="footer-bar">
          <p>
            ✅ Selected: <strong>{selected.name}</strong>
          </p>
          <button className="next-btn" onClick={handleNext}>
            Proceed ➜
          </button>
        </div>
      )}
    </div>
  );
}
