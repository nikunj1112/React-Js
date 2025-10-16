import React, { useState, useEffect } from "react";
import { Container, Nav, Button } from "react-bootstrap";
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
  const navigate = useNavigate();

  // ✅ Fetch menu & customer info from localStorage
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

  // 🔍 Search filter
  const filteredData = searchTerm
    ? Object.keys(menuData).reduce((acc, cat) => {
        const filtered = menuData[cat]?.filter((item) =>
          item.food_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (filtered.length > 0) acc[cat] = filtered;
        return acc;
      }, {})
    : { [activeCategory]: menuData[activeCategory] || [] };

  // 🛒 Add to order
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

  // ➕➖ Update quantity
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

  // ❌ Remove item
  const removeItem = (name) => {
    setOrderItems(orderItems.filter((i) => i.food_name !== name));
  };

  // 💰 Total
  const total = orderItems.reduce((acc, i) => acc + i.price * i.qty, 0);

  // 🧾 Place order → Save to localStorage + redirect to UpdateStatus
  const handlePlaceOrder = () => {
    if (orderItems.length === 0) {
      alert("Please add at least one item to the order!");
      return;
    }

    const orderData = {
      customerInfo,
      orderItems,
      total,
      tableId: customerInfo?.tableId || customerInfo?.tableNo || "Unknown",
      status: "Pending",
      time: new Date().toLocaleString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const updatedOrders = [...existingOrders, orderData];
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    alert(`🧾 Order placed successfully for ${customerInfo?.customerName || "Customer"}!`);
    setOrderItems([]);

    navigate("/dashboard/update-status");
  };

  if (loading) return <h4 className="text-center mt-5">Loading menu...</h4>;

  return (
    <div className="royal-menu-wrapper">
      <Container fluid>
        {/* 🔹 Tabs + Search */}
        <div className="category-search-container">
  {/* Tabs (Left) */}
  <Nav variant="tabs" className="royal-tabs">
    {Object.keys(menuData).map((cat) => (
      <Nav.Item key={cat}>
        <Nav.Link
          active={activeCategory === cat}
          onClick={() => setActiveCategory(cat)}
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

  {/* Search (Right) */}
  <input
    type="text"
    placeholder="Search dishes..."
    className="menu-search"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>


        {/* 🔹 Menu Layout */}
        <div className="menu-layout">
          {/* Left - Menu */}
          <div className="menu-section">
            {Object.keys(filteredData).map((cat) => (
              <div key={cat}>
                {searchTerm && (
                  <h5 className="category-heading">
                    {cat === "mainCourseVeg"
                      ? "Main Course (Veg)"
                      : cat === "mainCourseNonVeg"
                      ? "Main Course (Non-Veg)"
                      : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </h5>
                )}
                {filteredData[cat].map((item) => (
                  <div key={item.id} className="menu-card mb-3">
                    <img src={item.image} alt={item.food_name} className="menu-img" />
                    <div className="menu-text">
                      <h5 className="menu-name">{item.food_name}</h5>
                      <p className="menu-desc">{item.description}</p>
                    </div>
                    <div className="menu-action">
                      <span className="menu-price">₹{item.price}</span>
                      <Button variant="warning" className="add-btn" onClick={() => handleAdd(item)}>
                        <i className="ri-add-circle-line me-1"></i>Add
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Right - Order Summary */}
          <div className="order-summary-card">
            <h4>🧾 Order Summary</h4>

            {customerInfo && (
              <div className="summary-customer">
                <p><strong>Customer:</strong> {customerInfo.customerName}</p>
                <p><strong>Table:</strong> {customerInfo.tableNo}</p>
                <p><strong>Phone:</strong> {customerInfo.phone}</p>
                {customerInfo.specialRequest && (
                  <p><strong>Note:</strong> {customerInfo.specialRequest}</p>
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
                      <Button size="sm" variant="outline-warning" onClick={() => updateQty(item.food_name, -1)}>
                        -
                      </Button>
                      <span className="mx-2">{item.qty}</span>
                      <Button size="sm" variant="outline-warning" onClick={() => updateQty(item.food_name, 1)}>
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
            <h5>Total: ₹{total}</h5>
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
    </div>
  );
}
