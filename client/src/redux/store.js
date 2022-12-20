import { configureStore } from "@reduxjs/toolkit";
import products from "./features/products/productsSlice";
import users from "./features/users/usersSlice"
import orders from "./features/orders/ordersSlice"
import paypal from "./features/paypal/paypalSlice"

export const store = configureStore({
  reducer: {
    products: products,
    users: users,
    orders: orders,
    paypal: paypal
  },
});
