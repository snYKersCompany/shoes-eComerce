import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productDetail: [],
    filters: {},
    orders: {},
    categories: [],
    // productsLoaded: [],
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    productsDetails: (state, action) => {
      state.productDetail = action.payload;
    },
    createProducts: (state, action) => {
      state.products = action.payload;
    },
    categories: (state, action) => {
      state.categories = action.payload;
    },
    filterAdd: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilter: (state, action) => {
      state.filters = action.payload;
    },
    searchByQuery: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const {
  getProducts,
  productsDetails,
  createProducs,
  filterRating,
  filterAdd,
  searchByQuery,
  categories,
  clearFilter,
} = productsSlice.actions;

export default productsSlice.reducer;

// const store = {
//   products: {
//     products: [],
//     productsLoaded: [],
//     productDetail: [],
//   }
// }
