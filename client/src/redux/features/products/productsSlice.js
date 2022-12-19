import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productDetail: {},
    // guardar en el obj filter/order el objeto y su valor
    // productsLoaded: [],
    filters: {},
    orders: {},
    categories: [],
    brands: [],
    ratings: [],
    genders: [],
    search: '',
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    productsDetails: (state, action) => {
      state.productDetail = action.payload;
    },
    clearProductsDetails: (state, action) => {
      state.productDetail = action.payload;
    },
    createProducts: (state, action) => {
      state.products = action.payload;
    },
    filterByCategories: (state, action) => {
      state.categories = action.payload;
    },
    filterBrands: (state, action) => {
      state.brands = action.payload;
    },
    filterRatings: (state, action) => {
      state.ratings = action.payload;
    },
    filterByGenders: (state, action) => {
      state.genders = action.payload
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
    clearOrder: (state, action) => {
      state.orders = action.payload;
    },
    addSearch: (state, action) => {
      state.search = action.payload;
    },
    clearSearch: (state, action) => {
      state.search = action.payload;
    },
    searchByQuery: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const {
  getProducts,
  productsDetails,
  createProducts,
  filterRating,
  filterAdd,
  searchByQuery,
  filterByCategories,
  clearFilter,
  addOrder,
  deleteOrder,
  clearOrder,
  deletefilter,
  filterBrands,
  filterRatings,
  filterByGenders,
  clearProductsDetails,
  addSearch,
  clearSearch,
} = productsSlice.actions;

export default productsSlice.reducer;

// const store = {
//   products: {
//     products: [],
//     productsLoaded: [],
//     productDetail: [],
//   }
// }
