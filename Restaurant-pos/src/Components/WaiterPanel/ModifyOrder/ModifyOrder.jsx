import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import menuData from "../../../../Api/db.json";
import "./ModifyOrder.css";

export default function ModifyOrder() {
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [updatedOrder, setUpdatedOrder] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("starters");
  const [employee, setEmployee] = useState(null); // 🟢 Logged-in employee info

  // 🟢 Load existing order + employee info
  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem("modifyOrder"));
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setEmployee(loggedInUser);

    if (savedOrder) {
      // agar employee info missing ho to add kar do
      if (loggedInUser && !savedOrder.employeeName) {
        savedOrder.employeeName = loggedInUser.name;
        savedOrder.employeeEmail = loggedInUser.email;
      }
      setOrder(savedOrder);
      setUpdatedOrder(savedOrder);
    }
  }, []);

  if (!updatedOrder) return <p>Loading order...</p>;

  // 🟢 Combine all menu items
  const allMenuItems = [
    ...menuData.menu.starters,
    ...menuData.menu.mainCourse.veg,
    ...menuData.menu.mainCourse.nonVeg,
    ...menuData.menu.drinks,
    ...menuData.menu.desserts,
  ];

  // 🟢 Filter items based on search + category
  const filteredItems = allMenuItems.filter(
    (item) =>
      item.food_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      ((activeCategory === "starters" && menuData.menu.starters.includes(item)) ||
        (activeCategory === "mainCourseVeg" &&
          menuData.menu.mainCourse.veg.includes(item)) ||
        (activeCategory === "mainCourseNonVeg" &&
          menuData.menu.mainCourse.nonVeg.includes(item)) ||
        (activeCategory === "drinks" && menuData.menu.drinks.includes(item)) ||
        (activeCategory === "desserts" && menuData.menu.desserts.includes(item)))
  );

  // 🟢 Save updated order (with employee info)
  const persistOrder = (newOrder) => {
    if (employee) {
      newOrder.employeeName = employee.name;
      newOrder.employeeEmail = employee.email;
    }

    setUpdatedOrder(newOrder);
    localStorage.setItem("modifyOrder", JSON.stringify(newOrder));

    const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const updatedOrders = allOrders.map((o) =>
      o.time === order.time ? newOrder : o
    );
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  // 🟢 Add item
  const handleAddItem = (item) => {
    const newOrder = { ...updatedOrder };
    const idx = newOrder.orderItems.findIndex(
      (i) => i.food_name === item.food_name
    );
    if (idx !== -1) newOrder.orderItems[idx].qty += 1;
    else
      newOrder.orderItems.push({
        food_name: item.food_name,
        price: item.price,
        qty: 1,
      });
    newOrder.total = newOrder.orderItems.reduce(
      (sum, i) => sum + i.price * i.qty,
      0
    );
    persistOrder(newOrder);
  };

  // 🟢 Remove item
  const handleRemoveItem = (index) => {
    const newOrder = { ...updatedOrder };
    newOrder.orderItems = newOrder.orderItems.filter((_, i) => i !== index);
    newOrder.total = newOrder.orderItems.reduce(
      (sum, i) => sum + i.price * i.qty,
      0
    );
    persistOrder(newOrder);
  };

  // 🟢 Save + Back handlers
  const handleSave = () => {
    const finalOrder = { ...updatedOrder };

    if (employee) {
      finalOrder.employeeName = employee.name;
      finalOrder.employeeEmail = employee.email;
    }

    // ✅ Save to lastInvoice
    localStorage.setItem("lastInvoice", JSON.stringify(finalOrder));

    // ✅ Update history
    const history = JSON.parse(localStorage.getItem("history")) || [];
    history.push(finalOrder);
    localStorage.setItem("history", JSON.stringify(history));

    alert(`✅ Order updated successfully by ${employee?.name || "Employee"}!`);
    navigate("/dashboard/invoice");
  };

  const handleBack = () => {
    const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const updatedOrders = allOrders.map((o) =>
      o.time === order.time ? updatedOrder : o
    );
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    navigate("/dashboard/update-order");
  };

  return (
    <div className="modify-order-page">
      <h2 className="page-title">🧾 Modify Order</h2>

      {/* 🧍‍♂️ Customer Info + Order Items */}
      <div className="modify-grid">
        <div className="customer-section">
          <h3>👤 Customer Details</h3>
          <p><b>Name:</b> {updatedOrder.customerInfo?.customerName}</p>
          <p><b>Phone:</b> {updatedOrder.customerInfo?.phone}</p>
          <p><b>Table:</b> {updatedOrder.customerInfo?.tableNo}</p>
          <p><b>Employee:</b> {employee?.name || updatedOrder.employeeName || "N/A"}</p>
        </div>

        <div className="ordered-section">
          <h3>🛍 Ordered Items</h3>
          <div className="ordered-items-scroll">
            {updatedOrder.orderItems.map((item, index) => (
              <div key={index} className="ordered-item">
                <span>{item.food_name} × {item.qty}</span>
                <span>₹{item.price * item.qty}</span>
                <button onClick={() => handleRemoveItem(index)}>❌</button>
              </div>
            ))}
          </div>
          <p className="total">💰 <strong>Total: ₹{updatedOrder.total}</strong></p>
        </div>
      </div>

      {/* 🔍 Filter + Buttons */}
      <div className="filter">
        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Search for food..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="actions">
          <button className="save-btn" onClick={handleSave}>💾 Save Changes</button>
          <button className="cancel-btn" onClick={handleBack}>↩ Back</button>
        </div>
      </div>

      {/* 🍽 Add More Items */}
      <div className="menu-items">
        <h3 className="menu-heading">🍽 Add More Items</h3>

        <Nav variant="tabs" className="royal-tabs">
          <Nav.Item>
            <Nav.Link active={activeCategory === "starters"} onClick={() => setActiveCategory("starters")}>Starters</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link active={activeCategory === "mainCourseVeg"} onClick={() => setActiveCategory("mainCourseVeg")}>Main Course (Veg)</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link active={activeCategory === "mainCourseNonVeg"} onClick={() => setActiveCategory("mainCourseNonVeg")}>Main Course (Non-Veg)</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link active={activeCategory === "drinks"} onClick={() => setActiveCategory("drinks")}>Drinks</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link active={activeCategory === "desserts"} onClick={() => setActiveCategory("desserts")}>Desserts</Nav.Link>
          </Nav.Item>
        </Nav>

        <div className="menu-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-card">
              <img
                src={item.image}
                alt={item.food_name}
                className="menu-img"
                onError={(e) =>
                  (e.target.src =
                    "https://cdn-icons-png.flaticon.com/512/1046/1046784.png")
                }
              />
              <div className="menu-info">
                <h4>{item.food_name}</h4>
                <p className="price">₹{item.price}</p>
              </div>
              <button className="add-btn" onClick={() => handleAddItem(item)}>
                ➕ Add
              </button>
            </div>
          ))}
          {filteredItems.length === 0 && <p className="no-items">No items found.</p>}
        </div>
      </div>
    </div>
  );
}
