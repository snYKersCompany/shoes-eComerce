import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [], 
    productsLoaded: [],
    productDetail: [],
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    productsDetails: (state, action) => {
      state.productDetail = action.payload
    },
    createProducts: (state, action) => {
      state.product = action.payload
    }
  },
});


export const { getProducts, productsDetails, createProducs } = productsSlice.actions;

export default productsSlice.reducer;



// const store = {
//   products: {
//     products: [], 
//     productsLoaded: [],
//     productDetail: [],
//   }
// }