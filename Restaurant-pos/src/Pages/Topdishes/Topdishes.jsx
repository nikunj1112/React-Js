import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../../slices/resslice";
import "./TopDishes.css";

export default function TopDishes() {
  const dispatch = useDispatch();
  const { menu, isLoading, error } = useSelector((state) => state.restaurant);

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  // Get top 5 dishes based on rating or ordersCount
  const topDishes = [...menu]
    .sort((a, b) => (b.rating || b.ordersCount || 0) - (a.rating || a.ordersCount || 0))
    .slice(0, 15);

  if (isLoading) return <div>Loading top dishes...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="top-dishes-container">
      <h2>Top Dishes</h2>
      <div className="top-dishes-grid">
        {topDishes.map((dish) => (
          <div className="dish-card" key={dish.id}>
            <img src={dish.image1} alt={dish.name} className="dish-image" />
            <div className="dish-info">
              <h3>{dish.food_name}</h3>
              {dish.category && <p className="dish-category">{dish.category}</p>}
              {dish.description && <p className="dish-description">{dish.description}</p>}
              <p className="dish-price">Price:  ₹{dish.price?.toFixed(2)}</p>
              {dish.rating && <p>⭐ {dish.rating}</p>}
              {dish.ordersCount && <p>Ordered: {dish.ordersCount} times</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
