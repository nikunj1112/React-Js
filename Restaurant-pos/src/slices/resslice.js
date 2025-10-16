// 📂 src/slices/resslice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch menu data
export const fetchMenu = createAsyncThunk("restaurant/fetchMenu", async () => {
  const response = await axios.get("http://localhost:3001/menu");
  return response.data;
});

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    menu: {},
    tableOrders: {},
    isLoading: false,
  },
  reducers: {
    placeOrder: (state, action) => {
      const { tableId, orderItems } = action.payload;
      if (!state.tableOrders[tableId]) state.tableOrders[tableId] = [];
      state.tableOrders[tableId].push(
        ...orderItems.map((item) => ({
          ...item,
          order_status: "Pending",
        }))
      );
    },
    autoProgressStatus: (state) => {
      Object.values(state.tableOrders).forEach((orders) =>
        orders.forEach((item) => {
          if (item.order_status === "Pending") item.order_status = "Cooking";
          else if (item.order_status === "Cooking")
            item.order_status = "Served";
        })
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.isLoading = false;
        state.menu = action.payload;
      })
      .addCase(fetchMenu.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { placeOrder, autoProgressStatus } = restaurantSlice.actions;
export default restaurantSlice.reducer;
