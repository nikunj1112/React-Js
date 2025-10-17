import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../../slices/resslice";
import Addmenuform from "../Addmenuform/Addmenuform";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "./Addmenu.css";
export default function Addmenu() {
  const dispatch = useDispatch();
  const { menu, isLoading, error } = useSelector((state) => state.restaurant);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFiltered, setShowFiltered] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [expandedItems, setExpandedItems] = useState([]); // to track expanded items

const categories = [
  { name: "All", icon: "📋" },
  { name: "Pizza", icon: "🍕" },
  { name: "Non-Veg", icon: "🍗" },
  { name: "Drinks", icon: "🥤" },
  { name: "Burger", icon: "🍔" },
  { name: "Chinese", icon: "🥡" },
  { name: "Paneer", icon: "🧀" },
  { name: "Dessert", icon: "🍰" },
  { name: "Starter", icon: "🍽️" },
  { name: "Cucumber", icon: "🥒" },
  { name: "Biryani", icon: "🍛" }
];


  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  const filteredMenu = menu.filter(item => {
    const matchSearch = item.food_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory === "All" ? true : item.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  const handleFilterClick = () => setShowFiltered(true);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(prev => prev === cat ? "All" : cat);
  };

  const toggleDetails = (id) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  return (
    <div className="menu-page">
      <div className="top-section">
        <div className="top-bar">
          <input
            type="text"
            placeholder="Search food"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="filter-btn" onClick={handleFilterClick}>Filter 🍽️</button>
          <button className="add-menu-btn" onClick={() => setShowAddForm(prev => !prev)}>
            {showAddForm ? "Cancel" : "Add Menu ➕"}
          </button>
        </div>

        <div className="category-scroll">
         {categories.map((cat) => (
  <button
    key={cat.name}
    className={`category-btn ${selectedCategory === cat.name ? "active" : ""}`}
    onClick={() => handleCategoryClick(cat.name)}
  >
    <span style={{ marginRight: "5px" }}>{cat.icon}</span>
    {cat.name}
  </button>
))}

        </div>
      </div>

      {showAddForm && <Addmenuform closeForm={() => setShowAddForm(false)} />}

      {isLoading && <p>Loading menu...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

    <div className="container mt-4">
  {showFiltered ? (
    filteredMenu.length === 0 ? (
      <p className="text-center">No items match your search.</p>
    ) : (
      <div className="row g-4">
        {filteredMenu.map(item => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
            <div className="card h-100 shadow-sm border-0">
              <img
                src={item.image1}
                alt={item.food_name}
                className="card-img-top"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{item.food_name}</h5>
                <p className="card-text text-muted small">{item.description}</p>
                <p className="fw-bold text-warning mb-2">
                  ₹{item.price}{" "}
                  {item.originalPrice && (
                    <span className="text-decoration-line-through text-secondary ms-1">
                      ₹{item.originalPrice}
                    </span>
                  )}
                </p>
                <button
                  className="wishlist-btn"
                  onClick={() => toggleDetails(item.id)}
                >
                  {expandedItems.includes(item.id) ? "Hide Details" : "View More"}
                </button>
              </div>

              {expandedItems.includes(item.id) && (
                <div className="">
                  <p>💰 Tax Rate: {item.tax_rate}%</p>
                  <p>🏷️ Discount: {item.discount}%</p>
                  <p>⭐ Rating: {item.rating ? item.rating.toFixed(1) : "N/A"} / 10</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  ) : (
    <p className="text-center mt-4">🔎 Click "Filter" to see the menu.</p>
  )}
</div>

    </div>
  );
}
