import React, { useEffect, useState } from "react";
import "./Topdishes.css";
import dbData from "../../../../Api/db.json";

export default function TopDishes() {
  const [topDishes, setTopDishes] = useState([]);

  useEffect(() => {
    // 🟢 Collect all dishes from all menu categories
    const allDishes = [
      ...dbData.menu.starters,
      ...dbData.menu.mainCourse.veg,
      ...dbData.menu.mainCourse.nonVeg,
      ...dbData.menu.drinks,
    ];

    // 🟢 Filter by rating > 4.5
    const filtered = allDishes.filter((item) => item.rating > 4.5);
    setTopDishes(filtered);
  }, []);

  return (
    <div className="topdishes-wrapper">
      <h2 className="topdishes-title">⭐ Top Rated Dishes</h2>

      <div className="topdishes-grid">
        {topDishes.length > 0 ? (
          topDishes.map((dish) => (
            <div key={dish.id} className="dish-card">
              <img src={dish.image} alt={dish.food_name} className="dish-img" />
              <div className="dish-info">
                <h4>{dish.food_name}</h4>
                <p className="dish-desc">{dish.description}</p>
                <div className="dish-meta">
                  <span className="dish-price">₹{dish.price}</span>
                  <span className="dish-rating">⭐ {dish.rating}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-dishes">No top dishes found.</p>
        )}
      </div>
    </div>
  );
}
