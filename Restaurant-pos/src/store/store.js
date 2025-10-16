
import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../slices/resslice";

const store = configureStore({
  reducer: {
    orders: orderReducer,
  },
});

export default store; // ✅ use default export
