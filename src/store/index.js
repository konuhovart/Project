import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slice/categorySlice";
import productReducer from "./slice/productSlice";
import cartReducer from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer,
  },
});
