import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";

export const Store = configureStore({
  reducer: {
    allCart: CartReducer,
  },
});
