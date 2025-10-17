import React, { useEffect, useState } from "react";
import "./MenuItems.css";
import localData from "../../../../Api/db.json"; // ✅ fallback data

export default function MenuItems() {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        setMenu(data.menu || data);
      })
      .catch((error) => {
        console.error("Error loading menu:", error);
        setMenu(localData.menu); // fallback
      });
  }, []);

  if (!menu) return <div className="loading">Loading menu...</div>;

  return (
    <div className="menu-wrapper">
      <h1 className="menu-title">Restaurant Menu</h1>

      {Object.entries(menu).map(([category, products]) => (
        <section key={category} className="menu-section">
          <h2 className="menu-category">
            {category.replace(/([A-Z])/g, " $1")}
          </h2>

          <div className="menu-grid">
            {/* ✅ Handle both arrays and subcategories (veg/nonVeg) */}
            {Array.isArray(products) ? (
              products.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))
            ) : typeof products === "object" ? (
              Object.entries(products).map(([subCategory, items]) => (
                <div key={subCategory} className="subcategory-block">
                  <h3 className="subcategory-title">
                    {subCategory === "veg" ? "Veg" : "Non-Veg"}
                  </h3>
                  <div className="menu-grid inner-grid">
                    {items.map((item) => (
                      <MenuCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p>No items available in this category</p>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

// ✅ Small reusable component for menu item
function MenuCard({ item }) {
  return (
    <div className="menu-card">
      <img src={item.image} alt={item.food_name} className="menu-img" />
      <div className="menu-info">
        <h3>{item.food_name}</h3>
        <p className="menu-desc">{item.description}</p>
        <div className="menu-footer">
          <span className="price">₹{item.price}</span>
          <span className={item.veg ? "veg-dot" : "non-veg-dot"}></span>
        </div>
      </div>
    </div>
  );
}
