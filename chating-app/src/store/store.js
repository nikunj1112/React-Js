import userReducer from '../slices/userslice'
import chatReducer from '../slices/chatSlice'
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
  },
});