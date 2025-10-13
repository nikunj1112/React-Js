import "./CustomerInfo.css";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";

export default function CustomerInfo() {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Get table info from SelectTable
  const table = location.state?.table || "Not Selected";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      alert("Please fill all required fields.");
      return;
    }

    console.log("✅ Customer Info:", { ...form, table });

    // ✅ Go to next page (e.g., order page)
    navigate("/dashboard/order", { state: { ...form, table } });
  };

  return (
    <div className="step-container animate-slide-up">
      <h2 className="step-title">🥈 Step 2: Add Customer Details</h2>
      <p className="step-subtitle">
        Before taking the order, please register basic customer info.
      </p>

      <Card className="form-card">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>👤 Customer Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter customer name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>📞 Mobile Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phone number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>🪑 Table Number</Form.Label>
              <Form.Control
                type="text"
                value={`Table : ${table}`}
                readOnly
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>💬 Special Notes</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Allergic to nuts, prefers spicy, etc."
                name="notes"
                value={form.notes}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="warning" type="submit" className="fw-bold px-4">
                Next ➡️
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
