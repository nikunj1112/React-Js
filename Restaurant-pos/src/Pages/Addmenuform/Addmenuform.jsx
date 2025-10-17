import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMenuItem } from "../../slices/resslice";
import "../Addmenu/Addmenu.css";
 // reuse same styles or create separate

export default function Addmenuform({ closeForm }) {
  const dispatch = useDispatch();
  const [newMenuItem, setNewMenuItem] = useState({
    food_name: "",
    category: "",
    description: "",
    price: "",
    originalPrice: "",
    image1: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMenuItem({ ...newMenuItem, id: Date.now() })); // temporary ID
    closeForm(); // close the form
  };

  return (
    <form className="add-menu-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Food Name"
        value={newMenuItem.food_name}
        onChange={(e) => setNewMenuItem({ ...newMenuItem, food_name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={newMenuItem.category}
        onChange={(e) => setNewMenuItem({ ...newMenuItem, category: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={newMenuItem.description}
        onChange={(e) => setNewMenuItem({ ...newMenuItem, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={newMenuItem.price}
        onChange={(e) => setNewMenuItem({ ...newMenuItem, price: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Original Price (optional)"
        value={newMenuItem.originalPrice}
        onChange={(e) => setNewMenuItem({ ...newMenuItem, originalPrice: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={newMenuItem.image1}
        onChange={(e) => setNewMenuItem({ ...newMenuItem, image1: e.target.value })}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}
