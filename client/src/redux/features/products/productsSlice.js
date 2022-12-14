import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productDetail: {},
    // guardar en el obj filter/order el objeto y su valor
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
    deletefilter: (state, action) => {
      const filters = state.filters
      delete filters[action.payload]
      state.filters = filters;
    },
    clearFilter: (state, action) => {
      state.filters = action.payload;
    },
    addOrder: (state, action) => {
      state.orders = { ...state.orders, ...action.payload };
    },
    deleteOrder: (state, action) => {
      const orders = state.orders
      delete orders[action.payload]
      state.orders = orders;
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
  addOrder,
  deleteOrder,
  deletefilter,
} = productsSlice.actions;

export default productsSlice.reducer;

// const store = {
//   products: {
//     products: [],
//     productsLoaded: [],
//     productDetail: [],
//   }
// }
