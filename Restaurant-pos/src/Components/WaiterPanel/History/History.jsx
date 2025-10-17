import React, { useEffect, useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./History.css";

export default function History() {
  const [history, setHistory] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const invoiceRefs = useRef({});

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setCurrentEmployee(loggedInUser);

    const savedHistory = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(savedHistory.reverse());
  }, []);

  const downloadPDF = async (index) => {
    const invoiceDiv = invoiceRefs.current[index];
    if (!invoiceDiv) return;

    const canvas = await html2canvas(invoiceDiv, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "pt", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`Invoice_${history[index].customerInfo?.customerName}.pdf`);
  };

  if (history.length === 0)
    return <p className="no-history">No history available.</p>;

  return (
    <div className="history-wrapper">
      <h2 className="history-title">📜 Payment History</h2>

      <div className="history-grid">
        {history.map((invoice, index) => (
          <div key={index} className="history-card">
            <div
              ref={(el) => (invoiceRefs.current[index] = el)}
              className="invoice-box"
            >
              <h3 className="invoice-heading">🍽 Maharaja Palace</h3>

              {/* ✅ Show employee name from history */}
              {invoice.employeeName ? (
                <p><b>Employee:</b> {invoice.employeeName}</p>
              ) : currentEmployee ? (
                <p><b>Employee:</b> {currentEmployee.name}</p>
              ) : (
                <p><b>Employee:</b> Unknown</p>
              )}

              <p><b>Customer:</b> {invoice.customerInfo?.customerName}</p>
              <p><b>Phone:</b> {invoice.customerInfo?.phone}</p>
              <p><b>Table:</b> {invoice.customerInfo?.tableNo}</p>
              <p><b>Payment:</b> {invoice.paymentMethod}</p>
              <p><b>Date:</b> {invoice.date}</p>

              <hr />

              <table className="invoice-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.orderItems.map((item, i) => (
                    <tr key={i}>
                      <td>{item.food_name}</td>
                      <td>{item.qty}</td>
                      <td>₹{item.price * item.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <hr />
              <h4 className="total">Total: ₹{invoice.total}</h4>
            </div>

            <button
              onClick={() => downloadPDF(index)}
              className="download-btn"
            >
              📥 Download PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
