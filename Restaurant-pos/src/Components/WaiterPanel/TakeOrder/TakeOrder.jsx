import React, { useState, useEffect } from "react";
import { Container, Nav, Button, Modal, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TakeOrder.css";

export default function TakeOrder() {
  const [menuData, setMenuData] = useState({});
  const [activeCategory, setActiveCategory] = useState("starters");
  const [orderItems, setOrderItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [customerInfo, setCustomerInfo] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [discount, setDiscount] = useState(0); // 💰 Discount %
  const navigate = useNavigate();

  // ✅ Fetch menu + customer info
  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((res) => res.json())
      .then((data) => {
        const formattedMenu = {
          starters: data.starters || [],
          mainCourseVeg: data.mainCourse?.veg || [],
          mainCourseNonVeg: data.mainCourse?.nonVeg || [],
          drinks: data.drinks || [],
          desserts: data.desserts || [],
        };
        setMenuData(formattedMenu);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading menu:", err);
        setLoading(false);
      });

    const savedCustomer = JSON.parse(localStorage.getItem("customerInfo"));
    if (savedCustomer) setCustomerInfo(savedCustomer);
  }, []);

  // 🔍 Search Filter
  const filteredData = searchTerm
    ? Object.keys(menuData).reduce((acc, cat) => {
        const filtered = menuData[cat]?.filter((item) =>
          item.food_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (filtered.length > 0) acc[cat] = filtered;
        return acc;
      }, {})
    : { [activeCategory]: menuData[activeCategory] || [] };

  // ➕ Add Item
  const handleAdd = (item) => {
    const existing = orderItems.find((i) => i.food_name === item.food_name);
    if (existing) {
      setOrderItems(
        orderItems.map((i) =>
          i.food_name === item.food_name ? { ...i, qty: i.qty + 1 } : i
        )
      );
    } else {
      setOrderItems([...orderItems, { ...item, qty: 1 }]);
    }
  };

  // 🔄 Update Quantity
  const updateQty = (name, change) => {
    setOrderItems((prev) =>
      prev
        .map((item) =>
          item.food_name === name
            ? { ...item, qty: Math.max(1, item.qty + change) }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // ❌ Remove Item
  const removeItem = (name) => {
    setOrderItems(orderItems.filter((i) => i.food_name !== name));
  };

  // 🧮 Billing Calculations
  const subtotal = orderItems.reduce((acc, i) => acc + i.price * i.qty, 0);
  const gst = subtotal * 0.05; // 5% GST
  const serviceCharge = subtotal * 0.1; // 10% service
  const discountAmount = (subtotal * discount) / 100;
  const grandTotal = subtotal + gst + serviceCharge - discountAmount;

 // 🎤 English Voice Announcement (same as CustomerInfo)
const speakOrderPlaced = (customerName) => {
  const message = new SpeechSynthesisUtterance(
    `Order has been placed successfully for ${customerName || "the customer"}.`
  );

  message.lang = "en-IN";
  message.pitch = 1.1;
  message.rate = 0.95;
  message.volume = 1;

  // ✅ Try to pick a natural English female voice (like Aasha)
  const voices = window.speechSynthesis.getVoices();
  const preferredVoice =
    voices.find((v) =>
      v.name.toLowerCase().includes("google uk english female")
    ) ||
    voices.find((v) =>
      v.name.toLowerCase().includes("english")
    ) ||
    voices[0];

  if (preferredVoice) {
    message.voice = preferredVoice;
  }

  // 🗣 Speak now
  window.speechSynthesis.cancel(); // stop previous speech
  window.speechSynthesis.speak(message);
};


  // 🧾 Place Order
  const handlePlaceOrder = () => {
    if (orderItems.length === 0) {
      alert("Please add at least one item to the order!");
      return;
    }

    const orderData = {
      customerInfo,
      orderItems,
      subtotal,
      gst,
      serviceCharge,
      discount,
      total: grandTotal,
      tableId: customerInfo?.tableId || customerInfo?.tableNo || "Unknown",
      status: "Pending",
      time: new Date().toLocaleString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const updatedOrders = [...existingOrders, orderData];
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    setShowPopup(true);
    setOrderItems([]);

    setTimeout(() => {
      speakOrderPlaced(customerInfo?.customerName);
    }, 400);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate("/dashboard/update-order");
  };

  if (loading) return <h4 className="text-center mt-5">Loading menu...</h4>;

  return (
    <div className="royal-menu-wrapper">
      <Container fluid>
        {/* Title */}
        <div className="takeorder-title">
          <h2>🍽️ Take New Order</h2>
          <p>Search dishes, add items, and place customer orders easily.</p>
        </div>

        {/* Category Tabs + Search */}
        <div className="category-search-container">
          <Nav variant="tabs" className="royal-tabs">
            {Object.keys(menuData).map((cat) => (
              <Nav.Item key={cat}>
                <Nav.Link
                  active={activeCategory === cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setSearchTerm("");
                  }}
                >
                  {cat === "mainCourseVeg"
                    ? "Main Course (Veg)"
                    : cat === "mainCourseNonVeg"
                    ? "Main Course (Non-Veg)"
                    : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          <input
            type="text"
            placeholder="🔍 Search dishes..."
            className="menu-search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Menu + Summary */}
        <div className="menu-layout">
          {/* Menu List */}
          <div className="menu-section">
            {Object.keys(filteredData).map((cat) => (
              <div key={cat} className="category-section">
                {searchTerm && filteredData[cat].length > 0 && (
                  <h5 className="found-category">
                    🍛{" "}
                    {cat === "mainCourseVeg"
                      ? "Main Course (Veg)"
                      : cat === "mainCourseNonVeg"
                      ? "Main Course (Non-Veg)"
                      : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </h5>
                )}

                {filteredData[cat].length === 0 ? (
                  <p className="text-muted text-center">No dishes found...</p>
                ) : (
                  filteredData[cat].map((item) => (
                    <div key={item.id} className="menu-card fade-in">
                      <img
                        src={item.image}
                        alt={item.food_name}
                        className="menu-img"
                      />
                      <div className="menu-text">
                        <h5 className="menu-name">{item.food_name}</h5>
                        <p className="menu-desc">{item.description}</p>
                      </div>
                      <div className="menu-action">
                        <span className="menu-price">₹{item.price}</span>
                        <Button
                          variant="warning"
                          className="add-btn"
                          onClick={() => handleAdd(item)}
                        >
                          <i className="ri-add-circle-line me-1"></i>Add
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            ))}
          </div>

          {/* 🧾 Order Summary / Billing */}
          <div className="order-summary-card">
            <h4>🧾 Order Summary</h4>

            {customerInfo && (
              <div className="summary-customer">
                <p>
                  <strong>Customer:</strong> {customerInfo.customerName}
                </p>
                <p>
                  <strong>Table:</strong> {customerInfo.tableNo}
                </p>
                <p>
                  <strong>Phone:</strong> {customerInfo.phone}
                </p>
                {customerInfo.specialRequest && (
                  <p>
                    <strong>Note:</strong> {customerInfo.specialRequest}
                  </p>
                )}
                <hr />
              </div>
            )}

            {orderItems.length === 0 ? (
              <p className="text-muted">No items added yet.</p>
            ) : (
              orderItems.map((item) => (
                <div key={item.food_name} className="summary-item">
                  <div className="summary-left">
                    <strong>{item.food_name}</strong>
                    <div className="summary-controls">
                      <Button
                        size="sm"
                        variant="outline-warning"
                        onClick={() => updateQty(item.food_name, -1)}
                      >
                        -
                      </Button>
                      <span className="mx-2">{item.qty}</span>
                      <Button
                        size="sm"
                        variant="outline-warning"
                        onClick={() => updateQty(item.food_name, 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <div className="summary-right">
                    <span>₹{item.price * item.qty}</span>
                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() => removeItem(item.food_name)}
                    >
                      <i className="ri-delete-bin-line"></i>
                    </Button>
                  </div>
                </div>
              ))
            )}

            <hr />
            {/* 🧮 Billing Section */}
            <div className="billing-summary">
              <p>
                Subtotal: <span>₹{subtotal.toFixed(2)}</span>
              </p>
              <p>
                GST (5%): <span>₹{gst.toFixed(2)}</span>
              </p>
              <p>
                Service (10%): <span>₹{serviceCharge.toFixed(2)}</span>
              </p>
              <Form.Group className="discount-input mt-2">
                <Form.Label>Discount (%)</Form.Label>
                <Form.Control
                  type="number"
                  min="0"
                  max="100"
                  value={discount}
                  onChange={(e) => setDiscount(Number(e.target.value))}
                />
              </Form.Group>
              <p>
                Discount: <span>- ₹{discountAmount.toFixed(2)}</span>
              </p>
              <hr />
              <h5 className="grand-total">
                Grand Total: <span>₹{grandTotal.toFixed(2)}</span>
              </h5>
            </div>

            <Button
              variant="warning"
              className="w-100 mt-2 place-btn"
              disabled={orderItems.length === 0}
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
          </div>
        </div>
      </Container>

      {/* ✅ Success Popup */}
      <Modal show={showPopup} onHide={handleClosePopup} centered>
        <Modal.Header closeButton>
          <Modal.Title>🎉 Order Placed Successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Order for <strong>{customerInfo?.customerName || "Customer"}</strong> has been placed successfully.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClosePopup}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
