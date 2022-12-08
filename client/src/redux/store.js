import { configureStore } from "@reduxjs/toolkit";
import characters from "./features/characters/characterSlice";
import products from "./features/products/productsSlice";

export const store = configureStore({
  reducer: {
    characters: characters,
    products: products,
  },
});
