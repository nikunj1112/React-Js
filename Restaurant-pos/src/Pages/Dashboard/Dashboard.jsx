import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resmenu, resuser } from "../../slices/resslice";
import "./Dashboard.css";

export default function Dashboardcard() {
  const dispatch = useDispatch();

  const { res = [], isLoading, error } = useSelector(
    (state) => state.menu || { res: [], isLoading: false, error: null }
  );

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(resmenu());
    dispatch(resuser());
  }, [dispatch]);

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  const filteredMenu = res.filter((item) => {
    if (!item) return false;
    const categoryMatch =
      selectedCategory === "All" || item.category === selectedCategory;
    const searchMatch =
      item.food_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="dashboard-container">
      <main className="main-content">
        <div className="search">
          <div className="s">
            <input
              type="text"
              placeholder="Search food"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button>Filter</button>
          </div>
        </div>

        <div className="categories">
          {[
            "All",
            "Pizza",
            "Non-Veg",
            "Drinks",
            "Burger",
            "Chinese",
            "Paneer",
            "Dessert",
            "Starter",
            "Cucumber",
            "Biryani",
          ].map((cat) => (
            <button
              key={cat}
              className={`category-btn ${
                selectedCategory === cat ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredMenu.length > 0 ? (
            filteredMenu.map((r, index) => (
              <div key={index} className="menu-card">
                <img
                  src={r.image1 || "/placeholder.jpg"}
                  alt={r.food_name}
                  className="menu-img"
                />
                <h3 className="menu-title">{r.food_name}</h3>
                <p className="menu-desc">{r.description}</p>
                <div className="menu-price">${r.price}</div>
                <button className="order-btn">View More</button>
              </div>
            ))
          ) : (
            <p className="no-items">No items found matching your search.</p>
          )}
        </div>
      </main>
    </div>
  );
}
