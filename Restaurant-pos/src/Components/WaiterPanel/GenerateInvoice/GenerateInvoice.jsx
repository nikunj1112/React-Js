// GenerateInvoice.jsx
import React, { useEffect, useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./GenerateInvoice.css"; // 🎨 CSS import

export default function GenerateInvoice() {
  const [invoice, setInvoice] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const invoiceRef = useRef();

  useEffect(() => {
    // 🟢 Load last invoice
    const lastInvoice = JSON.parse(localStorage.getItem("lastInvoice"));
    if (lastInvoice) setInvoice(lastInvoice);

    // 🟢 Load logged-in employee info
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setCurrentEmployee(loggedInUser);
  }, []);

  // 🧾 Tax calculations
  const calculateTotals = () => {
    if (!invoice)
      return { subtotal: 0, gst: 0, serviceCharge: 0, grandTotal: 0 };
    const subtotal = invoice.total || 0;
    const gst = +(subtotal * 0.05).toFixed(2); // 5% GST
    const serviceCharge = +(subtotal * 0.1).toFixed(2); // 10% Service Charge
    const grandTotal = +(subtotal + gst + serviceCharge).toFixed(2);
    return { subtotal, gst, serviceCharge, grandTotal };
  };

  const { subtotal, gst, serviceCharge, grandTotal } = calculateTotals();

  // 🧾 Download as PDF
  const downloadPDF = async () => {
    if (!invoiceRef.current) return;

    const canvas = await html2canvas(invoiceRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "pt", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`Invoice_${invoice.customerInfo?.customerName}.pdf`);
  };

  // 🟢 Confirm Payment & Save to History
  const confirmPayment = () => {
    if (!invoice) return;

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    const fullInvoice = {
      ...invoice,
      paymentMethod,
      date: new Date().toLocaleString(),
      paid: true,
      gst,
      serviceCharge,
      grandTotal,
      employeeName: loggedInUser?.name || "Unknown",
      employeeEmail: loggedInUser?.email || "N/A",
    };

    const history = JSON.parse(localStorage.getItem("history")) || [];
    history.push(fullInvoice);
    localStorage.setItem("history", JSON.stringify(history));
    localStorage.setItem("lastInvoice", JSON.stringify(fullInvoice));
    setInvoice(fullInvoice);

    alert("✅ Payment confirmed! Receipt saved in history.");
  };

  if (!invoice) return <p>No invoice found.</p>;

  return (
    <div className="invoice-page">
      <div className="invoice-card" ref={invoiceRef}>
        <h2 className="invoice-title">🧾 Maharaja Palace Invoice</h2>

        <div className="invoice-info">
          {/* ✅ Employee Info */}
          <p>
            <b>Employee:</b>{" "}
            {invoice.employeeName ||
              currentEmployee?.name ||
              "Unknown Employee"}
          </p>

          <p>
            <b>Customer:</b> {invoice.customerInfo?.customerName}
          </p>
          <p>
            <b>Phone:</b> {invoice.customerInfo?.phone}
          </p>
          <p>
            <b>Table:</b> {invoice.customerInfo?.tableNo}
          </p>
          <p>
            <b>Date:</b> {invoice.date || new Date().toLocaleString()}
          </p>
        </div>

        <hr className="divider" />

        <table className="invoice-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {invoice.orderItems.map((item, index) => (
              <tr key={index}>
                <td>{item.food_name}</td>
                <td>{item.qty}</td>
                <td>₹{item.price}</td>
                <td>₹{item.price * item.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr className="divider" />

        <div className="tax-summary">
          <p>
            <b>Subtotal:</b> ₹{subtotal}
          </p>
          <p>
            <b>GST (5%):</b> ₹{gst}
          </p>
          <p>
            <b>Service Charge (10%):</b> ₹{serviceCharge}
          </p>
          <h3 className="grand-total">Grand Total: ₹{grandTotal}</h3>
        </div>

        {invoice.paid && (
          <p className="paid-status">
            ✅ Paid via {invoice.paymentMethod}
          </p>
        )}
      </div>

      {!invoice.paid && (
        <div className="payment-controls">
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="payment-select"
          >
            <option value="UPI">UPI</option>
            <option value="Cash">Cash</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
          </select>
          <button className="confirm-btn" onClick={confirmPayment}>
            ✅ Confirm Payment
          </button>
        </div>
      )}

      <button className="download-btn" onClick={downloadPDF}>
        📥 Download PDF
      </button>
    </div>
  );
}
